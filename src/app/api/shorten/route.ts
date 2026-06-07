import { prisma } from '@/lib/prisma';
import { createErrorResponse, getBaseUrl } from '@/lib/api-server';
import { addShortUrlToVisitorHistory, normalizeVisitorId } from '@/lib/url-ownership';
import { generateSlug } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
	try {
		const { url, visitor_id } = await req.json();

		if (!url) {
			return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
		}

		const trimmedUrl = url.trim();
		const visitorId = normalizeVisitorId(visitor_id);
		const baseUrl = getBaseUrl(req);

		if (trimmedUrl.includes(baseUrl)) {
			return NextResponse.json(
				{ error: 'Cannot shorten the base URL itself' },
				{ status: 400 }
			);
		}

		const existingLink = await prisma.lu_short_url.findFirst({
			where: { original: trimmedUrl },
		});

		if (existingLink) {
			await addShortUrlToVisitorHistory(visitorId, existingLink.id);

			return NextResponse.json({ slug: `${baseUrl}/${existingLink.slug}` });
		}

		const slug = generateSlug();
		const shortLink = await prisma.lu_short_url.create({
			data: { slug, original: trimmedUrl },
		});
		await addShortUrlToVisitorHistory(visitorId, shortLink.id);

		return NextResponse.json({ slug: `${baseUrl}/${shortLink.slug}` });
	} catch (error) {
		return createErrorResponse(error, 'Failed to shorten URL');
	}
}
