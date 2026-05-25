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
  
  // Detect if we are using SQLite
  const isSQLite = prisma._activeProvider === 'sqlite';

  await prisma.$transaction(async (tx) => {
    let legacyTableExists = false;
    
    if (isSQLite) {
      const result = await tx.$queryRawUnsafe(
        "SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name=?",
        legacyTableName
      );
      legacyTableExists = result[0]?.count > 0;
    } else {
      const [result] = await tx.$queryRawUnsafe(
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
      legacyTableExists = result?.exists;
    }

    if (!legacyTableExists) {
      return;
    }

    let legacyVisitorColumnExists = false;
    if (isSQLite) {
      const result = await tx.$queryRawUnsafe(
        `PRAGMA table_info(${legacyTableName})`
      );
      legacyVisitorColumnExists = result.some(col => col.name === 'visitor_id');
    } else {
      const [result] = await tx.$queryRawUnsafe(
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
      legacyVisitorColumnExists = result?.exists;
    }

    if (!legacyVisitorColumnExists) {
      return;
    }

    // In SQLite/D1, we don't need to manually create tables if we use 'prisma db push' or migrations,
    // but the original script had these. We'll keep them for Postgres but skip for SQLite as 'db push' is preferred.
    if (!isSQLite) {
      const visitorTable = `${quoteIdentifier(schema)}.${quoteIdentifier('au_visitor')}`;
      const visitorMapTable = `${quoteIdentifier(schema)}.${quoteIdentifier('ma_visitor_map')}`;
      const legacyTable = `${quoteIdentifier(schema)}.${quoteIdentifier(legacyTableName)}`;

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
    } else {
      // SQLite specific backfill
      // Note: We let 'id' auto-generate (cuid) instead of using md5
      await tx.$executeRawUnsafe(`
        INSERT OR IGNORE INTO au_visitor (id)
        SELECT DISTINCT visitor_id
        FROM lu_short_url
        WHERE visitor_id IS NOT NULL
      `);

      await tx.$executeRawUnsafe(`
        INSERT OR IGNORE INTO ma_visitor_map (visitor_id, short_url_id, created_at)
        SELECT visitor_id, id, created_at
        FROM lu_short_url
        WHERE visitor_id IS NOT NULL
      `);
    }
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
