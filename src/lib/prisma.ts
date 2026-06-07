import { PrismaClient } from '@/generated/prisma';
import { PrismaD1 } from '@prisma/adapter-d1';
import { getRequestContext } from '@cloudflare/next-on-pages';

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined;
};

function createPrismaClient() {
	// In Cloudflare Pages, the D1 binding is available via getRequestContext()
	let d1: import('@cloudflare/workers-types').D1Database | undefined;
	
	try {
		const ctx = getRequestContext();
		d1 = (ctx.env as { DB: import('@cloudflare/workers-types').D1Database }).DB;
	} catch {
		// Fallback for local development or environments where getRequestContext fails
		const env = process.env as unknown as { 
			DB?: import('@cloudflare/workers-types').D1Database;
		};
		d1 = env.DB;
	}

	if (d1) {
		console.log('Prisma: Using Cloudflare D1 adapter');
		const adapter = new PrismaD1(d1);
		return new PrismaClient({ adapter });
	}

	const isEdge = process.env.NEXT_RUNTIME === 'edge';
	
	if (isEdge) {
		throw new Error(
			'Prisma: Running in Edge runtime but D1 binding "DB" was not found.\n' +
			'Please ensure the D1 binding is configured in the Cloudflare Pages dashboard.'
		);
	}

	// Fallback to default (local SQLite file)
	// Note: This only works in Node.js environments (local next dev)
	console.log('Prisma: Using default SQLite client');
	return new PrismaClient({
		log: ['query', 'error', 'warn'],
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
