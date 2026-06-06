"use client";

import { motion } from "framer-motion";
import { profile } from "../lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-[1400px] px-5 pt-32 pb-16 md:px-10 md:pt-40">
      {/* faint oversized backdrop word */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-2 select-none font-display text-stroke text-[22vw] leading-none opacity-40 md:right-10 md:text-[16vw]"
      >
        ROBOTICS
      </span>

      <div className="relative grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---- Left: identity ---- */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-7 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 border border-line bg-panel px-3 py-1.5">
              {profile.available && (
                <span className="relative flex h-2 w-2">
                  <span className="pulse-ring absolute inline-flex h-2 w-2 rounded-full bg-cyan" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
              )}
              <span className="label text-cyan">
                {profile.available ? "Available for work" : "Currently building"}
              </span>
            </span>
            <span className="label">/ {profile.location}</span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-[14vw] sm:text-[10.5vw] lg:text-[7.4vw]">
            Sahil
            <br />
            <span className="text-amber glow-amber">Jambavalikar</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-fg-dim md:text-xl"
          >
            <span className="text-fg">{profile.headline}</span> {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group relative overflow-hidden border border-amber bg-amber px-7 py-3.5 font-mono text-[0.74rem] font-semibold uppercase tracking-widest text-black transition-transform hover:-translate-y-0.5"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="border border-line-bright px-7 py-3.5 font-mono text-[0.74rem] uppercase tracking-widest text-fg transition-colors hover:border-cyan hover:text-cyan"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* ---- Right: video monitor ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
          className="hud-corner relative mx-auto w-full max-w-[340px] border border-line-bright bg-panel p-2.5"
        >
          {/* monitor header */}
          <div className="flex items-center justify-between px-1 pb-2">
            <span className="label text-[0.58rem]">CAM_01 / ARM.6DOF</span>
            <span className="flex items-center gap-1.5 label text-[0.58rem] text-danger">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-danger" /> REC
            </span>
          </div>

          <div className="relative overflow-hidden bg-black">
            <video
              className="block h-auto w-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={profile.heroVideo} type="video/mp4" />
            </video>
            {/* scanline sweep */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan/10 to-transparent"
              style={{ animation: "scan 4.5s linear infinite" }}
            />
            {/* crosshair */}
            <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-amber/40" />
            <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-amber/40" />
          </div>

          {/* telemetry footer */}
          <div className="mt-2 grid grid-cols-3 gap-px bg-line text-center">
            {[
              ["AXES", "6"],
              ["LATENCY", "<20ms"],
              ["LINK", "WS"],
            ].map(([k, v]) => (
              <div key={k} className="bg-panel py-2">
                <div className="label text-[0.5rem]">{k}</div>
                <div className="font-mono text-xs text-cyan">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 flex items-center gap-3"
      >
        <span className="label">Scroll</span>
        <span className="h-px w-16 bg-line-bright" />
        <span className="font-mono text-xs text-fg-faint">01 / 06</span>
      </motion.div>
    </section>
  );
}
