# AWS Student Builder Groups Haribon Website

Repository for the future website of AWS Student Builder Groups Haribon, a university-based AWS community chapter.

## Current phase

A first build of the single-page landing site exists: Next.js (App Router, TypeScript), static output, GSAP scroll motion, and a WebGL sky shader in the hero. It follows the Spiral SDLC model; this build is up for review, not launch.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static production build
npm run typecheck
```

## Editing content

All copy and records live in `src/content/` and are typed in `src/types/content.ts`:

- `site.ts` - name, tagline, form URLs, email, socials, roster term
- `network.ts` - program description and figures, chapter About copy
- `tracks.ts` - the ten builder tracks and their constellation positions
- `officers.ts` - executive board (add consented photos via `photo`)
- `updates.ts` - logbook entries, newest first
- `faq.ts` - FAQ groups

Unresolved values use the `[[TOKEN]]` convention and never render as live links.

## Before launch

- Set `joinFormUrl` and `inquiryFormUrl` in `site.ts` (the join button falls back to Instagram until then).
- Confirm the email and socials; add Facebook/LinkedIn URLs (hidden until set).
- Supply licensed Amazon Ember webfont files (Fira Sans stands in).
- Confirm mascot art usage and the final organization name.

## Repository map

- `.agents/skills/` - project-local design and software-engineering skills
- `docs/` - governance, discovery, Spiral cycles, design, engineering, quality, and operations records
- `public/mascots/` - Bonee and Bowee poses exported from the brand guide
- `src/app/` - root layout, page, global styles, favicon
- `src/components/` - page sections, nav, footer, sky shader, decor
- `src/content/`, `src/types/` - typed content records
- `src/styles/tokens.css` - primitive, semantic, and component design tokens
- `wireframe/` - the original layout wireframe
- `tests/` - placeholders for future automated test suites

