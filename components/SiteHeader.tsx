"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900/60 hover:text-zinc-50 transition"
    >
      {children}
    </Link>
  );
}

function computeLanguageSwitch(pathname: string | null) {
  const path = pathname ?? "/";

  const isFR = path === "/fr" || path.startsWith("/fr/");
  const currentLang = isFR ? "fr" : "en";

  const stripped = isFR ? (path === "/fr" ? "/" : path.replace(/^\/fr/, "")) : path;

  const targetLang = isFR ? "en" : "fr";
  const targetPath =
    targetLang === "fr"
      ? stripped === "/" ? "/fr" : `/fr${stripped}`
      : stripped;

  return { currentLang, targetLang, targetPath, isFR };
}

export default function SiteHeader() {
  const pathname = usePathname();
  const { targetLang, targetPath, isFR } = useMemo(
    () => computeLanguageSwitch(pathname),
    [pathname]
  );

  const [open, setOpen] = useState(false);

  // Close on route change (helps if user navigates)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape + lock body scroll when open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const homeHref = isFR ? "/fr" : "/";

  const nav = [
    { label: "CV", href: isFR ? "/fr/cv" : "/cv" },
    { label: "Projects", href: isFR ? "/fr/projects" : "/projects" },
    { label: "Services", href: isFR ? "/fr/services" : "/services" },
    { label: "Contact", href: isFR ? "/fr/contact" : "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950">
      <div className="container-padded flex items-center justify-between py-3">
        <Link href={homeHref} className="group flex items-baseline gap-3">
          <span className="text-base font-semibold tracking-tight text-zinc-50">
            Dorian Thomé
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400 group-hover:text-zinc-300 transition">
            Website Developer & Data analyst
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}

          <Link
            href={targetPath}
            className="ml-2 rounded-lg border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900/60 hover:text-zinc-50 transition"
            aria-label={`Switch language to ${targetLang.toUpperCase()}`}
            title={`Switch to ${targetLang.toUpperCase()}`}
          >
            {targetLang.toUpperCase()}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900/60 transition"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm border-l border-zinc-800 bg-zinc-950 p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-zinc-50">Menu</div>
              <button
                type="button"
                className="rounded-lg border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900/60 transition"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-5 grid gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-base text-zinc-100 hover:bg-zinc-900/60 transition"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href={targetPath}
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-zinc-50 px-4 py-3 text-base font-medium text-zinc-950 hover:bg-zinc-200 transition"
              >
                Switch to {targetLang.toUpperCase()}
              </Link>

              <div className="mt-4 text-xs text-zinc-400">
                Tip: press <span className="kbd">Esc</span> to close.
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
