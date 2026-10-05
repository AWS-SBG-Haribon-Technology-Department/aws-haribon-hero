Product Requirements Document
Campus Technology Organization — Public Website
Version 1.0  |  Prepared for agentic development

This document specifies a six-page marketing and recruitment website for a student-run campus technology organization. It is written to be consumed directly by an AI coding agent. Sections 1 and 2 are instructions to that agent; sections 3 onward are the requirements themselves.
Table of Contents
1. Instructions to the Development Agent
2. Product Summary
3. Global Requirements
4. Home Page
5. About Page
6. Team Page
7. Portfolio Page
8. FAQs Page
9. Future Page
10. Acceptance Criteria
11. Open Items for the Human Team
 
1. Instructions to the Development Agent
1.1 How to read this document
•	Treat every bullet under a page section as a discrete, testable requirement. Do not merge, reorder, or silently drop them.
•	Where this document says MUST, the behaviour is required. Where it says SHOULD, deviate only if you can state a concrete technical reason in your build notes.
•	Anything marked TBD is intentionally unspecified and will be filled in by a human developer. Do not invent a final value for it. Implement it as a named variable or token so it can be swapped in one place later.
•	Where copy, names, dates, photos, or statistics are not supplied here, insert clearly marked placeholder content (see 1.4). Never fabricate an achievement, a person, a quotation, or an award and present it as real.
1.2 Build order
1.	Set up the project skeleton, the design token layer (colours, spacing, radii, typography slots), and the shared layout shell (navbar + footer).
2.	Build the shared component library: buttons, cards, section wrapper, timeline item, accordion, person card, banner, slideshow, ripple handler.
3.	Build the Home page, since it exercises the largest number of components.
4.	Build About, Team, Portfolio, FAQs, Future in that order.
5.	Wire the content source (see 1.5), then run the responsiveness and accessibility checks in section 9.
1.3 Constraints you must not violate
•	Do not hand-author SVG markup for icons. Use an established icon library or icon font and reference icons by name. This applies to icons only; photographic and illustrative assets are handled per 1.4.
•	Use gradients sparingly. Gradients are permitted only in the hero backdrop, the achievement "sparkle" cards, and at most one other accent surface across the whole site. Flat fills everywhere else.
•	Do not introduce colours outside the palette in section 3.2, except for neutral greys, pure white, and semantic states (error, success, focus ring).
•	Do not choose or hard-code a typeface. See 3.3.
•	Do not add analytics, tracking pixels, chat widgets, or third-party embeds that were not requested.
•	Do not ship placeholder text that reads as real content. Placeholders MUST be visually obvious (see 1.4).
1.4 Placeholder convention
Any content not supplied in this document MUST be rendered as a placeholder using the following convention, so a human reviewer can find every gap with a single search:
•	Text placeholders: wrap in double square brackets, e.g. [[CEO_NAME]], [[FOUNDING_YEAR]], [[EVENT_1_ANECDOTE]].
•	Image placeholders: a neutral grey block at the correct aspect ratio, with the token name printed on it, e.g. [[MASCOT_PRIMARY]], [[EVENT_1_PHOTO]]. Do not source stock photography.
•	Link placeholders: href="#" plus a data-placeholder attribute naming the intended destination.
•	Maintain a PLACEHOLDERS.md at the project root listing every token, the page and section it appears on, and the expected content type and dimensions.
1.5 Content architecture
All human-editable content (people, events, achievements, FAQs, timeline entries, department descriptions) MUST live in structured data files separate from the markup — one file per collection, in JSON or the framework's equivalent. Officers change every academic year, so no person's name, role, photo path, or social link may be hard-coded into a component.
1.6 Deliverables
•	The full source for all six pages, responsive and functional.
•	The design token layer, with the palette from 3.2 applied and typography left as named slots.
•	The content data files, populated with placeholders.
•	PLACEHOLDERS.md, plus a README covering how to run the project and how to edit content.
•	Build notes listing any SHOULD you deviated from, and any assumption you had to make.
2. Product Summary
2.1 Purpose
A public-facing website that persuades students to join the organization, and that gives current and prospective members a credible picture of what the organization does, who runs it, and what it has accomplished.
2.2 Primary audience
•	Prospective student members — the dominant audience. Most arrive on mobile, from a link shared on social media or a chat group, and decide within seconds.
•	Current members, checking events and rosters.
•	Faculty, sponsors, and partner organizations assessing legitimacy.
2.3 Success criteria
•	A first-time visitor can state what the organization is and how to join without scrolling past the second section.
•	Every page is fully usable from a 320 px viewport up to a wide desktop display.
•	Officer turnover can be handled by editing data files only.
2.4 Site map
Page	Route	Role
Home	/	Pitch and funnel; links onward to every other page
About	/about	Identity, origin story, vision and mission, internal structure
Team	/team	Full roster and hierarchy
Portfolio	/portfolio	Events and achievements, told as stories
FAQs	/faqs	Objection handling
Future	/future	Teasers for upcoming projects
 
