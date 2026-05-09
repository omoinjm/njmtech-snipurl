'use server';

// app/api/shorten/route.ts

import { prisma } from '@/lib/prisma';
import { claimUnownedUrlsForVisitor, normalizeVisitorId } from '@/lib/url-ownership';
import { generateSlug } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const { url, visitor_id } = await req.json();

	if (!url) return NextResponse.json({ error: 'Missing URL' }, { status: 400 });

	const trimmedUrl = url.trim();
	const visitorId = normalizeVisitorId(visitor_id);

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '');

	if (url.includes(baseUrl)) {
		return NextResponse.json(
			{ error: 'Cannot shorten the base URL itself' },
			{ status: 400 }
		);
	}

	await claimUnownedUrlsForVisitor(visitorId);

	const existingLink = await prisma.lu_short_url.findFirst({
		where: { original: trimmedUrl },
	});

	if (existingLink) {
		// Claim ownership if the record has no visitor yet
		if (!existingLink.visitor_id && visitorId) {
			await prisma.lu_short_url.update({
				where: { id: existingLink.id },
				data: { visitor_id: visitorId },
			});
		}
		return NextResponse.json({ slug: `${baseUrl}/${existingLink.slug}` });
	}

	const slug = generateSlug();

	const shortLink = await prisma.lu_short_url.create({
		data: { slug, original: trimmedUrl, visitor_id: visitorId },
	});

	return NextResponse.json({ slug: `${baseUrl}/${shortLink.slug}` });
}
