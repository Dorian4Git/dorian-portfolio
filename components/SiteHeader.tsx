"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import LogoDT from "@/components/LogoDT";

function NavA({
  href,
  children,
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-xl px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}

/**
 * FR par défaut:
 * - FR: "/" (et routes FR si tu en gardes)
 * - EN: "/en"
 */
function computeLanguageSwitch(pathname: string | null) {
  const path = pathname ?? "/";

  const isEN = path === "/en" || path.startsWith("/en/");
  const currentLang = isEN ? "en" : "fr";

  const stripped = isEN ? (path === "/en" ? "/" : path.replace(/^\/en/, "")) : path;

  const targetLang = isEN ? "fr" : "en";
  const targetPath = targetLang === "en" ? (stripped === "/" ? "/en" : `/en${stripped}`) : stripped;

  return { currentLang, targetLang, targetPath, isEN };
}

export default function SiteHeader() {
  const pathname = usePathname();
  const { targetLang, targetPath, isEN } = useMemo(
    () => computeLanguageSwitch(pathname),
    [pathname]
  );

  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

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

  // Si tu es sur la home, on propose des ancres.
  // Sinon, on garde des liens vers pages (optionnel).
  const onHome = pathname === "/" || pathname === "/en";

  const navAnchorsFR = [
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Process", href: "#process" },
    { label: "CV", href: "#cv" },
    { label: "Contact", href: "#contact" },
  ];

  const navAnchorsEN = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  const anchors = isEN ? navAnchorsEN : navAnchorsFR;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="container-fluid">
        <div className="flex items-center justify-between py-3">
          <Link href={isEN ? "/en" : "/"} className="group flex items-center gap-3">
            <LogoDT className="h-8 w-auto text-white/90 group-hover:text-white transition" />

            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-semibold tracking-tight text-white">
                Dorian Thomé
              </span>
              <span className="hidden sm:block text-xs text-zinc-300 group-hover:text-white transition">
                Développeur web • IA/ML • Genève
              </span>
            </div>
          </Link>


          {/* Desktop */}
          <nav className="hidden sm:flex items-center gap-1">
            {onHome ? (
              anchors.map((item) => (
                <NavA key={item.href} href={item.href}>
                  {item.label}
                </NavA>
              ))
            ) : (
              <>
                <Link className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/10 transition" href={isEN ? "/en" : "/"}>
                  Accueil
                </Link>
                <Link className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/10 transition" href={isEN ? "/en/contact" : "/contact"}>
                  Contact
                </Link>
              </>
            )}

            <Link
              href={targetPath}
              className="ml-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-zinc-100 hover:bg-white/10 transition"
              aria-label={`Switch language to ${targetLang.toUpperCase()}`}
              title={`Switch to ${targetLang.toUpperCase()}`}
            >
              {targetLang.toUpperCase()}
            </Link>
          </nav>

          {/* Mobile */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-zinc-100 hover:bg-white/10 transition"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden">
          <div
            className="fixed inset-0 z-50 bg-black/70"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm border-l border-white/10 bg-zinc-950 p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white">Menu</div>
              <button
                type="button"
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-zinc-100 hover:bg-white/10 transition"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-5 grid gap-2">
              {onHome ? (
                anchors.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white hover:bg-white/10 transition"
                  >
                    {item.label}
                  </a>
                ))
              ) : (
                <>
                  <Link
                    href={isEN ? "/en" : "/"}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white hover:bg-white/10 transition"
                  >
                    Accueil
                  </Link>
                  <Link
                    href={isEN ? "/en/contact" : "/contact"}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white hover:bg-white/10 transition"
                  >
                    Contact
                  </Link>
                </>
              )}

              <Link
                href={targetPath}
                onClick={() => setOpen(false)}
                className="mt-3 rounded-2xl bg-white px-4 py-3 text-base font-semibold text-zinc-950 hover:bg-zinc-200 transition"
              >
                {isEN ? "Passer en FR" : "Switch to EN"}
              </Link>

              <div className="mt-4 text-xs text-zinc-400">
                Astuce : touche <span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5">Esc</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
