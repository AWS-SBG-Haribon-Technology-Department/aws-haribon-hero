import type { CSSProperties, SVGProps } from "react";
import styles from "./Decor.module.css";

type DecorProps = { className?: string; style?: CSSProperties } & { [data: `data-${string}`]: string | undefined };

const cx = (...c: (string | undefined | false)[]) => c.filter(Boolean).join(" ");

/** Soft, rounded five-point star with the brand's sunbeam glow (guide p.8). */
export function GlowStar({ className, style, ...rest }: DecorProps) {
  return (
    <svg viewBox="0 0 100 100" className={cx(styles.star, className)} style={style} aria-hidden="true" data-decor {...rest}>
      <path
        d="M50 8 L61.8 35.6 L91.8 38.2 L69.1 57.9 L75.9 87.3 L50 71.6 L24.1 87.3 L30.9 57.9 L8.2 38.2 L38.2 35.6 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Four-point sparkle, the doodle-sheet accent. */
export function Sparkle({ className, style, ...rest }: DecorProps) {
  return (
    <svg viewBox="0 0 40 40" className={cx(styles.sparkle, className)} style={style} aria-hidden="true" data-decor {...rest}>
      <path
        d="M20 2 C21.6 13.5 26.5 18.4 38 20 C26.5 21.6 21.6 26.5 20 38 C18.4 26.5 13.5 21.6 2 20 C13.5 18.4 18.4 13.5 20 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Bubble({ className, style, ...rest }: DecorProps) {
  return <span className={cx(styles.bubble, className)} style={style} aria-hidden="true" data-decor {...rest} />;
}

/** Cumulus puff built from overlapping circles, lit from above. */
export function CloudPuff({ className, style, variant = "a" }: DecorProps & { variant?: "a" | "b" }) {
  return (
    <svg
      viewBox="0 0 400 160"
      className={cx(styles.puff, className)}
      style={style}
      aria-hidden="true"
      data-decor
      preserveAspectRatio="xMidYMax meet"
    >
      {variant === "a" ? (
        <g fill="url(#g-puff)">
          <circle cx="92" cy="104" r="56" />
          <circle cx="168" cy="78" r="70" />
          <circle cx="250" cy="92" r="60" />
          <circle cx="318" cy="112" r="44" />
          <circle cx="40" cy="128" r="32" />
          <rect x="30" y="112" width="330" height="48" rx="24" />
        </g>
      ) : (
        <g fill="url(#g-puff)">
          <circle cx="70" cy="116" r="40" />
          <circle cx="140" cy="88" r="58" />
          <circle cx="214" cy="70" r="66" />
          <circle cx="292" cy="98" r="54" />
          <circle cx="352" cy="126" r="34" />
          <rect x="40" y="118" width="340" height="42" rx="21" />
        </g>
      )}
    </svg>
  );
}

/** Shared gradients, rendered once per page so ids stay unique. */
export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="g-puff" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.62" stopColor="#f6fbff" />
          <stop offset="1" stopColor="#d6e8f8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Hanging lantern, the brand's warm narrative object (guide p.8). */
export function Lantern({ className, style, ...rest }: DecorProps) {
  return (
    <svg viewBox="0 0 120 300" className={cx(styles.lantern, className)} style={style} aria-hidden="true" data-decor {...rest}>
      <defs>
        <radialGradient id="lantern-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff6c2" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#fff176" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff176" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lantern-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffbe0" />
          <stop offset="1" stopColor="#ffe28a" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="214" r="62" fill="url(#lantern-glow)" />
      <line x1="60" y1="0" x2="60" y2="140" stroke="#173f5f" strokeWidth="2.5" />
      <g fill="#2a4a68">
        <circle cx="60" cy="146" r="7" />
        <path d="M44 158 Q60 146 76 158 L84 170 L36 170 Z" />
        <rect x="32" y="170" width="56" height="7" rx="3" />
        <path d="M38 177 L82 177 L78 252 L42 252 Z" fillOpacity="0.92" />
        <rect x="34" y="252" width="52" height="8" rx="3" />
        <path d="M44 260 L76 260 L70 270 L50 270 Z" />
      </g>
      <path d="M44 183 L76 183 L73 246 L47 246 Z" fill="url(#lantern-flame)" />
      <ellipse cx="60" cy="226" rx="10" ry="14" fill="#fffdf2" />
      <line x1="60" y1="183" x2="60" y2="246" stroke="#2a4a68" strokeWidth="3" />
    </svg>
  );
}

/** Folded paper plane: the chapter's motif for messages and take-off. */
export function PaperPlane({ className, style, ...rest }: DecorProps) {
  return (
    <svg viewBox="0 0 120 72" className={cx(styles.plane, className)} style={style} aria-hidden="true" data-decor {...rest}>
      <path d="M2 34 L118 4 L46 46 Z" fill="#ffffff" />
      <path d="M46 46 L118 4 L60 66 Z" fill="#dbe9f7" />
      <path d="M46 46 L52 70 L60 66 Z" fill="#b8d2ec" />
      <path d="M2 34 L46 46 L118 4" fill="none" stroke="#c7dcf0" strokeWidth="1" />
    </svg>
  );
}

/** Glowing hand-drawn linework, drawn on with DrawSVG where motion is allowed. */
export function Doodle({
  kind,
  className,
  style,
  ...rest
}: { className?: string; style?: CSSProperties; kind: "loop" | "swoosh" | "arrow" | "underline" } & SVGProps<SVGSVGElement>) {
  const paths: Record<typeof kind, { vb: string; d: string[] }> = {
    loop: {
      vb: "0 0 320 160",
      d: ["M6 140 C70 136 112 112 138 82 C160 56 150 22 124 24 C96 26 98 70 132 84 C182 104 250 64 314 18"],
    },
    swoosh: {
      vb: "0 0 300 80",
      d: ["M6 62 C64 20 132 8 196 22 C236 31 262 46 294 40"],
    },
    arrow: {
      vb: "0 0 200 140",
      d: ["M8 16 C58 6 120 26 146 64 C160 86 162 104 158 124", "M136 106 L158 128 L178 104"],
    },
    underline: {
      vb: "0 0 300 30",
      d: ["M4 20 C70 8 150 6 296 14", "M30 26 C100 18 170 17 250 22"],
    },
  };
  const p = paths[kind];
  return (
    <svg
      viewBox={p.vb}
      className={cx(styles.doodle, className)}
      style={style}
      fill="none"
      aria-hidden="true"
      data-decor
      data-doodle
      {...rest}
    >
      {p.d.map((d) => (
        <path key={d} d={d} stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}
