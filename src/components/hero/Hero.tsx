"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, MOTION, SplitText, useGSAP } from "@/lib/gsap";
import { SkyCanvas } from "@/components/sky/SkyCanvas";
import { Bubble, Doodle, GlowStar, Sparkle } from "@/components/decor/Decor";
import { Icon } from "@/components/Icon";
import { site } from "@/content/site";
import styles from "./Hero.module.css";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const climb = useRef(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION.ok, () => {
        const q = gsap.utils.selector(root);
        const intro = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.15 });

        // No line masks here: they would clip the title's soft shadow.
        const split = SplitText.create(q(`.${styles.title}`), {
          type: "words",
          onSplit(self) {
            gsap.set(q(`.${styles.title}`), { autoAlpha: 1 });
            return gsap.fromTo(
              self.words,
              { autoAlpha: 0, yPercent: 45, filter: "blur(10px)" },
              {
                autoAlpha: 1,
                yPercent: 0,
                filter: "blur(0px)",
                duration: 1.2,
                stagger: 0.09,
                ease: "expo.out",
                delay: 0.15,
                clearProps: "filter",
              },
            );
          },
        });

        intro
          .fromTo(q(`.${styles.plate}`), { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1 }, 0.45)
          .fromTo(
            q(`.${styles.bonee}`),
            { autoAlpha: 0, yPercent: 38, rotate: -8, scale: 0.86 },
            { autoAlpha: 1, yPercent: 0, rotate: 0, scale: 1, duration: 1.3, ease: "back.out(1.5)" },
            0.35,
          )
          .fromTo(
            q(`.${styles.say}`),
            { autoAlpha: 0, scale: 0.4, rotate: -10 },
            { autoAlpha: 1, scale: 1, rotate: -4, duration: 0.8, ease: "back.out(2.2)" },
            1.05,
          )
          .fromTo(
            q("[data-hero-star]"),
            { autoAlpha: 0, scale: 0.2 },
            { autoAlpha: 1, scale: 1, duration: 0.9, stagger: 0.08, ease: "back.out(2)" },
            0.6,
          )
          .fromTo(q("[data-doodle] path"), { drawSVG: "0%" }, { drawSVG: "100%", duration: 1.6, ease: "power2.inOut" }, 0.9);

        // Take-off: the hero holds while Bonee spreads his wings and climbs
        // out of frame and the shader's cloud sea rises to swallow the view.
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=85%",
              pin: true,
              scrub: 0.7,
              onUpdate: (self) => {
                climb.current = self.progress;
              },
            },
            defaults: { ease: "none" },
          })
          .to(q(`.${styles.say}`), { autoAlpha: 0, y: -30, duration: 0.12 }, 0)
          .to(q(`.${styles.cue}`), { autoAlpha: 0, duration: 0.08 }, 0)
          .to(q("[data-pose='wave']"), { autoAlpha: 0, duration: 0.08 }, 0.06)
          .fromTo(q("[data-pose='fly']"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.08 }, 0.06)
          .to(q(`.${styles.bonee}`), { yPercent: -150, xPercent: 40, rotate: -8, scale: 0.7, duration: 0.75, ease: "power1.in" }, 0.04)
          .to(q("[data-doodle] path"), { drawSVG: "100% 100%", duration: 0.4 }, 0.1)
          .to(q("[data-depth='1']"), { yPercent: -80, duration: 1 }, 0)
          .to(q("[data-depth='2']"), { yPercent: -180, duration: 1 }, 0)
          .to(q(`.${styles.puffFront}`), { yPercent: -30, scale: 1.7, duration: 0.7 }, 0)
          .to(q(`.${styles.copy}`), { yPercent: -12, autoAlpha: 0, duration: 0.4 }, 0.55);

        return () => {
          split.revert();
          climb.current = 0;
        };
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.sky} aria-hidden="true">
        <SkyCanvas progress={climb} />
      </div>

      <div className={styles.decor} aria-hidden="true">
        <GlowStar className={styles.s1} data-hero-star="" data-depth="1" />
        <GlowStar className={styles.s2} data-hero-star="" data-depth="2" />
        <GlowStar className={styles.s3} data-hero-star="" data-depth="1" />
        <Sparkle className={styles.k1} data-hero-star="" data-depth="2" />
        <Sparkle className={styles.k2} data-hero-star="" data-depth="1" />
        <Bubble className={styles.b1} data-hero-star="" data-depth="2" />
        <Bubble className={styles.b2} data-hero-star="" data-depth="1" />
        <Bubble className={styles.b3} data-hero-star="" data-depth="2" />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title} data-reveal="custom">
            <span className={styles.line1}>It&rsquo;s always </span>
            <span className={styles.line2}>Day One.</span>
          </h1>

          <div className={`glass ${styles.plate}`} data-reveal="custom">
            <p className={styles.lede}>
              We&rsquo;re <strong>{site.name}</strong>, the {site.university} chapter of AWS Student Builder
              Groups. Learn cloud, build real things, and grow with students who are just as curious as you.
            </p>
            <div className={styles.actions}>
              <a className="btn btn--lg" href="#join">
                Join Haribon
                <Icon name="arrow" />
              </a>
              <a className="btn btn--lg btn--light" href="#tracks">
                Explore the tracks
              </a>
            </div>
          </div>
        </div>

        <div className={styles.stage} aria-hidden="true">
          <Doodle kind="loop" className={styles.loop} />
          <div className={styles.bonee} data-reveal="custom">
            <Image
              src="/mascots/bonee-wave.webp"
              alt=""
              width={1000}
              height={1122}
              priority
              sizes="(min-width: 1024px) 400px, 270px"
              data-pose="wave"
            />
            <Image
              src="/mascots/bonee-fly.webp"
              alt=""
              width={1100}
              height={723}
              sizes="(min-width: 1024px) 520px, 340px"
              loading="eager"
              className={styles.fly}
              data-pose="fly"
            />
          </div>
          <p className={styles.say} data-reveal="custom">
            Mabuhay, future builder!
          </p>
          <div className={styles.puffFront}>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <a href="#about" className={styles.cue}>
        <span>Scroll to take off</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5v14m-6-6 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
