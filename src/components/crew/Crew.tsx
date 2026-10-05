import Image from "next/image";
import { officers } from "@/content/officers";
import { site } from "@/content/site";
import type { Officer } from "@/types/content";
import styles from "./Crew.module.css";

const initials = (name: string) => {
  const words = name.replace(/[^\p{L}\s]/gu, " ").split(/\s+/).filter(Boolean);
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

function Badge({ o }: { o: Officer }) {
  return (
    <span className={styles.badge} aria-hidden="true">
      {o.photo ? (
        <Image src={o.photo} alt="" width={160} height={160} />
      ) : (
        <span className={styles.monogram}>{initials(o.name)}</span>
      )}
    </span>
  );
}

function Wings() {
  return (
    <svg className={styles.wings} viewBox="0 0 64 20" aria-hidden="true">
      <path
        d="M32 6c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5ZM25 10C18 4 9 3 1 4c5 2 9 4 11 6-3 0-6 0-8 1 6 2 13 3 20 2M39 10c7-6 16-7 24-6-5 2-9 4-11 6 3 0 6 0 8 1-6 2-13 3-20 2"
        fill="currentColor"
      />
    </svg>
  );
}

export function Crew() {
  const execs = officers.filter((o) => o.tier === "executive");
  const chiefs = officers.filter((o) => o.tier === "chief");

  return (
    <section id="crew" className={styles.crew} aria-labelledby="crew-title">
      <div className="container">
        <header className={styles.head}>
          <div className={styles.headCopy}>
            <h2 id="crew-title" data-reveal>
              Meet the <em>flight crew.</em>
            </h2>
            <p className="lede" data-reveal>
              The {site.rosterTerm} executive board: student officers who keep Haribon in the air. Each one leads a
              department, with vice-chiefs and committee members flying beside them.
            </p>
          </div>
          <div className={styles.salute} data-reveal>
            <Image src="/mascots/bonee-salute.webp" alt="" width={1000} height={1126} sizes="200px" />
          </div>
        </header>

        <h3 className="visually-hidden">Executive department</h3>
        <ul role="list" className={styles.execs}>
          {execs.map((o) => (
            <li key={o.name} className={styles.execCard} data-reveal>
              <Wings />
              <Badge o={o} />
              <div className={styles.who}>
                <p className={styles.name}>{o.name}</p>
                <p className={styles.role}>{o.role}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="visually-hidden">Department chiefs</h3>
        <ul role="list" className={styles.chiefs}>
          {chiefs.map((o) => (
            <li key={o.name} className={styles.card} data-reveal>
              <Badge o={o} />
              <div className={styles.who}>
                <p className={styles.name}>{o.name}</p>
                <p className={styles.role}>{o.role}</p>
                <p className={styles.dept}>{o.department}</p>
              </div>
            </li>
          ))}
          <li className={`${styles.card} ${styles.more}`} data-reveal>
            <p>
              Plus vice-chiefs and committees across <strong>8 departments</strong>.
            </p>
            <span className="btn btn--quiet" aria-disabled="true">
              Full roster coming soon
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
