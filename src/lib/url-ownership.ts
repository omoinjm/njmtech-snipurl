import { prisma } from '@/lib/prisma';

export function normalizeVisitorId(visitorId: unknown): string | null {
	if (typeof visitorId !== 'string') {
		return null;
	}

	const trimmedVisitorId = visitorId.trim();

	return trimmedVisitorId.length > 0 ? trimmedVisitorId : null;
}

export async function claimUnownedUrlsForVisitor(visitorId: string | null) {
	if (!visitorId) {
		return;
	}

	await prisma.lu_short_url.updateMany({
		where: { visitor_id: null },
		data: { visitor_id: visitorId },
	});
}
