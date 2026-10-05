# AWS Student Builder Groups Haribon Website Design Specification

Version: 1.0 Draft  
Date: 2026-08-19  
Status: Design definition for stakeholder review  
Delivery model: Spiral SDLC  
Implementation authorization: None

This document defines the visual, interaction, responsive, and accessibility direction for the first public website of AWS Student Builder Groups Haribon. It translates the supplied brand and campaign material into a web-ready system without treating posters as page templates.

No Next.js application, production asset, public claim, or final chapter content is authorized by this document. Implementation begins only after the applicable Spiral review gate is approved.

## Table of Contents

1. Authority and Scope
2. Design North Star
3. Audience and Experience Strategy
4. Brand Expression
5. Color System
6. Typography
7. Logo and Affiliation Rules
8. Mascots
9. Illustration, Imagery, and Motifs
10. Glass, Gradient, and Surface Rules
11. Layout and Responsive System
12. Page-Level Direction
13. Component Specifications
14. Interaction and Motion
15. Accessibility Requirements
16. Content and Editorial Presentation
17. Performance-Aware Design
18. Source Traceability
19. Compliance Checklists
20. Design Gate and Future Handoff

## 1. Authority and Scope

### 1.1 Source hierarchy

When sources conflict, use this order:

1. [`AWS-SBG-Haribon-Website-PRD.md`](../01-discovery/prd/AWS-SBG-Haribon-Website-PRD.md) governs product scope, current public naming, audience priority, content truth, accessibility, and release requirements.
2. This document governs the approved web design interpretation.
3. [`'26 - '27 Centralized Workscape [AWSSBG HARIBON].pdf`](<../../'26 - '27 Centralized Workscape [AWSSBG HARIBON].pdf>) is the primary visual guide.
4. [`'26 - '27 Centralized Workscape [AWSSBG HARIBON] (1).pdf`](<../../'26 - '27 Centralized Workscape [AWSSBG HARIBON] (1).pdf>) is a supplementary campaign-composition reference.
5. The [campaign example archive](references/campaign-examples/README.md) provides motif and composition evidence only.
6. `PRD-Sample.md`, generic design databases, and third-party inspiration may inform quality checks but cannot override the sources above.

The primary PDF is the brand authority despite its stale `Academic Year 2025 - 2026` cover. The project context and current design term are 2026-2027. Historical labels such as `AWS Cloud Clubs`, singular `AWS Student Builder Group`, names, emails, handles, dates, countdowns, and campaign claims are not approved website copy.

### 1.2 Design scope

This specification covers:

- A bright, sky-first visual system for Home, About, Team, Projects, Updates, and FAQ.
- Primitive, semantic, and component design-token direction.
- Typography, color, layout, imagery, mascot, glass, gradient, and motion rules.
- Page composition and reusable component behavior.
- WCAG 2.2 Level AA design requirements.
- Design-to-development acceptance checks for a later implementation cycle.

### 1.3 Non-goals

This phase does not:

- Create Next.js routes, components, content records, tests, or deployment configuration.
- Approve unverified logos, mascot source files, officer information, project claims, or campaign copy for production.
- Define a dark theme or a user-facing theme toggle for version one.
- Recreate a poster, social card, or PDF page as a fixed website layout.
- Add authentication, dashboards, filtering, detail routes, analytics, a CMS, or other features excluded by the PRD.

## 2. Design North Star

### 2.1 Experience statement

The website should feel like an open patch of sky where students can discover people, ideas, and a clear path into cloud learning. It must pair university-club warmth with enough structure and restraint to establish technical credibility.

### 2.2 Personality

The experience is:

- Hopeful, not corporate or intimidating.
- Curious, not chaotic.
- Human and student-led, not anonymous or institutional.
- Playful, not childish.
- Nature-inspired, not rustic.
- Technically credible, not sterile.
- Welcoming to beginners while still meaningful to active builders.

### 2.3 Design principles

1. **Clarity before decoration.** Identity, page purpose, and joining paths remain understandable without background artwork.
2. **Haribon before AWS.** The chapter is the primary identity; AWS affiliation is accurate and clearly bounded.
3. **Sky as atmosphere, not wallpaper.** Gradients, clouds, stars, and leaves create depth around content instead of competing with it.
4. **One story beat at a time.** Each viewport has one dominant message, focal visual, or mascot moment.
5. **Structured playfulness.** A disciplined grid, type scale, and spacing rhythm hold expressive assets together.
6. **Real content over invented proof.** Do not fabricate statistics, quotes, awards, dates, projects, or people to fill a composition.
7. **Accessible by construction.** Contrast, focus, reading order, reduced motion, zoom, and text expansion are design inputs rather than final checks.
8. **Fast on student devices.** Decorative ambition must not compromise first content, navigation, or Core Web Vitals.

### 2.4 Explicitly rejected generic directions

Some generic UI recommendations conflict with the authoritative sources and must not be adopted:

- Serif-led academic typography is rejected; use Montserrat and Amazon Ember.
- Fully flat styling is rejected; the visual identity depends on controlled atmospheric depth.
- Eliminating gradients is rejected; gradients are a core brand behavior, though they remain limited to atmospheric and campaign surfaces.
- A black-and-white institutional palette is rejected; bright sky, cloud, sun, leaf, azure, and orange are the core language.
- Dark mode as a default or version-one toggle is rejected; version one is bright and sky-first.
- A generic portfolio template is rejected; projects are important, but recruitment and chapter identity govern the homepage.

## 3. Audience and Experience Strategy

### 3.1 Audience priority

1. Prospective students deciding whether they belong and how to join.
2. Current members looking for chapter projects, updates, and leadership information.
3. Faculty, university stakeholders, AWS community members, partners, and sponsors validating chapter legitimacy.

### 3.2 Primary user questions

The interface must answer these questions quickly:

- Who is Haribon?
- How is it related to AWS and the university?
- Is this community welcoming to beginners?
- What do members learn, build, and experience?
- Who currently leads it?
- What has the chapter been working on?
- How do I join or ask a question?

### 3.3 Experience priorities

- Place identity and the `Join Haribon` action in the opening homepage content.
- Use Projects and Updates as evidence of activity rather than unsupported promotional claims.
- Make Team feel human and current without exposing private contact details.
- Reduce joining uncertainty through plain-language FAQ content and repeated approved form links.
- Keep all six primary destinations predictable and reachable from every page.

