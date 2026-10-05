import type { SiteConfig } from "@/types/content";

/**
 * Chapter-wide facts. Sources:
 * - Name, socials, email: Aug 2026 leads-application campaign posters.
 * - Affiliation and non-employee wording: brand guide p.2.
 *
 * TODO(human): replace the two form tokens with approved HTTPS form URLs
 * before launch, and confirm the email/socials are still the official ones.
 */
export const site: SiteConfig = {
  name: "AWS Student Builder Group – Haribon",
  shortName: "Haribon",
  university: "Pamantasan ng Lungsod ng Maynila",
  universityShort: "PLM",
  tagline: "It's always Day One.",
  joinFormUrl: "[[JOIN_FORM_URL]]",
  inquiryFormUrl: "[[INQUIRY_FORM_URL]]",
  email: "awscc.haribon@gmail.com",
  socials: [
    {
      kind: "instagram",
      label: "Instagram",
      handle: "@awssbg_haribon",
      href: "https://www.instagram.com/awssbg_haribon/",
    },
    {
      kind: "facebook",
      label: "Facebook",
      handle: "AWS Student Builder Group – Haribon",
      href: "[[FACEBOOK_URL]]",
    },
    {
      kind: "linkedin",
      label: "LinkedIn",
      handle: "AWS Student Builder Group – Haribon",
      href: "[[LINKEDIN_URL]]",
    },
  ],
  affiliation:
    "A student-led chapter of the AWS Student Builder Groups program at Pamantasan ng Lungsod ng Maynila. Officers and members are students, not Amazon or AWS employees.",
  rosterTerm: "2026–2027",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#logbook", label: "Updates" },
  { href: "#crew", label: "Crew" },
  { href: "#faq", label: "FAQ" },
] as const;
