import { stats } from "../lib/content";

const ticker = [
  "6-DOF ROBOTIC ARM",
  "BIPEDAL HUMANOID",
  "IoT TELEMATICS",
  "ESP32 · RTOS",
  "WEBSOCKET CONTROL",
  "ESP-NOW WIRELESS",
  "FUSION 360 · SOLIDWORKS",
  "2× IIT BOMBAY CHAMPION",
];

export default function Marquee() {
  return (
    <section className="border-y border-line bg-panel/40">
      {/* numeric stat bar */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-7 md:px-8 ${i < 2 ? "border-b border-line md:border-b-0" : ""} ${
              i % 2 === 0 ? "border-r border-line md:border-r-0" : ""
            }`}
          >
            <div className="font-display text-5xl text-amber md:text-6xl">{s.value}</div>
            <div className="mt-2 font-mono text-[0.74rem] uppercase tracking-wider text-fg">
              {s.label}
            </div>
            <div className="mt-0.5 text-xs text-fg-faint">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* scrolling keyword ticker */}
      <div className="flex overflow-hidden border-t border-line py-3">
        <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-fg-dim">{t}</span>
              <span className="text-amber">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
