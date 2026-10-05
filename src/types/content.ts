/**
 * Content contracts. Every editorial record on the site is typed here and
 * lives in `src/content/*` so copy can change without touching components.
 *
 * Placeholder convention (PRD): unresolved values use `[[TOKEN]]` strings.
 * Use `isPlaceholder()` before rendering a link so a token never becomes a
 * live, misleading destination.
 */

export type Placeholder = `[[${string}]]`;

export interface SiteConfig {
  name: string;
  shortName: string;
  university: string;
  universityShort: string;
  tagline: string;
  joinFormUrl: string | Placeholder;
  inquiryFormUrl: string | Placeholder;
  email?: string;
  socials: SocialLink[];
  affiliation: string;
  rosterTerm: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string | Placeholder;
  kind: "instagram" | "facebook" | "linkedin";
}

export interface NetworkStat {
  value: number;
  suffix: string;
  label: string;
}

export interface Track {
  id: string;
  name: string;
  blurb: string;
  /** Position inside the constellation, as a percentage of the chart box. */
  star: { x: number; y: number; size: 1 | 2 | 3 };
}

export interface Officer {
  name: string;
  role: string;
  roleShort: string;
  department: string;
  tier: "executive" | "chief";
  photo?: string;
}

export interface Update {
  id: string;
  /** ISO year-month or full date, used for the machine-readable <time>. */
  date: string;
  displayDate: string;
  category: "Recruitment" | "Chapter news" | "Event";
  title: string;
  summary: string;
  href?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const isPlaceholder = (value: string | undefined): value is Placeholder =>
  !value || /^\[\[[A-Z0-9_]+\]\]$/.test(value);
