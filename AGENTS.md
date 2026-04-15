# Repository Instructions

## Project Shape

- This is a Next.js 14 App Router portfolio site with MDX-backed blog and project content.
- Use `pnpm` for package scripts. Available scripts are `pnpm dev`, `pnpm build`, and `pnpm start`.
- Styling is mostly Tailwind utility classes plus shared classes and CSS variables in `app/global.css`.
- The site language and content are primarily German. Preserve German UI copy unless the task explicitly asks otherwise.

## Content Conventions

- Blog posts live in `app/blog/posts/*.mdx`.
- Project posts live in `app/projects/posts/*.mdx`.
- Frontmatter is parsed by small custom parsers in `app/blog/utils.ts` and `app/projects/utils.ts`; do not assume full YAML support.
- Supported project frontmatter keys are `title`, `publishedAt`, `summary`, `image`, `tags`, and `hidde`.
- `tags` in project MDX files should be a single comma-separated string, for example `tags: 'Migration, Next.js, APIs'`.
- `hidde: true` hides a post from listings and static routes. The current spelling is intentional in the existing parser.
- Dates should use `YYYY-MM-DD`.

## Implementation Patterns

- Prefer existing shared classes such as `page-section`, `page-title`, `page-copy`, `section-card`, `tag-chip`, and `btn-brand`.
- Use CSS variables from `app/global.css` for brand colors instead of hard-coded one-off colors where practical.
- MDX rendering customization belongs in `app/components/mdx.tsx`.
- Project listing behavior belongs in `app/components/projects.tsx`; blog listing behavior belongs in `app/components/posts.tsx`.
- Data loading for MDX content should stay in the relevant `utils.ts` file unless a broader refactor is requested.
- For dynamic route files such as `app/projects/[slug]/page.tsx`, use PowerShell `-LiteralPath` when reading them from the terminal.

## Design Notes

- Keep the existing compact portfolio style: light canvas, purple/accent brand palette, rounded content cards, and restrained typography.
- Avoid adding unrelated page-level abstractions or broad visual redesigns for narrow content or bug-fix tasks.
- Cards should represent individual repeated items or framed content blocks, matching the existing `section-card` and listing styles.

## Safety Notes

- The repo may have user edits. Check `git status --short` before editing and do not revert unrelated changes.
- `.env.local` contains local secrets or placeholders. Do not print or modify it unless the task is specifically about environment setup.
- Be aware of existing mojibake in some source strings, such as `Ãœber uns` and `Â©`; fix only when the task includes copy/encoding cleanup or the touched area requires it.

## Verification

- For code changes, run `pnpm build` when feasible.
- For UI changes, run `pnpm dev` and inspect the affected route when practical.
- For content-only MDX changes, a build is usually enough unless layout-sensitive markup or images were added.
