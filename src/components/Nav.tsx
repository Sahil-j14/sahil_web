"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../lib/content";
import { navLinks } from "../lib/nav";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile drawer whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-void/85 backdrop-blur-md border-b border-line"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3.5 md:px-10">
        {/* Mark */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-line-bright bg-panel font-display text-amber transition-colors group-hover:border-amber">
            {profile.initials}
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-mono text-[0.78rem] tracking-wide text-fg">
              {profile.name}
            </span>
            <span className="label text-[0.6rem]">{profile.role}</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`label text-[0.66rem] transition-colors hover:text-amber ${
                isActive(l.href) ? "text-amber" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 border border-line-bright px-4 py-2 font-mono text-[0.7rem] uppercase tracking-widest text-fg transition-colors hover:border-amber hover:text-amber"
          >
            Résumé
            <span className="text-amber transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-line-bright lg:hidden"
        >
          <span className={`h-px w-4 bg-fg transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-4 bg-fg transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-line bg-void/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`label border-b border-line py-3.5 text-[0.74rem] hover:text-amber ${
                  isActive(l.href) ? "text-amber" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border border-amber px-4 py-3 text-center font-mono text-[0.72rem] uppercase tracking-widest text-amber"
            >
              Download Résumé ↓
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