3. Global Requirements
3.1 Responsiveness
Mobile responsiveness is the bottom-line requirement of this project. Build mobile-first, then scale up.
•	Support 320 px through 1920 px and beyond, with no horizontal scrolling at any width.
•	Every multi-column layout MUST collapse to a single column on small screens. Card grids reflow; they do not shrink into unreadable columns.
•	The navbar collapses to a hamburger or equivalent compact menu below the tablet breakpoint. The mobile menu MUST be dismissible by tapping outside it and by the Escape key, and MUST trap focus while open.
•	Tap targets MUST be at least 44 x 44 px.
•	Images MUST be responsive and lazy-loaded below the fold, with width and height attributes set to prevent layout shift.
•	Test explicitly at 320, 375, 768, 1024, 1440, and 1920 px.
3.2 Colour palette
These values were extracted from the supplied palette reference. Apply each strictly to the role its name describes. Define all six as design tokens; no raw hex literals anywhere in component code.
Token	HEX	Role
Background Color	#F2FBF8	Default page and section background — a very light mint. This is the base surface, not white.
Primary Color	#2CBA9F	Primary actions, key highlights, active states, primary buttons, focus accents.
Secondary Color	#236A7B	Supporting emphasis — secondary buttons, headers, hover-darkened primary surfaces, timeline rails.
Body text color	#212A37	All body copy and headings by default. Do not use pure black anywhere.
Light Yellow	#FCF8B7	Sparing accent — highlights, badges, the achievement sparkle cards, occasional section alternation.
Light Green	#D1F6EB	Soft surface tint — card backgrounds, alternating section bands, subtle dividers.
Contrast: body text on Background and on Light Green passes comfortably. Primary Color as a background requires dark text, not white — verify every combination against WCAG AA (4.5:1 for body, 3:1 for large text) before shipping. Where a combination fails, darken toward Secondary Color rather than introducing a new hue.
3.3 Typography
•	Font choices are TBD and are the responsibility of another developer. Do not select a typeface.
•	Expose exactly two named slots — a display/heading family and a body family — as tokens, each falling back to a generic system stack until filled in.
•	Do define the scale, weights, and line heights now: a clear type ramp for h1 through h4, body, and small text, with body line height around 1.6 and headings tighter. The scale MUST be fluid or breakpoint-stepped so headings do not overflow on 320 px.
3.4 Motion and interaction
Ripple on click and tap
A subtle ripple MUST emanate from the exact point of every registered click or tap. Implementation guidance:
•	Attach a single delegated listener at the document or app-root level rather than wiring each component individually, so the effect is global and consistent.
•	On pointerdown, read the pointer coordinates, position an absolutely placed circular element at that point inside a non-interactive overlay layer, and animate it outward with a simultaneous scale-up and opacity fade. Remove the element when the animation ends so nodes do not accumulate.
•	The overlay layer MUST have pointer-events: none and MUST NOT trap or delay the underlying click.
•	Use Primary Color at low opacity. Duration in the 400–600 ms range. It must read as ambient, not decorative fireworks.
•	Interactive elements that already have their own press state (buttons, nav links) MAY keep it; the ripple layers on top rather than replacing it.
•	Suppress the ripple during text selection and inside form fields.
General motion
•	All motion MUST be disabled or reduced to near-instant when prefers-reduced-motion: reduce is set — including the ripple, scroll reveals, the slideshow autoplay, and the sparkle cards.
•	Scroll-triggered reveals SHOULD be short, subtle, and one-shot. Content MUST be visible if scripting fails.
3.5 Iconography and imagery
•	Icons come from a library, referenced by name — no hand-written SVG paths.
•	The mascot is used deliberately and sparingly. Approved appearances: the About page header, the Future page (see section 8), and optionally one small footer appearance. It MUST NOT be scattered across the Home page.
•	All photographic content is placeholder until supplied. Every image needs meaningful alt text; decorative images get empty alt.
3.6 Shared layout
Navbar
•	Persistent across all pages, containing: About, Team, Portfolio, FAQs, Future.
•	The organization logo or wordmark sits at the left and links Home.
•	"Future" is the niche item and SHOULD be given a light visual distinction — a subtle badge or accent in Light Yellow — so it reads as intriguing rather than as an ordinary page.
•	The current page MUST be indicated visually and via aria-current.
•	The navbar SHOULD be sticky on scroll with a background that becomes opaque once the user leaves the hero, so it never sits illegibly over imagery.
Footer
•	Appears at the bottom of every page. Contains: organization name and short tagline, the full navigation set repeated, social links, contact email, meeting time and location placeholders, and a closing call to action.
•	Stacks vertically on mobile.
 
