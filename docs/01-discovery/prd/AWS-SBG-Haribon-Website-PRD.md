# Product Requirements Document

## AWS Student Builder Groups Haribon Public Website

Version: 1.0 Draft  
Date: 2026-08-19  
Status: Requirements definition for stakeholder review  
Delivery model: Spiral SDLC

This document defines the first public website for AWS Student Builder Groups Haribon, a university-based organization chapter affiliated with Amazon Web Services. It is a targeted rewrite of `PRD-Sample.md`: it retains the sample's testable structure, accessibility discipline, data-driven content model, and placeholder convention while replacing its generic assumptions with decisions approved for Haribon.

No product implementation is authorized by this document until the PRD is reviewed and approved through the Spiral cycle gate described in section 12.

## Table of Contents

1. Instructions for Future Development
2. Product Summary
3. Scope and Site Map
4. Global Product Requirements
5. Page Requirements
6. Content Architecture
7. Content Governance
8. Technical Delivery Requirements
9. Accessibility, Performance, and Quality
10. Acceptance Criteria
11. Human Inputs and Placeholders
12. Spiral SDLC Gate

## 1. Instructions for Future Development

### 1.1 Requirement language

- `MUST` identifies a release-blocking requirement.
- `SHOULD` identifies the expected implementation. A deviation requires a documented technical, accessibility, security, or product reason.
- `MAY` identifies an optional behavior that must not expand the approved scope.
- Each bullet in sections 3 through 10 is a discrete, testable requirement.
- The implementation MUST NOT silently omit, merge, or reinterpret requirements.

### 1.2 Placeholder convention

The human team will provide final brand assets, organization facts, officer records, project records, updates, copy, and destination URLs in later Spiral cycles. The implementation MUST NOT invent them.

- Text placeholders use double square brackets, such as `[[TAGLINE]]` or `[[MISSION_STATEMENT]]`.
- Image placeholders use a neutral block with the required aspect ratio and the token printed visibly, such as `[[OFFICER_PHOTO_ID]]`.
- URL placeholders use `href="#"` and a `data-placeholder` attribute naming the destination.
- Placeholder content MUST be visually recognizable as incomplete and MUST NOT appear to be a real person, quotation, achievement, date, partnership, or chapter claim.
- A future implementation MUST maintain a root-level `PLACEHOLDERS.md` inventory containing each token, its location, expected content type, owner, and required dimensions where applicable.

### 1.3 Source of truth

- This PRD is the product requirements source of truth for version one.
- `PRD-Sample.md` is a reference only and MUST NOT override this document.
- Brand guidance, content records, and architecture decisions approved in later cycles MAY refine this PRD only through a recorded change decision.
- When documents conflict, the most recently approved decision record governs.

### 1.4 Explicit exclusions from the sample

Version one MUST NOT inherit the following sample requirements:

- A mandatory global click or tap ripple.
- A fixed mint, teal, yellow, or other sample color palette.
- A login call to action or authenticated member area.
- A speculative `Future` page.
- Fixed counts for projects, achievements, departments, fields, events, or officers.
- A formal desktop organization-chart tree.
- A mandatory slideshow, autoplay behavior, sparkle treatment, or mascot placement.
- Any sample motto, role title, quote, organization story, or fabricated chapter content.

## 2. Product Summary

### 2.1 Purpose

The website MUST present AWS Student Builder Groups Haribon as a credible, welcoming, active university technology community. It MUST help prospective students understand the chapter, see what members build and experience, meet its current leadership, and reach an official joining path.

### 2.2 Primary outcome

The primary organizational outcome is to recruit and engage students.

- Recruitment MUST be the clearest conversion path.
- Current members MUST receive recurring value through project showcases and chapter updates.
- Faculty, university stakeholders, AWS community members, potential partners, and sponsors MUST be able to assess the chapter's legitimacy through accurate public information.

### 2.3 Audience priority

