import type { Track } from "@/types/content";

/**
 * The Technology department's ten builder tracks (2026–2027 org structure).
 * Blurbs describe each field in general terms. They are not claims about
 * chapter output.
 *
 * Star coordinates draw the tracks as one constellation: an eagle in flight.
 * x/y are percentages of the chart's 100 × 100 box.
 */
export const tracks: Track[] = [
  {
    id: "ai-ml",
    name: "AI / ML",
    blurb: "Train models that find patterns, and learn to ship them responsibly.",
    star: { x: 4, y: 18, size: 2 },
  },
  {
    id: "automation",
    name: "Automation",
    blurb: "Script away the repetitive parts with pipelines, bots, and self-running workflows.",
    star: { x: 18, y: 29, size: 1 },
  },
  {
    id: "data",
    name: "Data Engineering",
    blurb: "Move, clean, and shape data so other people can actually use it.",
    star: { x: 33, y: 43, size: 2 },
  },
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    blurb: "The core of AWS: compute, storage, and networks you can spin up and tear down.",
    star: { x: 50, y: 28, size: 3 },
  },
  {
    id: "software",
    name: "Software Engineering",
    blurb: "Design, write, test, and deploy software that holds up in the real world.",
    star: { x: 67, y: 43, size: 2 },
  },
  {
    id: "security",
    name: "Cybersecurity",
    blurb: "Learn how systems break so you can keep them, and the people using them, safe.",
    star: { x: 82, y: 29, size: 1 },
  },
  {
    id: "uiux",
    name: "UI / UX",
    blurb: "Research, design, and prototype interfaces people enjoy using.",
    star: { x: 96, y: 18, size: 2 },
  },
  {
    id: "iot",
    name: "IoT & Robotics",
    blurb: "Wire sensors and hardware to the cloud and make physical things smart.",
    star: { x: 50, y: 62, size: 2 },
  },
  {
    id: "games",
    name: "Game Development",
    blurb: "Build worlds, mechanics, and the backends that keep players connected.",
    star: { x: 39, y: 88, size: 1 },
  },
  {
    id: "pm",
    name: "Project Management",
    blurb: "Plan, ship, and keep a team of builders flying in the same direction.",
    star: { x: 61, y: 88, size: 1 },
  },
];

/** Constellation edges, by track id. */
export const trackEdges: [string, string][] = [
  ["ai-ml", "automation"],
  ["automation", "data"],
  ["data", "cloud"],
  ["cloud", "software"],
  ["software", "security"],
  ["security", "uiux"],
  ["data", "iot"],
  ["software", "iot"],
  ["iot", "games"],
  ["iot", "pm"],
  ["games", "pm"],
];