4. Home Page
Section order on this page is fixed. Each numbered section below is a full-width band.
4.1 Hero
•	Occupies the full viewport height (use a dynamic viewport unit so mobile browser chrome does not clip it) with a hard minimum so it never collapses on short landscape screens.
•	The motto "It's always day one" is the dominant element and the first thing the eye lands on.
•	Two calls to action: a primary "Log in" and a secondary action that scrolls or navigates to further content. The primary uses Primary Color; the secondary is outlined or ghost.
•	A downward scroll cue SHOULD sit at the base of the hero.
•	This is one of the three surfaces where a gradient backdrop is permitted.
•	OPEN QUESTION for the human team: "Log in" implies an authenticated member area, which is out of scope in this document. Until scope is confirmed, wire the button to [[LOGIN_DESTINATION]] and note it in your build notes.
4.2 Introduction
•	A short introductory block about the organization — who it is, what it does, why it exists. Two to three short paragraphs maximum; this is a teaser, not the About page.
•	Ends with a clear link to the About page.
4.3 Perks and benefits
•	A responsive card grid summarizing what a member gets. Card count is flexible; design for three to six and let the grid reflow.
•	Each card: an icon (from the library), a short heading, and one or two lines of supporting copy.
•	Cards use Light Green or Background as their surface with a subtle border or shadow, and lift slightly on hover. Hover effects MUST NOT be the only way information is revealed, since touch devices have no hover.
4.4 Executives spotlight
•	A condensed showcase of the executive officers — photo, name, role. Not the full roster.
•	On mobile this SHOULD become a horizontal swipe carousel or a two-column grid rather than a long vertical stack.
•	Ends with a link to the Team page.
4.5 Portfolio sneak peek
Two distinct sub-blocks, in this order:
•	Events: exactly two of the most appreciated in-org events, each presented as a wide, column-like banner — a full-width horizontal band with the event image on one side and title plus a one-line hook on the other. Alternate the image side between the two banners. On mobile the banner stacks to image-above-text.
•	Achievements: exactly three achievements, each in its own card carrying a "sparkle" treatment — a restrained shimmer or glint, built with CSS animation on a gradient or highlight overlay (this is the second permitted gradient surface). It MUST be subtle, must not loop distractingly, and must be fully disabled under prefers-reduced-motion.
•	The block ends with a link to the Portfolio page.
4.6 Fields you can join
•	A short encouraging lead-in message, then exactly five cards, one per field.
•	Each card: icon, field name, one-line description of what someone in that field actually does.
•	Grid MUST handle five items gracefully at every breakpoint — a five-item row is awkward on desktop, so prefer a layout that balances (for example 3 + 2) rather than leaving one card orphaned.
•	Field names are [[FIELD_1]] through [[FIELD_5]] until supplied.
4.7 Closing rhetorical block
•	Opens with the line: "Afraid that you might not fit in? Don't worry because as the [[CEO_ROLE_TITLE]] says…" followed by the full quoted message, [[CEO_QUOTE]], attributed to [[CEO_NAME]].
•	Treat this as a pull quote: larger type, generous whitespace, visually distinct from surrounding body copy. Attribution sits below the quote.
•	Ends with a link to the FAQs page.
4.8 Footer
•	The shared footer defined in 3.6.
 
