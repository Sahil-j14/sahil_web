import { profile } from "../lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-line bg-panel/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-amber">06</span>
            <span className="h-px w-8 bg-line-bright" />
            <span className="label">Open a channel</span>
          </div>
          <h2 className="mt-6 max-w-4xl font-display text-6xl leading-[0.95] md:text-8xl">
            Let&apos;s build
            <br />
            <span className="text-amber glow-amber">something that moves.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Email", v: profile.email, href: `mailto:${profile.email}` },
              { k: "Phone", v: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
              { k: "LinkedIn", v: "in/sahil-jambavalikar", href: profile.linkedin },
              { k: "Résumé", v: "Download PDF ↓", href: profile.resumeUrl },
            ].map((c) => (
              <a
                key={c.k}
                href={c.href}
                target={c.href.startsWith("http") || c.href.endsWith(".pdf") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="panel group flex flex-col justify-between gap-8 p-6 transition-colors hover:border-amber"
              >
                <span className="label text-[0.6rem]">{c.k}</span>
                <span className="break-words font-mono text-sm text-fg transition-colors group-hover:text-amber">
                  {c.v}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-7 sm:flex-row sm:items-center">
          <span className="font-mono text-xs text-fg-faint">
            © {year} {profile.name}, {profile.location}
          </span>
          <span className="font-mono text-xs text-fg-faint">
            Designed & engineered with precision · Robotics first
          </span>
        </div>
      </div>
    </footer>
  );
}