When audience needs conflict, the site MUST prioritize prospective students.

1. Prospective student members.
2. Current chapter members.
3. Faculty, university stakeholders, AWS community members, partners, and sponsors.

### 2.4 Success definition

Version one succeeds when:

- A first-time visitor can identify who Haribon is, its relationship to AWS, and how to join from the opening homepage content.
- The primary joining action sends visitors to the approved external membership form.
- Current projects, updates, and the active leadership roster can be changed without editing presentation components.
- The website is usable and understandable on common student mobile devices and constrained connections.
- The website meets the acceptance criteria in section 10.

### 2.5 Measurement policy

- Version one MUST NOT include analytics, tracking pixels, behavioral monitoring, advertising identifiers, or session replay.
- Membership interest will initially be measured using records from the approved external membership form and direct chapter feedback.
- Any future analytics proposal requires a separate privacy and governance decision.

## 3. Scope and Site Map

### 3.1 Version one pages

The website MUST contain these six public pages:

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Establish identity, communicate member value, and guide visitors toward joining and deeper content. |
| About | `/about` | Explain the chapter's story, purpose, AWS affiliation, community, and organizational structure. |
| Team | `/team` | Present the current officers and any other approved leadership roles in clear groups. |
| Projects | `/projects` | Showcase completed and selected active chapter projects through visual gallery cards. |
| Updates | `/updates` | Publish chapter news, project progress, achievements, and organizational announcements. |
| FAQ | `/faq` | Answer common questions and reduce uncertainty about joining and participating. |

### 3.2 Version one features

Version one includes:

- A responsive shared navigation and footer.
- A prominent external `Join Haribon` action.
- An external managed inquiry form.
- Data-driven officer, project, update, FAQ, site, and about content.
- Current-roster officer profiles.
- Project gallery cards for completed and selected active projects.
- Chapter updates listed in reverse chronological order.
- Baseline search metadata and social sharing metadata.
- Accessible, purposeful, restrained interaction and motion.

### 3.3 Out of scope

Version one excludes:

- User registration, authentication, login, profiles, dashboards, and private member content.
- A content management system, database, or custom administration interface.
- Built-in application or inquiry processing.
- Live AWS, GitHub, calendar, social media, or other third-party API integrations.
- Embedded social feeds, chat widgets, tracking tools, or unapproved third-party scripts.
- Online payments, dues collection, ticketing, or e-commerce.
- Individual officer profile routes.
- Individual project detail routes.
- Historical officer archives.
- Full bilingual content and a language switcher.
- A public event-registration system.

## 4. Global Product Requirements

### 4.1 Brand relationship

- Haribon MUST be the dominant visual and editorial identity.
- AWS affiliation MUST be communicated accurately and consistently without implying that AWS directly owns, operates, or endorses claims beyond the approved relationship.
- AWS names, trademarks, logos, and program identifiers MUST follow the guidance supplied by the human team.
- The implementation MUST NOT use an AWS or university logo until an approved asset and usage rule are provided.
- The design MUST support an independent university-club personality rather than reproducing the AWS corporate website.

### 4.2 Theme model

- The design system MUST separate stable core tokens from campaign-level theme tokens.
- Stable tokens MUST cover semantic color roles, typography roles, spacing, sizing, radii, borders, shadows, focus states, and motion timing.
- Campaign tokens MAY change approved colors, decorative treatments, and supporting imagery without changing page structure, accessibility behavior, or semantic roles.
- Brand asset and theme values remain placeholders until the design cycle is approved.
- Raw visual values SHOULD be centralized rather than repeated across components.

### 4.3 Responsive behavior

- The website MUST use a mobile-first layout.
- Every page MUST work from 320 CSS pixels through wide desktop displays without horizontal page scrolling.
- Multi-column layouts MUST reflow into readable single-column or balanced mobile layouts.
- Tap targets MUST be at least 44 by 44 CSS pixels.
- Content MUST remain usable at 200 percent browser zoom.
- Images MUST reserve their rendered dimensions to minimize layout shift.
- Images below the opening viewport SHOULD be lazy-loaded.

