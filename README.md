# SnipURL

A sleek, fast, and modern URL shortener built with Next.js 15, Prisma, and Tailwind CSS 4.

![SnipURL Preview](public/next.svg) <!-- Replace with actual screenshot if available -->

## 🚀 Features

- **Instant Shortening:** Turn long, cumbersome URLs into short, shareable links.
- **QR Code Generation:** Every shortened URL comes with a downloadable SVG QR code.
- **Personal History:** Keep track of all the links you've shortened with visitor-based history backed by the database.
- **Visitor Tracking:** Anonymous tracking via a `visitor_id` stored in local storage and used to look up your history.
- **Modern Aesthetic:** A dark-themed, responsive UI built with Tailwind CSS 4 and shadcn/ui.
- **Accessible:** Built with accessibility in mind, including keyboard navigation and skip links.

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite) with [Prisma ORM](https://www.prisma.io/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Radix UI Icons](https://icons.radix-ui.com/)
- **Shortening:** In-repo `generateSlug()` helper (6-character random alphanumeric slug)
- **QR Codes:** [qrcode.react](https://zpao.github.io/qrcode.react/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

## 🏁 Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- Cloudflare account (for D1)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/omoinjm/njmtech-snipurl.git
   cd njmtech-snipurl
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="file:./dev.db"
   ```
   `NEXT_PUBLIC_BASE_URL` is optional. If unset, API responses fall back to the incoming request origin.

4. **Database Setup (Local):**
   Generate the Prisma client and push the schema to your local SQLite database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see SnipURL in action.

## 📜 Utility Scripts

### Claiming URLs
Associate all existing short URLs in the database with your current browser's visitor ID:

1. Open SnipURL in your browser.
2. Open the DevTools Console and run:
   ```javascript
   localStorage.getItem('snipurl_visitor_id')
   ```
3. Copy the returned ID and run:
   ```bash
   npx tsx scripts/claim-urls.ts <your-visitor-id>
   ```

### Backfill Visitor History
Used during migration to ensure all existing URLs have a valid visitor mapping.
```bash
node scripts/backfill-visitor-history.mjs
```

## 🌐 Deployment

The project is configured for deployment on **Cloudflare Pages**.

### 1. Create a D1 Database
```bash
npx wrangler d1 create snipurl-db
```
Copy the `database_id` into your `wrangler.toml`.

### 2. Apply Migrations
```bash
# Generate migration from schema
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0001_initial.sql

# Apply to D1
npx wrangler d1 migrations apply snipurl-db --remote
```

### 3. Deploy
```bash
npm run build
npx wrangler pages deploy .next
```


## 📄 License

This repository does not currently include a license file. Until a license is explicitly added, all rights are reserved.
