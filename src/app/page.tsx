import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Network } from "@/components/network/Network";
import { Tracks } from "@/components/tracks/Tracks";
import { Logbook } from "@/components/logbook/Logbook";
import { Crew } from "@/components/crew/Crew";
import { Faq } from "@/components/faq/Faq";
import { Join } from "@/components/join/Join";
import { Footer } from "@/components/footer/Footer";
import { RevealController } from "@/components/RevealController";
import { SvgDefs } from "@/components/decor/Decor";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SvgDefs />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Network />
        <Tracks />
        <Logbook />
        <Crew />
        <Faq />
        <Join />
      </main>
      <Footer />
      <RevealController />
    </>
  );
}