### 4.4 Shared navigation

- The site identity or approved wordmark MUST link to Home.
- Primary navigation MUST include About, Team, Projects, Updates, and FAQ.
- A visually distinct `Join Haribon` action MUST link to `[[JOIN_FORM_URL]]`.
- The current page MUST be communicated visually and through `aria-current="page"` where applicable.
- Mobile navigation MUST be keyboard operable, close with Escape, close through an explicit close control, and return focus appropriately.
- If the mobile navigation behaves as a modal overlay, focus MUST be contained while it is open.

### 4.5 Shared footer

The footer MUST contain:

- The organization name and `[[SHORT_TAGLINE]]`.
- Links to all six public pages.
- The `Join Haribon` external link.
- The approved external inquiry form link.
- Approved social and community links.
- `[[CONTACT_EMAIL]]`, if the chapter approves publishing an email address.
- Required AWS, university, trademark, or chapter attribution text.

### 4.6 External links and forms

- Membership applications MUST be handled by `[[JOIN_FORM_URL]]`.
- General inquiries MUST be handled by `[[INQUIRY_FORM_URL]]`.
- Both destinations MUST be replaced with approved absolute HTTPS URLs before production launch.
- The website MUST NOT directly receive or store form submissions in version one.
- External links MUST clearly communicate their destination or external nature when context is not obvious.
- Links that open a new tab MUST use safe relationship attributes.
- Broken or placeholder URLs MUST be detectable through the placeholder inventory and validation process.

### 4.7 Motion and interaction

- Motion MUST be purposeful and restrained.
- Motion MAY clarify navigation, content entry, disclosure state, or page transitions.
- Content MUST remain available when scripting or animation does not run.
- The website MUST respect `prefers-reduced-motion: reduce`.
- Decorative continuous animation, global click ripples, scroll-jacking, and motion that delays navigation are prohibited.
- Hover effects MUST NOT be the only method for discovering information or actions.

### 4.8 Imagery and iconography

- Brand and chapter imagery MUST use approved assets supplied by the human team.
- The implementation MUST NOT silently substitute stock photographs for missing chapter media.
- Missing images MUST follow the placeholder convention in section 1.2.
- Informative images MUST have meaningful alternative text supplied with the content record.
- Decorative images MUST use empty alternative text.
- Icons SHOULD come from one approved, accessible icon system rather than individually authored paths.

### 4.9 Editorial voice

- The voice SHOULD be energetic, welcoming, student-led, credible, and inclusive of beginners.
- Copy MUST avoid unsupported AWS claims, guaranteed career outcomes, fabricated achievements, and exclusionary language.
- Technical language SHOULD be understandable to students who are new to cloud computing.
- Haribon's final voice and messaging guide will be supplied during the brand and content cycle.

## 5. Page Requirements

### 5.1 Home page

The homepage MUST tell visitors who Haribon is before asking them to evaluate detailed benefits or achievements.

Required content order:

1. **Identity hero**
   - Display `[[FULL_ORGANIZATION_NAME]]`, `[[TAGLINE]]`, and a concise `[[VALUE_PROPOSITION]]`.
   - Communicate the chapter's university-based AWS community relationship accurately.
   - Include a primary `Join Haribon` action linked to `[[JOIN_FORM_URL]]`.
   - Include one secondary action linking to About or Projects.
2. **About snapshot**
   - Summarize the chapter's purpose, community, and intended member experience.
   - End with a link to About.
3. **Member value**
   - Present approved reasons to join using concise, scannable content.
   - The number of benefits MUST be driven by content rather than fixed in the component.
4. **Featured projects**
   - Display projects marked as featured.
   - Reuse the project card interface defined in section 6.3.
   - End with a link to Projects.
