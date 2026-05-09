import { prisma } from '@/lib/prisma';
import { claimUnownedUrlsForVisitor, normalizeVisitorId } from '@/lib/url-ownership';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
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

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '');

	return NextResponse.json({
		links: links.map((l) => ({
			...l,
			short_url: `${baseUrl}/${l.slug}`,
		})),
	});
}
