"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gallery, type MediaItem } from "../lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import MediaFrame from "./MediaFrame";

export default function Gallery() {
  const [active, setActive] = useState<MediaItem | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <SectionHead index="05" kicker="Build Archive" title="Gallery" />

      {gallery.length === 0 ? (
        <Reveal>
          <p className="font-mono text-sm text-fg-dim">No media yet, coming soon.</p>
        </Reveal>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((m, i) => (
            <Reveal key={m.src + i} delay={(i % 4) * 0.06}>
              <button
                onClick={() => setActive(m)}
                className="group relative block w-full overflow-hidden border border-line bg-panel text-left transition-colors hover:border-amber"
              >
                <MediaFrame media={m} className="aspect-square transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <div className="flex items-center gap-1.5">
                    <span className="label text-[0.5rem] text-amber">
                      {m.type === "video" ? "▶ VIDEO" : "▣ IMAGE"}
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-xs text-fg">{m.title}</div>
                </div>
                <span className="hud-corner pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      )}

      {/* lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-void/90 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.94, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1] as const }}
              onClick={(e) => e.stopPropagation()}
              className="hud-corner relative max-h-[88vh] w-full max-w-3xl border border-line-bright bg-panel p-3"
            >
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="label text-[0.6rem] text-amber">{active.title}</span>
                <button
                  onClick={() => setActive(null)}
                  className="font-mono text-sm text-fg-dim transition-colors hover:text-amber"
                  aria-label="Close"
                >
                  [ ESC ✕ ]
                </button>
              </div>
              <MediaFrame media={active} className="max-h-[70vh]" />
              <p className="mt-3 px-1 text-sm text-fg-dim">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
