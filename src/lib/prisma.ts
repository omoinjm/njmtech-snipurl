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
	// Note: This only works in Node.js environments
	return new PrismaClient({
		log: ['query'],
	});
}

// Lazy initialization using a Proxy to avoid errors during build/Edge analysis
// when D1 bindings are not yet available.
let _prisma: PrismaClient | undefined;

function getPrisma(): PrismaClient {
	if (globalForPrisma.prisma) {
		return globalForPrisma.prisma;
	}

	if (!_prisma) {
		_prisma = createPrismaClient();
		if (process.env.NODE_ENV !== 'production') {
			globalForPrisma.prisma = _prisma;
		}
	}
	return _prisma;
}

export const prisma = new Proxy({} as PrismaClient, {
	get(target, prop, receiver) {
		const p = getPrisma();
		const value = Reflect.get(p, prop, receiver);
		if (typeof value === 'function') {
			return value.bind(p);
		}
		return value;
	},
});
