# Roadmap: what's done, what's next

_Last updated: 12 October 2026_

The site's UI is built. The main remaining job is **connecting every page to the Outstatic CMS** so the charity can update content without a developer. See [`CMS.md`](CMS.md) for the how-to recipe.

---

## ✅ Done so far

### Foundations
- [x] Next.js 16 + TypeScript project set up
- [x] Tailwind v4 + daisyUI with the Happy Homes brand theme (orange / green / teal / cream)
- [x] Site metadata, OpenGraph tags, favicon
- [x] Outstatic installed and wired up (`/outstatic` admin UI, `/api/outstatic` routes, separate CMS layout)
- [x] `getPageData()` helper + typed content interfaces (`app/lib/contentParser.ts`, `app/types/content.ts`)

### UI / pages
- [x] Navbar (responsive, mobile burger menu)
- [x] Footer (links, contact, socials, charity number)
- [x] Home page: hero carousel, mission, "What we offer", upcoming events, partner logos
- [x] About page: goal, constitution, our work, our people
- [x] Contact page
- [x] Blog listing + blog article page (supports PDF-only posts like annual reports)
- [x] Custom 404 page

### CMS content created so far
- [x] `pages` collection with a `welcomeMessage` custom field, and a `landing` document (published)
- [x] `our-mission` singleton (content entered, **status: draft**, no custom fields yet)
- [x] Proof of concept: the home page fetches `pages/landing` from the CMS, though it doesn't render it yet

---

## 🚧 To do: CMS integration

Each item is a self-contained piece of work that suits one PR. Suggested models are a starting point; adjust if you have a better idea.

### Home page (`app/page.tsx`, `app/data.ts`, `HeroCarousel.tsx`)
- [ ] **Hero text**: render `welcomeMessage` / tagline from `pages/landing` instead of the hard-coded text in `HeroCarousel.tsx`
- [ ] **Hero images**: make carousel images editable (image list field on `landing`, or a `hero-slides` collection)
- [ ] **Mission**: render the `our-mission` singleton (`getSingletonBySlug`) instead of `missionData`; publish it in the CMS. The Markdown body already contains the intro + bullet points
- [ ] **What we offer**: `offers` collection (title, description, image)
- [ ] **Upcoming events**: use the `events` collection (see Events below), showing the next 3 by date
- [ ] **Partners**: `partners` collection (name, logo, website URL)
- [ ] Remove `app/data.ts` once everything above is migrated

### About page (`app/about/page.tsx`)
- [ ] `about` singleton for goal / constitution / our-work copy
- [ ] `team` collection (name, role, leadership vs volunteer, photo/emoji)
- [ ] Remove or use the unused `AboutPageData` type in `app/types/content.ts`

### Blog (`app/blog/*`)
- [ ] `blog` collection with fields: `description`, `coverImage`, `isPdf` (or a `pdfUrl` field that's empty for normal posts)
- [ ] Listing page: `load()` → published posts sorted by `publishedAt` desc
- [ ] Article page: `getDocumentBySlug("blog", slug)` + `generateStaticParams` from `getDocumentSlugs("blog")`, rendering the body with `react-markdown`
- [ ] Migrate the 3 existing posts (incl. the two PDFs in `public/blog/documents/`)
- [ ] Delete `app/blog/blogData.ts` and possibly `app/types/blog.ts`

### Events (`app/events/page.tsx`)
- [ ] `events` collection (title, date, description, poster image, location, optional link)
- [ ] Build the Events page (upcoming vs past)
- [ ] Event detail page (`/events/[slug]`) so the home page "Read More" links (currently `#`) go somewhere
- [ ] Add "Events" to the navbar and footer links

### Contact page / global
- [ ] `site-settings` singleton: contact name/email, social links, charity number, footer description
- [ ] Use it in `Footer.tsx`, `contact/page.tsx`, and possibly `Navbar.tsx`

---

## 🧹 Known issues / tech debt

- [x] ~~`npm run lint` fails~~: fixed the unescaped apostrophes in `app/not-found.tsx`. Lint now passes with warnings only (unused vars, `<img>` usage)
- [ ] `app/page.tsx` has unused imports (`ReactMarkdown`, `Navbar`) and an unused `page` variable
- [ ] `app/page.tsx` requests `heroImage` and `cta` fields that don't exist in the `pages` schema
- [ ] `react-markdown` is imported but only installed transitively via Outstatic. Add it to `package.json`
- [ ] `gray-matter` is in `package.json` but unused (Outstatic handles parsing). Remove it, or use it deliberately
- [ ] The blog article page uses `prose` classes, but `@tailwindcss/typography` isn't installed
- [ ] Content in `pages/landing` contains test text (`"…test change"`)
- [ ] `HeroCarousel` useEffect dependency warning; carousel buttons need `aria-label`s
- [ ] Replace `<img>` with `next/image` (ESLint warnings across components)
- [ ] `getDocumentBySlug` doesn't filter drafts, so add a `status === "published"` check in `getPageData` (or a separate helper)
- [ ] `.idea/` (JetBrains config) is committed. Consider git-ignoring it
- [ ] Confirm the production hosting and deployment setup and document it in [`ARCHITECTURE.md`](ARCHITECTURE.md#deployment)

## 💡 Nice to have (later)

- [ ] CI (GitHub Actions) running `npm run lint` and `npm run build` on PRs
- [ ] Basic tests (e.g. Playwright smoke test for each route)
- [ ] Contact form (currently `mailto:` links only)
- [ ] Per-page SEO metadata (`generateMetadata`) driven from the CMS
- [ ] Accessibility audit (contrast of orange text on cream, keyboard navigation of the carousel)