## 4. Brand Expression

### 4.1 Visual balance

Use a three-part balance:

- **Foundation:** clean grid, strong type hierarchy, readable surfaces, and generous spacing.
- **Atmosphere:** blue gradients, cloud layers, sunlit warmth, light blur, and soft depth.
- **Character:** Bonee, contextual Bowee appearances, doodles, stars, bubbles, leaves, lanterns, ribbons, and narrative objects.

Every composition needs the foundation. Atmosphere is expected but may be reduced on content-heavy sections. Character is selective and must never be applied to every component.

### 4.2 Density and rhythm

- Default to spacious marketing-page density.
- Alternate immersive or illustrated sections with quieter reading sections.
- Do not place decorative clusters around every card.
- Keep one primary focal point per section and one focal mascot per page, except for an approved campaign composition.
- Use asymmetry for energy while preserving obvious reading order.

### 4.3 Voice alignment

Visual treatments should reinforce copy that is energetic, welcoming, student-led, credible, and beginner-inclusive. Avoid visual language that suggests exclusivity, guaranteed careers, corporate employment, or official AWS ownership.

## 5. Color System

### 5.1 Token architecture

The future implementation must use three layers:

```text
Primitive values -> Semantic roles -> Component decisions
```

- Primitive tokens contain raw values and change rarely.
- Semantic tokens express meaning and may be remapped by a future approved campaign.
- Component tokens consume semantic roles; components must not depend directly on raw hex values.

### 5.2 Primitive color tokens

| Proposed token          | Value       | Source                        | Intended role                                     |
| ----------------------- | ----------- | ----------------------------- | ------------------------------------------------- |
| `color.sky.500`         | `#3A92EF`   | Primary PDF page 5            | Main sky and energetic brand accent               |
| `color.cloudBlue.300`   | `#B6E6F1`   | Primary PDF page 5            | Soft atmospheric surface                          |
| `color.white`           | `#FFFFFF`   | Primary PDF page 5            | Cloud, clean surface, reversed text where valid   |
| `color.mist.50`         | `#F1F8FE`   | Primary PDF page 5            | Quiet page and card background                    |
| `color.sunSoft.200`     | `#FDF6B8`   | Primary PDF page 5            | Gentle highlight surface                          |
| `color.sun.300`         | `#FFF176`   | Primary PDF page 5            | Stars, small highlights, selected accents         |
| `color.leaf.500`        | `#66BB6A`   | Primary PDF page 5            | Nature accent and positive supporting cue         |
| `color.glassWhite.50`   | `#FFFFFF80` | Primary PDF page 5            | 50 percent white glass tint                       |
| `color.azure.700`       | `#2664A5`   | Primary PDF page 6            | Deep brand surface, links, primary control        |
| `color.azure.800`       | `#1F568E`   | Derived for web interaction   | Primary-control hover state                       |
| `color.azure.900`       | `#17446F`   | Derived for web interaction   | Primary-control active state                      |
| `color.azureBorder.500` | `#5F8DB7`   | Derived for web accessibility | Meaningful control boundary and focus support     |
| `color.orange.500`      | `#F79421`   | Primary PDF page 6            | Warm AWS-adjacent accent                          |
| `color.orangeGlass.50`  | `#F7942110` | Corrected from PDF page 6     | Approximately 6.3 percent orange atmospheric tint |
| `color.orangeGlass.500` | `#F7942180` | Primary PDF page 6            | 50 percent orange campaign tint                   |
| `color.error.700`       | `#B42318`   | Derived for web accessibility | Error text and strong error boundary              |
| `color.ink.950`         | `#0B2239`   | Derived for web accessibility | Highest-emphasis text                             |
| `color.ink.900`         | `#102A43`   | Derived for web accessibility | Default text and icons                            |
| `color.ink.800`         | `#173F5F`   | Derived for web accessibility | Secondary headings                                |
| `color.ink.700`         | `#1F4E70`   | Derived for web accessibility | Muted text where contrast passes                  |

The primary PDF contains the invalid value `#F794210`. It must never appear in implementation. The corrected eight-digit hex value is `#F7942110`, paired with `#F7942180` for the stronger orange tint.

Pure black is prohibited as a brand text color. This does not mean that all text must be white. The PDF's poster-specific direction to prefer white text is not safe on light web surfaces; derived dark-blue inks are required wherever white fails contrast.

### 5.3 Semantic color roles

| Semantic token               | Default mapping                     | Use                                                       |
| ---------------------------- | ----------------------------------- | --------------------------------------------------------- |
| `color.background.canvas`    | `color.mist.50`                     | Default page canvas                                       |
| `color.background.sky`       | sky gradient recipe                 | Immersive hero or campaign section                        |
| `color.surface.default`      | `color.white`                       | Reading surfaces and cards                                |
| `color.surface.subtle`       | `color.cloudBlue.300`               | Section support surface                                   |
| `color.surface.glass`        | `color.glassWhite.50` plus fallback | Frosted panel                                             |
| `color.text.primary`         | `color.ink.900`                     | Body and core interface text                              |
| `color.text.strong`          | `color.ink.950`                     | High-emphasis headings                                    |
| `color.text.secondary`       | `color.ink.700`                     | Supporting text on light surfaces                         |
| `color.text.inverse`         | `color.white`                       | Text only on verified dark surfaces                       |
| `color.action.primary`       | `color.azure.700`                   | Primary buttons and critical links                        |
| `color.action.primaryHover`  | `color.azure.800`                   | Hover distinction                                         |
| `color.action.primaryActive` | `color.azure.900`                   | Pressed distinction                                       |
| `color.action.secondary`     | `color.white`                       | Secondary action on sky surfaces                          |
| `color.accent.warm`          | `color.orange.500`                  | Small warm accent, never default body text                |
| `color.accent.sun`           | `color.sun.300`                     | Stars, highlights, badges with dark text                  |
| `color.accent.nature`        | `color.leaf.500`                    | Leaves and positive supporting accents                    |
| `color.border.default`       | `color.azureBorder.500`             | Meaningful control boundary and strong surface separation |
| `color.focus.outer`          | `color.white` or `color.ink.950`    | Contrast-preserving outer focus keyline                   |
| `color.focus.inner`          | `color.azure.700`                   | Primary focus indicator                                   |
| `color.status.error`         | `color.error.700`                   | Error only; not supplied by the PDF                       |