5. About Page
5.1 Identity header
•	The mascot is displayed prominently — this is its primary home on the site.
•	The full, unabbreviated name of the organization is restated alongside it.
•	A fun-fact message accompanies it: [[ABOUT_FUN_FACT]]. Tone is light and welcoming.
•	On mobile, mascot above, text below.
5.2 Founding timeline
•	A vertical timeline of the events that led to the organization's founding, in chronological order.
•	Each entry: date or period, a short title, and a brief description.
•	Desktop MAY use an alternating left/right layout around a central rail; mobile MUST use a single-sided rail with all entries on one side.
•	The rail uses Secondary Color; entry markers use Primary Color.
•	Entries SHOULD reveal on scroll, subject to the motion rules in 3.4.
•	Timeline entries are supplied as a data file; support an arbitrary number of them.
5.3 Vision and mission
•	Vision statement and mission statement presented as two clearly separated, equally weighted blocks.
•	Side by side on desktop, stacked on mobile. Give this section real breathing room — it is a moment of pause, not a dense block.
5.4 Offices and departments
•	A card grid covering every office and department, each with its name and a short description of what it handles.
•	Cards MUST have a hover effect. Suggested: a lift with a shadow increase plus a border or background shift toward Light Green or Primary Color. Keep it to transform and colour properties for performance.
•	The hover state MUST NOT hide or reveal essential text, since touch devices cannot hover. On touch, provide an equivalent tap-to-expand or simply show all content by default.
•	Departments come from a data file and MUST map to the leadership hierarchy on the Team page — use consistent identifiers across both.
6. Team Page
6.1 Roster structure
•	The complete roster, presented as a hierarchy in this order: the organization adviser at the top, then the executive officers, then the department leads cascading beneath the executive officer they report to.
•	The hierarchy MUST be visually legible as a tree on desktop — connecting lines or clear indentation showing which leads sit under which executive.
•	On mobile, a strict tree diagram will not fit. Collapse to a nested, indented, or grouped-section layout that preserves the reporting relationship without horizontal scrolling. Accordion grouping per executive is acceptable.
•	The underlying data MUST be a nested structure, so a person is defined once and the tree is derived from it.
6.2 Person card
•	Fields: photo, full name, position or title, department, and social links.
•	Exactly two social links per person, and LinkedIn is the priority one and MUST be first where present.
•	Social icons come from the icon library. Each link needs an accessible label naming both the person and the platform, since a bare icon is meaningless to a screen reader.
•	External links open in a new tab with rel="noopener noreferrer".
•	Handle missing data gracefully — a person with one social link, or no photo, must not break the layout.
7. Portfolio Page
7.1 Documentation slideshow
•	At the top of the page, a slideshow of documentation images from past events.
•	MUST support keyboard navigation, MUST expose previous/next controls with accessible labels, and MUST include pause control if it autoplays.
•	Autoplay is disabled entirely under prefers-reduced-motion.
•	Swipe gestures SHOULD work on touch devices. Images are lazy-loaded beyond the first.
7.2 Notable events and achievements
•	A sequence of the organization's most notable events and achievements throughout its history.
•	Format is fixed and agreed: exactly one image per showcase entry, followed by the anecdote or story for that entry. No multi-image galleries within an entry.
•	Each entry pairs the event with an anecdote that immortalizes it — the tone MUST be uplifting and celebratory.
•	Alternate the image side between consecutive entries on desktop for rhythm; stack image-above-text on mobile.
•	Entries come from a data file with fields: title, date, image, anecdote, and the people credited.
7.3 The people behind the story
•	Each showcase MUST credit the people responsible — names and roles, linked to their Team page entry where the identifier matches.
•	Present these as a compact credit line or small avatar row attached to each entry rather than as a second full roster.
8. FAQs Page
•	A page header, then a short encouraging message beneath it, in that order.
•	Questions are grouped by category, with a visible category heading above each group.
•	Each question is a dropdown/accordion item: the question is the always-visible trigger, the answer expands below it.
•	Accordion items MUST be real buttons, MUST expose aria-expanded and aria-controls, and MUST be keyboard operable.
•	Multiple items MAY be open at once. Nothing is open by default except optionally the first item of the first category.
•	Questions and categories come from a data file. Suggested starting categories, pending human confirmation: joining and eligibility, time commitment, activities and projects, membership and requirements.
9. Future Page
•	Purpose: sneak peeks, insights, and clues about upcoming projects — both portfolio work and organizational legacy projects.
•	The tone is deliberately teasing. Content is partial by design: hints, silhouettes, dates without details, redacted or blurred fragments.
•	The mascot appears here to elicit excitement, but sparingly — one or two appearances on the page, not on every card.
•	Each teaser SHOULD carry a status or timing hint (for example "Coming this semester") without committing to specifics.
•	The page MUST still work when there is only one teaser, or none — include an empty state.
•	Any blur, redaction, or reveal-on-interaction effect MUST NOT be the only means of conveying information a visitor needs.
 
