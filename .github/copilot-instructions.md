# Copilot Instructions

## Commands

```bash
npm run dev       # Dev server with Turbopack
npm run build     # Production build (also runs prisma generate via vercel.json)
npm run lint      # ESLint
npx prisma generate   # Regenerate Prisma client after schema changes
npx prisma db push    # Push schema changes to database
npx prisma studio     # Browse database
```

No test suite is configured.

## Architecture

SnipURL is a URL shortener built with Next.js 15 App Router. It has three routes:

- `/` — Home page (`src/app/page.tsx`), a `'use client'` form that POSTs to the API
- `/api/shorten` — `POST` endpoint that creates or reuses a short URL record
- `/[slug]` — Server Component that increments click count and redirects to the original URL

The entire data model is a single Prisma table (`lu_short_url`) with fields: `id` (cuid), `original`, `slug` (unique, 6-char random), `created_at`, and `clicks`.

## Key Conventions

**Prisma client output path** — The generated client lives at `src/generated/prisma`, not the default location. Always import from there:
```ts
import { PrismaClient } from "@/generated/prisma";
```

**Prisma singleton** — Use the singleton in `src/lib/prisma.ts` (prevents connection exhaustion during hot reloads). Never instantiate `PrismaClient` directly in route handlers.

**Slug generation** — `generateSlug()` in `src/lib/utils.ts` produces a 6-character random alphanumeric string. The API deduplicates by `original` URL before generating a new slug.

**UI components** — All components in `src/components/ui/` follow the shadcn/ui pattern: use `cn()` (from `src/lib/utils.ts`) for className merging, CVA for variants, and forward refs where applicable. Add new shadcn components with `npx shadcn@latest add <component>`.

**Styling** — Tailwind CSS v4 with a custom orange palette. Dark mode is class-based. Use `cn(clsx(...), twMerge(...))` via the `cn()` utility for conditional classes.

**Server/Client split** — The home page is `'use client'` (stateful form). The `[slug]` redirect page is a Server Component (async, runs Prisma query server-side). API routes are standard Next.js Route Handlers.

**QR codes** — `QRCodeSVG` from `qrcode.react` renders client-side SVG QR codes. A `ref` is forwarded to the `<svg>` element so `XMLSerializer` can serialize it for SVG download.

## Environment Variables

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (supports Prisma Accelerate) |
| `NEXT_PUBLIC_BASE_URL` | Public base URL for generated short links (e.g. `https://snipuri.vercel.app`) |