Any additional status color not present in the source PDF must be proposed, contrast-tested, documented, and approved before use. Color must never be the sole status indicator.

### 5.4 Component token examples

| Component token                   | Semantic source                              |
| --------------------------------- | -------------------------------------------- |
| `button.primary.background`       | `color.action.primary`                       |
| `button.primary.foreground`       | `color.text.inverse`                         |
| `button.primary.backgroundHover`  | `color.action.primaryHover`                  |
| `button.primary.backgroundActive` | `color.action.primaryActive`                 |
| `button.secondary.background`     | `color.action.secondary`                     |
| `button.secondary.foreground`     | `color.text.primary`                         |
| `card.background`                 | `color.surface.default`                      |
| `card.foreground`                 | `color.text.primary`                         |
| `glass.background`                | `color.surface.glass`                        |
| `glass.foreground`                | resolved from measured backdrop contrast     |
| `navigation.active`               | `color.action.primary`                       |
| `badge.active.background`         | `color.sun.300`                              |
| `badge.active.foreground`         | `color.text.primary`                         |
| `focus.ring`                      | `color.focus.inner` plus `color.focus.outer` |

### 5.5 Contrast matrix

Ratios below use the stated opaque colors. Blurred or translucent compositions must be measured from the final rendered result, not inferred from this table.

| Foreground | Background | Ratio   | Approved use                                  |
| ---------- | ---------- | -------:| --------------------------------------------- |
| `#102A43`  | `#FFFFFF`  | 14.64:1 | All text and meaningful icons                 |
| `#102A43`  | `#F1F8FE`  | 13.66:1 | All text and meaningful icons                 |
| `#102A43`  | `#B6E6F1`  | 10.86:1 | All text and meaningful icons                 |
| `#102A43`  | `#FDF6B8`  | 13.28:1 | All text and meaningful icons                 |
| `#102A43`  | `#FFF176`  | 12.62:1 | All text and meaningful icons                 |
| `#102A43`  | `#66BB6A`  | 6.19:1  | Normal text and controls                      |
| `#102A43`  | `#F79421`  | 6.42:1  | Normal text and controls                      |
| `#102A43`  | `#3A92EF`  | 4.56:1  | Normal text; verify font rendering            |
| `#FFFFFF`  | `#2664A5`  | 6.09:1  | Normal text and controls                      |
| `#FFFFFF`  | `#1F568E`  | 7.55:1  | Normal text on primary hover surface          |
| `#FFFFFF`  | `#17446F`  | 10.03:1 | Normal text on primary active surface         |
| `#FFFFFF`  | `#3A92EF`  | 3.21:1  | Large text or non-text UI only                |
| `#FFFFFF`  | `#66BB6A`  | 2.36:1  | Decorative use only                           |
| `#FFFFFF`  | `#F79421`  | 2.28:1  | Decorative use only                           |
| `#2664A5`  | `#B6E6F1`  | 4.52:1  | Normal text; maintain opaque background       |
| `#5F8DB7`  | `#FFFFFF`  | 3.51:1  | Meaningful control boundary and focus support |
| `#B42318`  | `#FFFFFF`  | 6.57:1  | Error text and meaningful error icon          |

Do not use white normal-size text directly on sky blue, leaf green, orange, light gradients, busy artwork, or unmeasured glass. Use dark ink or introduce an opaque deep-azure backing surface.

## 6. Typography

### 6.1 Required families

- **Montserrat** is required for display headings, navigation, buttons, labels, badges, and concise interface copy.
- **Amazon Ember** is required for body paragraphs, summaries, biographies, FAQ answers, update excerpts, and other extended reading.

Final font files and their approved web-use licenses must be supplied or verified before implementation. Do not silently substitute a visually unrelated typeface in production. A temporary development fallback may use `Arial, sans-serif` only while visibly marked as unresolved in the placeholder inventory.

### 6.2 Typographic roles

| Role             | Family       | Weight guidance | Size guidance | Line height |
| ---------------- | ------------ | --------------- | ------------- | ----------- |
| Display          | Montserrat   | 700-800         | fluid 40-72px | 1.0-1.1     |
| H1               | Montserrat   | 700-800         | fluid 36-64px | 1.05-1.15   |
| H2               | Montserrat   | 700             | fluid 28-48px | 1.1-1.2     |
| H3               | Montserrat   | 650-700         | fluid 22-32px | 1.2-1.3     |
| H4/card title    | Montserrat   | 600-700         | 18-24px       | 1.25-1.35   |
| Body large       | Amazon Ember | 400-500         | 18-20px       | 1.55-1.7    |
| Body             | Amazon Ember | 400             | 16-18px       | 1.5-1.7     |
| Small/supporting | Amazon Ember | 400-500         | 14-16px       | 1.45-1.6    |
| Label/button     | Montserrat   | 600-700         | 14-16px       | 1.2-1.35    |

Body text must not be smaller than 16px by default. Metadata may reach 14px when contrast and spacing remain strong. Avoid all-uppercase sentences; uppercase is limited to short labels with added letter spacing.

### 6.3 Typesetting rules

- Keep long-form reading measure near 55-75 characters per line.
- Use sentence case for navigation, buttons, headings, and labels unless an approved campaign headline requires otherwise.
- Balance major display headings without introducing hard-coded line breaks that fail at other widths.
- Do not use heavy poster drop shadows as a default text treatment.
- On atmospheric backgrounds, prefer an opaque or frosted text surface; a subtle shadow may support but never replace sufficient contrast.
- Test all headings, buttons, cards, badges, and navigation with 30 percent text expansion.
- Use tabular numerals only for verified time, date, or numerical data that benefits from alignment.

## 7. Logo and Affiliation Rules

### 7.1 Chapter identity

- Haribon must be the dominant identity in navigation, hero content, metadata, and footer presentation.
- Do not use the standalone AWS logo as the chapter identity or social/profile mark.
- Do not imply that members are AWS employees or that the chapter is an AWS corporate department.
- Use only an approved current Haribon lockup supplied by the human team.
- Historical `AWS Cloud Clubs` artwork shown in the PDFs is not automatically approved for the website.

### 7.2 Asset integrity

Approved marks must not be:

