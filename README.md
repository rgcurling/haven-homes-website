# Haven Homes Interiors Website

## Overview
Production-ready marketing site built with Next.js App Router, TypeScript, TailwindCSS, shadcn-style UI primitives, Zod + React Hook Form, and Playwright smoke tests. The visual direction is an editorial, luxury-calm interpretation of the Haven Homes Interiors Instagram portfolio.

## Tech Stack
- Next.js 14 (App Router) + React 18
- TypeScript
- TailwindCSS
- shadcn/ui-style component layer (`components/ui`)
- `next/image`
- Zod + React Hook Form
- Resend email integration
- Playwright smoke tests
- ESLint + Prettier

## Pages
- `/`
- `/services`
- `/portfolio`
- `/portfolio/[slug]`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

## Content Model
- `data/site.ts` global config/nav
- `data/testimonials.ts`
- `data/locations.ts`
- `data/studioNotes.ts`
- `data/instagram.json` normalized live-ready source
- `data/instagram.sample.json` fallback sample content
- `data/projects.ts` curated project details

## Instagram Ingestion
### Option A: Graph API (preferred)
1. Set env vars:
   - `INSTAGRAM_ACCESS_TOKEN`
   - `INSTAGRAM_USER_ID`
2. Run local ingestion:
   ```bash
   npm run instagram:ingest
   ```
3. This writes normalized content to `data/instagram.json`.

### Option B: API route ingestion
- POST to `/api/instagram/ingest` with header `x-ingest-password` if `IG_INGEST_PASSWORD` is set.
- Route fetches Graph API posts and rewrites `data/instagram.json`.

## Local Development
```bash
npm install
npm run dev
```

The app works immediately without credentials via:
- `data/instagram.sample.json`
- placeholder assets in `public/portfolio/`

## Environment Variables
Create `.env.local`:
```bash
INSTAGRAM_ACCESS_TOKEN=
INSTAGRAM_USER_ID=
IG_INGEST_PASSWORD=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
SITE_URL=http://localhost:3000
```

## Contact Form
- API route: `app/api/contact/route.ts`
- Validated with Zod
- Honeypot field (`website`)
- Basic in-memory rate limiting
- Sends via Resend if env vars are configured; otherwise no-op success

## SEO + Performance
- Metadata and OpenGraph via `lib/seo/metadata.ts`
- JSON-LD LocalBusiness + ProfessionalService in root layout
- `app/sitemap.ts`
- `app/robots.ts`
- Optimized responsive images with `next/image`

## Testing
Run:
```bash
npm run lint
npm run test:e2e
```
Playwright smoke tests verify:
- Home page load
- Portfolio page image rendering from sample data
- Contact form validation

## Deployment (Vercel)
1. Push repo to GitHub.
2. Import project in Vercel.
3. Set env vars from the list above.
4. Deploy.
5. (Optional) Trigger `/api/instagram/ingest` to refresh portfolio content.
