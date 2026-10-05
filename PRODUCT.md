# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) with TypeScript, static-first rendering, deployed to Vercel. Approved by the user during init; consistent with the PRD's technical delivery requirements.

## Users

1. **Prospective student members** (primary): university students deciding whether they belong and how to join; the site must answer "who is Haribon?", its AWS/university relationship, whether beginners are welcome, what members build and experience, who leads it, and how to join.
2. **Current chapter members**: recurring value through project showcases, updates, and leadership information.
3. **Faculty, university stakeholders, AWS community members, partners, sponsors**: assessing chapter legitimacy through accurate public information.

## Product Purpose

Present AWS Student Builder Groups Haribon as a credible, welcoming, active university technology community. Help prospective students understand the chapter, see what members build and experience, meet current leadership, and reach an official joining path. The primary organizational outcome is recruiting and engaging students; recruitment is the clearest conversion path.

## Positioning

A student-led, university-based AWS community chapter whose identity is Haribon-first: an independent university-club personality that is hopeful, curious, human, playful, nature-inspired, technically credible, and welcoming to beginners — not a reproduction of the AWS corporate website and never implying AWS owns or endorses the chapter beyond the approved affiliation.

## Operating Context

- Public recruitment website: six pages (Home, About, Team, Projects, Updates, FAQ), all public and static-first.
- Joining and inquiries route to approved external forms; the website never receives or stores submissions in version one.
- Content is data-driven: officers, projects, updates, FAQs, site, and About content live in typed, validated repository files separate from presentation components.
- Delivery follows a Spiral SDLC model with review gates; the PRD and design spec are currently in stakeholder-review status and no implementation is authorized yet.
- Version one is English-only, mobile-first, WCAG 2.2 Level AA, and performance-gated (mobile Core Web Vitals, Lighthouse CI, INP budget).

## Capabilities and Constraints

- Six routes: `/` (Home), `/about`, `/team`, `/projects`, `/updates`, `/faq`.
- Shared responsive navigation and footer; prominent external `Join Haribon` action; external managed inquiry form.
- Data-driven officer profiles, project gallery cards, reverse-chronological updates, category-grouped FAQ.
- No auth, dashboards, CMS, database, third-party API integrations, analytics, tracking, chat widgets, or unapproved scripts in version one.
- No project detail routes, officer detail routes, filtering, search, or language switcher in version one.
- External form destinations (`[[JOIN_FORM_URL]]`, `[[INQUIRY_FORM_URL]]`) are mandatory, approved, absolute HTTPS URLs before launch.
- Content must never invent facts: no fabricated statistics, quotes, awards, dates, projects, people, or partnership claims. Missing content uses the `[[TOKEN]]` placeholder convention and is visibly incomplete.
- Brand discipline: Haribon is the dominant identity; only approved current Haribon logo/wordmark and usage rules; no standalone AWS logo as chapter identity; approved AWS/university affiliation wording only; no historical organization-name variants in live copy.
- Approved visual direction: bright sky-first system, Montserrat (display/interface) + Amazon Ember (body), three-layer design tokens (primitive → semantic → component), gradient recipes limited to atmospheric/campaign surfaces, glass panels with opaque fallback, Bonee as primary mascot (Bowee only in approved technical/Skill Builder contexts), pure black prohibited as brand text, WCAG-tested ink palette.
- Mascots, logos, fonts, officer photos, project media, and all content records require approved assets and consent before production.

## Brand Commitments

- Organization name: `AWS Student Builder Groups Haribon` (current public naming per PRD); do not publish historical variants like `AWS Cloud Clubs Haribon` or singular `AWS Student Builder Group`.
- Primary mascot: **Bonee**, a friendly young Philippine eagle with cloud-aviator identity and PLM torch badge; **Bowee** is contextual to Skill Builder and technical-core content only.
- Voice: energetic, welcoming, student-led, credible, inclusive of beginners; no unsupported AWS claims, guaranteed career outcomes, or exclusionary language.
- Visual personality: hopeful and curious, human and student-led, playful but not childish, nature-inspired but not rustic, technically credible but not sterile.
- Design principles (confirmed): clarity before decoration; Haribon before AWS; sky as atmosphere not wallpaper; one story beat at a time; structured playfulness; real content over invented proof; accessible by construction; fast on student devices.
- Rejected generic directions: serif-led academic typography (use Montserrat + Amazon Ember), fully flat styling, eliminating gradients, black-and-white institutional palette, dark mode as default/toggle in version one, generic portfolio template.

## Evidence on Hand

- `docs/01-discovery/prd/AWS-SBG-Haribon-Website-PRD.md` — product requirements source of truth (v1.0 draft, stakeholder review).
- `docs/03-design/design.md` — web design specification (v1.0 draft): north star, audience strategy, color system, typography, logo/affiliation rules, mascots, motifs, glass/gradient/surface rules, layout and responsive system, page direction, component specs, interaction/motion, accessibility, content presentation, performance, source traceability, compliance checklists.
- `'26 - '27 Centralized Workscape [AWSSBG HARIBON].pdf` — primary 14-page visual brand guide (brand authority; cover academic year is stale; poster-specific content is not website copy).
- `'26 - '27 Centralized Workscape [AWSSBG HARIBON] (1).pdf` — supplementary 9-page campaign-composition reference (image-only; contributes no authoritative names or facts).
- `docs/03-design/references/campaign-examples/` — archived campaign images (motif/composition evidence only, never shipped from `public/`).
- `PRD-Sample.md` — generic sample PRD, reference only; MUST NOT override the Haribon PRD.
- Explicit absence: no approved current Haribon logo, font files, mascot source art, officer records, project records, update records, FAQ content, form URLs, contact/social links, chapter photography, or production domain yet. These are unresolved human inputs and must not be fabricated.

## Product Principles

1. **Recruitment is the primary conversion path**; the joining action is the clearest call on the homepage, repeated at key decision points without becoming pushy.
2. **Evidence over invention**; projects and updates demonstrate activity, and no statistic, quote, award, or claim is ever fabricated to fill a composition.
3. **Haribon-first identity with accurate affiliation**; the chapter leads, AWS affiliation is precise and bounded, and no historical or corporate naming leaks into live copy.
4. **Accessible and fast by construction**; WCAG 2.2 AA, mobile-first responsiveness, reduced-motion respect, and Core Web Vitals are design inputs, not final checks.
5. **Content is data, not markup**; everything editorial lives in typed, validated, human-editable records so officers, projects, updates, and FAQs change without touching components.

## Accessibility & Inclusion

- WCAG 2.2 Level AA is a version-one release requirement.
- Mobile-first layout from 320px through wide desktop without horizontal scrolling; 44x44px minimum tap targets; keyboard operable; visible focus; skip link; logical landmarks and headings.
- Content must work at 200 percent zoom and survive 30 percent text expansion.
- `prefers-reduced-motion: reduce` must produce a complete, readable, non-animated experience.
- Voice and imagery must be inclusive of beginners and avoid exclusionary language; color is never the sole status indicator.
