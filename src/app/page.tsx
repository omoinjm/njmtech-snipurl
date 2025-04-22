'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await res.json();
      setShortUrl(data.slug);

      toast.success("Your URL has been shortened successfully!");
    } catch (error) {
      toast.error((error instanceof Error ? error.message : 'Something went wrong while shortening your URL'));
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    toast.success("Short URL copied to clipboard!");
  };

  const visitUrl = () => {
    window.open(shortUrl, '_blank');
  };

  return (
    <main className="min-h-screen to-orange-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md border border-orange-100/25 shadow-lg bg-[#0a0a0a]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-white-900">URL Shortener</CardTitle>
          <CardDescription className="text-white-100">
            Paste your long URL to create a short, memorable link
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url" className="text-orange-800">Destination URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border border-orange-100/25 focus-visible:ring-orange-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Shortening..." : "Shorten URL"}
            </Button>
          </form>

          {shortUrl && (
            <div className="mt-6 space-y-2">
              <Label className="text-orange-800">Your Short URL</Label>
              <div className="flex items-center gap-2">
                <Input
                  value={shortUrl}
                  disabled
                  className="flex-1 border border-orange-100/25 bg-orange-100/10 text-orange-300 cursor-not-allowed"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyToClipboard}
                  className="shrink-0 cursor-pointer border border-orange-100/25 text-orange-700 hover:bg-orange-50 hover:text-orange-900"
                >
                  <CopyIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={visitUrl}
                  className="shrink-0 cursor-pointer border border-orange-100/25 text-orange-700 hover:bg-orange-50 hover:text-orange-900"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="text-sm text-white-100">
          <p>Simple, fast, and free URL shortener</p>
        </CardFooter>
      </Card>
    </main>
  );
}