- Recolored outside the approved variants.
- Stretched, skewed, rotated, cropped, redrawn, or rearranged.
- Given glow, shadow, bevel, blur, outline, transparency, or animation unless the official guidance explicitly allows it.
- Placed on a background that compromises legibility or clear space.
- Combined with the university or AWS mark into a new unofficial lockup.

### 7.3 Affiliation copy

Use only the approved `[[AFFILIATION_STATEMENT]]` and required trademark or university attribution. The current PRD organization name is authoritative. Do not import organization names or program labels from historical campaign artwork.

## 8. Mascots

### 8.1 Bonee

Bonee is the primary chapter mascot and the default character for website-wide storytelling. The primary PDF presents Bonee as a friendly young Philippine eagle with a cloud-aviator identity, bright eyes, a soft egg-shaped body, and a PLM torch badge.

Appropriate roles include:

- Welcoming visitors in the homepage hero or closing invitation.
- Guiding empty states or FAQ reassurance.
- Appearing as an edge crop in a campaign-led section.
- Connecting chapter identity to local nature and student community.

### 8.2 Bowee

Bowee is contextual to Skill Builder and technical-core subject matter. Use Bowee for approved technical learning, builder, project, or Skill Builder content rather than as a universal secondary mascot.

### 8.3 Mascot rules

- Obtain approved source artwork and usage permission before production.
- Do not trace, recolor, redraw, mirror, distort, or generate look-alike mascot art.
- Preserve identifying features and the approved badge treatment.
- Use one focal mascot per page by default.
- A two-mascot composition requires a campaign-specific reason, not routine decoration.
- Do not place a mascot behind essential text or controls.
- Edge crops may crop empty surrounding space or lower body areas, but never the face or identifying marks.
- Mascot images conveying information require concise alternative text; purely decorative appearances use empty alternative text.
- Do not use mascots as form-error indicators, destructive-action icons, or substitutes for clear instructions.

## 9. Illustration, Imagery, and Motifs

### 9.1 Motif library

Approved visual motifs derived from the PDFs and campaign examples include:

- Hand-drawn clouds and cloud banks.
- Small stars, sparkles, bubbles, and restrained glow lines.
- Soft green leaves near composition edges.
- Lanterns used as occasional warm narrative objects.
- Curved blue and yellow ribbons or wave bands.
- Radial sunbursts for rare campaign emphasis.
- Paper planes, envelopes, hourglasses, and other contextual narrative objects.
- Mascot edge crops and cloud plinths.
- Sparse white doodles and scribbles with a controlled glow.

### 9.2 Motif use

- Every motif must support a section's meaning, balance, or reading path.
- Use no more than two supporting motif families in a normal section.
- Keep decorative assets away from body-copy measure and interactive targets.
- Crop and simplify motifs as viewports narrow rather than shrinking dense art into unreadable detail.
- Use CSS- or SVG-native clouds, stars, bubbles, and ribbons when they can be reproduced faithfully and efficiently.
- Use supplied raster artwork only when approved and optimized for its final rendered size.
- Reserve sunbursts and dense campaign compositions for a single high-emphasis moment, not every page.

### 9.3 Prohibited transfers from references

Do not transfer:

- Baked-in poster text, contact details, handles, emails, dates, countdowns, or application status.
- Personal names, officer rosters, organizational charts, or email screenshots from the supplementary PDF.
- Historical organization-name variants or logo treatments.
- Dense shadows, illegible glow, or poster-scale type at web body-copy sizes.
- Fixed portrait-poster compositions as mobile or desktop page structures.
- Embedded text as a replacement for semantic HTML content.

### 9.4 Photography and project media

- Prefer real, consented chapter photography and verified project visuals when supplied.
- Do not silently use stock photography to represent members, events, facilities, or achievements.
- Project imagery should show the work or process rather than generic cloud stock art.
- Reserve aspect-ratio space before media loads.
- Provide content-owned alternative text for informative images.
- Use neutral, visibly incomplete placeholders until approved media is available.

## 10. Glass, Gradient, and Surface Rules

### 10.1 Glass panels

Glass is a signature treatment, not the default container for every section.

Every glass panel must include:

- A translucent tint based on an approved token.
- Backdrop frost or blur when supported.
- A visible border or inner keyline.
- Rounded corners from the shared radius scale.
- Enough separation from the background to preserve hierarchy.
- An opaque fallback for unsupported blur, forced colors, reduced transparency, print, and contrast-sensitive contexts.
- Measured WCAG contrast using the final composed backdrop.

Recommended uses are hero copy, a featured About statement, mascot callouts, and rare campaign identity panels. Avoid glass for dense update lists, long FAQ answers, or every project and officer card.

### 10.2 Gradient recipes

Gradients are limited to atmospheric or campaign surfaces. Content components consume semantic surface tokens and do not hard-code gradients.

| Recipe                | Stops                           | Intended use                              |
| --------------------- | ------------------------------- | ----------------------------------------- |
| `gradient.sky.open`   | `#3A92EF -> #3AB3EF -> #B6E6F1` | Homepage hero, major page intro           |
| `gradient.sky.deep`   | `#3A92EF -> #2664A5`            | Footer, CTA band, strong campaign surface |
| `gradient.cloud.fade` | `#F1F8FE -> #CCE0F2 -> #FFFFFF` | Quiet section transition, cloud field     |
| `gradient.sun.wash`   | `#F7942110 -> #F7942180`        | Small warm atmospheric glow only          |

Direction and stop positions may adapt by breakpoint to protect text contrast and focal composition. Avoid rainbow gradients, saturated neon blends, gradients inside every card, and animated gradient loops.

### 10.3 Shadows, borders, and radii

- Shadows are soft, cool, and diffused; they suggest floating cloud depth rather than heavy elevation.
- Use borders and tonal separation before increasing shadow strength.
- Suggested radius scale: 8, 12, 16, 24, and 32px, with full-pill reserved for badges and compact controls.
- Glass and major campaign panels may use 24-32px radii; utility components should remain more restrained.
- Avoid stacking multiple strong shadows, glows, borders, and gradients on one element.

## 11. Layout and Responsive System

### 11.1 Grid

| Range            | Columns | Default gutter | Page inset |
| ---------------- | -------:| --------------:| ----------:|
| 320-639px        | 4       | 16px           | 16-20px    |
| 640-1023px       | 8       | 20-24px        | 24-40px    |
| 1024px and above | 12      | 24-32px        | 48-80px    |

