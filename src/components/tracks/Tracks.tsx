"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap, MOTION, useGSAP } from "@/lib/gsap";
import { trackEdges, tracks } from "@/content/tracks";
import { Icon, type IconName } from "@/components/Icon";
import { CloudEdge } from "@/components/decor/CloudEdge";
import styles from "./Tracks.module.css";

const byId = Object.fromEntries(tracks.map((t) => [t.id, t]));

export function Tracks() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION.ok, () => {
        const q = gsap.utils.selector(root);
        const chart = q(`.${styles.chart}`)[0];

        // The constellation draws itself as it scrolls into view.
        gsap
          .timeline({
            scrollTrigger: { trigger: chart, start: "top 80%", end: "center 45%", scrub: 0.8 },
            defaults: { ease: "none" },
          })
          .fromTo(q(`.${styles.edgeLine}`), { drawSVG: "0%" }, { drawSVG: "100%", stagger: 0.08, duration: 0.5 }, 0.1);

        gsap.fromTo(
          q(`.${styles.star}`),
          { autoAlpha: 0, scale: 0 },
          {
            autoAlpha: 1,
            scale: 1,
            stagger: { each: 0.07, from: "center" },
            duration: 0.9,
            ease: "back.out(2.4)",
            scrollTrigger: { trigger: chart, start: "top 75%", once: true },
          },
        );

        gsap.fromTo(
          q(`.${styles.item}`),
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.9,
            scrollTrigger: { trigger: q(`.${styles.list}`)[0], start: "top 85%", once: true },
          },
        );

        gsap.fromTo(
          q(`.${styles.bowee}`),
          { autoAlpha: 0, y: 60, rotate: 6 },
          {
            autoAlpha: 1,
            y: 0,
            rotate: 0,
            duration: 1.2,
            ease: "back.out(1.4)",
            scrollTrigger: { trigger: q(`.${styles.bowee}`)[0], start: "top 85%", once: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="tracks" className={styles.tracks} aria-labelledby="tracks-title">
      <CloudEdge side="top" seed={7} />
      <CloudEdge side="bottom" seed={3} />
      <div className={styles.dust} aria-hidden="true" />

      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <h2 id="tracks-title" data-reveal>
            Ten tracks. <em>One constellation.</em>
          </h2>
          <p className={styles.lede} data-reveal>
            Haribon&rsquo;s Technology team runs ten builder tracks. Mapped together they make a Haribon in flight.
            Find the star that pulls at you and start there.
          </p>
          <figure className={styles.bowee} data-reveal="custom">
            <Image src="/mascots/bowee-happy.webp" alt="" width={800} height={1086} sizes="140px" />
            <figcaption>
              <strong>Bowee</strong> flies with the Skill Builder team, the technical core of Haribon.
            </figcaption>
          </figure>
        </div>

        <div className={styles.chart} aria-hidden="true">
          {/* 4:3 viewBox matches the chart box, so % star positions map 1:1. */}
          <svg className={styles.lines} viewBox="0 0 100 75">
            {trackEdges.map(([a, b]) => {
              const A = byId[a].star;
              const B = byId[b].star;
              const on = active === a || active === b;
              return (
                <line
                  key={`${a}-${b}`}
                  className={styles.edgeLine}
                  data-on={on || undefined}
                  x1={A.x}
                  y1={A.y * 0.75}
                  x2={B.x}
                  y2={B.y * 0.75}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>
          {tracks.map((t) => (
            <span
              key={t.id}
              className={styles.star}
              data-size={t.star.size}
              data-on={active === t.id || undefined}
              data-align={t.star.x < 15 ? "start" : t.star.x > 85 ? "end" : "center"}
              style={{ left: `${t.star.x}%`, top: `${t.star.y}%` }}
            >
              <i />
              <span className={styles.starLabel}>{t.name}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <ul role="list" className={styles.list}>
          {tracks.map((t) => (
            <li
              key={t.id}
              className={styles.item}
              data-on={active === t.id || undefined}
              onPointerEnter={() => setActive(t.id)}
              onPointerLeave={() => setActive((cur) => (cur === t.id ? null : cur))}
            >
              <span className={styles.icon}>
                <Icon name={t.id as IconName} />
              </span>
              <h3>{t.name}</h3>
              <p>{t.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
