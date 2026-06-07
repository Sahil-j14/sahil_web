import { profile } from "../lib/content";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-5 pt-28 pb-24 md:px-10 md:pt-36 md:pb-32">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-amber">06</span>
          <span className="h-px w-8 bg-line-bright" />
          <span className="label">Open a channel</span>
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[0.95] md:text-8xl">
          Let&apos;s build
          <br />
          <span className="text-amber glow-amber">something that moves.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg text-fg-dim">
          Got a robot to build, a part to prototype, or a role in mind? Send me a
          message below. It comes straight to my inbox and I reply fast.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4">
            <div className="panel flex items-center gap-3 p-6">
              {profile.available && (
                <span className="relative flex h-2.5 w-2.5">
                  <span className="pulse-ring absolute inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
                </span>
              )}
              <div>
                <div className="label text-cyan">
                  {profile.available ? "Available for work" : "Currently building"}
                </div>
                <div className="mt-0.5 font-mono text-xs text-fg-faint">{profile.location}</div>
              </div>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="panel group flex items-center justify-between gap-4 p-6 transition-colors hover:border-amber"
            >
              <div>
                <span className="label text-[0.6rem]">Connect</span>
                <div className="mt-2 font-mono text-sm text-fg transition-colors group-hover:text-amber">
                  LinkedIn
                </div>
              </div>
              <span className="text-fg-faint transition-transform group-hover:translate-x-1 group-hover:text-amber">↗</span>
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="panel group flex items-center justify-between gap-4 p-6 transition-colors hover:border-amber"
            >
              <div>
                <span className="label text-[0.6rem]">Background</span>
                <div className="mt-2 font-mono text-sm text-fg transition-colors group-hover:text-amber">
                  Download résumé
                </div>
              </div>
              <span className="text-fg-faint transition-transform group-hover:translate-y-1 group-hover:text-amber">↓</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
