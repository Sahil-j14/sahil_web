import { skillGroups, certifications } from "../lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-5 pt-28 pb-24 md:px-10 md:pt-36 md:pb-32">
      <SectionHead index="03" kicker="Capabilities" title="Systems" />

      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 0.08}>
            <div className="panel hud-corner h-full p-7">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-mono text-sm uppercase tracking-widest text-fg">
                  {g.label}
                </h3>
                <span className="font-mono text-xs text-amber">
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="space-y-px">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center justify-between gap-3 border-t border-line py-3 font-mono text-sm text-fg-dim transition-colors hover:text-cyan"
                  >
                    <span>{it}</span>
                    <span className="text-fg-faint">›</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 panel p-7">
          <div className="label mb-5 text-[0.6rem]">// certifications & training</div>
          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <div key={c} className="flex items-start gap-3 text-sm text-fg-dim">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 border border-amber" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
