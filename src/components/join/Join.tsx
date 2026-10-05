"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, MOTION, useGSAP } from "@/lib/gsap";
import { site } from "@/content/site";
import { isPlaceholder } from "@/types/content";
import { CloudEdge } from "@/components/decor/CloudEdge";
import { GlowStar, Sparkle } from "@/components/decor/Decor";
import { Icon } from "@/components/Icon";
import styles from "./Join.module.css";

export function Join() {
  const root = useRef<HTMLElement>(null);
  const instagram = site.socials.find((s) => s.kind === "instagram");
  const formReady = !isPlaceholder(site.joinFormUrl);
  // Until the official form is approved, the join path is the channel where
  // membership calls are announced first.
  const joinHref = formReady ? site.joinFormUrl : (instagram?.href ?? "#join");
  const askHref = !isPlaceholder(site.inquiryFormUrl)
    ? site.inquiryFormUrl
    : site.email
      ? `mailto:${site.email}`
      : "#faq";

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION.ok, () => {
        const q = gsap.utils.selector(root);
        gsap.fromTo(
          q(`.${styles.rays}`),
          { rotate: -14 },
          { rotate: 10, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1 } },
        );
        gsap.fromTo(
          q(`.${styles.sun}`),
          { yPercent: 40, scale: 0.85 },
          { yPercent: 0, scale: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "center center", scrub: 1 } },
        );

        const pass = q(`.${styles.pass}`)[0];
        gsap
          .timeline({ scrollTrigger: { trigger: pass, start: "top 80%", once: true } })
          .fromTo(pass, { autoAlpha: 0, y: 80, rotate: -3 }, { autoAlpha: 1, y: 0, rotate: 0, duration: 1.2, ease: "expo.out" })
          .fromTo(
            q(`.${styles.stamp}`),
            { autoAlpha: 0, scale: 2.4, rotate: -40 },
            { autoAlpha: 1, scale: 1, rotate: -14, duration: 0.5, ease: "back.out(2.5)" },
            0.65,
          )
          .fromTo(
            q(`.${styles.bonee}`),
            { autoAlpha: 0, yPercent: 50, rotate: 10 },
            { autoAlpha: 1, yPercent: 0, rotate: 0, duration: 1.1, ease: "back.out(1.6)" },
            0.3,
          );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="join" className={styles.join} aria-labelledby="join-title">
      <div className={styles.sky} aria-hidden="true">
        <div className={styles.rays} />
        <div className={styles.sun} />
        <GlowStar className={styles.st1} />
        <GlowStar className={styles.st2} />
        <Sparkle className={styles.sp1} />
        <Sparkle className={styles.sp2} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <h2 id="join-title" data-reveal>
            Your <em>Day One</em> starts here.
          </h2>
          <p className={styles.lede} data-reveal>
            No experience required, just curiosity. Grab a seat; we&rsquo;ll figure out the rest together.
          </p>
        </div>

        <div className={styles.stage}>
          <div className={styles.passShadow}>
          <article className={styles.pass} aria-labelledby="pass-title" data-reveal="custom">
            <div className={styles.main}>
              <header className={styles.passHead}>
                <span className={styles.airline}>Haribon</span>
                <span id="pass-title" className={styles.passType}>
                  Boarding pass
                </span>
              </header>

              <div className={styles.route}>
                <div>
                  <span className={styles.code}>CUR</span>
                  <span className={styles.city}>Curious</span>
                </div>
                <svg className={styles.routeLine} viewBox="0 0 120 24" aria-hidden="true">
                  <path d="M2 18 Q60 -6 118 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" />
                  <path d="M54 6.5 L68 4 L60 10 Z" fill="currentColor" />
                </svg>
                <div className={styles.to}>
                  <span className={styles.code}>BLD</span>
                  <span className={styles.city}>Builder</span>
                </div>
              </div>

              <dl className={styles.fields}>
                <div>
                  <dt>Passenger</dt>
                  <dd>You</dd>
                </div>
                <div>
                  <dt>Flight</dt>
                  <dd>SBG {site.rosterTerm.replace("–", "/").replace(/20(\d\d)/g, "$1")}</dd>
                </div>
                <div>
                  <dt>Gate</dt>
                  <dd>{site.universityShort}</dd>
                </div>
                <div>
                  <dt>Seat</dt>
                  <dd>Any track</dd>
                </div>
              </dl>
            </div>

            <div className={styles.stub}>
              <a
                className="btn btn--lg"
                href={joinHref}
                {...(!formReady ? { target: "_blank", rel: "noopener" } : {})}
              >
                Join Haribon
                <Icon name={formReady ? "arrow" : "external"} />
                {!formReady && <span className="visually-hidden"> (opens Instagram in a new tab)</span>}
              </a>
              <a className="btn btn--quiet" href={askHref}>
                Ask a question
              </a>
              <p className={styles.note}>
                {formReady
                  ? "Applications go through the chapter’s official form."
                  : `Membership calls go out on Instagram first. Follow ${instagram?.handle ?? "us"} so you don’t miss boarding.`}
              </p>
              <span className={styles.barcode} aria-hidden="true" />
            </div>

            <span className={styles.stamp} aria-hidden="true">
              Day
              <br />
              One
            </span>
          </article>
          </div>

          <div className={styles.bonee} aria-hidden="true">
            <Image src="/mascots/bonee-cheer.webp" alt="" width={1000} height={848} sizes="(min-width: 1024px) 300px, 200px" />
          </div>
        </div>
      </div>

      <CloudEdge side="bottom" seed={9} />
    </section>
  );
}
