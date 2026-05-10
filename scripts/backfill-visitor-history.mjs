import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

function getDatabaseSchema() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('DATABASE_URL is required for visitor history backfill');
  }

  const schema = new URL(databaseUrl).searchParams.get('schema');

  return schema?.trim() || 'public';
}

function quoteIdentifier(identifier) {
  return `"${identifier.replace(/"/g, '""')}"`;
}

async function main() {
  const schema = getDatabaseSchema();
  const legacyTableName = 'lu_short_url';
  const visitorTable = `${quoteIdentifier(schema)}.${quoteIdentifier('au_visitor')}`;
  const visitorMapTable = `${quoteIdentifier(schema)}.${quoteIdentifier('ma_visitor_map')}`;
  const legacyTable = `${quoteIdentifier(schema)}.${quoteIdentifier(legacyTableName)}`;

  await prisma.$transaction(async (tx) => {
    const [legacyTableExists] = await tx.$queryRawUnsafe(
      `
        SELECT EXISTS (
          SELECT 1
          FROM information_schema.tables
          WHERE table_schema = $1 AND table_name = $2
        ) AS "exists"
      `,
      schema,
      legacyTableName
    );

    if (!legacyTableExists?.exists) {
      return;
    }

    const [legacyVisitorColumnExists] = await tx.$queryRawUnsafe(
      `
        SELECT EXISTS (
          SELECT 1
          FROM information_schema.columns
          WHERE table_schema = $1
            AND table_name = $2
            AND column_name = $3
        ) AS "exists"
      `,
      schema,
      legacyTableName,
      'visitor_id'
    );

    if (!legacyVisitorColumnExists?.exists) {
      return;
    }

    await tx.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS ${visitorTable} (
        "id" TEXT NOT NULL,
        "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "au_visitor_pkey" PRIMARY KEY ("id")
      )
    `);

    await tx.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS ${visitorMapTable} (
        "id" TEXT NOT NULL,
        "visitor_id" TEXT NOT NULL,
        "short_url_id" TEXT NOT NULL,
        "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "ma_visitor_map_pkey" PRIMARY KEY ("id")
      )
    `);

    await tx.$executeRawUnsafe(`
      CREATE UNIQUE INDEX IF NOT EXISTS "ma_visitor_map_visitor_id_short_url_id_key"
      ON ${visitorMapTable}("visitor_id", "short_url_id")
    `);

    await tx.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS "ma_visitor_map_visitor_id_created_at_idx"
      ON ${visitorMapTable}("visitor_id", "created_at")
    `);

    await tx.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS "ma_visitor_map_short_url_id_idx"
      ON ${visitorMapTable}("short_url_id")
    `);

    await tx.$executeRawUnsafe(`
      INSERT INTO ${visitorTable} ("id")
      SELECT DISTINCT "visitor_id"
      FROM ${legacyTable}
      WHERE "visitor_id" IS NOT NULL
      ON CONFLICT ("id") DO NOTHING
    `);

    await tx.$executeRawUnsafe(`
      INSERT INTO ${visitorMapTable} ("id", "visitor_id", "short_url_id", "created_at")
      SELECT md5("visitor_id" || ':' || "id"), "visitor_id", "id", "created_at"
      FROM ${legacyTable}
      WHERE "visitor_id" IS NOT NULL
      ON CONFLICT ("visitor_id", "short_url_id") DO NOTHING
    `);
  });
}

main()
  .catch((error) => {
    console.error('Failed to backfill visitor history', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
