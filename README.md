# SnipURL

A sleek, fast, and modern URL shortener built with Next.js 15, Prisma, and Tailwind CSS 4.

![SnipURL Preview](public/next.svg) <!-- Replace with actual screenshot if available -->

## 🚀 Features

- **Instant Shortening:** Turn long, cumbersome URLs into short, shareable links.
- **QR Code Generation:** Every shortened URL comes with a downloadable SVG QR code.
- **Personal History:** Keep track of all the links you've shortened with a local-first history page.
- **Visitor Tracking:** Anonymous tracking via `visitor_id` stored in local storage.
- **Modern Aesthetic:** A dark-themed, responsive UI built with Tailwind CSS 4 and shadcn/ui.
- **Accessible:** Built with accessibility in mind, including keyboard navigation and skip links.

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Radix UI Icons](https://icons.radix-ui.com/)
- **Shortening:** [NanoID](https://github.com/ai/nanoid)
- **QR Codes:** [qrcode.react](https://zpao.github.io/qrcode.react/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

## 🏁 Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- A PostgreSQL database instance

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/njmtech-snipurl.git
   cd njmtech-snipurl
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your database connection string:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/snipurl"
   ```

4. **Database Setup:**
   Generate the Prisma client and push the schema to your database:
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
Used during deployment to ensure all existing URLs have a valid visitor mapping.
```bash
node scripts/backfill-visitor-history.mjs
```

## 🌐 Deployment

The project is configured for easy deployment on **Vercel**.

The `vercel.json` includes a custom build command that handles database migrations and history backfilling automatically:
```json
"buildCommand": "npx prisma generate && node scripts/backfill-visitor-history.mjs && npx prisma db push --accept-data-loss && next build"
```

## 📄 License

This project is open-source and available under the MIT License.
