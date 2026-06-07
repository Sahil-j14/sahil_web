import Link from "next/link";
import { profile } from "../lib/content";
import { navLinks } from "../lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* mark + name */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-line-bright bg-panel font-display text-amber transition-colors group-hover:border-amber">
              {profile.initials}
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-mono text-[0.78rem] text-fg">{profile.name}</span>
              <span className="label text-[0.6rem]">{profile.role}</span>
            </span>
          </Link>

          {/* quick links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="label text-[0.62rem] hover:text-amber">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="divider-dotted my-8" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <span className="font-mono text-xs text-fg-faint">
            © {year} {profile.name}, {profile.location}
          </span>
          <Link
            href="/contact"
            className="font-mono text-xs text-fg-faint transition-colors hover:text-amber"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </footer>
  );
}
