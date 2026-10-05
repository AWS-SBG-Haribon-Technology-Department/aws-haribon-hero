import styles from "./CloudEdge.module.css";

/**
 * Scalloped cloud bank used where a light section meets a deep one.
 * `side="top"` hangs from the top edge; `side="bottom"` rises from below.
 * Bumps are generated deterministically so server and client agree.
 */
function bumps(seed: number) {
  const W = 1440;
  const out: string[] = [`M0 -8 H${W} V40`];
  let x = W;
  let i = 0;
  while (x > 0) {
    const r = 34 + ((seed * (i + 3) * 37) % 46);
    const nx = Math.max(0, x - r * 1.7);
    const sag = 40 + ((seed * (i + 7) * 13) % 26);
    out.push(`A ${r} ${r * 0.8} 0 0 1 ${nx.toFixed(0)} ${sag}`);
    x = nx;
    i++;
  }
  out.push("Z");
  return out.join(" ");
}

export function CloudEdge({
  side = "top",
  color = "var(--white)",
  seed = 5,
  className,
}: {
  side?: "top" | "bottom";
  color?: string;
  seed?: number;
  className?: string;
}) {
  return (
    <svg
      className={`${styles.edge} ${side === "bottom" ? styles.bottom : styles.top} ${className ?? ""}`}
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={bumps(seed)} fill={color} />
      <path d={bumps(seed + 4)} fill={color} opacity="0.55" transform="translate(0 16)" />
    </svg>
  );
}