5. **Latest updates**
   - Display approved update entries in reverse chronological order using `publishedAt`.
   - The homepage MUST use the same ordering rule as the Updates page and MUST NOT require a separate featured flag.
   - End with a link to Updates.
6. **Leadership preview**
   - Present a small approved subset of the active leadership roster.
   - End with a link to Team.
7. **Closing invitation**
   - Address common hesitation with approved inclusive messaging.
   - Link to FAQ and repeat the `Join Haribon` action.

The homepage MUST NOT invent statistics, quotes, awards, membership counts, or placement claims.

### 5.2 About page

The About page MUST include:

- `[[CHAPTER_OVERVIEW]]` describing what Haribon is.
- `[[AFFILIATION_STATEMENT]]` describing its relationship to AWS and the university.
- `[[ORIGIN_STORY]]`, using verified dates and facts only.
- `[[VISION_STATEMENT]]` and `[[MISSION_STATEMENT]]` as distinct content blocks.
- Approved chapter values or community principles.
- A description of how members participate, learn, build, and contribute.
- A clear overview of the chapter's leadership groups or departments without duplicating the full Team roster.
- A closing action to join or contact the chapter.

The page structure MUST support missing optional history or structure sections without leaving empty visual gaps.

### 5.3 Team page

- The Team page MUST show the current active roster only.
- The roster MUST be grouped using an approved, ordered leadership-group collection.
- The initial groups MAY include an adviser, executive officers, department leads, or other chapter-specific leadership groups confirmed by the human team.
- The page MUST NOT require a formal tree diagram or connecting organization-chart lines.
- Group headings and ordering MUST make leadership responsibility understandable on mobile and desktop.
- Officer cards MUST support the fields in section 6.2.
- Officer cards MUST combine concise professional information with approved community-focused details.
- A missing photo, optional biography field, interest list, AWS journey, or link MUST NOT break the layout.
- The page MUST display `[[ROSTER_TERM]]` so visitors can judge currency without assuming a specific academic-year naming convention.
- The page MUST include a contact or joining action without exposing private officer contact information.

### 5.4 Projects page

- The Projects page MUST use a responsive visual gallery of project cards.
- It MUST include completed projects and selected active projects approved for public disclosure.
- Every active project MUST display a visible status label.
- Cards MUST support the content fields in section 6.3.
- Cards MAY link to an approved public repository, live demonstration, documentation page, video, or other external destination.
- A card without an external link MUST remain visually complete and MUST NOT render a false action.
- Version one MUST NOT require project detail routes, search, sorting, or filtering.
- Featured status controls homepage inclusion and MUST NOT imply an award or ranking.
- Projects MUST be officer-curated and fact-checked before publication.

### 5.5 Updates page

- The Updates page MUST list approved entries in reverse chronological order.
- Entries MAY represent chapter news, project progress, achievements, announcements, or community highlights.
- Each entry MUST display its publication date, title, summary, and category.
- An entry MAY separately display an event date when the update refers to a dated activity.
- Entries MAY display an approved image and optional external link.
- Version one MUST NOT require individual update routes, comments, reactions, subscriptions, or a live social feed.
- The page MUST provide a clear empty state when no public updates are available.
- The page MUST distinguish an update from an event-registration or official university notice.

### 5.6 FAQ page

- FAQ content MUST be grouped into approved categories.
- Initial categories SHOULD cover joining and eligibility, member experience, projects and activities, time commitment, and chapter contact.
- Questions and answers MUST come from structured content.
- If accordions are used, triggers MUST be buttons with correct expanded-state and controlled-region semantics.
- Multiple FAQ items MAY be open at once.
- Essential joining information MUST not exist only inside collapsed content.
- The page MUST end with links to the external inquiry form and membership form.

## 6. Content Architecture

### 6.1 General rules