10. Acceptance Criteria
The build is complete when every item below passes.
10.1 Responsiveness
•	No horizontal scrollbar at any width from 320 px upward, on any page.
•	Navbar collapses correctly; the mobile menu opens, closes on outside tap and Escape, and traps focus.
•	Every grid and multi-column layout collapses to a single readable column on mobile.
•	The hero fills the viewport on mobile without content being cut off by browser chrome.
10.2 Design system
•	All six palette values are applied to their described roles and defined once as tokens.
•	No hex literal appears outside the token file.
•	Typography is exposed as two unfilled named slots; no typeface has been chosen.
•	Gradients appear on no more than three surfaces site-wide.
•	No hand-authored SVG icon markup exists in the codebase.
10.3 Interaction
•	The ripple fires from the correct coordinates on click and on touch, on every page, and never blocks the underlying interaction.
•	Ripple nodes are removed after animating — no unbounded DOM growth after repeated clicking.
•	With prefers-reduced-motion: reduce set, the ripple, scroll reveals, sparkle effect, and slideshow autoplay are all suppressed.
10.4 Content and accessibility
•	Every unsupplied value is a bracketed placeholder and appears in PLACEHOLDERS.md. No invented facts.
•	People, events, achievements, FAQs, timeline entries, and departments are all data-driven.
•	All colour combinations meet WCAG AA contrast.
•	The site is fully navigable by keyboard, with a visible focus indicator on every interactive element.
•	Headings form a logical outline on every page; images have appropriate alt text.
10.5 Cross-page integrity
•	Home links correctly onward to About, Team, Portfolio, and FAQs from their respective sections.
•	Department identifiers match between the About page and the Team page hierarchy.
•	Portfolio credits resolve to the correct Team page entries.
11. Open Items for the Human Team
These are unresolved and must not be guessed at by the agent:
•	Typeface selection for both the display and body slots.
•	Scope and destination of the "Log in" call to action — whether an authenticated member area exists.
•	Final copy for the motto section, introduction, vision, mission, and the closing quotation.
•	The five joinable fields, the perks list, the FAQ set, and all names, photos, dates, and anecdotes.
•	Mascot artwork and usage rules beyond the sparing-use constraint.
•	Hosting, domain, and whether a content management layer is needed for non-technical editors.
