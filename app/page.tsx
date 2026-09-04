"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroModern } from "@/components/Hero";
import ThesisSection from "@/components/ThesisSection";
import { asset } from "@/lib/asset";

const skills = [
  "Conception de Landing Pages de Conversion",
  "Création de Sites Vitrines (WordPress & Next.js)",
  "Ergonomie & Parcours Utilisateur (UX/UI)",
  "Référencement Naturel & Optimisation Locale (SEO)",
  "Développement Frontend & Fullstack (React, Next.js, Node)",
  "Traitement de Données & Machine Learning (Python, PyTorch)",
  "Accompagnement, Maintenance & Déploiement Cloud",
];

const services = [
  {
    badge: "Acquisition & Vente",
    title: "Landing Page Haute Conversion",
    image: "/media/services/landing.png",
    who: "Pour les entrepreneurs, créateurs et entreprises qui lancent une offre et souhaitent transformer chaque clic en prospect qualifié.",
    bullets: [
      "Structure narrative et copywriting orienté vers l'action",
      "Design épuré et chargement quasi instantané (< 1 seconde)",
      "Formulaire optimisé ou connexion directe à votre agenda (Calendly)",
      "Intégration de vos outils de suivi (Analytics, CRM, Emailing)",
    ],
    note: "Idéal pour : Lancement de produit, campagne publicitaire, réservation de rendez-vous.",
  },
  {
    badge: "Visibilité & Image de Marque",
    title: "Site Vitrine Élégant & Autonome",
    image: "/media/services/wp.png",
    who: "Pour les professionnels et PME qui veulent une présence en ligne crédible, rassurante et facile à mettre à jour sans toucher au code.",
    bullets: [
      "Design sur-mesure aligné avec votre identité graphique",
      "Interface d'administration claire pour modifier textes et photos facilement",
      "Optimisation technique pour le référencement naturel local (SEO)",
      "Formation vidéo personnalisée incluse pour une totale indépendance",
    ],
    note: "Idéal pour : Artisans, cabinets médicaux ou juridiques, consultants, PME.",
  },
  {
    badge: "IA Locale & Systèmes",
    title: "Pipelines LLM & IA Appliquée",
    image: "/media/services/llm-pipeline.jpg",
    who: "Pour les entreprises et créateurs souhaitant intégrer des modèles de langage (LLMs) locaux, fiables et connectés à leurs données privées.",
    bullets: [
      "Architecture de pipelines RAG (Retrieval-Augmented Generation) & bases vectorielles",
      "Exécution locale de modèles open-source (Llama, Mistral) sans fuite de données",
      "Confidentialité totale : vos documents restent hébergés sur vos serveurs",
      "Interfaces web interactives et connexion sécurisée à vos outils internes",
    ],
    note: "Idéal pour : Assistants documentaires privés, automatisation de synthèses, outils métier.",
  },
  {
    badge: "Dépannage & Sérénité",
    title: "Sauvetage Technique & Maintenance",
    image: "/media/services/rescue.png",
    who: "Pour ceux qui font face à un blocage technique, un site en panne, des lenteurs ou un transfert de domaine complexe.",
    bullets: [
      "Configuration des noms de domaine, DNS et boîtes emails (Infomaniak, OVH)",
      "Reprise en main et sécurisation de sites WordPress abandonnés",
      "Correction de bugs d'affichage et optimisation de la vitesse",
      "Intervention réactive avec explications claires et transparentes",
    ],
    note: "Idéal pour : Urgences techniques, maintenance préventive, migrations.",
  },
];

