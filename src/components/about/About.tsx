"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, MOTION, useGSAP } from "@/lib/gsap";
import { about } from "@/content/network";
import { Bubble, GlowStar, Lantern, Sparkle } from "@/components/decor/Decor";
import styles from "./About.module.css";

export function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION.ok, () => {
        const q = gsap.utils.selector(root);
        // The lantern sways with scroll; it settles when the reader stops.
        gsap.fromTo(
          q(`.${styles.lantern}`),
          { rotate: 7 },
          {
            rotate: -5,
            ease: "none",
            scrollTrigger: { trigger: q(`.${styles.window}`)[0], start: "top bottom", end: "bottom top", scrub: 1.2 },
          },
        );
        gsap.fromTo(
          q(`.${styles.bonee}`),
          { yPercent: 18 },
          {
            yPercent: -4,
            ease: "none",
            scrollTrigger: { trigger: q(`.${styles.window}`)[0], start: "top bottom", end: "bottom center", scrub: 1 },
          },
        );
        gsap.fromTo(
          q(`.${styles.pillar}`),
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.12,
            duration: 1.1,
            scrollTrigger: { trigger: q(`.${styles.pillars}`)[0], start: "top 85%", once: true },
          },
        );
        gsap.fromTo(
          q(`.${styles.pillar} .${styles.word}`),
          { backgroundSize: "0% 0.32em" },
          {
            backgroundSize: "100% 0.32em",
            stagger: 0.12,
            duration: 1.2,
            delay: 0.35,
            ease: "expo.inOut",
            scrollTrigger: { trigger: q(`.${styles.pillars}`)[0], start: "top 85%", once: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="about" className={styles.about} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 id="about-title" data-reveal>
            Haribon is PLM&rsquo;s home for <em>cloud builders.</em>
          </h2>
          <p className={styles.overview} data-reveal>
            {about.overview}
          </p>
          <p className="lede" data-reveal>
            {about.purpose}
          </p>
        </div>

        <figure className={styles.window} data-reveal>
          <div className={styles.sky} aria-hidden="true">
            <Lantern className={styles.lantern} />
            <GlowStar className={styles.st1} />
            <GlowStar className={styles.st2} />
            <Sparkle className={styles.sp1} />
            <Bubble className={styles.bb1} />
            <Bubble className={styles.bb2} />
            <div className={styles.bonee}>
              <Image src="/mascots/bonee-idle.webp" alt="" width={900} height={1222} sizes="(min-width: 1024px) 220px, 160px" />
            </div>
          </div>
          <figcaption className={`glass ${styles.card}`}>
            <h3>{about.name.title}</h3>
            <p>{about.name.body}</p>
          </figcaption>
        </figure>
      </div>

      <div className="container">
        <ul role="list" className={styles.pillars}>
          {about.pillars.map((p) => (
            <li key={p.word} className={styles.pillar} data-reveal="custom">
              <span className={styles.word}>{p.word}.</span>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
