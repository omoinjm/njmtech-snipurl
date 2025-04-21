// app/api/shorten/route.ts
import { prisma } from '@/lib/prisma';
import { generateSlug } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const { url } = await req.json();

	if (!url) return NextResponse.json({ error: 'Missing URL' }, { status: 400 });

	// Trim whitespace from the URL
	const trimmedUrl = url.trim();

	// First check if the URL already exists
	const existingLink = await prisma.lu_short_url.findFirst({
		where: { original: trimmedUrl },
	});

	// If it exists, return the existing short URL
	if (existingLink) {
		return NextResponse.json({
			slug: `${process.env.NEXT_PUBLIC_BASE_URL}/${existingLink.slug}`,
		});
	}

	// If it doesn't exist, create a new one
	const slug = generateSlug();

	const shortLink = await prisma.lu_short_url.create({
		data: { slug, original: trimmedUrl },
	});

	return NextResponse.json({
		slug: `${process.env.NEXT_PUBLIC_BASE_URL}/${shortLink.slug}`,
	});
}