const projects = [
  {
    title: "L'Amie Sage — lamiesage.ch",
    tags: ["WordPress", "Santé & Bien-être", "Autonomie Client"],
    description:
      "Conception et mise en ligne du site vitrine d'un salon de massage à Genève. Interface sur-mesure simplifiée permettant à la gérante de modifier ses tarifs et horaires en toute autonomie.",
    image: "/media/projects/lamiesage.png",
  },
  {
    title: "Héloïse D. — heloised.com",
    tags: ["Identité Visuelle", "Design Responsive", "Image de Marque"],
    description:
      "Création d'un site vitrine soigné valorisant l'expertise professionnelle de la cliente avec une navigation fluide, épurée et adaptée aux supports mobiles.",
    image: "/media/projects/heloised.png",
  },
  {
    title: "Vente Immobilière de Prestige",
    tags: ["Next.js", "Haute Performance", "Luxe & Minimalisme"],
    description:
      "Vitrine interactive ultra-rapide dédiée à la présentation exclusive d'un bien d'exception. Fluidité des transitions, galeries d'images optimisées et ambiance sobre.",
    image: "/media/projects/luxury-real-estate.png",
  },
  {
    title: "Spécialisation de LLM via QLoRA (Recherche)",
    tags: ["Intelligence Artificielle", "NLP", "Machine Learning", "Recherche"],
    description:
      "Mémoire de Master étudiant l'état de l'art du fine-tuning de modèles de langage. Entraînement local avec quantification QLoRA, améliorant significativement la précision sur un jeu de données ciblé.",
    image: "/media/projects/llm-qlora-poster.jpg",
  },
  {
    title: "Détection d'Ambroisie par Drone (POC)",
    tags: ["Computer Vision", "PyTorch", "Drones", "Traitement de Données"],
    description:
      "Traitement et nettoyage de plus de 40 000 clichés aériens pour l'entraînement d'algorithmes de vision par ordinateur destinés au repérage précoce de plantes allergènes.",
    image: "/media/projects/ambroisie-detection.jpg",
  },
];

