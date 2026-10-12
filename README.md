# Happy Homes Community — Website (v2)

The website for **[Happy Homes Community](https://www.happyhomescommunity.org.uk)**, a UK charity (no. 1215208) that promotes social inclusion for primarily South Asian families, with a focus on women who are socially excluded.

This is a [Next.js](https://nextjs.org) (App Router) site styled with Tailwind CSS + daisyUI. Content is being moved into **[Outstatic](https://outstatic.com)**, a Git-based CMS that ships inside the app, so non-technical volunteers can edit the site without touching code.

> **Status: work in progress.** All pages are built, but most content is still hard-coded in the codebase. Moving it into the CMS is the main ongoing task. See [`docs/ROADMAP.md`](docs/ROADMAP.md).

---

## Quick links

| What | Where |
|---|---|
| CMS admin (local) | <http://localhost:3000/outstatic> |
| CMS admin (production) | `https://www.happyhomescommunity.org.uk/outstatic` (once v2 is deployed there) |
| GitHub repo | <https://github.com/Happy-Homes-Community/happy-homes-community-v2> |
| Project board (tasks) | <https://github.com/orgs/Happy-Homes-Community/projects/2/views/1> |
| CMS guide | [`docs/CMS.md`](docs/CMS.md) |
| Architecture / code tour | [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) |
| What's done / what's next | [`docs/ROADMAP.md`](docs/ROADMAP.md) |
| How to contribute | [`CONTRIBUTING.md`](CONTRIBUTING.md) |

---

## Tech stack

| Area | Tool |
|---|---|
| Framework | Next.js 16 (App Router, React Server Components), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + daisyUI v5 (custom `happyHomes` theme in `app/globals.css`) |
| CMS | Outstatic v2 (content stored as Markdown in this repo under `outstatic/content/`) |
| Icons | `lucide-react`, `react-icons` |
| Linting | ESLint 9 with `eslint-config-next` |

---

## Getting started

### Prerequisites

- **Node.js 20+** (developed on Node 24) and npm
- Git, with SSH access to the `Happy-Homes-Community` GitHub organisation
- To use the CMS locally: a GitHub account with **write access** to this repo (see [CMS setup](docs/CMS.md#local-setup))

### 1. Clone and install

```bash
git clone git@github.com:Happy-Homes-Community/happy-homes-community-v2.git
cd happy-homes-community-v2
npm install
```

### 2. Create `.env.local`

The site renders without any env vars, but the CMS admin at `/outstatic` needs them. Create `.env.local` in the project root:

```bash
# URL the app is served from
NEXT_PUBLIC_APP_URL=http://localhost:3000

# GitHub OAuth app used by Outstatic to log editors in (see docs/CMS.md)
OST_GITHUB_ID=<github-oauth-client-id>
OST_GITHUB_SECRET=<github-oauth-client-secret>

# Repo the CMS commits content to
OST_REPO_SLUG=happy-homes-community-v2
OST_REPO_OWNER=Happy-Homes-Community
# OST_REPO_BRANCH=main            # defaults to main
# OST_CONTENT_PATH=outstatic/content   # default
```

`.env*` files are git-ignored. **Never commit secrets.** Ask a maintainer for the shared dev OAuth credentials, or create your own OAuth app (instructions in [`docs/CMS.md`](docs/CMS.md#1-create-a-github-oauth-app)).

### 3. Run it

```bash
npm run dev
```

- Website: <http://localhost:3000>
- CMS: <http://localhost:3000/outstatic>

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint (must pass with no errors before merging; some warnings remain, see [Known issues](docs/ROADMAP.md#-known-issues--tech-debt)) |

---

## Project structure (short version)

```
app/
├── (cms)/outstatic/[[...ost]]/   # Outstatic admin UI  → /outstatic
├── api/outstatic/[[...ost]]/     # Outstatic API routes → /api/outstatic/*
├── page.tsx                      # Home page
├── about/  blog/  contact/  events/
├── components/                   # Navbar, Footer, cards, carousel…
├── lib/contentParser.ts          # Helper for reading CMS content
├── types/                        # Shared TS types
├── data.ts                       # Hard-coded home page content (to be moved into the CMS)
└── globals.css                   # Tailwind + daisyUI theme (brand colours)
outstatic/content/                # CMS content (Markdown + JSON). Edited via /outstatic
public/                           # Images, logos, posters, PDFs
docs/                             # Project documentation
```

The full code tour is in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## How content gets onto the site

```
Editor ──► /outstatic (CMS UI) ──► commits Markdown to GitHub (main)
                                           │
                                           ▼
             git pull locally / redeploy ──► Next.js reads outstatic/content/* at build/render time
```

Outstatic has no database. Every save in the CMS is a **Git commit** to this repo. You'll see those commits in the history, e.g. `feat(singleton): create our-mission` or `chore: Updates/Creates landing`. After editing in the CMS, run `git pull` to get the content locally. More detail in [`docs/CMS.md`](docs/CMS.md).

---

## Contributing

> [!IMPORTANT]
> **`main` is always in production.** It must be stable and accurate at all times. All changes go through a reviewed Pull Request.

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) for the branch/PR workflow and conventions. Tasks are tracked on the [project board](https://github.com/orgs/Happy-Homes-Community/projects/2/views/1). A good first task is any unticked item in [`docs/ROADMAP.md`](docs/ROADMAP.md), especially moving a page's content into the CMS.
