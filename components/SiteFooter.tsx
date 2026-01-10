import LogoDT from "@/components/LogoDT";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="container-fluid py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          {/* Logo + identité */}
          <div>
            <div className="inline-block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
              <LogoDT variant="gradient" className="h-9 w-auto" />
            </div>


            <p className="mt-3 text-sm text-zinc-400 max-w-sm">
              Développeur web moderne.  
              Sites rapides, clairs et orientés résultats.
            </p>
          </div>

          {/* Liens */}
          <div className="flex gap-5 text-sm text-zinc-400">
            <Link href="#services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="#realisations" className="hover:text-white transition">
              Réalisations
            </Link>
            <Link href="#contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} Dorian Thomé — Genève
        </div>
      </div>
    </footer>
  );
}
