import LogoDT from "@/components/LogoDT";
import Link from "next/link";

// 1. Define translations
const translations = {
  fr: {
    description: "Développeur web moderne. Sites rapides, clairs et orientés résultats.",
    links: {
      services: "Services",
      portfolio: "Réalisations",
      contact: "Contact",
      legal: "Mentions Légales",
    },
    location: "Genève"
  },
  en: {
    description: "Modern web developer. Fast, clear, and results-oriented websites.",
    links: {
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      legal: "Legal Notice",
    },
    location: "Geneva"
  }
};

// 2. Add 'lang' prop to component
export default function SiteFooter({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const t = translations[lang];

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="container-fluid py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          {/* Logo + Identity */}
          <div>
            <div className="inline-block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
              <LogoDT variant="gradient" className="h-9 w-auto" />
            </div>

            <p className="mt-3 text-sm text-zinc-400 max-w-sm">
              {t.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-5 text-sm text-zinc-400">
            <Link href="#services" className="hover:text-white transition">
              {t.links.services}
            </Link>
            <Link href="#realisations" className="hover:text-white transition">
              {t.links.portfolio}
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              {t.links.contact}
            </Link>
            {/* Updates the link based on language if you created the english page */}
            <Link href={lang === 'en' ? "/en/legal" : "/legal"} className="hover:text-white transition">
              {t.links.legal}
            </Link>
          </div>
        </div>

        <div className="mt-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} Dorian Thomé — {t.location}
        </div>
      </div>
    </footer>
  );
}