- Human-editable content MUST live separately from presentation components.
- Content collections MUST use TypeScript-validated repository files, such as typed TypeScript objects, JSON validated by a schema, or another build-validated equivalent.
- Version one SHOULD use one file per collection or content domain.
- Content identifiers MUST be stable and unique.
- Invalid required fields, duplicate identifiers, unsupported status values, or malformed URLs MUST fail validation before deployment.
- Human-facing editorial content MUST be isolated from component logic.
- Shared interface labels MUST be centralized in a typed English message dictionary so future localization does not require restructuring components.

### 6.2 Officer content interface

Each officer record MUST support:

| Field | Requirement |
| --- | --- |
| `id` | Required stable identifier. |
| `name` | Required; placeholder until verified. |
| `role` | Required public position title. |
| `group` | Required identifier referencing an approved leadership-group record. |
| `department` | Optional approved department or function. |
| `photo` | Optional approved asset reference. |
| `photoAlt` | Required when the photo is informative. |
| `shortBio` | Optional concise professional introduction. |
| `awsJourney` | Optional approved community-focused statement. |
| `interests` | Optional short list of approved interests or technologies. |
| `links` | Optional approved professional or community links. |
| `featured` | Controls homepage leadership preview eligibility. |
| `displayOrder` | Required deterministic order within the group. |

- Private contact details MUST NOT be included.
- Personal social links require the officer's approval.
- No fixed number of links is required.

### 6.3 Project content interface

Each project record MUST support:

| Field | Requirement |
| --- | --- |
| `id` | Required stable identifier. |
| `title` | Required verified project name. |
| `summary` | Required concise public description. |
| `status` | Required enum: `active` or `completed`. |
| `coverImage` | Optional approved project media. |
| `coverImageAlt` | Required when a cover image exists. |
| `technologies` | Optional approved list, including AWS services only when verified. |
| `link` | Optional approved public external destination. |
| `featured` | Controls homepage project eligibility. |
| `displayOrder` | Required deterministic order. |

- A project record MUST NOT claim results, users, awards, partnerships, or AWS service usage without verification.
- Contributors MAY be added later through a PRD change; they are not required in version one.

### 6.4 Update content interface

Each update record MUST support:

| Field | Requirement |
| --- | --- |
| `id` | Required stable identifier. |
| `publishedAt` | Required ISO-formatted publication date used for ordering. |
| `eventDate` | Optional ISO-formatted date for the activity described by the update. |
| `title` | Required verified title. |
| `summary` | Required concise description. |
| `category` | Required approved category. |
| `image` | Optional approved media. |
| `imageAlt` | Required when an informative image exists. |
| `link` | Optional approved external destination. |

Update records MUST be ordered by `publishedAt` in descending order on both Home and Updates. `eventDate` MUST NOT affect ordering. Version one does not use a separate featured flag for updates.

### 6.5 Leadership-group content interface

Each leadership-group record MUST support:

| Field | Requirement |
| --- | --- |
| `id` | Required stable identifier referenced by officer records. |
| `name` | Required public group name. |
| `description` | Optional concise explanation of the group's responsibility. |
| `displayOrder` | Required deterministic order on the Team page. |

### 6.6 FAQ content interface

Each FAQ record MUST support:

| Field | Requirement |
| --- | --- |
| `id` | Required stable identifier. |
| `category` | Required approved category identifier. |
| `question` | Required visitor-facing question. |
| `answer` | Required approved answer. |
| `displayOrder` | Required order within its category. |

### 6.7 Site and About content

Structured site content MUST support:

- Full and short organization names.
- Tagline and value proposition.
- Affiliation statement.
- Membership and inquiry form URLs.
- Approved contact and social links.
- Footer attribution.
- Mission, vision, origin story, chapter overview, member-value content, community principles, and organization structure summaries.

## 7. Content Governance

### 7.1 Ownership

- The Communications function owns messaging quality, public tone, factual review coordination, and publication approval.
- The technical web team owns content structure, schema validation, accessibility implementation, build verification, and deployment.
- Executive officers provide final escalation for disputed public claims, sensitive information, or affiliation language.

