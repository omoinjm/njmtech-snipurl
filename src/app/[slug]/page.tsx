export const runtime = 'nodejs';

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

type Params = Promise<{ slug: string }>

export default async function RedirectPage({ params }: { params: Params }) {
  // Destructure slug from params first
  const { slug } = await params

  const link = await prisma.lu_short_url.findUnique({
    where: { slug } // Use the destructured slug
  })

  if (!link) {
    return <h1>Link not found</h1>
  }

  // Optional: increment clicks
  await prisma.lu_short_url.update({
    where: { slug }, // Use the destructured slug here too
    data: { clicks: { increment: 1 } }
  })

  redirect(link.original)
}
