# Architecture & code tour

A walkthrough of how the codebase is organised. Read this after the [README](../README.md).

## Overview

- **Next.js 16, App Router.** Pages are React **Server Components** by default. Only components that need browser state (`HeroCarousel`, `Navbar`) are marked `"use client"`.
- **No database or backend.** Content comes from either hard-coded TS objects (most of the site today) or the Outstatic content folder (`outstatic/content/`), which is read from disk on the server.
- **Static assets** (photos, logos, posters, PDFs) live in `public/` and are referenced by absolute path, e.g. `/images/community.jpg`.

## Routes

| URL | File | Content source today |
|---|---|---|
| `/` | `app/page.tsx` | Hard-coded in `app/data.ts` (mission, offers, events, partners) and `HeroCarousel.tsx`. Also calls the CMS for `pages/landing`, but the result is **not used yet** |
| `/about` | `app/about/page.tsx` | Hard-coded `aboutContent` object at the top of the file |
| `/blog` | `app/blog/page.tsx` | Hard-coded `dummyBlogs` in `app/blog/blogData.ts` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | `dummyBlogs` (404s for PDF posts, which link straight to the PDF instead) |
| `/contact` | `app/contact/page.tsx` | Hard-coded `contactData` object at the top of the file |
| `/events` | `app/events/page.tsx` | Placeholder only, and not linked from the navbar |
| `/outstatic/*` | `app/(cms)/outstatic/[[...ost]]/page.tsx` | Outstatic admin UI |
| `/api/outstatic/*` | `app/api/outstatic/[[...ost]]/route.ts` | Outstatic API (auth etc.) |
| any unknown URL | `app/not-found.tsx` | Custom 404 page |

### Layouts

- `app/layout.tsx` is the root layout for the public site. It sets fonts (Geist), global CSS, SEO/OpenGraph metadata, and wraps every page in `<Navbar />` and `<Footer />`.
- `app/(cms)/layout.tsx` is a separate root layout for the CMS, so the admin UI doesn't inherit the site chrome.

## Folder by folder

```
app/
├── components/
│   ├── Navbar.tsx            # Sticky top nav; links defined in the `navData` object
│   ├── Footer.tsx            # Links, contact email, socials, charity no. in `footerData`
│   ├── HeroCarousel.tsx      # Client component; auto-rotating image slider (10s)
│   ├── OfferCard.tsx         # "What we offer" card. Exports the `Offer` type
│   ├── UpcomingEventCard.tsx # Event card with A4 poster. Exports the `EventItem` type
│   ├── PartnerLogos.tsx      # "Who we work with" logo strip. Exports the `Partner` type
│   └── BlogCard.tsx          # Blog card. Links to the article or straight to the PDF
├── lib/contentParser.ts      # getPageData(): typed wrapper over Outstatic's getDocumentBySlug
├── types/
│   ├── content.ts            # CMS document types (BasePageData, LandingPageData, AboutPageData)
│   └── blog.ts               # BlogPost type (used by the dummy blog data)
├── data.ts                   # Home page content (to be replaced by CMS)
├── blog/blogData.ts          # Dummy blog posts (to be replaced by CMS)
├── globals.css               # Tailwind v4 + daisyUI theme
└── icon.png                  # Favicon
```

### Conventions in the existing code

- **Content is kept separate from markup.** Every page and component defines its copy in a plain object at the top of the file (`navData`, `footerData`, `aboutContent`, `contactData`) or in `app/data.ts`, then maps over it in JSX. This makes the CMS migration mostly a matter of swapping that object for a CMS call. Please keep this pattern.
- Component prop types are exported from the component file (`Offer`, `EventItem`, `Partner`).
- Imports use the `@/` alias for the project root (`@/app/components/...`).

## Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss`. There is no `tailwind.config.js`; config lives in CSS.
- **daisyUI v5** components (`card`, `navbar`, `menu`, `dropdown`, `btn`) with a custom theme defined in `app/globals.css`:

| Token | Colour | Use |
|---|---|---|
| `primary` | `#fd642a` (orange) | Headings, buttons, accents |
| `secondary` | `#a6da3f` (green) | Highlights, bullets, hover states |
| `neutral` | `#2b6a65` (deep teal) | Navbar, footer, page hero banners |
| `neutral-content` | `#fcf3e7` (cream) | Text on teal |
| `base-100` | `#fcf3e7` (cream) | Page background |

Use the theme tokens (`bg-primary`, `text-neutral-content`…) rather than raw hex values so the palette stays in one place. Dark mode is deliberately disabled (`prefersdark: false`).

## Rendering & caching

- `app/page.tsx` exports `revalidate = 60` (ISR). Because CMS content is read from files baked into the deployment, new CMS content still needs a **redeploy** to appear. The revalidate setting does not pick up new commits on its own.
- Images use plain `<img>` tags. ESLint warns about this, and moving to `next/image` is on the roadmap.

## Deployment

The OpenGraph metadata points at `https://www.happyhomescommunity.org.uk`. The env var comments in the Outstatic setup assume **Vercel**. Wherever it is deployed, the host needs:

- The Outstatic env vars (see [`CMS.md`](CMS.md#2-environment-variables-envlocal)) configured with a **production** GitHub OAuth app
- Auto-deploy on push to `main`, so CMS edits go live

> Confirm the current hosting setup with a maintainer and update this section.
