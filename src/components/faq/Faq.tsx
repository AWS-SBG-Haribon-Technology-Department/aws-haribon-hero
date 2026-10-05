import Image from "next/image";
import { faq } from "@/content/faq";
import { site } from "@/content/site";
import { Icon } from "@/components/Icon";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.aside}>
          <h2 id="faq-title" data-reveal>
            Questions, <em>answered.</em>
          </h2>
          <p className="lede" data-reveal>
            The short version: if you&rsquo;re a curious PLM student, you belong here. No experience needed.
          </p>
          <div className={styles.ask} data-reveal>
            <Image src="/mascots/bonee-point.webp" alt="" width={1000} height={879} sizes="140px" />
            <div>
              <p className={styles.askTitle}>Still wondering about something?</p>
              {site.email && (
                <a href={`mailto:${site.email}`} className={styles.mail}>
                  <Icon name="mail" />
                  {site.email}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={styles.groups}>
          {faq.map((group) => (
            <div key={group.title} className={styles.group} data-reveal>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <details key={item.q} className={styles.item}>
                    <summary>
                      <span>{item.q}</span>
                      <span className={styles.toggle} aria-hidden="true">
                        <Icon name="plus" />
                      </span>
                    </summary>
                    <div className={styles.answer}>
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
