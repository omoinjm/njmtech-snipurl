'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckIcon, CopyIcon, ExternalLinkIcon, Link2Icon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShortUrl("");

    try {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? 'Failed to shorten URL');
      }

      setShortUrl(data.slug);
      toast.success("URL shortened successfully!");
      setTimeout(() => resultRef.current?.focus(), 50);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-orange-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(234,88,12,0.15),transparent)]">
        <main
          id="main-content"
          className="flex min-h-screen flex-col items-center justify-center gap-8 p-4"
        >
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 shadow-lg shadow-orange-900/40"
              aria-hidden="true"
            >
              <Link2Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-white">
                SnipURL
              </h1>
              <p className="mt-1 text-sm text-zinc-500">
                Shorten, share &amp; track your links
              </p>
            </div>
          </div>

          {/* Card */}
          <Card className="w-full max-w-md border-white/[0.06] bg-white/[0.03] shadow-2xl">
            <CardHeader>
              <p className="text-base font-semibold text-white leading-none">Shorten a URL</p>
              <CardDescription className="text-zinc-500">
                Paste your long URL below to get a short, shareable link
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <div className="space-y-1.5">
                  <Label htmlFor="url" className="text-zinc-300 text-sm">
                    Destination URL
                  </Label>
                  <Input
                    id="url"
                    name="url"
                    type="url"
                    placeholder="https://example.com/your/long/url…"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    autoComplete="url"
                    spellCheck={false}
                    required
                    className="border-white/10 bg-white/5 text-white placeholder:text-zinc-600 focus-visible:border-orange-500 focus-visible:ring-orange-500/20"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-600 text-white hover:bg-orange-500 focus-visible:ring-orange-500/40"
                  disabled={isLoading}
                  aria-busy={isLoading}
                >
                  {isLoading ? "Shortening…" : "Shorten URL"}
                </Button>
              </form>

              {/* Always rendered so aria-live announces changes */}
              <div
                ref={resultRef}
                aria-live="polite"
                aria-atomic="true"
                tabIndex={-1}
                className="outline-none"
              >
                {shortUrl && (
                  <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-3 space-y-2">
                    <p className="text-[11px] font-medium uppercase tracking-widest text-orange-400">
                      Your short link
                    </p>
                    <div className="flex items-center gap-2">
                      <Input
                        value={shortUrl}
                        readOnly
                        aria-label="Shortened URL"
                        className="flex-1 border-white/10 bg-transparent text-sm text-orange-300 focus-visible:ring-orange-500/20 cursor-default"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={copyToClipboard}
                        aria-label={copied ? "Copied!" : "Copy short URL to clipboard"}
                        className="shrink-0 border-white/10 bg-white/5 text-zinc-300 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/30"
                      >
                        {copied
                          ? <CheckIcon className="h-4 w-4" aria-hidden="true" />
                          : <CopyIcon className="h-4 w-4" aria-hidden="true" />
                        }
                      </Button>
                      <a
                        href={shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open short URL in a new tab"
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
                      >
                        <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-zinc-700">
            Free, fast &amp; open&nbsp;source
          </p>
        </main>
      </div>
    </>
  );
}