### 7.2 Publishing workflow

1. An officer or approved contributor supplies content and source evidence.
2. Communications reviews accuracy, tone, consent, and public suitability.
3. The technical web team adds or updates the structured repository content.
4. Automated validation and a Vercel preview run before approval.
5. Communications or its authorized delegate approves the preview.
6. The technical web team publishes the approved revision.

### 7.3 Content safety

- Officer photos, biographies, interests, journeys, and links require consent.
- Project content MUST exclude confidential credentials, private repositories, personal data, internal-only documents, and security-sensitive architecture details.
- Update content MUST distinguish verified chapter statements from personal opinions.
- Content that cannot be verified MUST remain unpublished or visibly marked as a placeholder in non-production review environments.

## 8. Technical Delivery Requirements

### 8.1 Application model

- The future application MUST use Next.js with the App Router and TypeScript.
- Public pages MUST use static-first rendering.
- Repository content changes MUST be reflected through a new build and deployment.
- Runtime database access MUST NOT be required.
- Runtime authentication MUST NOT be required.
- The architecture MUST avoid server-side functionality that is unnecessary for the approved public scope.

### 8.2 Hosting and deployment

- Vercel is the approved version-one deployment target.
- Pull requests SHOULD receive preview deployments for content and interface review.
- Production deployment MUST use the approved project and domain configuration.
- Environment variables MUST be limited to values that cannot safely live in public repository configuration.
- No secret is expected for the approved version-one feature set.
- Deployment instructions and rollback guidance MUST be documented before launch.

### 8.3 External services

- External services MUST be limited to approved outbound destinations, including membership forms, inquiry forms, social channels, AWS resources, and public project links.
- The application MUST remain functional when an external destination is temporarily unavailable, except for the destination itself.
- External links MUST be maintained as structured content or centralized configuration rather than scattered across components.

### 8.4 Search and sharing

Baseline search and social-sharing metadata are included because this is a public recruitment website. They improve discoverability and link presentation without introducing analytics, tracking, or live third-party integration.

Each page MUST provide:

- A unique page title.
- A concise meta description.
- A canonical URL when the production domain is known.
- Open Graph metadata using approved imagery.
- Logical heading structure and crawlable text content.

The site MUST provide a sitemap and robots configuration appropriate for a public production website.

### 8.5 Browser support

- The website MUST support current stable versions of Chrome, Edge, Firefox, and Safari.
- Mobile Safari and mobile Chromium behavior MUST receive explicit verification.
- The product does not require support for obsolete browsers that lack maintained security updates.

## 9. Accessibility, Performance, and Quality

### 9.1 Accessibility standard

- Version one MUST conform to WCAG 2.2 Level AA.
- All functionality MUST be keyboard operable.
- Focus indicators MUST be visible and must meet applicable contrast requirements.
- Color MUST NOT be the only method for conveying status, selection, or meaning.
- Text and essential controls MUST meet WCAG AA contrast.
- Page landmarks, headings, labels, link names, and button names MUST be meaningful.
- Dynamic disclosures and navigation states MUST be announced through correct semantics.
- Motion MUST respect reduced-motion preferences.
- The implementation MUST include a skip link to the main content.

### 9.2 Performance priority

- Mobile Core Web Vitals are release requirements.
- All six routes MUST be tested on a deployed Vercel preview with the Lighthouse CI mobile preset, using three runs per route and the median result.
- Each route MUST achieve a median Largest Contentful Paint of 2.5 seconds or less, a median Cumulative Layout Shift of 0.1 or less, and a median Lighthouse performance score of at least 90.
- An automated Chromium user-flow test MUST exercise the mobile navigation and FAQ disclosure under four-times CPU slowdown.
- The test harness MUST inject the standard `web-vitals` `onINP` collector with `reportAllChanges` enabled, record the final Interaction to Next Paint value after the defined interactions, and exclude this instrumentation from the production bundle.
- Each of the three interaction-test runs MUST report Interaction to Next Paint of 200 milliseconds or less.
- Page design MUST avoid unnecessary client-side JavaScript, large unoptimized media, blocking font behavior, and third-party script cost.
- Images MUST use responsive sizing and appropriate modern formats where compatible with supplied assets.
- Above-the-fold content MUST not depend on large decorative downloads.

