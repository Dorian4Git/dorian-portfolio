import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-900/80">
      <div className="container-padded py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="text-base text-zinc-200">
              <span className="font-medium text-zinc-50">Dorian Thomé</span>{" "}
              <span className="text-zinc-400">— Web & Data</span>
            </div>
            <div className="text-base text-zinc-400">
              Building clean, modern websites for small businesses and individuals.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-base sm:gap-4">
            <Link
              className="link"
              href="https://www.linkedin.com/in/dorian-t-0b1168150/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              className="link"
              href="https://github.com/Dorian4Git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <a className="link" href="mailto:dorian.thome@proton.me">
              dorian.thome@proton.me
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} Dorian Thomé. Built with Next.js + Tailwind, hosted on GitHub Pages.
        </div>
      </div>
    </footer>
  );
}
