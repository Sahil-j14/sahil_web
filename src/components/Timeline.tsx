import { achievements } from "../lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Timeline() {
  return (
    <section id="log" className="mx-auto max-w-[1400px] px-5 pt-28 pb-24 md:px-10 md:pt-36 md:pb-32">
      <SectionHead index="04" kicker="Track Record" title="Log" />

      <div className="relative">
        {/* vertical rail */}
        <span className="absolute left-0 top-2 bottom-2 w-px bg-line md:left-[112px]" />

        <ul className="space-y-1">
          {achievements.map((a, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <li className="group relative grid grid-cols-[auto_1fr] items-start gap-6 py-5 md:grid-cols-[96px_auto_1fr] md:gap-8">
                {/* year */}
                <span className="font-display text-2xl text-fg-faint transition-colors group-hover:text-amber md:text-3xl">
                  {a.year}
                </span>
                {/* node */}
                <span className="relative mt-2 hidden h-3 w-3 md:block">
                  <span className="absolute inset-0 rotate-45 border border-line-bright bg-void transition-colors group-hover:border-amber group-hover:bg-amber" />
                </span>
                {/* content */}
                <div className="pl-6 md:pl-0">
                  <h3 className="text-lg font-medium text-fg md:text-xl">{a.title}</h3>
                  <p className="mt-1 text-sm text-fg-dim">{a.note}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
