# Design

<!-- impeccable:design-schema 1 -->

## Status

First full build of the landing page (`src/app/page.tsx`), up for stakeholder review. The visual direction from `docs/03-design/design.md` is now implemented. The undecorated skeleton in `wireframe/index.html` is kept for reference only and is no longer the source of truth.

## Visual Authority

1. `docs/01-discovery/prd/AWS-SBG-Haribon-Website-PRD.md`: product scope and content truth.
2. `docs/03-design/design.md`: web design specification (palette, type, mascot rules, motifs, accessibility).
3. `'26 - '27 Centralized Workscape [AWSSBG HARIBON].pdf`: brand guide (palette pp. 5–6, type p. 7, assets pp. 8–11, Bonee p. 13, Bowee p. 14).
4. This file: what is actually built, and the decisions taken while building it.

## World

**"Open sky, Day One."** The page reads as a flight. You take off from a sky above a sea of clouds and climb through the clouds into the chapter's story. The Tracks section is a starlit constellation, and the page ends at a sunrise with a boarding pass. Bonee is the cloud aviator who carries the story, and Bowee appears only in the technical (Tracks) context.

## Tokens

Tokens are defined in `src/styles/tokens.css` in three layers (primitive → semantic → component). Components consume semantic roles; raw hex values stay in the primitive layer.

- **Sky:** `#3A92EF` sky, `#3AB3EF` sky-400, `#B6E6F1` cloud blue, `#F1F8FE` mist (page canvas), white.
- **Accent:** `#FFF176` sun (stars, highlights, badges), `#FDF6B8` soft sun (category badges), `#F79421` orange (number suffixes, boarding stamp; decorative only, never body text), `#66BB6A` leaf (reserved).
- **Deep:** azure `#2664A5` / `#1F568E` / `#17446F` / `#0F3358` for primary actions, the Tracks section, executive cards, and the footer.
- **Ink:** `#102A43` default text, `#0B2239` headings, `#1F4E70` muted text. Pure black is never used.
- **Gradients:** `sky-open` (hero, About window, hangar), `sky-deep`, `cloud-fade` (Network), and a sunrise ramp (Join). Gradients stay on atmospheric surfaces and never appear inside content cards.
- **Radius:** 8 / 12 / 16 / 24 / 32 px; pills for buttons and badges only.
- **Spacing:** 4px half-steps on an 8px base; section rhythm `clamp(80px, 12vw, 160px)`.
- **Layout:** 1280px container, gutter `clamp(16px, 4vw, 48px)`, mobile-first with breakpoints at 640, 768, 900, 1024, and 1360 px.

## Type

- **Display:** Montserrat (variable, via `next/font`), weights 700–900. Signature emphasis is **800–900 italic** on the key phrase of each heading ("*cloud builders.*", "*nationwide flock.*", "*Day One*"). This echoes the brand's heavy-italic poster lettering in a web-safe form.
- **Body:** stack is `"Amazon Ember"` → Fira Sans (stand-in until licensed Ember webfonts are supplied) → system.
- **Measure:** body 16px minimum, lede 17–20px, measure ≤ 60–65ch. Headings use `text-wrap: balance`; tracking is never tighter than -0.045em on display numerals.
- **Eyebrows:** none. Headings carry the section.

## Surfaces and Motifs

- **Glass:** reserved for the hero copy plate, the About "Why Haribon?" card, and the nav pill. Each glass surface has a white edge, an inset highlight, and blur, plus an opaque fallback for no-blur, reduced-transparency, and forced-colors contexts.
- **Clouds:** the hero sky is a WebGL shader (`src/components/sky/SkyCanvas.tsx`). It draws three parallax rows of cumulus with shaded crowns plus a sun bloom, and its cloud sea rises with scroll. Section transitions use scalloped `CloudEdge` banks; `overflow-clip-margin` lets them paint past the section clip to hide subpixel seams.
- **Glowing stars, sparkles, and bubbles** follow brand guide p. 8. They are authored SVG/CSS, used sparsely, and kept clear of body text.
- **Linework doodles** (brand p. 9) are white strokes with a soft glow, drawn on with DrawSVG. The hero has one flight-trail loop.
- **Narrative objects:** a lantern (About), paper planes (Network route, project hangar), and the boarding pass with its tear-off notches and DAY ONE stamp (Join).
- **Mascots** are the original poses exported from the brand PDF to `public/mascots/` (they are not redrawn). Placement: hero wave → fly, About idle, Crew salute, FAQ point, Join cheer, nav/footer head badge. Bowee appears only in Tracks.

## Sections

1. **Hero:** identity, tagline, value proposition, Join + Explore the tracks.
2. **About:** chapter overview, the "Hari ng Ibon" name story, and Learn / Build / Connect.
3. **Network:** AWS Student Builder Groups program figures (labelled as national figures, not Haribon's) on a flight route.
4. **Tracks:** the Technology department's ten tracks as an eagle-shaped constellation, plus a list of the tracks.
5. **Logbook:** updates grounded in published campaigns, plus a project-hangar empty state.
6. **Crew:** the 2026–2027 executive board, with monogram badges until consented photos exist.
7. **FAQ:** native `<details>`, multi-open, answers grouped by category.
8. **Join:** sunrise burst and boarding pass (Join opens Instagram until `joinFormUrl` is set; Ask opens the chapter email).

## Motion

GSAP 3 with ScrollTrigger, SplitText, DrawSVG, and MotionPath, all run through `gsap.matchMedia`.

- **Authored moment:** the pinned hero take-off. Bonee switches from the wave pose to the fly pose and climbs out of frame while the shader's cloud sea rises into mist.
- **Secondary moments:**
  - In Network, a paper plane flies a route computed from the live layout and each figure counts up as the plane passes.
  - In Tracks, the constellation lines draw themselves and the stars pop in.
  - In Join, the boarding pass slides in, the DAY ONE stamp lands, and the sun rays turn with scroll.
- **Generic reveals:** `[data-reveal]` elements fade up via `RevealController`. Content is only ever hidden when JavaScript is running and motion is allowed; a pre-paint guard in `layout.tsx` restores everything if GSAP fails to start.
- **Reduced motion:** nothing is hidden, nothing is pinned, and the shader renders one static frame.
- **No continuous decorative loops,** apart from the shader's slow drift. The shader pauses when offscreen or when the tab is hidden.

## Accessibility (verified in browser)

- Skip link, landmarks, one `h1`, and section headings linked through `aria-labelledby`.
- The nav marks the current section with `aria-current="location"`. The mobile menu is a modal dialog with a focus trap, closes on Escape, returns focus to its trigger, and locks page scroll while open.
- Focus ring: a 3px azure outline with a white halo. Touch targets are at least 44px.
- Decorative art is `aria-hidden`; placeholder links (`[[TOKEN]]`) never render as live links.
- No horizontal scroll at 375, 768, or 1440 px.

## Open Decisions

- Organization name: the build uses the singular "AWS Student Builder Group – Haribon" (matching current chapter artwork); the PRD asks for the plural form.
- Join and inquiry form URLs, Facebook and LinkedIn URLs, and confirmation of the public email.
- Licensed Amazon Ember webfont files.
- Approved logo lockup. The nav currently uses a Bonee head badge plus a text wordmark.
- Mascot usage confirmation, officer photos, real project records.
- Not yet run: a Lighthouse/Core Web Vitals pass and Safari/Firefox checks.
