import { projects } from "../lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import MediaFrame from "./MediaFrame";

const statusColor: Record<string, string> = {
  Active: "text-cyan border-cyan/40",
  Shipped: "text-amber border-amber/40",
  Prototype: "text-fg-dim border-line-bright",
};

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-5 pt-28 pb-24 md:px-10 md:pt-36 md:pb-32">
      <SectionHead index="01" kicker="Selected Builds" title="Work" />

      <div className="flex flex-col gap-6">
        {projects.map((p, i) => {
          const hasMedia = Boolean(p.media);
          return (
            <Reveal key={p.id} delay={i * 0.05}>
              <article
                className={`panel group grid gap-0 transition-colors hover:border-line-bright lg:grid-cols-2 ${
                  hasMedia ? "" : "lg:grid-cols-1"
                }`}
              >
                {p.media && (
                  <div className="relative order-1 border-b border-line lg:order-none lg:border-b-0 lg:border-r">
                    <MediaFrame media={p.media} className="aspect-[4/3] h-full lg:aspect-auto" />
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 border border-line bg-void/80 px-2 py-1 backdrop-blur">
                      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-cyan" />
                      <span className="label text-[0.55rem] text-cyan">LIVE FEED</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col p-7 md:p-10">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-fg-faint">
                      P.{String(i + 1).padStart(2, "0")} / {p.year}
                    </span>
                    <span className={`border px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest ${statusColor[p.status]}`}>
                      ● {p.status}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl leading-none text-fg md:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-mono text-sm text-amber">{p.tagline}</p>

                  <p className="mt-5 text-[0.95rem] leading-relaxed text-fg-dim">
                    {p.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-fg-dim">
                        <span className="mt-2 h-px w-3 shrink-0 bg-amber" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-line bg-panel-2 px-2.5 py-1 font-mono text-[0.68rem] text-fg-dim"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
