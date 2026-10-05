import type { NetworkStat } from "@/types/content";

/**
 * Program-level figures for AWS Student Builder Groups in the Philippines,
 * as published by the program ("Our Impact" deck, supplied by the chapter).
 * These describe the national network, never Haribon alone.
 */
export const program = {
  description:
    "AWS Student Builder Groups builds a vibrant student community through university chapters — chapters that lead to unity, collaboration, and shared support, bridging the technology learning gap and creating more ready, future-proof students.",
  stats: [
    { value: 80, suffix: "+", label: "chapters established across the Philippines" },
    { value: 40, suffix: "+", label: "registered AWS Cloud Captains and Learning Leads" },
    { value: 15, suffix: "k+", label: "members nationwide" },
  ] satisfies NetworkStat[],
  footnote: "Figures from AWS Student Builder Groups Philippines, within its first year.",
};

/** Chapter story. Sources: chapter "About" pubmat, brand guide p.13. */
export const about = {
  overview:
    "AWS Student Builder Group – Haribon is a non-academic student organization at Pamantasan ng Lungsod ng Maynila. We bring students together to learn, innovate, and collaborate in technology.",
  purpose:
    "Tech now shapes every field, so we give students a place to sharpen their skills, explore new solutions, and meet the people already building in industry.",
  pillars: [
    {
      word: "Learn",
      text: "Pick up cloud and tech skills by doing them, with other students beside you.",
    },
    {
      word: "Build",
      text: "Turn ideas into working things across ten builder tracks.",
    },
    {
      word: "Connect",
      text: "Meet industry professionals and a nationwide network of student builders.",
    },
  ],
  name: {
    title: "Why Haribon?",
    body: "Hari ng Ibon, the king of birds. The Haribon is the Philippine eagle, our national bird. Our mascot Bonee is a young one: a cloud aviator with bright, curious eyes. He's less majestic and more “let's figure this out together.”",
  },
};
