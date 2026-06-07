import { PrismaClient } from '@/generated/prisma';
import { PrismaD1 } from '@prisma/adapter-d1';

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined;
};

function createPrismaClient() {
	// In Cloudflare Pages, the D1 binding is available on process.env (or context.env)
	// We check for a binding named 'DB'
	const env = process.env as unknown as { 
		DB?: import('@cloudflare/workers-types').D1Database;
		NEXT_RUNTIME?: string;
	};
	const d1 = env.DB;

	if (d1) {
		console.log('Prisma: Using Cloudflare D1 adapter');
		const adapter = new PrismaD1(d1);
		return new PrismaClient({ adapter });
	}

	const isEdge = env.NEXT_RUNTIME === 'edge';
	
	if (isEdge) {
		console.error('Prisma: Running in Edge runtime but D1 binding "DB" was not found.');
		// We don't throw here to avoid crashing at the top level, 
		// but subsequent queries will fail with this client.
	}

	// Fallback to default (local SQLite file)
	// Note: This only works in Node.js environments
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
