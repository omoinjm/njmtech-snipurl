import { prisma } from '@/lib/prisma';

export function normalizeVisitorId(visitorId: unknown): string | null {
	if (typeof visitorId !== 'string') {
		return null;
	}

	const trimmedVisitorId = visitorId.trim();

	return trimmedVisitorId.length > 0 ? trimmedVisitorId : null;
}

export async function ensureVisitor(visitorId: string | null) {
	if (!visitorId) {
		return;
	}

	await prisma.au_visitor.upsert({
		where: { id: visitorId },
		create: { id: visitorId },
		update: {},
	});
}

export async function addShortUrlToVisitorHistory(
	visitorId: string | null,
	shortUrlId: string
) {
	if (!visitorId) {
		return;
	}

	await ensureVisitor(visitorId);

	await prisma.ma_visitor_map.upsert({
		where: {
			visitor_id_short_url_id: {
				visitor_id: visitorId,
				short_url_id: shortUrlId,
			},
		},
		create: {
			visitor_id: visitorId,
			short_url_id: shortUrlId,
		},
		update: {},
	});
}
