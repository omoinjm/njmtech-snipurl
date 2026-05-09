import { prisma } from '@/lib/prisma';
import { createErrorResponse, getBaseUrl } from '@/lib/api-server';
import { getLinkPreview } from '@/lib/link-preview';
import { claimUnownedUrlsForVisitor, normalizeVisitorId } from '@/lib/url-ownership';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		const visitorId = normalizeVisitorId(req.nextUrl.searchParams.get('visitor_id'));

		if (!visitorId) {
			return NextResponse.json({ links: [] });
		}

		await claimUnownedUrlsForVisitor(visitorId);

		const links = await prisma.lu_short_url.findMany({
			where: { visitor_id: visitorId },
			orderBy: { created_at: 'desc' },
			select: {
				slug: true,
				original: true,
				clicks: true,
				created_at: true,
			},
		});

		const baseUrl = getBaseUrl(req);
		const enrichedLinks = await Promise.all(
			links.map(async (link) => {
				try {
					const preview = await getLinkPreview(link.original);

					return {
						...link,
						short_url: `${baseUrl}/${link.slug}`,
						preview,
					};
				} catch (error) {
					console.error(`Failed to load preview for ${link.original}`, error);

					return {
						...link,
						short_url: `${baseUrl}/${link.slug}`,
						preview: null,
					};
				}
			})
		);

		return NextResponse.json({
			links: enrichedLinks,
		});
	} catch (error) {
		return createErrorResponse(error, 'Failed to load link history');
	}
}
