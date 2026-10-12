# Contributing

Thanks for helping Happy Homes Community! This guide covers how we work. For setup, see the [README](README.md).

> [!IMPORTANT]
> **`main` is always in production.** Anything merged into `main` goes live on the public website, so `main` must always be stable and accurate.
>
> - Never push directly to `main`. All code changes go through a Pull Request with a review.
> - Before merging, the PR must pass `npm run lint` and `npm run build`, and you must have checked the change in the browser.
> - Content must be accurate before it's published: names, dates, contact details, charity information. No placeholder or test content on `main`.
> - CMS edits made at `/outstatic` also commit straight to `main`, so they go live too. Save experiments as **draft**, or use a sandbox branch (see [Working with the CMS](#working-with-the-cms)).

## Project board

Tasks are tracked on the GitHub project board:
**<https://github.com/orgs/Happy-Homes-Community/projects/2/views/1>**

## Picking something to work on

1. Check the [project board](https://github.com/orgs/Happy-Homes-Community/projects/2/views/1) for open tasks. [`docs/ROADMAP.md`](docs/ROADMAP.md) has more detail on what's done and what's left. CMS integration tasks are the priority.
2. Assign yourself to the card, or move it to "In Progress", so two people don't work on the same thing.

## Workflow

```bash
git checkout main
git pull                       # CMS edits land on main directly, so always pull first
git checkout -b feature/blog-cms
# ...make changes...
npm run lint
npm run build                  # make sure it builds before opening a PR
git push -u origin feature/blog-cms
```

Then open a Pull Request into `main` on GitHub and ask for a review. Remember that merging the PR deploys it to production.

### Branch names

Use a prefix plus a short description, matching existing branches:

- `feature/<thing>`: new functionality (e.g. `feature/add-404-page`, `feature/ui-landing-page`)
- `fix/<thing>`: bug fixes
- `chore/<thing>` / `docs/<thing>`: tooling, dependencies, documentation

### Commit messages

Short, imperative, lower-case is fine: `add footer`, `fix blog date sorting`. [Conventional Commit](https://www.conventionalcommits.org) prefixes (`feat:`, `fix:`, `docs:`, `chore:`) are welcome. Outstatic already uses them for its own content commits.

### Pull requests

- Keep PRs focused, ideally one roadmap item each
- Include screenshots for UI changes (desktop + mobile)
- Tick off the item in `docs/ROADMAP.md` in the same PR
- If you changed anything about the CMS model (new collection, singleton or field), update [`docs/CMS.md`](docs/CMS.md) and the types in `app/types/content.ts`

## Working with the CMS

- **CMS saves commit straight to `main` on GitHub.** Run `git pull` afterwards to see them locally, and rebase your feature branch if needed.
- Create collections, singletons and fields **through the CMS UI** (`/outstatic`), not by hand-writing JSON. Outstatic keeps `metadata.json` and the schema files in sync.
- Don't commit test content to `main` via the CMS. Use a sandbox branch (`OST_REPO_BRANCH`) when experimenting. See [`docs/CMS.md`](docs/CMS.md#the-editing-workflow-important).

## Code conventions

- TypeScript everywhere, `strict` mode. Avoid `any`.
- Server Components by default. Only add `"use client"` when you need state, effects or browser APIs.
- Keep content in a data object (or the CMS), separate from the JSX that renders it. See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md#conventions-in-the-existing-code).
- Use the daisyUI theme tokens (`text-primary`, `bg-neutral`, …) rather than hard-coded colours.
- Use the `@/` import alias.
- Put shared components in `app/components/` and shared types in `app/types/`.

## Secrets

Never commit `.env.local` or any credentials. `.env*` is git-ignored. If you accidentally commit a secret, tell a maintainer straight away so the GitHub OAuth secret can be rotated.
