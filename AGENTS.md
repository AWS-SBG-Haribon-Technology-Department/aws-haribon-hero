<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# To do

- **Lighthouse / Core Web Vitals pass (not yet run).** Run Lighthouse on a production build (`npm run build && npm start`) for mobile and desktop. Targets from the PRD: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms. Watch the hero WebGL shader, the pinned hero ScrollTrigger, and the mascot images (`public/mascots/*.webp`).
- Safari and Firefox checks (only Chrome has been verified so far).
