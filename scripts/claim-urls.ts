/**
 * One-time script: assigns all unclaimed URLs (visitor_id = null) to your visitor ID.
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

  const unclaimed = await prisma.lu_short_url.count({
    where: { visitor_id: null },
  });

  if (unclaimed === 0) {
    console.log('✓ No unclaimed URLs found — nothing to do.');
    return;
  }

  const { count } = await prisma.lu_short_url.updateMany({
    where: { visitor_id: null },
    data: { visitor_id: visitorId },
  });

  console.log(`✓ Claimed ${count} URL(s) for visitor "${visitorId}"`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
