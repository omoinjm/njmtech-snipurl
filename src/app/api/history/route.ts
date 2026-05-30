import { prisma } from '@/lib/prisma';
import { createErrorResponse, getBaseUrl } from '@/lib/api-server';
import { getLinkPreview } from '@/lib/link-preview';
import { normalizeVisitorId } from '@/lib/url-ownership';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const DEFAULT_PAGE_SIZE = 5;

function parsePositiveInt(value: string | null, fallback: number) {
	const parsed = Number.parseInt(value ?? '', 10);

	return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function normalizeSearchTerm(value: string | null) {
	const trimmedValue = value?.trim() ?? '';

	return trimmedValue.length > 0 ? trimmedValue : null;
}

export async function GET(req: NextRequest) {
	try {
		const visitorId = normalizeVisitorId(req.nextUrl.searchParams.get('visitor_id'));
		const requestedPage = parsePositiveInt(req.nextUrl.searchParams.get('page'), 1);
		const searchTerm = normalizeSearchTerm(req.nextUrl.searchParams.get('search'));
		const pageSize = parsePositiveInt(
			req.nextUrl.searchParams.get('page_size'),
			DEFAULT_PAGE_SIZE
		);

		if (!visitorId) {
			return NextResponse.json({
				links: [],
				pagination: {
					page: 1,
					page_size: pageSize,
					total_links: 0,
					total_pages: 0,
					has_previous_page: false,
					has_next_page: false,
				},
			});
		}

		const where = {
			visitor_id: visitorId,
			...(searchTerm
				? {
						short_url: {
							OR: [
								{ original: { contains: searchTerm, mode: 'insensitive' as const } },
								{ slug: { contains: searchTerm, mode: 'insensitive' as const } },
							],
						},
					}
				: {}),
		};

		const totalLinks = await prisma.ma_visitor_map.count({
			where,
		});
		const totalPages = totalLinks === 0 ? 0 : Math.ceil(totalLinks / pageSize);
		const page = totalPages === 0 ? 1 : Math.min(requestedPage, totalPages);
		const skip = totalPages === 0 ? 0 : (page - 1) * pageSize;

		const links = await prisma.ma_visitor_map.findMany({
			where,
			orderBy: { created_at: 'desc' },
			skip,
			take: pageSize,
			select: {
				created_at: true,
				short_url: {
					select: {
						slug: true,
						original: true,
						clicks: true,
					},
				},
			},
		});

		const baseUrl = getBaseUrl(req);
		const enrichedLinks = await Promise.all(
			links.map(async (historyEntry) => {
				try {
					const preview = await getLinkPreview(historyEntry.short_url.original);

					return {
						...historyEntry.short_url,
						created_at: historyEntry.created_at,
						short_url: `${baseUrl}/${historyEntry.short_url.slug}`,
						preview,
					};
				} catch (error) {
					console.error(
						`Failed to load preview for ${historyEntry.short_url.original}`,
						error
					);

					return {
						...historyEntry.short_url,
						created_at: historyEntry.created_at,
						short_url: `${baseUrl}/${historyEntry.short_url.slug}`,
						preview: null,
					};
				}
			})
		);

		return NextResponse.json({
			links: enrichedLinks,
			pagination: {
				page,
				page_size: pageSize,
				total_links: totalLinks,
				total_pages: totalPages,
				has_previous_page: page > 1,
				has_next_page: page < totalPages,
			},
		});
	} catch (error) {
		return createErrorResponse(error, 'Failed to load link history');
	}
}
