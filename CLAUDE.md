# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start development server
pnpm build      # production build (use to verify code changes)
pnpm start      # serve production build
```

No test or lint script is configured. For UI changes, run `pnpm dev` and inspect the affected route. For content-only MDX changes, `pnpm build` is usually sufficient.

## Architecture

Next.js 14 App Router portfolio site. Content is MDX-backed; the UI language and copy are German. Package manager is `pnpm`.

**Pages and routing**

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/blog` | `app/blog/page.tsx` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` |
| `/projects` | `app/projects/page.tsx` |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` |
| `/api/contact` | `app/api/contact/route.ts` (POST, Gmail SMTP via nodemailer) |

**MDX content pipeline**

- Blog posts: `app/blog/posts/*.mdx`; Projects: `app/projects/posts/*.mdx`
- Frontmatter is parsed by minimal custom parsers — do not assume full YAML support
- Supported project frontmatter keys: `title`, `publishedAt`, `summary`, `image`, `tags`, `hidde`
- `tags` must be a comma-separated string: `tags: 'Migration, Next.js, APIs'`
- `hidde: true` hides a post from listings (intentional spelling — matches the parser)
- Dates: `YYYY-MM-DD`
- MDX component overrides (anchored headings, syntax highlighting, tables) live in `app/components/mdx.tsx`
- Listing behavior: `app/components/posts.tsx` (blog), `app/components/projects.tsx` (projects)
- Data loading stays in `app/blog/utils.ts` / `app/projects/utils.ts` unless a broader refactor is requested

**Styling**

- Tailwind CSS v4 (alpha) + PostCSS; no separate `tailwind.config.js`
- Global CSS variables and shared classes are in `app/global.css`
- Prefer shared classes over one-off Tailwind for repeated patterns: `page-section`, `page-title`, `page-copy`, `section-card`, `tag-chip`, `btn-brand`
- Use CSS variables from `app/global.css` for brand colors (primary `#602acc`, accent `#ffbd59`)

**Root layout**

`app/layout.tsx` applies Geist and Grand Hotel fonts, wraps the page shell, and mounts `Nav`, `Footer`, Vercel Analytics, and SpeedInsights.

## Design Constraints

- Keep the existing compact style: light canvas, purple/accent palette, rounded cards, restrained typography.
- Do not introduce broad visual redesigns or unrelated page abstractions for narrow tasks.
- Preserve German UI copy unless the task explicitly asks to change it.

## Safety

- Run `git status --short` before editing; do not revert unrelated changes.
- Do not print or modify `.env.local` unless the task is specifically about environment setup.
- Some source strings contain mojibake (e.g. `Ãœber uns`, `Â©`). Fix only when the task includes copy/encoding cleanup or the touched area requires it.
- When reading dynamic route files from the terminal (e.g. `app/projects/[slug]/page.tsx`), use PowerShell `-LiteralPath`.