- Maximum content width: 1280px.
- Long-form text width: approximately 680-760px.
- Use the 8px spacing base with 4px half-steps only for compact internal alignment.
- Recommended spacing primitives: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, and 128px.
- Section spacing should use fluid values within approved minimum and maximum bounds.

### 11.2 Required validation widths

Designs and later implementation must be checked at:

- 320px
- 375px
- 640px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

The PRD's required widths remain release criteria; 640 and 1280 are added design-system checkpoints.

### 11.3 Responsive behavior

- Start with a single readable column and progressively add columns.
- Never rely on desktop poster proportions to determine mobile order.
- Preserve semantic reading order when art and text swap visual sides.
- Convert overlapping compositions into stacked layers before they collide with text or controls.
- Reduce, crop, reposition, or remove decorative assets at small widths.
- Cards must not become narrower than their content can support.
- Avoid horizontal page scrolling; intentionally scrollable local regions require visible affordance and a non-scroll alternative where appropriate.
- Sticky navigation must reserve layout space and use scroll padding so focused content is not obscured.

### 11.4 Section composition patterns

Use a varied but finite set:

- Split narrative: copy plus mascot or chapter media.
- Centered sky stage: concise headline, actions, atmospheric illustration.
- Editorial rail: label, heading, readable body, supporting facts.
- Responsive card field: projects, updates, officers, or member value.
- Quiet reading band: FAQ, mission, vision, or governance copy.
- Campaign burst: rare sunburst or ribbon composition for a strong invitation.

## 12. Page-Level Direction

### 12.1 Home

**Purpose:** Establish identity, belonging, credibility, and the joining path.

**Direction:** Open with the strongest sky-led composition in the site. Pair the approved organization name, tagline, value proposition, primary `Join Haribon` action, and one secondary route with a single Bonee focal moment. Use clouds to frame rather than obscure the content.

Follow the PRD order exactly:

1. Identity hero.
2. About snapshot.
3. Member value.
4. Featured projects.
5. Latest updates.
6. Leadership preview.
7. Closing invitation.

Alternate immersive and quiet surfaces so the page does not feel like a continuous poster. Projects and updates provide evidence; do not add invented metrics or social proof.

### 12.2 About

**Purpose:** Explain who Haribon is, its affiliation, story, mission, vision, community, and organizational shape.

**Direction:** Use a readable editorial sequence with one featured glass statement inspired by the archived About card. Lantern, leaf, star, bubble, and cloud-line motifs may create a reflective, welcoming tone. Keep historical facts and affiliation language in opaque, high-contrast reading surfaces.

Mission and vision should be distinct but equal peers. Organization structure should use grouped summaries rather than a dense tree diagram.

### 12.3 Team

**Purpose:** Make current leadership understandable and approachable.

**Direction:** Lead with the roster term and a concise explanation of service. Use grouped card sections with clear headings and data-driven order. Cards should feel personal through approved photos, interests, or AWS journeys without becoming social profiles.

Do not copy the supplementary PDF's organization chart, names, or compact text density. Do not expose private officer contact information. Missing optional data must produce a deliberate card variant rather than an empty gap.

### 12.4 Projects

**Purpose:** Demonstrate what members build and learn.

**Direction:** Use a visual, responsive gallery with strong project imagery, clear titles, summaries, technology labels, status, and truthful external destinations. The page may have slightly greater visual variance than Team, but a consistent card anatomy must hold it together.

Do not add filtering, search, or detail routes in version one. Active and completed statuses require visible text, not color alone. Bowee may appear once in a technical or Skill Builder context if approved.

### 12.5 Updates

**Purpose:** Show that the chapter is active and keep members informed.

**Direction:** Use a reverse-chronological editorial feed with high date clarity, short summaries, category labels, optional imagery, and optional truthful external links. Favor calm white or mist surfaces so frequent content remains easy to scan.

Do not use countdown graphics or poster urgency as the default update pattern. When no updates are available, show a purposeful empty state with Bonee or a cloud narrative and a path to another useful page.

### 12.6 FAQ

**Purpose:** Reduce uncertainty around joining and participation.

**Direction:** Use category grouping, visible joining essentials, and accessible multi-open accordions for supporting detail. Keep the reading surface quiet; motifs may frame the page edges but must not sit behind answer text.

End with both membership and inquiry actions. A mascot callout may normalize beginner questions, but it must not replace direct answers.

## 13. Component Specifications

### 13.1 Shared navigation

- Contains the approved chapter identity, About, Team, Projects, Updates, FAQ, and a distinct `Join Haribon` action.
- Desktop navigation is horizontal within the 1280px container.
- Mobile navigation uses an explicit menu button and an explicit close control.
- Current route has visible treatment and `aria-current="page"` in implementation.
- The menu closes with Escape and returns focus to its trigger.
- If modal, it contains focus and prevents background interaction while open.
- Sticky behavior must not obscure anchors or keyboard focus.
- Target size is at least 44 x 44 CSS pixels.

### 13.2 Buttons and links

| Variant         | Surface             | Text                                       | Use                                     |
| --------------- | ------------------- | ------------------------------------------ | --------------------------------------- |
| Primary         | Deep azure          | White                                      | Join and highest-priority action        |
| Secondary light | White               | Dark ink                                   | Secondary action on sky or dark surface |
| Secondary quiet | Mist or transparent | Deep azure                                 | Lower-priority action on light surface  |
| Text link       | Transparent         | Deep azure with visible underline behavior | Inline and editorial navigation         |

| State         | Primary-button treatment                                      | Required behavior                                                |
| ------------- | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| Default       | `color.azure.700` with white text                             | Clear highest-priority action                                    |
| Hover         | `color.azure.800` with white text                             | Color change without layout shift                                |
| Active        | `color.azure.900` with white text                             | Immediate pressed feedback                                       |
| Focus-visible | Default state plus inner azure and contrasting outer keyline  | Visible against both light and atmospheric surroundings          |
| Disabled      | Opaque muted surface, readable muted label, no pointer action | Must look unavailable without relying on opacity alone           |
| Loading       | Retain button width and label context; add named progress cue | Prevent duplicate activation and announce state when implemented |

