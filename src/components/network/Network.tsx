"use client";

import { useRef } from "react";
import { gsap, MOTION, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { program } from "@/content/network";
import { PaperPlane } from "@/components/decor/Decor";
import styles from "./Network.module.css";

export function Network() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Thread the route through each stat's waypoint, measured from the
      // live layout, with horizontal tangents so it glides over the figures.
      const plot = () => {
        const box = root.current?.querySelector<HTMLElement>(`.${styles.flight}`);
        const svg = box?.querySelector("svg");
        const path = svg?.querySelector("path");
        if (!box || !svg || !path) return;
        const b = box.getBoundingClientRect();
        // Offsets ignore transforms, so in-flight reveal tweens don't skew it.
        const within = (el: HTMLElement) => {
          let x = el.offsetWidth / 2;
          let y = el.offsetHeight / 2;
          let n: HTMLElement | null = el;
          while (n && n !== box) {
            x += n.offsetLeft;
            y += n.offsetTop;
            n = n.offsetParent as HTMLElement | null;
          }
          return [x, y];
        };
        const pts = Array.from(box.querySelectorAll<HTMLElement>(`.${styles.waypoint}`)).map(within);
        if (!pts.length || !pts[0][0]) return;
        const vw = document.documentElement.clientWidth;
        pts.unshift([-b.left - 40, pts[0][1] + 110]);
        pts.push([vw - b.left + 60, pts[pts.length - 1][1] + 40]);
        let d = `M${pts[0][0]} ${pts[0][1]}`;
        for (let i = 1; i < pts.length; i++) {
          const [x0, y0] = pts[i - 1];
          const [x1, y1] = pts[i];
          const dx = (x1 - x0) / 2;
          d += ` C${x0 + dx} ${y0} ${x1 - dx} ${y1} ${x1} ${y1}`;
        }
        svg.setAttribute("viewBox", `0 0 ${b.width} ${b.height}`);
        path.setAttribute("d", d);
      };
      plot();
      ScrollTrigger.addEventListener("refreshInit", plot);

      mm.add(MOTION.ok, () => {
        const q = gsap.utils.selector(root);
        const route = root.current?.querySelector<SVGPathElement>(`.${styles.route}`);
        const nums = q<HTMLElement>("[data-count]");

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: q(`.${styles.flight}`)[0],
            start: "top 80%",
            end: "bottom 45%",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        if (route) {
          tl.fromTo(route, { drawSVG: "0%" }, { drawSVG: "100%", duration: 1 }, 0).to(
            q(`.${styles.plane}`),
            {
              duration: 1,
              motionPath: { path: route, align: route, alignOrigin: [0.5, 0.5], autoRotate: true },
            },
            0,
          );
        }

        // Each figure counts up as the plane passes over it.
        nums.forEach((el, i) => {
          const end = Number(el.dataset.count);
          const obj = { v: 0 };
          el.textContent = "0";
          gsap.fromTo(
            obj,
            { v: 0 },
            {
              v: end,
              duration: 1.6,
              ease: "expo.out",
              delay: i * 0.12,
              onUpdate: () => {
                el.textContent = String(Math.round(obj.v));
              },
              scrollTrigger: { trigger: el, start: "top 78%", once: true },
            },
          );
        });

        return () => nums.forEach((el) => (el.textContent = el.dataset.count ?? ""));
      });

      return () => ScrollTrigger.removeEventListener("refreshInit", plot);
    },
    { scope: root },
  );

  return (
    <section ref={root} className={styles.network} aria-labelledby="network-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="network-title" data-reveal>
            One chapter in a <em>nationwide flock.</em>
          </h2>
          <p className="lede" data-reveal>
            {program.description}
          </p>
        </div>

        <div className={styles.flight}>
          <svg className={styles.routeSvg} viewBox="0 0 1200 400" aria-hidden="true">
            <path className={styles.route} d="M0 300 C300 300 300 100 600 100" fill="none" />
          </svg>
          <PaperPlane className={styles.plane} />

          <ol role="list" className={styles.stats}>
            {program.stats.map((s) => (
              <li key={s.label} className={styles.stat} data-reveal>
                <span className={styles.waypoint} aria-hidden="true" />
                <span className={styles.figure}>
                  <span data-count={s.value}>{s.value}</span>
                  <span className={styles.suffix}>{s.suffix}</span>
                </span>
                <span className={styles.label}>{s.label}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className={styles.footnote} data-reveal="fade">
          {program.footnote} Haribon is the chapter at PLM.
        </p>
      </div>
    </section>
  );
}
