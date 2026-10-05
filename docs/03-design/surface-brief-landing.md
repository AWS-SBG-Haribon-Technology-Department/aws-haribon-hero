# Landing Page — Design Brief (shape)

Status: Confirmed brief from shape. No code authorized.
Date: 2026-08-21
Mode: Persuade (recruitment landing)

## Job and audience

Prospective students arrive on the homepage of a university AWS community chapter. They need to learn who Haribon is, whether beginners belong, what members build, who leads it, and how to join — within a single scrolling page, on mobile and desktop.

- Primary visitor: prospective student member, deciding whether to belong and how to join.
- Secondary: current members (recurring value via projects/updates), faculty/stakeholders validating legitimacy.
- Visitor mode: **Persuade** — the page must earn attention and the join action.

## Outcome and proof

- A first-time visitor can identify Haribon, its AWS/university relationship, and the joining path from the opening content.
- The primary `Join Haribon` action links to the approved external membership form; visible and reachable from every section.
- Evidence over invention: projects and updates demonstrate activity; no fabricated stats, quotes, awards, or claims.
- The inquiry path (external form) is a secondary, always-reachable action.

## Selected direction

- **Structure:** one landing page, six sections, resequenced for a recruitment narrative:
  1. Identity hero
  2. Short explainer banner (who we are + affiliation, one beat)
  3. Featured projects (card previews)
  4. Latest updates (card previews)
  5. Leadership preview (officer cards)
  6. About (complete)
  7. FAQ (complete)
  8. Closing invitation + footer
- **Sticky anchor navigation** with section links and an always-visible `Join Haribon` CTA.
- **Depth:** hero, explainer, About, and FAQ are complete. Team, Projects, and Updates are card previews with a visibly inert "More coming soon" button (no dead links, no misleading affordance).
- **Visual authority:** the existing design spec (`docs/03-design/design.md`) is treated as a pinned, incomplete brand — preserve its palette (sky/azure/cloud/ink, gradients limited to atmospheric surfaces), typography (Montserrat display + Amazon Ember body), mascot rules (Bonee primary, Bowee technical-only), glass treatment, and motif discipline. Expand the world for this surface rather than replacing it; the user has not seen it fully rendered, so adjustments to the world remain possible during wireframe/live refinement.
- **Wireframe-first:** a minimal static HTML/CSS wireframe will be scaffolded and served locally, then iterated with live mode before any Next.js build. The wireframe carries the real section structure, real copy stubs, and token placeholders; it is the skeleton the user wants to see and refine.

## Scope and boundaries

- One route only (the landing page). The PRD's six-route scope is deferred; the architecture stays ready to split sections into routes later ("page now, routes later").
- No auth, dashboards, CMS, analytics, chat widgets, or unapproved scripts (PRD constraints hold).
- External form URLs remain `[[JOIN_FORM_URL]]` / `[[INQUIRY_FORM_URL]]` placeholders until approved.
- No fabricated people, projects, achievements, or quotes; placeholders use the `[[TOKEN]]` convention.
- Anti-goals: no reproduction of the AWS corporate site, no dark-mode default, no stock photos standing in for chapter media, no poster-scale text as body copy, no dead "see more" links.

## States and ranges

- Content ranges: Projects 3–6 featured cards; Updates 3–5 entries; Team 3–8 officer cards; FAQ 5–12 items in categories; About complete.
- Material states: empty states for Updates when none; missing officer photos/bios collapse cleanly; FAQ multi-open accordions with essential joining info outside collapsed content; reduced-motion produces complete readable page; 200% zoom and 30% text expansion survive.

## Interaction and layout

- Mobile-first: single column stacking to 4/8/12-column grid; 1280px max container; 320–1920px validated.
- Sticky header: section anchors, current-section cue, always-visible Join CTA; mobile menu keyboard-operable, Escape-close, focus-contained.
- Cards: consistent anatomy for projects/updates/officers; "coming soon" is a labeled, non-action state.
- Motion: purposeful and restrained, respects `prefers-reduced-motion`; no continuous decorative animation, no scroll-jacking.
- Focus: visible focus indicators, WCAG AA contrast, meaningful link names, alt text discipline.

## Constraints and open decisions

- Binding: WCAG 2.2 AA; mobile-first; performance (LCP ≤2.5s, CLS ≤0.1, INP ≤200ms per PRD); no analytics; approved assets only.
- Open (human inputs): approved logo/wordmark, font files, mascot art, officer/project/update records, form URLs, contact/social links, production domain.
- Builder must not invent: statistics, quotes, achievements, people, partnerships, or claims.

## Next step (not yet authorized)

Scaffold the static HTML/CSS wireframe, serve locally, and iterate with live mode. After the skeleton is refined and approved, proceed to the Next.js build.