### 9.3 Localization readiness

- Version one launches in English.
- Editorial content MUST come from the structured content layer, and shared interface labels MUST come from the centralized English message dictionary.
- A pseudo-localization check MUST expand human-facing strings by 30 percent and MUST produce no clipped text, overlapped controls, or horizontal page scrolling at the required responsive widths.
- Dates MUST use a centralized display strategy.
- A language switcher and translated content are out of scope.

### 9.4 Validation and review

Before production launch, the project MUST verify:

- Content schema validity.
- Placeholder inventory completeness.
- Internal route integrity.
- Approved outbound link integrity.
- Keyboard navigation.
- Automated accessibility checks plus manual review of critical flows.
- Responsive behavior at 320, 375, 768, 1024, 1440, and 1920 CSS pixels.
- Explicit mobile Safari and mobile Chromium verification of navigation, forms, links, responsive layouts, and FAQ disclosures.
- Reduced-motion behavior.
- Content readability and primary navigation when client-side JavaScript is unavailable.
- The 30-percent pseudo-localization text-expansion check.
- Production build success on Vercel.
- Absence of analytics and unapproved third-party scripts.

## 10. Acceptance Criteria

### 10.1 Product and navigation

- All six approved routes build and load successfully.
- Shared navigation links to every approved page and identifies the current page.
- The joining action resolves to an approved absolute HTTPS membership-form URL and never to `#` in production.
- The inquiry action resolves to an approved absolute HTTPS inquiry-form URL and never to `#` in production.
- The production application contains no endpoint, server action, database write, or client-side storage mechanism for membership or inquiry submissions.
- No unresolved placeholder token or placeholder URL is present in the production output.
- No login, registration, private dashboard, or account language appears unless a later approved change adds it.

### 10.2 Homepage outcome

- The opening homepage content states who Haribon is and communicates its AWS community relationship.
- A prospective student can locate the joining action without navigating to another page.
- Featured projects and leaders are selected through structured content rather than hard-coded names or array positions.
- Homepage updates use the newest structured update records in descending date order.
- The homepage links correctly to About, Team, Projects, Updates, and FAQ.

### 10.3 Content maintainability

- Officers, projects, updates, FAQs, site settings, and About content are stored separately from presentation components.
- The active officer roster can be replaced without modifying officer-card markup.
- Projects can be added, removed, featured, or re-ordered without modifying project-card markup.
- Updates can be added and sorted without modifying update-list markup.
- Invalid required fields and duplicate identifiers fail validation before deployment.

### 10.4 Team behavior

- Approved leadership groups and their officers render according to the leadership-group and officer `displayOrder` values.
- Officer cards remain usable when optional photos, biographies, AWS journeys, interests, or links are missing.
- The approved current roster term is visible.
- No private officer contact information is exposed.

### 10.5 Project behavior

- Completed and active projects are visually distinguishable through text labels.
- Project cards display only verified content.
- Cards without external links do not render inactive or misleading link controls.
- The project gallery remains readable without filtering, search, or detail routes.

### 10.6 Updates and FAQ behavior

- Updates render newest first using `publishedAt`; an optional `eventDate` does not affect ordering.
- The Updates page provides an intentional empty state.
- FAQ content is grouped by category.
- FAQ disclosures, when used, work with keyboard and assistive technology semantics.
- Essential joining information is available without depending exclusively on collapsed FAQ answers.

### 10.7 Responsive and accessible behavior

