import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="container-fluid py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="text-sm text-zinc-200">
              <span className="font-semibold text-white">Dorian Thomé</span>{" "}
              <span className="text-zinc-400">— Web & IA/ML</span>
            </div>
            <div className="text-sm text-zinc-400">
              Sites modernes pour particuliers et petites entreprises (WordPress ou sur mesure).
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link
              className="text-zinc-300 hover:text-white underline underline-offset-4"
              href="https://www.linkedin.com/in/dorian-t-0b1168150/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              className="text-zinc-300 hover:text-white underline underline-offset-4"
              href="https://github.com/Dorian4Git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <a
              className="text-zinc-300 hover:text-white underline underline-offset-4"
              href="mailto:dorian.thome@proton.me"
            >
              dorian.thome@proton.me
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} Dorian Thomé. Next.js + Tailwind.
        </div>
      </div>
    </footer>
  );
}
