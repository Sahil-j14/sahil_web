import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

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
