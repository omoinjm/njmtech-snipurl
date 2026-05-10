/**
 * One-time script: adds all existing short URLs to a visitor's history.
 *
 * Usage:
 *   1. Open your site in the browser
 *   2. Open DevTools Console and run:
 *        localStorage.getItem('snipurl_visitor_id')
 *   3. Copy that value, then run:
 *        npx tsx scripts/claim-urls.ts <your-visitor-id>
 */

import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const visitorId = process.argv[2];

  if (!visitorId) {
    console.error('❌  Missing visitor ID.\n');
    console.error('   Find yours in the browser console:');
    console.error("     localStorage.getItem('snipurl_visitor_id')\n");
    console.error('   Then run:');
    console.error('     npx tsx scripts/claim-urls.ts <your-visitor-id>');
    process.exit(1);
  }

  await prisma.au_visitor.upsert({
    where: { id: visitorId },
    create: { id: visitorId },
    update: {},
  });

  const [allShortUrls, existingHistory] = await Promise.all([
    prisma.lu_short_url.findMany({
      select: { id: true },
    }),
    prisma.ma_visitor_map.findMany({
      where: { visitor_id: visitorId },
      select: { short_url_id: true },
    }),
  ]);

  if (allShortUrls.length === 0) {
    console.log('✓ No short URLs found — nothing to do.');
    return;
  }

  const existingIds = new Set(existingHistory.map((entry) => entry.short_url_id));
  const historyRows = allShortUrls
    .filter((shortUrl) => !existingIds.has(shortUrl.id))
    .map((shortUrl) => ({
      visitor_id: visitorId,
      short_url_id: shortUrl.id,
    }));

  if (historyRows.length === 0) {
    console.log(`✓ Visitor "${visitorId}" already has all URLs in history.`);
    return;
  }

  const { count } = await prisma.ma_visitor_map.createMany({
    data: historyRows,
    skipDuplicates: true,
  });

  console.log(`✓ Added ${count} URL(s) to visitor "${visitorId}" history`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
