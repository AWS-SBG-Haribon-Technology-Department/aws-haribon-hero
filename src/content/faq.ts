import type { FaqGroup } from "@/types/content";

/**
 * Answers stay inside what the chapter has published. Anything not yet
 * decided (fees, schedules, exact membership dates) points to the official
 * channels instead of guessing.
 */
export const faq: FaqGroup[] = [
  {
    title: "Joining",
    items: [
      {
        q: "Who can join Haribon?",
        a: "Students of Pamantasan ng Lungsod ng Maynila who are curious about cloud and technology. Membership calls are announced on our official pages.",
      },
      {
        q: "Do I need coding or cloud experience?",
        a: "No. AWS Student Builder Groups exists to close the technology learning gap, so beginners are exactly who we're for. Bring curiosity; we'll learn the rest together.",
      },
      {
        q: "How do I apply?",
        a: "When membership opens, apply through the official form linked on this site and on our social pages. Follow @awssbg_haribon on Instagram so you catch the call.",
      },
    ],
  },
  {
    title: "Being a member",
    items: [
      {
        q: "What will I actually do?",
        a: "Learn alongside other students, explore the builder tracks that interest you, and help build the chapter's projects and events.",
      },
      {
        q: "Can I help run the chapter?",
        a: "Yes. Haribon is student-run across eight departments: Executive, Secretariat, Finance, Relations, Operations, Creatives, Marketing, and Technology. Leads applications are announced on our pages.",
      },
    ],
  },
  {
    title: "About the chapter",
    items: [
      {
        q: "Is Haribon part of AWS?",
        a: "Haribon is a student-led chapter of the AWS Student Builder Groups program at PLM. Our officers and members are students, not Amazon or AWS employees.",
      },
      {
        q: "Who can I contact with other questions?",
        a: "Message us on Instagram or Facebook, or email awscc.haribon@gmail.com. A student officer will get back to you.",
      },
    ],
  },
];