const faqs = [
  {
    q: "Quelle est la différence entre une Landing Page et un Site Vitrine ?",
    a: "Une Landing Page est une page unique conçue pour atteindre un seul objectif précis (prise de contact, vente d'une prestation, inscription). Elle est idéale si vous lancez une offre ou une campagne. Un Site Vitrine comporte plusieurs pages (Accueil, Présentation, Services détaillés, Contact) et vise à établir votre notoriété globale sur le long terme.",
  },
  {
    q: "Combien de temps faut-il pour concevoir et mettre en ligne mon site ?",
    a: "En moyenne, une première version fonctionnelle (V1) d'une landing page ou d'un site vitrine est prête en 7 à 14 jours ouvrés dès réception de vos éléments (textes, photos, objectifs). Nous validons ensuite ensemble les ajustements finaux.",
  },
  {
    q: "Pourrai-je modifier moi-même les textes et images par la suite ?",
    a: "Absolument. Si vous optez pour une solution avec gestion de contenu (WordPress ou CMS dédié), vous bénéficiez d'une interface d'administration claire. Une courte vidéo de formation personnalisée vous est fournie pour que vous soyez totalement autonome.",
  },
  {
    q: "Comment démarrer et quel est le processus de travail ?",
    a: "C'est très simple : nous commençons par un échange direct (téléphone, visio ou café à Genève) pour cadrer votre besoin. Je vous transmets ensuite une proposition claire avec périmètre et tarif fixes, sans surprise.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 shrink-0 text-amber-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#090a0d] text-white bg-noise min-h-screen">
      {/* Subtle Warm Ambiance (No Rainbow Glow) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-white/[0.02] blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-[450px] w-[450px] rounded-full bg-amber-200/[0.015] blur-3xl" />
        <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-white/[0.015] blur-3xl" />
      </div>

      <div className="container-fluid py-8 sm:py-12">
        {/* HERO SECTION */}
        <HeroModern lang="fr" />

        {/* SERVICES SECTION */}
        <section id="services" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
                <span>Offres & Prestations</span>
              </div>
              <h2 className="section-title">
                <span>Services pensés pour </span>
                <span className="text-gradient-warm">votre croissance.</span>
              </h2>
              <p className="section-subtitle">
                De la page de conversion ciblée au site vitrine complet, chaque solution est conçue avec une rigueur technique suisse et un souci constant de simplicité pour vous.
              </p>
            </div>

            <Link href="/contact" className="btn-secondary no-underline hidden sm:inline-block">
              Demander un devis
            </Link>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="card relative flex flex-col justify-between overflow-hidden p-7 sm:p-8 card-hover"
              >
                <div>
                  {/* Top image preview */}
                  <div className="mb-6 -mx-7 -mt-7 sm:-mx-8 sm:-mt-8 h-56 relative overflow-hidden bg-zinc-900/80 border-b border-white/[0.06]">
                    <Image
                      src={asset(s.image)}
                      alt={`Illustration ${s.title}`}
                      fill
                      className="object-cover object-top opacity-90 transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-[#0d0e14]/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md">
                        {s.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {s.who}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-medium">{s.note}</span>
                  <a
                    href="#contact"
                    className="text-xs font-medium text-white hover:text-amber-200 transition"
                  >
                    En savoir plus →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Explainer: Landing Page vs Site Vitrine */}
          <div className="mt-10 rounded-3xl border border-white/[0.08] bg-zinc-900/30 p-6 sm:p-8 backdrop-blur-md">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Landing Page ou Site Vitrine : que choisir ?
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Deux formats complémentaires selon votre priorité du moment :
              </p>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                <div className="inline-block rounded-lg bg-amber-200/10 px-2.5 py-1 text-xs font-semibold text-amber-200">
                  Option 1 : La Landing Page
                </div>
                <h4 className="mt-3 text-base font-semibold text-white">
                  Idéale pour convertir vite
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Une seule page dédiée à une offre précise. Pas de menu dispersif. Conçue pour maximiser le taux de retour sur vos campagnes de communication ou démarrer rapidement sur le web.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                <div className="inline-block rounded-lg bg-white/10 px-2.5 py-1 text-xs font-semibold text-zinc-200">
                  Option 2 : Le Site Vitrine
                </div>
                <h4 className="mt-3 text-base font-semibold text-white">
                  Idéal pour asseoir votre notoriété
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Plusieurs pages structurées (Accueil, Prestations, À propos, Contact). Permet d'expliquer en détail qui vous êtes, de rassurer vos futurs partenaires et d'être bien référencé sur Google.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK / REALISATIONS */}
        <section id="realisations" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                <span>Portfolio</span>
              </div>
              <h2 className="section-title">
                <span>Réalisations & </span>
                <span className="text-gradient-subtle">projets concrets.</span>
              </h2>
              <p className="section-subtitle">
                Du site vitrine d'artisan à des architectures web applicatives complexes, découvrez quelques projets menés avec soin.
              </p>
            </div>

            <a href="#contact" className="btn-secondary no-underline">
              Discuter d’un projet
            </a>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.title}
                className="card relative flex flex-col justify-between overflow-hidden p-7 card-hover"
              >
                <div>
                  {p.image && (
                    <div className="mb-6 -mx-7 -mt-7 h-52 relative overflow-hidden bg-zinc-900 border-b border-white/[0.06]">
                      <Image
                        src={asset(p.image)}
                        alt={`Illustration projet : ${p.title}`}
                        fill
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-[#0d0e14]/30 to-transparent" />
                    </div>
                  )}

                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-xs text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual direction demo */}
          <div className="mt-12 rounded-3xl border border-white/[0.08] bg-zinc-900/20 p-6 sm:p-10 backdrop-blur-md">
            <div className="text-center mb-8">
              <h4 className="text-lg sm:text-xl font-medium text-white">
                Direction artistique : Deux ambiances selon votre positionnement
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Design clair ou mode sombre feutré, adapté à vos préférences esthétiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Light */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-white/20">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-800">
                  <Image
                    src={asset("/media/services/minimalist-landing-page-bright-clair-lumineux-minimaliste.png")}
                    alt="Style Editorial Minimalist"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-black backdrop-blur">
                    Approche Lumineuse
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="text-white text-sm font-medium">Style Éditorial & Épuré</h5>
                  <p className="text-xs text-zinc-400 mt-0.5">Fond clair, typographie contrastée, respiration maximale.</p>
                </div>
              </div>

              {/* Card 2: Dark */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-white/20">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-800">
                  <Image
                    src={asset("/media/services/minimalist-landing-page-dark-sombre-luxe.png")}
                    alt="Style Dark Prestige"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-md bg-[#0f1014]/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-200 border border-amber-200/30 backdrop-blur">
                    Approche Feutrée
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="text-white text-sm font-medium">Style Prestige & Immersion</h5>
                  <p className="text-xs text-zinc-400 mt-0.5">Mode sombre, finitions soignées, ambiance exclusive.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACADEMIC RESEARCH & THESES SECTION */}
        <ThesisSection lang="fr" />

        {/* PROCESS SECTION */}
        <section id="process" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                <span>Méthodologie</span>
              </div>
              <h2 className="section-title">
                <span>Collaboration </span>
                <span className="text-gradient-subtle">fluide et sereine.</span>
              </h2>
              <p className="section-subtitle">
                Pas de réunions interminables ni de tunnel opaque : une méthode simple, transparente et orientée résultats.
              </p>
            </div>

            <a href="#contact" className="btn-secondary no-underline">
              Lancer votre projet
            </a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="card p-7 card-hover">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white font-bold text-sm">
                  1
                </div>
                <div className="text-lg font-semibold text-white">Échange & Cadrage</div>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                On clarifie votre objectif, vos délais et votre budget. Périmètre précis, devis transparent : zéro surprise.
              </p>
            </div>

            <div className="card p-7 card-hover">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white font-bold text-sm">
                  2
                </div>
                <div className="text-lg font-semibold text-white">Conception & V1</div>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Je développe votre site et vous partage un lien privé interactif. Vous testez, nous affinons ensemble en direct.
              </p>
            </div>

            <div className="card p-7 card-hover">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white font-bold text-sm">
                  3
                </div>
                <div className="text-lg font-semibold text-white">Mise en Ligne & Suivi</div>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Configuration de votre domaine, sécurisation HTTPS et formation vidéo. Tout est opérationnel et vous appartient.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
                <span>Questions Fréquentes</span>
              </div>
              <h2 className="section-title">
                <span>Tout ce que vous devez </span>
                <span className="text-gradient-warm">savoir.</span>
              </h2>
              <p className="section-subtitle">
                Des réponses transparentes pour avancer l'esprit tranquille.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/[0.08] bg-zinc-900/30 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-base font-medium text-white hover:bg-white/[0.02]"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-4 text-zinc-400 text-lg">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CV / PROFILE SUMMARY */}
        <section id="cv" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                <span>Parcours & Compétences</span>
              </div>
              <h2 className="section-title">
                <span>Profil & </span>
                <span className="text-gradient-subtle">Savoir-faire.</span>
              </h2>
              <p className="section-subtitle">
                Une double culture : sens du business hérité de l'informatique de gestion et maîtrise technique avancée.
              </p>
            </div>

            <Link href="/cv" className="btn-secondary no-underline">
              Voir le CV complet
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="card p-7 sm:p-8 card-hover">
              <h3 className="text-xl font-semibold text-white">Expertises clés</h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                J'interviens sur l'ensemble de la chaîne : du cadrage initial de votre projet à sa livraison et son optimisation continue.
              </p>

              <div className="mt-6 space-y-2">
                {skills.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 text-xs sm:text-sm text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-200 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-7 sm:p-8 card-hover flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Contact & Réseaux</h3>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  Disponible pour des projets freelance en Suisse romande (Genève, Vaud, Valais) ou à distance à l'international.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="https://www.linkedin.com/in/dorian-t-0b1168150/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition hover:bg-white/[0.05] no-underline"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 text-xs font-bold">
                      in
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">LinkedIn</div>
                      <div className="text-sm font-medium text-white">Dorian Thomé</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Dorian4Git"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition hover:bg-white/[0.05] no-underline"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white text-xs font-bold">
                      GH
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">GitHub</div>
                      <div className="text-sm font-medium text-white">Dorian4Git</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@dorianthome.ch"
                    className="flex items-center gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition hover:bg-white/[0.05] no-underline"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-200/15 text-amber-200 text-xs font-bold">
                      @
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">Email direct</div>
                      <div className="text-sm font-medium text-white">contact@dorianthome.ch</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                <Link href="/cv" className="btn-secondary text-xs sm:text-sm py-2.5 px-4 no-underline">
                  Voir mon parcours détaillé
                </Link>
                <a href="#contact" className="btn-primary text-xs sm:text-sm py-2.5 px-4 no-underline">
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Premier Contact</span>
              </div>
              <h2 className="section-title">
                <span>Parlons de votre </span>
                <span className="text-gradient-warm">projet.</span>
              </h2>
              <p className="section-subtitle">
                Présentez-moi votre idée, votre calendrier et vos attentes. Je vous réponds sous 24h avec une vision claire et sans engagement.
              </p>
            </div>
          </div>

          <div className="card mt-8 p-7 sm:p-10 card-hover">
            <div className="grid gap-8 sm:grid-cols-3 items-center">
              <div className="sm:col-span-2">
                <div className="text-xl sm:text-2xl font-semibold text-white">
                  Prêt à donner vie à votre site web ?
                </div>
                <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Que vous partiez d'une feuille blanche ou que vous souhaitiez moderniser un site existant, discutons de la meilleure approche pour votre activité.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary no-underline">
                    Ouvrir le formulaire de contact
                  </Link>
                  <a href="mailto:contact@dorianthome.ch" className="btn-secondary no-underline">
                    Écrire directement par email
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-6 space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="text-zinc-400 text-xs">Localisation</div>
                  <div className="text-white font-medium mt-0.5">Genève, Suisse</div>
                </div>
                <div>
                  <div className="text-zinc-400 text-xs">Zone d'intervention</div>
                  <div className="text-white font-medium mt-0.5">Genève, Suisse romande & Remote</div>
                </div>
                <div>
                  <div className="text-zinc-400 text-xs">Temps de réponse</div>
                  <div className="text-emerald-400 font-medium mt-0.5">Généralement sous 24 heures</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
