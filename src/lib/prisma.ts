import { PrismaClient } from '@/generated/prisma';
import { PrismaD1 } from '@prisma/adapter-d1';

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined;
};

function createPrismaClient() {
	// In Cloudflare Pages, the D1 binding is available on process.env (or context.env)
	// We check for a binding named 'DB'
	const d1 = (process.env as unknown as { DB: import('@cloudflare/workers-types').D1Database }).DB;

	if (d1) {
		const adapter = new PrismaD1(d1);
		return new PrismaClient({ adapter });
	}

	// Fallback to default (local SQLite file)
	return new PrismaClient({
		log: ['query'],
	});
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
