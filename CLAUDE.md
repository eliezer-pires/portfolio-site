# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Static export to ./out/ (next export via output: "export")
npm run start    # Serve the production build
npm run lint     # Run ESLint
```

There are no automated tests in this project.

## Architecture

Single-page portfolio built with **Next.js 15** (App Router, static export), **TypeScript**, and **Tailwind CSS**. The entire site is one route (`/`) rendered in `src/app/page.tsx` that composes all section components sequentially.

### Static export constraint

`next.config.js` sets `output: "export"` — the build produces a static `./out/` directory (no server-side rendering). This means no `useSearchParams`, no server actions, no API routes, and `images.unoptimized: true` is required.

### Component structure

Each page section is a standalone component in `src/components/`. All content (experiences, certifications, skills, projects, learning roadmap) is **hardcoded as data arrays at the top of each component file** — there is no CMS, no API, and no separate data layer. To update portfolio content, edit the data arrays directly in the relevant component.

Components that need browser APIs (`useState`, `useEffect`, scroll listeners) use `"use client"` — the rest are server components by default.

### Styling system

Custom design tokens are defined in `tailwind.config.js`:
- `dark-{950,900,800,700}` — background/surface scale
- `primary-{400,500,600,700}` — blue accent scale

Reusable utility classes are defined in `src/app/globals.css` under `@layer components`:
- `.section` — standard section padding
- `.container-custom` — max-width centering (`max-w-6xl`)
- `.card` — dark card with hover border
- `.btn-primary` / `.btn-secondary` — CTA buttons
- `.heading-gradient` — blue gradient text
- `.section-title` / `.section-subtitle` — section headings
- `.tech-highlight` — inline blue bold text

Always use these classes rather than re-implementing the same styles inline.

### Section ↔ nav anchor mapping

Each section component renders with a matching `id` used by the `Navigation` component for anchor links:
`#home` → Hero, `#about` → About, `#skills` → Skills, `#projects` → Projects, `#experience` → Experience, `#learning` → Learning, `#contact` → Contact

### Icons

All icons come from `lucide-react`. Do not add another icon library.

### Language

UI copy is in Brazilian Portuguese. Keep new content in pt-BR.
