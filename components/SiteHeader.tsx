import Link from "next/link";
import type { ReactNode } from "react";

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900/60 hover:text-zinc-50 transition"
    >
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-zinc-950/70 backdrop-blur">
      <div className="container-padded flex items-center justify-between py-3">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="text-base font-semibold tracking-tight text-zinc-50">
            Dorian Thomé
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400 group-hover:text-zinc-300 transition">
            Data scientist & developer
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink href="/cv">CV</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
