"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

function computeLanguageSwitch(pathname: string | null) {
  // pathname examples:
  // "/" | "/services" | "/contact"
  // "/fr" | "/fr/services" | "/fr/contact"
  const path = pathname ?? "/";

  const isFR = path === "/fr" || path.startsWith("/fr/");
  const currentLang = isFR ? "fr" : "en";

  // Strip "/fr" prefix for EN target
  const stripped = isFR ? (path === "/fr" ? "/" : path.replace(/^\/fr/, "")) : path;

  // Build opposite language path
  const targetLang = isFR ? "en" : "fr";
  const targetPath =
    targetLang === "fr"
      ? stripped === "/" ? "/fr" : `/fr${stripped}`
      : stripped; // EN lives at root

  return { currentLang, targetLang, targetPath };
}

export default function SiteHeader() {
  const pathname = usePathname();
  const { currentLang, targetLang, targetPath } = computeLanguageSwitch(pathname);

  const isFR = currentLang === "fr";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-zinc-950/70 backdrop-blur">
      <div className="container-padded flex items-center justify-between py-3">
        <Link href={isFR ? "/fr" : "/"} className="group flex items-baseline gap-3">
          <span className="text-base font-semibold tracking-tight text-zinc-50">
            Dorian Thomé
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400 group-hover:text-zinc-300 transition">
            Data analyst & Web developer
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {/* Nav links: point to FR or EN versions depending on current language */}
          <NavLink href={isFR ? "/fr/cv" : "/cv"}>CV</NavLink>
          <NavLink href={isFR ? "/fr/projects" : "/projects"}>Projects</NavLink>
          <NavLink href={isFR ? "/fr/services" : "/services"}>Services</NavLink>
          <NavLink href={isFR ? "/fr/contact" : "/contact"}>Contact</NavLink>

          {/* Language switch */}
          <Link
            href={targetPath}
            className="ml-2 rounded-lg border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900/60 hover:text-zinc-50 transition"
            aria-label={`Switch language to ${targetLang.toUpperCase()}`}
            title={`Switch to ${targetLang.toUpperCase()}`}
          >
            {targetLang.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