- Default button height is at least 44px; prominent CTA may be 48-56px.
- Every state must be defined: default, hover, active, focus-visible, disabled, loading where relevant, and visited for text links.
- Hover cannot be the only indicator of interactivity.
- Pressed states may change color, shadow, or a small contained transform without moving surrounding layout.
- Visited editorial links may use `color.azure.900` while retaining their underline; navigation and button styling stays stable after a visit.
- External destination wording must be clear when context is not obvious.

### 13.3 Section wrapper

- Owns container width, responsive insets, vertical rhythm, optional theme surface, and decorative overflow clipping.
- Keeps decorative layers outside the semantic content order.
- Supports `default`, `quiet`, `sky`, `deep`, and `campaign` variants.
- Does not embed page-specific copy or imagery.

### 13.4 Cloud divider

- Decorative transition between section surfaces.
- Must use empty alternative text or CSS presentation.
- Must not create a large content-free gap on mobile.
- Must not intercept pointer input or cover focused controls.
- Use sparingly; not every section boundary needs one.

### 13.5 Glass panel

- Supports `hero`, `feature`, and `callout` variants.
- Provides opaque fallback and backdrop-aware foreground selection.
- Keeps body copy within readable measure.
- Does not contain dense tables, long lists, or long FAQ answers.

### 13.6 Project card

- Required visible content: title, summary, status, and approved technology list or equivalent structured details.
- Optional: image, project period, outcome, external destination, featured marker.
- Entire-card links must not create nested interactive controls.
- A card without a destination renders no false button or inactive link affordance.
- Active and completed states include text and may add icon/shape support.

### 13.7 Officer card

- Required visible content: name and role, once verified.
- Optional fields collapse cleanly: photo, biography, interests, AWS journey, and approved public links.
- Photo fallback is a neutral placeholder or approved chapter treatment, never an invented person.
- Links require descriptive accessible names.
- Group and roster context live outside the individual card where possible.

### 13.8 Update card or row

- Displays publication date, title, summary, and category.
- Optional event date is visually and semantically distinct from publication date.
- Optional imagery reserves space and may be removed at narrow widths when it is not essential.
- Optional external link appears only when a verified destination exists.

### 13.9 FAQ accordion

- Trigger is a button with visible question text and state indicator.
- Multiple items may remain open.
- Implementation uses `aria-expanded` and a controlled region relationship.
- Icons rotate or change only as a supplementary state cue.
- Keyboard focus remains visible; content is not clipped at 200 percent zoom or 30 percent text expansion.
- Essential joining information also appears outside collapsed-only content.

### 13.10 Badges

- Use for status, category, technology, or small factual labels.
- Use concise sentence-case text.
- Prevent unintended label wrapping where it would obscure meaning; otherwise allow containers to wrap between badges.
- Status never relies on color alone.
- Avoid badge overload and unverified prestige labels.

### 13.11 Mascot callout

- Combines concise guidance with a single approved mascot pose.
- Text remains semantic and selectable, never baked into the mascot image.
- Art is decorative when it adds no information.
- Collapses to a simple stacked layout on small screens.

### 13.12 Empty state

- Names the empty condition directly.
- Gives a useful next step when one exists.
- May use a restrained cloud or Bonee illustration.
- Never invents placeholder content to avoid showing emptiness.

### 13.13 Footer

- Includes organization name, short tagline, six route links, join link, inquiry link, approved social/community links, optional approved public email, and required attribution.
- Uses the deep-sky surface only if all text and controls meet contrast.
- Maintains readable groups on mobile and avoids a dense legal-text block.
- External links and social icons have descriptive names.

## 14. Interaction and Motion

### 14.1 Motion principles

- Motion explains entry, state, hierarchy, or spatial relationship.
- Content must render in its final readable state when JavaScript or animation is unavailable.
- No continuous decorative animation, scroll-jacking, cursor effects, global click ripples, or delayed navigation.
- Do not animate large blur fields continuously.
- Avoid animating layout properties such as width and height when transform or opacity can communicate the same change.

### 14.2 Timing

| Motion                         | Duration  | Guidance                                  |
| ------------------------------ | ---------:| ----------------------------------------- |
| Press feedback                 | 80-150ms  | Immediate and contained                   |
| Hover/focus transition         | 150-250ms | Color, border, shadow, or small transform |
| Accordion/menu                 | 180-300ms | State clarity, no delayed content access  |
| One-time section reveal        | 300-500ms | Opacity plus 8-16px movement maximum      |
| Page-level decorative entrance | <=500ms   | Rare, does not block interaction          |

Use shared easing tokens. Exit and close motions should be slightly faster than entry. Stagger only a small number of sibling items and cap the total delay.

### 14.3 Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Render content in its final position immediately.
- Remove decorative parallax, stagger, floating, and scale effects.
- Keep essential state changes immediate or use a short opacity transition.
- Do not hide content pending an animation trigger.

## 15. Accessibility Requirements

### 15.1 Standard

The design must support WCAG 2.2 Level AA and the PRD's release criteria.

### 15.2 Required behavior

- Logical landmarks and heading hierarchy on every page.
- A skip link to main content.
- Full keyboard operation for navigation, accordions, links, and all controls.
- Visible focus for every interactive element.
- Focus remains at least partially unobscured by sticky or fixed interface elements.
- Visual reading order matches DOM and keyboard order.
- Normal text contrast of at least 4.5:1 and large text/non-text contrast of at least 3:1 where applicable.
- Information is never conveyed by color alone.
- Informative images have meaningful alternatives; decorative images are ignored by assistive technology.
- Icon-only controls have accessible names and exposed state where applicable.
- Touch targets are at least 44 x 44 CSS pixels with adequate separation.
- Content works at 200 percent browser zoom.
- Content survives 30 percent text expansion without clipping, overlap, loss, or horizontal page scrolling.
- Reduced motion is honored.
- Mobile navigation and FAQ disclosures have correct state semantics and focus behavior.
- Sticky headers use scroll padding so anchor targets and focus are not hidden.

### 15.3 Glass and image accessibility

- Contrast must be measured on the final composite, including blur and the actual image behind the text.
- A translucent layer that passes over one background may fail over another; use an opaque fallback or controlled scrim.
- Decorative cloud, leaf, star, bubble, ribbon, glow, and doodle layers must be removed from the accessibility tree.
- Campaign images containing baked-in text cannot serve as the only source of that information.
- Do not place text over a mascot face, complex project screenshot, or uncontrolled photograph.