- No page has horizontal page scrolling from 320 CSS pixels upward.
- Mobile navigation is operable with touch and keyboard and closes through its documented controls.
- Every interactive target is at least 44 by 44 CSS pixels.
- All six pages have logical headings, landmarks, visible focus, meaningful link names, and appropriate image alternatives.
- Reduced-motion mode suppresses nonessential animation.
- Automated and manual checks find no known WCAG 2.2 Level AA conformance failure.

### 10.8 Performance and deployment

- The production build succeeds through the Vercel deployment workflow.
- Static-first pages do not require a runtime database, authentication service, or content API.
- All six routes meet the Lighthouse CI thresholds defined in section 9.2.
- The mobile navigation and FAQ interaction flow meet the Interaction to Next Paint threshold defined in section 9.2.
- The 30-percent pseudo-localization test passes at every required responsive width.
- Primary content and navigation remain available when client-side JavaScript is unavailable.
- The production output contains no analytics, tracking pixel, session replay, or unapproved embed.
- Required run, content-editing, deployment, and rollback instructions exist before launch.

## 11. Human Inputs and Placeholders

The following inputs are intentionally unresolved. Mandatory identity, affiliation, joining, inquiry, content, consent, and ownership inputs MUST be supplied before production launch. Optional assets or fields MAY be waived only when the related page and component have a defined accessible fallback.

### 11.1 Identity and brand

- `[[FULL_ORGANIZATION_NAME]]` and approved short name.
- `[[TAGLINE]]`, `[[SHORT_TAGLINE]]`, and `[[VALUE_PROPOSITION]]`.
- Approved Haribon logo, wordmark, marks, and usage guidance.
- Approved AWS and university affiliation wording and trademark guidance.
- Stable design tokens and the initial campaign theme.
- Approved typography and icon system.

### 11.2 Organization content

- `[[CHAPTER_OVERVIEW]]`.
- `[[AFFILIATION_STATEMENT]]`.
- `[[ORIGIN_STORY]]` and verified dates.
- `[[VISION_STATEMENT]]` and `[[MISSION_STATEMENT]]`.
- Member benefits, chapter values, community principles, and organization structure.
- Approved FAQ questions and answers.

### 11.3 People, projects, and updates

- Current roster term and complete approved officer roster.
- Officer consent for photos, biographies, journeys, interests, and links.
- Completed and selected active project records.
- Verified project technology lists and public destinations.
- Initial approved update records and categories.
- All approved media and alternative text.

### 11.4 Destinations and operations

- `[[JOIN_FORM_URL]]`.
- `[[INQUIRY_FORM_URL]]`.
- Approved social and community links.
- `[[CONTACT_EMAIL]]`, if public email publication is approved.
- Production domain and Vercel project ownership.
- Content approvers and release owners.

`[[JOIN_FORM_URL]]` and `[[INQUIRY_FORM_URL]]` are mandatory and cannot be waived for version one.

## 12. Spiral SDLC Gate

### 12.1 Current cycle objective

The current cycle defines and validates product requirements. It does not authorize application implementation.

### 12.2 Current cycle risks

The human team MUST review these risks before closing the cycle:

- Incorrect or unapproved AWS affiliation language.
- Brand assets or campaign themes that do not meet accessibility requirements.
- Missing or outdated officer consent and roster data.
- Project claims that cannot be verified publicly.
- External forms or contact destinations without a clear owner.
- A maintenance process that depends on unavailable technical volunteers.

### 12.3 Exit criteria

This requirements cycle is complete when:

- The human team approves this PRD or records requested changes.
- The six-page scope and version-one exclusions are accepted.
- Communications and technical web team ownership are confirmed.
- The placeholder and content-input list is accepted.
- High-risk affiliation, privacy, consent, and maintenance questions have owners.

### 12.4 Next cycle

After PRD approval, the next Spiral cycle SHOULD cover brand discovery, content inventory, information architecture validation, and interface design. Next.js implementation planning begins only after those outputs are reviewed and approved.
