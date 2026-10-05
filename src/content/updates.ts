import type { Update } from "@/types/content";

/**
 * Reverse-chronological. Every entry is grounded in a published chapter
 * campaign; dates stay at month precision unless the source states a day.
 */
export const updates: Update[] = [
  {
    id: "org-structure-2026",
    date: "2026-08",
    displayDate: "Aug 2026",
    category: "Chapter news",
    title: "The 2026–2027 crew is set",
    summary:
      "Eight departments, from Secretariat to Technology, and ten builder tracks under the Technology team. Meet the executive board below.",
  },
  {
    id: "leads-closed-2026",
    date: "2026-08-07",
    displayDate: "Aug 7, 2026",
    category: "Recruitment",
    title: "Leads applications closed",
    summary:
      "After a one-day extension, the 2026–2027 leads application closed and results were sent to applicants by email. Thank you to everyone who raised a hand.",
  },
  {
    id: "leads-open-2026",
    date: "2026-08",
    displayDate: "Aug 2026",
    category: "Recruitment",
    title: "We went looking for leads",
    summary:
      "The chapter opened applications for students who want to help run Haribon across operations, creatives, marketing, technology, and more.",
  },
];
