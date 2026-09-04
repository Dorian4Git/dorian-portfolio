"use client";

import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

const translations = {
  fr: {
    status: "Disponible pour nouveaux projets • Genève & Remote",
    h1Line1: "Sites web performants &",
    h1Line2: "expériences sur-mesure.",
    h1Accent: "Conçus pour convertir.",
    description:
      "Je suis Dorian Thomé, développeur basé à Genève. J'accompagne les indépendants, PME et créateurs dans la conception de sites web modernes, ultra-rapides et faciles à administrer. Une approche humaine, une rigueur suisse, zéro jargon inutile.",
    btnContact: "Discuter de votre projet",
    btnServices: "Découvrir mes services",
    btnResearch: "Mémoires & Recherche",
    quoteBtn: "Devis rapide",
    pillars: [
      {
        title: "Livraison agile",
        desc: "Première version livrée en 7 à 14 jours, avec ajustements continus.",
      },
      {
        title: "Stack adaptée",
        desc: "WordPress pour l'autonomie, Next.js pour l'expérience sur-mesure.",
      },
      {
        title: "Suivi personnalisé",
        desc: "Basé à Genève. Échanges directs, clairs et réactifs.",
      },
    ],
    photoCaption: {
      role: "Dorian Thomé",
      detail: "Développeur Web & Ingénieur Information",
    },
  },
  en: {
    status: "Available for new projects • Geneva & Remote",
    h1Line1: "High-performance websites &",
    h1Line2: "custom digital experiences.",
    h1Accent: "Built to engage & convert.",
    description:
      "I'm Dorian Thomé, a web developer based in Geneva. I partner with founders, businesses, and creators to build fast, beautiful, and easy-to-manage web experiences. Swiss precision, human collaboration, zero unnecessary buzzwords.",
    btnContact: "Discuss a Project",
    btnServices: "Explore Services",
    btnResearch: "Research & Theses",
    quoteBtn: "Get a Quote",
    pillars: [
      {
        title: "Fast Delivery",
        desc: "Working V1 ready in 7 to 14 days with seamless feedback loops.",
      },
      {
        title: "Tailored Stack",
        desc: "WordPress for total autonomy, Next.js for custom performance.",
      },
      {
        title: "Direct Collaboration",
        desc: "Based in Geneva. Clear communication and proactive support.",
      },
    ],
    photoCaption: {
      role: "Dorian Thomé",
      detail: "Web Developer & Information Engineer",
    },
  },
};

export function HeroModern({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const t = translations[lang];
  const contactLink = lang === "en" ? "/en/contact" : "/contact";
  const researchAnchor = lang === "en" ? "#research" : "#recherche";

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#0c0d12] p-6 sm:p-10 lg:p-14 shadow-2xl">
      {/* Background Atmosphere (Subtle warm glow, no harsh neon) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-[420px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-[380px] w-[400px] rounded-full bg-amber-200/[0.02] blur-3xl" />
      </div>

      {/* Atmospheric Portrait Layer (extending under the left text) */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-full lg:w-[60%] select-none overflow-hidden -z-0">
        <div className="relative h-full w-full">
          <Image
            src={asset("/media/dorian-hero-portrait.jpg")}
            alt={t.photoCaption.role}
            fill
            priority
            className="object-cover object-[72%_25%] sm:object-[70%_20%] opacity-85 sm:opacity-90"
          />

          {/* Left-to-right fade so image blends seamlessly under text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d12] via-[#0c0d12]/80 sm:via-[#0c0d12]/70 via-35% to-transparent" />

          {/* Top and Bottom soft vignetting */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d12] via-transparent to-[#0c0d12]" />
        </div>
      </div>

      {/* Top Header Bar inside Hero */}
      <div className="relative z-10 flex items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Dorian Thomé
          </div>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-zinc-400 font-medium border-l border-white/10 pl-3">
            Portfolio & Services
          </span>
        </div>

        <Link
          href={contactLink}
          className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition no-underline backdrop-blur-sm"
        >
          {t.quoteBtn}
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 pt-8 sm:pt-12 grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-8 xl:col-span-7">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>{t.status}</span>
          </div>

          {/* Main Title */}
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
            {t.h1Line1} <br className="hidden sm:inline" />
            <span>{t.h1Line2}</span>
            <span className="block mt-1 text-gradient-warm font-medium">
              {t.h1Accent}
            </span>
          </h1>

          {/* Subtitle / Human Intro */}
          <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
            {t.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary no-underline">
              {t.btnContact}
            </a>
            <a href="#services" className="btn-secondary no-underline">
              {t.btnServices}
            </a>
            <a
              href={researchAnchor}
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition no-underline backdrop-blur-sm"
            >
              {t.btnResearch}
            </a>
          </div>

          {/* Trust Pillars */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            {t.pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/[0.07] bg-black/40 p-3.5 backdrop-blur-md hover:border-white/15 transition"
              >
                <div className="text-xs font-semibold text-white tracking-wide">
                  {p.title}
                </div>
                <div className="mt-1 text-xs text-zinc-400 leading-snug">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column / Space on Desktop (Letting the portrait shine) */}
        <div className="lg:col-span-4 xl:col-span-5 flex flex-col justify-end lg:h-[460px] relative pointer-events-none">
          <div className="mt-auto hidden lg:flex justify-end">
            <div className="rounded-2xl border border-white/10 bg-black/50 p-3 backdrop-blur-md text-right max-w-xs pointer-events-auto">
              <div className="text-xs font-semibold text-white">
                {t.photoCaption.role}
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5">
                {t.photoCaption.detail}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}