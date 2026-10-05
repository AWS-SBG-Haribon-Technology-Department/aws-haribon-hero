import { updates } from "@/content/updates";
import { site } from "@/content/site";
import { PaperPlane } from "@/components/decor/Decor";
import { Icon } from "@/components/Icon";
import styles from "./Logbook.module.css";

export function Logbook() {
  const instagram = site.socials.find((s) => s.kind === "instagram");

  return (
    <section id="logbook" className={styles.logbook} aria-labelledby="logbook-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.feed}>
          <h2 id="logbook-title" data-reveal>
            From the <em>logbook.</em>
          </h2>
          <p className="lede" data-reveal>
            What the chapter has been up to lately, newest first.
          </p>

          <ol role="list" className={styles.list}>
            {updates.map((u) => (
              <li key={u.id} className={styles.entry} data-reveal>
                <div className={styles.meta}>
                  <time dateTime={u.date} className={styles.date}>
                    {u.displayDate}
                  </time>
                  <span className={styles.badge}>{u.category}</span>
                </div>
                <div className={styles.body}>
                  <h3>{u.title}</h3>
                  <p>{u.summary}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className={styles.more} data-reveal="fade">
            <span className="btn btn--quiet" aria-disabled="true">
              More updates coming soon
            </span>
          </p>
        </div>

        <aside className={styles.hangar} aria-labelledby="hangar-title" data-reveal>
          <div className={styles.hangarSky} aria-hidden="true">
            <PaperPlane className={styles.p1} />
            <PaperPlane className={styles.p2} />
            <span className={styles.runway} />
          </div>
          <div className={styles.hangarCopy}>
            <h3 id="hangar-title">The project hangar opens soon.</h3>
            <p>
              This year&rsquo;s first builds from the ten tracks will land here once they ship: real projects by PLM
              students, with what they used and what they learned.
            </p>
            {instagram && (
              <a className={styles.follow} href={instagram.href} rel="noopener" target="_blank">
                <Icon name="instagram" />
                Follow {instagram.handle} for launches
                <span className="visually-hidden"> (opens Instagram in a new tab)</span>
              </a>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
