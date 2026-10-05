import type { Metadata, Viewport } from "next";
import { Montserrat, Fira_Sans } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

// Stand-in for Amazon Ember until licensed webfont files are supplied.
const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.universityShort}`,
  description:
    "The PLM chapter of AWS Student Builder Groups: a student-led community where Pamantasan ng Lungsod ng Maynila students learn cloud, build real things, and grow together.",
  openGraph: {
    title: site.name,
    description: "It's always Day One. Learn cloud, build real things, and grow together at PLM.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#3a92ef",
  colorScheme: "light",
};

/**
 * Runs before first paint. Reveal targets are hidden only when motion is
 * allowed AND JavaScript is running; if GSAP has not taken over within a
 * few seconds the guard lifts and everything renders in its final state.
 */
const motionGuard = `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion-ok');setTimeout(function(){if(!d.dataset.motionReady)d.classList.remove('motion-ok')},4000)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fira.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionGuard }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
