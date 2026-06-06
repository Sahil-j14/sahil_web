import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

// The home page shows everything in one scroll. The top tabs still open each
// section as its own dedicated page (/work, /about, /systems, /log, etc.).
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Skills />
      <Timeline />
      <Gallery />
      <Contact />
    </>
  );
}
