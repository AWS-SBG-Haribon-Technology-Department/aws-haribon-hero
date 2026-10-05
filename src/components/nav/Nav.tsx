"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { Icon } from "@/components/Icon";
import styles from "./Nav.module.css";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  // Glass firms up once the hero is behind us.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Current-section cue.
  useEffect(() => {
    const ids = new Set<string>(nav.map((n) => n.href.slice(1)));
    const els = Array.from(document.querySelectorAll<HTMLElement>("main > section, main > div > section"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(ids.has(e.target.id) ? e.target.id : null);
        }
      },
      { rootMargin: "-45% 0px -54% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  }, []);

  // Modal sheet: lock scroll, trap focus, close on Escape.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const sheet = sheetRef.current;
    const focusables = () =>
      Array.from(sheet?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const list = focusables();
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && close(false);
    mq.addEventListener("change", onMq);
    return () => {
      root.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open, close]);

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined}>
      <div className={styles.bar}>
        <a href="#top" className={styles.brand} aria-label={`${site.name}, back to top`}>
          <span className={styles.mark} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mascots/bonee-head.webp" alt="" width={40} height={40} />
          </span>
          <span className={styles.wordmark} aria-hidden="true">
            <span className={styles.program}>AWS Student Builder Group</span>
            <span className={styles.chapter}>Haribon</span>
          </span>
        </a>

        <nav aria-label="Sections" className={styles.links}>
          <ul role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.link}
                  aria-current={active === item.href.slice(1) ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#join" className={`btn ${styles.cta}`}>
          Join Haribon
        </a>

        <button
          ref={triggerRef}
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          <Icon name="menu" />
          <span>Menu</span>
        </button>
      </div>

      <div
        id="site-menu"
        ref={sheetRef}
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
      >
        <div className={styles.sheetTop}>
          <span className={styles.sheetTitle}>Haribon</span>
          <button type="button" className={styles.closeBtn} onClick={() => close()}>
            <Icon name="close" />
            <span>Close</span>
          </button>
        </div>
        <nav aria-label="Sections">
          <ul role="list" className={styles.sheetList}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => close(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#join" className="btn btn--lg btn--light" onClick={() => close(false)}>
          Join Haribon
          <Icon name="arrow" />
        </a>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.sheetBonee} src="/mascots/bonee-fly.webp" alt="" width={360} height={237} />
      </div>
    </header>
  );
}
