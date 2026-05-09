'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getVisitorId } from '@/lib/visitor';
import {
  ArrowLeftIcon,
  CheckIcon,
  CopyIcon,
  ExternalLinkIcon,
  Link2Icon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type LinkRecord = {
  slug: string;
  original: string;
  short_url: string;
  clicks: number;
  created_at: string;
};

export default function HistoryPage() {
  const [links, setLinks] = useState<LinkRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  useEffect(() => {
    const visitorId = getVisitorId();
    fetch(`/api/history?visitor_id=${encodeURIComponent(visitorId)}`)
      .then((r) => r.json())
      .then((data) => setLinks(data.links ?? []))
      .catch(() => setLinks([]))
      .finally(() => setIsLoading(false));
  }, []);

  const copyToClipboard = async (shortUrl: string, slug: string) => {
    await navigator.clipboard.writeText(shortUrl);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(iso));

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-orange-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(234,88,12,0.15),transparent)]">
        <main id="main-content" className="mx-auto max-w-2xl px-4 py-12">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <Link
              href="/"
              aria-label="Back to home"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
            >
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600"
                aria-hidden="true"
              >
                <Link2Icon className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-white">
                My Links
              </h1>
            </div>
          </div>

          {/* Content */}
          {isLoading ? (
            <div
              className="flex flex-col gap-3"
              aria-label="Loading your links…"
              aria-busy="true"
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-20 animate-pulse rounded-xl border border-white/[0.06] bg-white/[0.03]"
                />
              ))}
            </div>
          ) : links.length === 0 ? (
            <div className="flex flex-col items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] py-16 text-center">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5"
                aria-hidden="true"
              >
                <Link2Icon className="h-6 w-6 text-zinc-600" />
              </div>
              <div>
                <p className="font-medium text-zinc-300">No links yet</p>
                <p className="mt-1 text-sm text-zinc-600">
                  Links you shorten will appear here
                </p>
              </div>
              <Link href="/">
                <Button className="bg-orange-600 text-white hover:bg-orange-500">
                  Shorten your first URL
                </Button>
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-3" aria-label="Your shortened links">
              {links.map((link) => (
                <li
                  key={link.slug}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 transition-colors hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                >
                  {/* Short URL row */}
                  <div className="flex items-center gap-2">
                    <Input
                      value={link.short_url}
                      readOnly
                      aria-label={`Short URL for ${link.original}`}
                      className="flex-1 border-white/10 bg-transparent text-sm font-medium text-orange-300 focus-visible:ring-orange-500/20 cursor-default"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(link.short_url, link.slug)}
                      aria-label={copiedSlug === link.slug ? 'Copied!' : 'Copy short URL'}
                      className="shrink-0 border-white/10 bg-white/5 text-zinc-300 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/30"
                    >
                      {copiedSlug === link.slug
                        ? <CheckIcon className="h-4 w-4" aria-hidden="true" />
                        : <CopyIcon className="h-4 w-4" aria-hidden="true" />
                      }
                    </Button>
                    <a
                      href={link.short_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open short URL in a new tab"
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
                    >
                      <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Original URL + meta */}
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <p
                      className="min-w-0 flex-1 truncate text-xs text-zinc-500"
                      title={link.original}
                    >
                      {link.original}
                    </p>
                    <div className="flex shrink-0 items-center gap-3 text-xs text-zinc-600">
                      <span aria-label={`${link.clicks} clicks`}>
                        {link.clicks.toLocaleString()}{' '}
                        {link.clicks === 1 ? 'click' : 'clicks'}
                      </span>
                      <span aria-label={`Created on ${formatDate(link.created_at)}`}>
                        {formatDate(link.created_at)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {links.length > 0 && (
            <p className="mt-6 text-center text-xs text-zinc-700">
              History is stored locally in this browser.{' '}
              <span translate="no">SnipURL</span> does not require an account.
            </p>
          )}
        </main>
      </div>
    </>
  );
}
