import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    await tx.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "au_visitor" (
        "id" TEXT NOT NULL,
        "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "au_visitor_pkey" PRIMARY KEY ("id")
      )
    `);

    await tx.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "ma_visitor_map" (
        "id" TEXT NOT NULL,
        "visitor_id" TEXT NOT NULL,
        "short_url_id" TEXT NOT NULL,
        "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "ma_visitor_map_pkey" PRIMARY KEY ("id")
      )
    `);

    await tx.$executeRawUnsafe(`
      CREATE UNIQUE INDEX IF NOT EXISTS "ma_visitor_map_visitor_id_short_url_id_key"
      ON "ma_visitor_map"("visitor_id", "short_url_id")
    `);

    await tx.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS "ma_visitor_map_visitor_id_created_at_idx"
      ON "ma_visitor_map"("visitor_id", "created_at")
    `);

    await tx.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS "ma_visitor_map_short_url_id_idx"
      ON "ma_visitor_map"("short_url_id")
    `);

    await tx.$executeRawUnsafe(`
      INSERT INTO "au_visitor" ("id")
      SELECT DISTINCT "visitor_id"
      FROM "lu_short_url"
      WHERE "visitor_id" IS NOT NULL
      ON CONFLICT ("id") DO NOTHING
    `);

    await tx.$executeRawUnsafe(`
      INSERT INTO "ma_visitor_map" ("id", "visitor_id", "short_url_id", "created_at")
      SELECT md5("visitor_id" || ':' || "id"), "visitor_id", "id", "created_at"
      FROM "lu_short_url"
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
