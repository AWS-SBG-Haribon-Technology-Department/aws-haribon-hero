import { nav, site } from "@/content/site";
import { isPlaceholder } from "@/types/content";
import { Icon } from "@/components/Icon";
import { CloudEdge } from "@/components/decor/CloudEdge";
import styles from "./Footer.module.css";

export function Footer() {
  const socials = site.socials.filter((s) => !isPlaceholder(s.href));
  const year = 2026;

  return (
    <footer className={styles.footer}>
      <CloudEdge side="top" seed={13} />
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mascots/bonee-head.webp" alt="" width={56} height={56} />
          </span>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.tagline}>{site.tagline}</p>
          <p className={styles.affiliation}>{site.affiliation}</p>
        </div>

        <nav aria-label="Footer" className={styles.cols}>
          <div>
            <h2 className={styles.colTitle}>Explore</h2>
            <ul role="list">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.colTitle}>Get in touch</h2>
            <ul role="list">
              <li>
                <a href="#join">Join Haribon</a>
              </li>
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className={styles.iconLink}>
                    <Icon name="mail" />
                    Email us
                  </a>
                </li>
              )}
              {socials.map((s) => (
                <li key={s.kind}>
                  <a href={s.href} className={styles.iconLink} target="_blank" rel="noopener">
                    <Icon name={s.kind} />
                    {s.handle}
                    <span className="visually-hidden"> on {s.label} (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {site.name} · {site.university}
        </p>
        <p>Amazon Web Services, AWS, and related marks are trademarks of Amazon.com, Inc. or its affiliates.</p>
      </div>

      <p className={styles.giant} aria-hidden="true">
        Haribon
      </p>
    </footer>
  );
}