### 15.4 Forms and external destinations

Version one links to externally managed forms rather than embedding or processing submissions. Join and inquiry links must have descriptive labels. If a future approved form is introduced, it must use persistent labels, inline errors, an error summary for multiple errors, correct input types, and a clear recovery path.

## 16. Content and Editorial Presentation

### 16.1 Naming

- Use `AWS Student Builder Groups Haribon` unless the human team approves a different current short form.
- Do not publish `AWS Cloud Clubs Haribon`, `AWS Cloud Club - Haribon`, or singular `AWS Student Builder Group - Haribon` merely because it appears in a source image.
- Do not copy the primary PDF's stale academic year into current site content.

### 16.2 Placeholder discipline

- Preserve the PRD's `[[TOKEN]]` convention.
- Placeholder imagery must be visibly incomplete and show its token.
- Do not use fictional members, quotes, projects, awards, metrics, dates, partners, or claims as realistic filler.
- Components must remain visually sound when optional content is absent.

### 16.3 Scannability

- Lead sections with a clear label, outcome-oriented heading, concise supporting copy, and at most two immediate actions.
- Prefer short paragraphs and descriptive subheadings over poster-style blocks.
- Keep dates, categories, statuses, and technologies visually consistent across collections.
- Use plain language for cloud concepts and explain unfamiliar terms.
- Avoid hype, exclusionary language, guaranteed career outcomes, and unsupported affiliation claims.

## 17. Performance-Aware Design

- Opening content and navigation must not depend on a large decorative image download.
- Prefer CSS gradients and optimized SVG for simple atmospheric shapes.
- Use responsive AVIF or WebP derivatives for approved raster media when visually appropriate; preserve a compatible fallback when required.
- Reserve width and height or aspect ratio for all media.
- Lazy-load below-the-fold media.
- Keep mascot pose variants and decorative asset counts intentional; do not load an entire campaign asset library on every page.
- Avoid autoplay video and animation-heavy libraries for core identity effects.
- Decorative motion must not threaten the PRD's LCP, CLS, INP, or Lighthouse targets.
- Fonts must use an approved loading strategy that preserves readable fallback content and minimizes layout shift.

## 18. Source Traceability

### 18.1 Primary PDF: 14-page brand guide

| Page | Evidence                                                                       | Website interpretation                                          | Exclusions or safeguards                                                                                |
| ----:| ------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1    | Brand style-guide cover and historical lockup                                  | Treat document as primary visual guide                          | `2025 - 2026` cover is stale; historical lockup is not current copy authority                           |
| 2    | Club-logo rules, example variants, non-employee distinction                    | Haribon-first identity; approved current mark only              | No standalone AWS logo as chapter identity; no historical program name in live copy                     |
| 3    | Social-media/logo examples and AWS trademark guidance                          | Preserve affiliation boundaries and official-asset discipline   | Social screenshots, seal treatment, and historical names are reference-only                             |
| 4    | Hopeful, curious, human moodboard; sky, nature, stars, bubbles, doodles, glass | Defines personality and motif library                           | Pinterest examples do not grant production asset rights                                                 |
| 5    | Core palette                                                                   | Supplies primary, secondary, and translucent primitives         | Derived ink colors added for web contrast; palette does not override semantic status needs              |
| 6    | Four gradient families                                                         | Supplies approved atmospheric recipes                           | Correct invalid `#F794210` to `#F7942110`; gradients not used indiscriminately                          |
| 7    | Montserrat and Amazon Ember; readability direction                             | Defines required typography families                            | White-text poster instruction is conditional on measured contrast; pure black replaced by dark-blue ink |
| 8    | Bubbles, glowing stars, lantern general assets                                 | Supports sparse atmospheric and narrative accents               | Assets require rights verification and performance optimization                                         |
| 9    | Doodles and glowing scribbles                                                  | Supports controlled hand-drawn accents                          | Use sparingly; no overcrowding or low-contrast glow                                                     |
| 10   | Liquid glass over image examples                                               | Supports rare featured glass panels                             | Add border, frost, radius, opaque fallback, and measured contrast                                       |
| 11   | Glass treatment applied to display text                                        | Supports campaign-scale headline treatment                      | Not a default body-copy treatment; do not reproduce baked-in motto without approval                     |
| 12   | Social watermark examples                                                      | Supports consistent attribution and brand recall where approved | Historical handle, email, and logo treatments do not enter the public footer automatically              |
| 13   | Bonee identity and pose sheet                                                  | Defines Bonee as primary mascot and character traits            | Current naming/affiliation language comes from PRD; source art permission required                      |
| 14   | Bowee identity and pose sheet                                                  | Defines Bowee as contextual technical/Skill Builder mascot      | Pink styling is character-specific, not a site-wide palette; source art permission required             |

### 18.2 Supplementary PDF: 9-page campaign compilation

| Page | Evidence                                                                                   | Reusable design lesson                                                | Content excluded from website authority                                          |
| ----:| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 1    | Wide organizational structure composition with lantern, stars, glass, and cloud atmosphere | Layered wide-format composition and grouped hierarchy                 | All names, roles, organizational details, emails, handles, and historical naming |
| 2    | `2 days left` application poster with cloud mass and curved ribbon                         | Oversized urgency type, curved framing, mascot scale contrast         | Countdown, form date, application copy, contact details                          |
| 3    | Alternate `2 days left` poster treatment                                                   | Repetition confirms the campaign motif family                         | Same campaign data and baked-in text                                             |
| 4    | `1 day left` application poster with cloud typography                                      | Strong foreground cloud, vertical rhythm, contextual mascot placement | Deadline and recruitment copy                                                    |
| 5    | `Last day` paired-mascot poster                                                            | Two-character campaign exception and split headline                   | Deadline, form details, historical identity treatment                            |
| 6    | Extended-registration hourglass poster                                                     | Narrative object as campaign focal point                              | Date, time, extension claim, application status                                  |
| 7    | Application-closed and paper-plane results poster                                          | Directional motion and result-announcement storytelling               | Status, release promise, handles, contact details                                |
| 8    | Multi-card applicant or email-result compilation                                           | Repeated card system and cloud framing                                | Personal names, messages, results, and all readable record content               |
| 9    | Email-sent graphic with envelope and cloud frame                                           | Contextual object, high-contrast announcement, cloud silhouette       | Recipient, sender, subject, message, and campaign claims                         |

