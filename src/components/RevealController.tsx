"use client";

import { gsap, markMotionReady, MOTION, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Generic one-time reveals for `[data-reveal]` elements. Sections with their
 * own choreography mark targets `data-reveal="custom"` and handle them.
 * Reduced motion: nothing is ever hidden (see layout.tsx guard).
 */
export function RevealController() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION.ok, () => {
      const els = gsap.utils.toArray<HTMLElement>('[data-reveal]:not([data-reveal="custom"])');
      if (!els.length) return;
      gsap.set(els, {
        autoAlpha: 0,
        y: (_i: number, el: HTMLElement) => (el.dataset.reveal === "fade" ? 0 : 32),
      });
      ScrollTrigger.batch(els, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.09,
            overwrite: true,
          }),
      });
    });
    markMotionReady();
    // Late font/image loads shift layout; re-measure once settled.
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => window.clearTimeout(t);
  });

  return null;
}
