import { profile, languages } from "../lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 pt-28 pb-24 md:px-10 md:pt-36 md:pb-32">
      <SectionHead index="02" kicker="Profile" title="About" />

      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-2xl leading-snug text-fg md:text-[2rem] md:leading-[1.25]">
            I&apos;m a mechatronics engineer, and I like working where{" "}
            <span className="text-amber">mechanical design</span> meets{" "}
            <span className="text-cyan">embedded firmware</span>. I design the
            mechanism, print the parts and write the code that brings the whole
            thing to life.
          </p>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-fg-dim md:text-lg">
            Robots are my thing. Arms, a walking humanoid, a robotic hand, connected
            hardware. I build fast, break things, fix them and build again, and I
            care that what I make actually holds up in the real world, not just on
            the bench. When I&apos;m not on client work, you&apos;ll find me winning
            at some of India&apos;s biggest engineering festivals.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-amber px-6 py-3 font-mono text-[0.72rem] uppercase tracking-widest text-amber transition-colors hover:bg-amber hover:text-black"
            >
              Read full résumé ↓
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line-bright px-6 py-3 font-mono text-[0.72rem] uppercase tracking-widest text-fg transition-colors hover:border-cyan hover:text-cyan"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>

        {/* spec sheet */}
        <Reveal delay={0.1}>
          <div className="panel hud-corner p-6">
            <div className="label mb-5 text-[0.6rem]">// spec_sheet.json</div>
            <dl className="divide-y divide-line font-mono text-sm">
              {[
                ["role", profile.role],
                ["focus", "Robotics · Embedded · Mechatronics"],
                ["education", "B.E. at New Horizon Inst. of Tech."],
                ["status", "Freelance founder, since 2024"],
                ["base", profile.location],
                ["languages", languages.join(" · ")],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:justify-between sm:gap-6">
                  <dt className="text-fg-faint">{k}</dt>
                  <dd className="text-right text-fg">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