The supplementary PDF is image-only and contributes no authoritative names, facts, personal information, or public copy.

### 18.3 Archived campaign images

| File                                                                                                                    | Reusable evidence                                                    | Website application                             | Direct-copy prohibition                                             |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------- |
| [`01-leads-application-extension-results.png`](references/campaign-examples/01-leads-application-extension-results.png) | Hourglass story, paired mascots, paper-plane result cue, layered sky | Rare campaign invitation or status illustration | Dates, countdown, contact details, embedded copy, historical naming |
| [`02-leads-application-last-day.png`](references/campaign-examples/02-leads-application-last-day.png)                   | Cloud plinths, paired mascot composition, split display headline     | Campaign-only two-mascot exception              | Deadline, handles, poster-density text                              |
| [`03-day-one-mascot-banner.png`](references/campaign-examples/03-day-one-mascot-banner.png)                             | Bonee edge crop, cloud bank, stars, sky gradient                     | Wide hero or section-edge composition           | Contact details and historical identity lockup                      |
| [`04-about-haribon-glass-card.png`](references/campaign-examples/04-about-haribon-glass-card.png)                       | Glass card, lantern, leaves, bubbles, cloud line art                 | About feature panel and motif balance           | About copy, email, handles, unsupported factual claims              |
| [`05-haribon-sunburst-cloud-banner.png`](references/campaign-examples/05-haribon-sunburst-cloud-banner.png)             | Radial sunburst, ribbon framing, glass identity panel, cloud base    | Rare closing invitation or campaign burst       | Historical logo treatment and baked-in text                         |

## 19. Compliance Checklists

### 19.1 Logo and affiliation

- [ ] Haribon is the dominant identity.
- [ ] Only approved current logo files and lockups are used.
- [ ] No standalone AWS logo is used as the chapter identity.
- [ ] Logos are not recolored, stretched, cropped, rearranged, or given effects.
- [ ] Clear space and minimum size are documented from approved assets.
- [ ] AWS and university affiliation copy is approved and does not imply employment or ownership.
- [ ] No historical organization-name variant appears in live copy.

### 19.2 Mascots

- [ ] Bonee is the default website mascot.
- [ ] Bowee appears only in an approved technical or Skill Builder context.
- [ ] Source artwork and usage permission are verified.
- [ ] No look-alike, recolored, distorted, mirrored, or generated replacement art is used.
- [ ] One focal mascot per page is the default.
- [ ] Mascots do not cover essential text or controls.
- [ ] Informative appearances have alt text; decorative appearances are ignored by assistive technology.

### 19.3 Typography

- [ ] Montserrat is used for display and interface roles.
- [ ] Amazon Ember is used for body and extended reading.
- [ ] Font files and web-use licensing are verified.
- [ ] Default body text is at least 16px with 1.5 or greater line height.
- [ ] Pure black is not used as a brand text color.
- [ ] White text is used only on measured dark-enough surfaces.
- [ ] Text survives 200 percent zoom and 30 percent expansion.

### 19.4 Color, glass, and gradients

- [ ] Components consume semantic tokens rather than raw color values.
- [ ] `#F794210` never appears; `#F7942110` is the corrected token.
- [ ] Normal text meets at least 4.5:1 contrast.
- [ ] Meaningful non-text UI meets at least 3:1 where required.
- [ ] Glass panels have frost, border, radius, separation, and opaque fallback.
- [ ] Contrast is measured on the final glass or image composite.
- [ ] Gradients are limited to atmospheric and campaign surfaces.
- [ ] No continuous animated gradients or large blur fields are used.

### 19.5 Responsive and interaction

- [ ] Layout uses 4, 8, and 12-column grids by range.
- [ ] Content stays within the 1280px maximum container.
- [ ] All required widths from 320 through 1920px are checked.
- [ ] No horizontal page scrolling occurs.
- [ ] Every interactive target is at least 44 x 44 CSS pixels.
- [ ] Hover is not the only interaction cue.
- [ ] Keyboard order matches visual and reading order.
- [ ] Sticky elements do not obscure focused content.
- [ ] Reduced motion produces a complete and readable experience.

### 19.6 Content and references

- [ ] No poster date, countdown, handle, email, personal name, result, or baked-in claim is copied into live content.
- [ ] No stock image silently represents the chapter or its members.
- [ ] Project, update, and officer data remains structured and verified.
- [ ] Missing human inputs use the PRD placeholder convention.
- [ ] Campaign references remain under documentation and are not automatically shipped from `public/`.
- [ ] Decorative studies stay subordinate to content, navigation, and controls.

## 20. Design Gate and Future Handoff

### 20.1 Required human inputs before visual implementation

- Approved current Haribon logo, wordmark, and permitted variants.
- Logo clear-space, minimum-size, affiliation, AWS, and university usage guidance.
- Approved Bonee and Bowee source artwork plus usage permission.
- Licensed Montserrat and Amazon Ember webfont files or an approved delivery method.
- Current organization name, short name, tagline, value proposition, and affiliation statement.
- Approved chapter photography, project media, officer photos, and image consent.
- Initial verified content records and external form destinations.
- Decision on the first campaign theme within this stable system.

### 20.2 Design-phase exit criteria

This design cycle is ready for approval when:

- Stakeholders accept the source hierarchy and the 2026-2027 interpretation.
- Brand owners approve the visual personality, palette, typography, mascot roles, and logo restrictions.
- Communications approves naming, affiliation safeguards, and reference-content exclusions.
- Technical reviewers confirm that the system can meet the PRD's accessibility, responsive, performance, and no-JavaScript requirements.
- Required assets and unresolved human decisions have named owners.
- Any deviation is recorded as a Spiral decision rather than silently implemented.

### 20.3 Future design-to-code handoff

After approval, a later implementation plan should translate this document into:

- Three-layer design tokens.
- Typed content collections and placeholder inventory.
- Accessible shared components and page templates.
- Responsive image and font strategy.
- Component state stories or equivalent visual test cases.
- Automated accessibility, responsive, pseudo-localization, performance, link, and placeholder checks.

That later plan must continue to treat the PRD as the product source of truth and this document as the approved web design authority.
