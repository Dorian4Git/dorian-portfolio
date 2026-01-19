import { asset } from "@/lib/asset";
import Image from "next/image";
import Link from "next/link";

// 1. Define your translations here
const translations = {
  fr: {
    quoteBtn: "Devis",
    tagline: "Sites WordPress / Next.js • Genève",
    h1Main: "Votre vision, en ligne.",
    h1Gradient: "Rapide, propre, efficace.",
    description: "Développeur Fullstack & Ingénieur ML à Genève. Je transforme vos idées en sites performants ou en outils IA concrets. Pas d'agence, pas de délais flous : juste du code qui marche.",
    btnContact: "Me contacter",
    btnOffers: "Voir les offres",
    btnPortfolio: "Voir le portfolio",
    credibility: {
      delivery: { title: "Livraison", value: "V1 rapide" },
      stack: { title: "Stack", value: "WP / Next.js" },
      local: { title: "Local", value: "Genève" },
    },
    card: {
      alt: "Création de site web moderne et performant à Genève",
      main: "Design moderne",
      sub: "• performant • SEO"
    }
  },
  en: {
    quoteBtn: "Get a Quote",
    tagline: "WordPress / Next.js Sites • Geneva",
    h1Main: "Your vision, online.",
    h1Gradient: "Fast, clean, efficient.",
    description: "Fullstack Developer & ML Engineer in Geneva. I turn your ideas into high-performance websites or concrete AI tools. No agency fluff, no vague deadlines: just code that works.",
    btnContact: "Contact Me",
    btnOffers: "See Services",
    btnPortfolio: "View Portfolio",
    credibility: {
      delivery: { title: "Delivery", value: "Fast V1" },
      stack: { title: "Stack", value: "WP / Next.js" },
      local: { title: "Location", value: "Geneva" },
    },
    card: {
      alt: "Modern and high-performance website creation in Geneva",
      main: "Modern Design",
      sub: "• fast • SEO"
    }
  }
};

// 2. Add the 'lang' prop to the component signature
export function HeroModern({ lang = "fr" }: { lang?: "fr" | "en" }) {
  // 3. Select the right text based on the prop
  const t = translations[lang];

  // Optional: Adjust links if you have separate English pages (e.g., /en/contact)
  const contactLink = lang === 'en' ? '/en/contact' : '/contact';

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] p-6 sm:p-10">
      {/* Background shapes (Unchanged) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-24 -left-24 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute right-6 top-6 h-24 w-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl" />
        <div className="absolute left-6 bottom-6 h-16 w-40 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl" />
      </div>

      {/* Top mini-nav */}
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="text-4xl font-semibold bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
            Dorian Thomé
        </div>
        <Link
          href={contactLink}
          className="rounded-3xl border border-white/15 bg-white/5 px-4 py-2.5 text-xl font-semibold text-white hover:bg-white/10 transition no-underline"
        >
          {t.quoteBtn}
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left: text */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {t.tagline}
          </div>

          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            {t.h1Main}
            <span className="block">
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                {t.h1Gradient}
              </span>
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-200">
            {t.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-3xl bg-white px-5 py-3 text-xl font-semibold text-zinc-950 hover:bg-zinc-200 transition no-underline"
            >
              {t.btnContact}
            </a>
            <a
              href="#services"
              className="rounded-3xl border border-white/15 bg-white/5 px-5 py-3 text-xl font-semibold text-white hover:bg-white/10 transition no-underline"
            >
              {t.btnOffers}
            </a>
            <a
              href="#realisations"
              className="rounded-3xl border border-white/15 bg-white/5 px-5 py-3 text-xl font-semibold text-white hover:bg-white/10 transition no-underline"
            >
              {t.btnPortfolio}
            </a>
          </div>

          {/* quick credibility row */}
          <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-zinc-300 max-w-xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-white font-semibold">{t.credibility.delivery.title}</div>
              <div className="mt-1">{t.credibility.delivery.value}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-white font-semibold">{t.credibility.stack.title}</div>
              <div className="mt-1">{t.credibility.stack.value}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-white font-semibold">{t.credibility.local.title}</div>
              <div className="mt-1">{t.credibility.local.value}</div>
            </div>
          </div>
        </div>

        {/* Right: framed image */}
        <div className="relative">
          <div className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/60 via-fuchsia-500/30 to-amber-300/30 blur-[1px]" />

          <div className="relative rounded-[1.6rem] p-3 animate-float">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
              <img
                src={asset("/media/illustration_start.png")}
                alt={t.card.alt}
                className="h-full w-full object-cover"
              />
              
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl" />
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-28 w-40 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl" />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="text-sm text-zinc-200">
                <span className="font-semibold text-white">{t.card.main}</span> {t.card.sub}
              </div>
              <div className="text-xs text-zinc-400">Next.js / WP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}