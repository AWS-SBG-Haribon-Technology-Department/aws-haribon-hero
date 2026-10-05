"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin, useGSAP);
  gsap.defaults({ ease: "expo.out", duration: 0.9 });
}

/** Media conditions shared by every animated section. */
export const MOTION = {
  ok: "(prefers-reduced-motion: no-preference)",
  reduce: "(prefers-reduced-motion: reduce)",
  desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
  mobile: "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
} as const;

/** Tell the pre-paint guard in layout.tsx that GSAP took over reveals. */
export function markMotionReady() {
  if (typeof document !== "undefined") {
    document.documentElement.dataset.motionReady = "1";
  }
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
