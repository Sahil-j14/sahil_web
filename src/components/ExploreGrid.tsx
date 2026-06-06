import Link from "next/link";
import Reveal from "./Reveal";

const tabs = [
  { href: "/work", index: "01", label: "Work", desc: "Robots I've designed, built and shipped." },
  { href: "/about", index: "02", label: "About", desc: "Who I am and how I like to work." },
  { href: "/systems", index: "03", label: "Systems", desc: "The hardware and tools I build with." },
  { href: "/log", index: "04", label: "Log", desc: "Wins, milestones and training." },
  { href: "/gallery", index: "05", label: "Gallery", desc: "Photos and videos of the builds." },
  { href: "/contact", index: "06", label: "Contact", desc: "Start a conversation with me." },
];

export default function ExploreGrid() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
      <Reveal>
        <div className="mb-10 flex items-center gap-3">
          <span className="label">Sections</span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-xs text-fg-faint">06 tabs</span>
        </div>
      </Reveal>

      <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {tabs.map((t, i) => (
          <Reveal key={t.href} delay={(i % 3) * 0.06}>
            <Link
              href={t.href}
              className="group flex h-full flex-col justify-between gap-12 bg-panel p-7 transition-colors hover:bg-panel-2 md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-amber">{t.index}</span>
                <span className="font-mono text-lg text-fg-faint transition-all group-hover:translate-x-1 group-hover:text-amber">
                  →
                </span>
              </div>
              <div>
                <h3 className="font-display text-4xl text-fg transition-colors group-hover:text-amber md:text-5xl">
                  {t.label}
                </h3>
                <p className="mt-3 text-sm text-fg-dim">{t.desc}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
