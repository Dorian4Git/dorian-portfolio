import Link from "next/link";
import Image from "next/image";
import Pill from "@/components/Pill";
import { HeroModern } from "@/components/Hero";

const skills = [
  "Affinage LLM (qLoRA/PEFT)",
  "Approche prompting & évaluation",
  "Vision par ordinateur (ResNet, etc.)",
  "Curation / augmentation de datasets",
  "Workflows Python / PyTorch",
  "Livraison web (WordPress + sites statiques modernes)",
  "Cadrage produit & communication",
];

const services = [
  {
    title: "Site WordPress pour entreprise",
    image: "/media/wp.png",
    who: "Pour les petites entreprises qui veulent éditer facilement (texte / photos) après livraison.",
    bullets: [
      "4–7 pages (ou plus si besoin)",
      "Mobile-first, design moderne",
      "Formulaire + SEO de base",
      "Formation prise en main incluse",
    ],
    note: "Maintenance mensuelle optionnelle : mises à jour, sauvegardes, petites modifications.",
  },
  {
    title: "Site moderne sur mesure (Next.js)",
    image: "/media/next.png",
    who: "Pour un rendu premium : rapide, sécurisé, excellent SEO/perf.",
    bullets: [
      "UI moderne + design personnalisé",
      "Excellents scores Lighthouse",
      "Déploiement Vercel / GitHub Pages",
      "Formulaire + analytics en option",
    ],
    note: "Les mises à jour de contenu demandent du code (sauf CMS).",
  },
  {
    title: "Landing page de conversion",
    image: "/media/landing.png",
    who: "Une seule page, un message, un CTA : idéal pour générer des demandes.",
    bullets: [
      "Structure claire (problème → preuve → offre → CTA)",
      "Optimisée mobile + lisibilité",
      "Formulaire + suivi optionnel",
      "Livraison rapide",
    ],
    note: "Parfait pour indépendants, campagnes, prestataires locaux.",
  },
  {
    title: "Prototype IA / consultation",
    image: "/media/ai.png",
    who: "POC cadré : faisabilité, direction technique, livrables clairs.",
    bullets: [
      "Conseil fine-tuning LLM & setup",
      "Stratégie d’évaluation (quoi mesurer, comment)",
      "Conseils pipeline CV (données → modèle → inférence)",
      "Documentation et plan d’implémentation",
    ],
    note: "Pas de flou artistique : périmètre défini avant de commencer.",
  },
];

const projects = [
  {
    title: "Site WordPress — Salon de massage",
    tags: ["Livraison client", "WordPress", "UX"],
    description:
      "Site facile à gérer, design épuré, pages services, parcours de contact simple. Pensé pour des updates par des profils non techniques.",
  },
  {
    title: "MISY — Livraison de colis via covoiturage",
    tags: ["Produit", "Cartes", "Paiements", "UX mobile"],
    description:
      "Concept d’app end-to-end : matching via carte, parcours paiement, UX logistique in-app.",
  },
  {
    title: "Affinage LLM avec qLoRA",
    tags: ["LLMs", "qLoRA", "PEFT", "Efficacité"],
    description:
      "Pipeline d’affinage efficace : config d’entraînement, hyperparamètres, démarche d’évaluation pragmatique.",
  },
  {
    title: "Détection d’ambroisie sur imagerie drone",
    tags: ["Vision", "ResNet", "Imagerie aérienne"],
    description:
      "Préparation dataset, augmentation, entraînement et workflow d’inférence pour détecter l’ambroisie sur images drone.",
  },
];

function Card({
  children,
  className = "",
  gradient = false,
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}) {
  const inner = (
    <div className={["card", className].join(" ")}>
      {children}
    </div>
  );

  return gradient ? <div className="gborder">{inner}</div> : inner;
}

export default function HomePage() {
  return (
    <div className="bg-zinc-950 text-white bg-noise">
      {/* Background vibes */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="container-fluid py-10 sm:py-14">
        {/* HERO */}
        <HeroModern />

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="section-subtitle">
                WordPress si tu veux gérer facilement, Next.js si tu veux un rendu premium et ultra-performant.
              </p>
            </div>

            <Link href="/contact" className="btn-secondary no-underline">
              Contact direct
            </Link>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <Card key={s.title} gradient className="relative overflow-hidden p-7 card-hover">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-56 opacity-20 blur-[1px]">
                  <Image src={s.image} alt="" fill className="object-cover" />
                </div>
                

                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-base text-zinc-300">{s.who}</p>

                <ul className="mt-5 space-y-2 text-base text-zinc-200">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-cyan-300/80 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-base text-zinc-400">{s.note}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="realisations" className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  Réalisations
                </span>
              </h2>
              <p className="section-subtitle">
                Un mix “livraison web” + IA/ML : ça montre la capacité à produire, cadrer et livrer.
              </p>
            </div>

            <a href="#contact" className="btn-secondary no-underline">
              Discuter d’un projet
            </a>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.title} gradient className="p-7 card-hover">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <span className="hidden sm:inline-flex rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-sm text-zinc-200">
                    Projet
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-sm text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-base text-zinc-300">{p.description}</p>

                <div className="mt-6">
                  <a href="#contact" className="link text-sm text-zinc-200">
                    → Demander un devis sur un projet similaire
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="section-subtitle">
                Méthode simple : on réduit le flou, on sort une V1 vite, et on itère proprement.
              </p>
            </div>

            <a href="#services" className="btn-secondary no-underline">
              Voir les offres
            </a>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            <Card gradient className="p-7 card-hover">
              <div className="text-sm font-semibold text-zinc-300">Étape 1</div>
              <div className="mt-2 text-xl font-semibold text-white">Brief rapide</div>
              <p className="mt-3 text-base text-zinc-300">
                Objectif, pages, contenu disponible, deadline. 1–2 exemples de sites que tu aimes.
              </p>
              <ul className="mt-4 space-y-2 text-base text-zinc-200">
                <li className="flex gap-3">
                  <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-fuchsia-300/80 shrink-0" />
                  <span>Périmètre clair</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-fuchsia-300/80 shrink-0" />
                  <span>Plan de pages</span>
                </li>
              </ul>
            </Card>

            <Card gradient className="p-7 card-hover">
              <div className="text-sm font-semibold text-zinc-300">Étape 2</div>
              <div className="mt-2 text-xl font-semibold text-white">Build & retours</div>
              <p className="mt-3 text-base text-zinc-300">
                Je livre une V1 rapidement. Tu me dis ce qui change. On affine jusqu’à ce que ça claque.
              </p>
              <ul className="mt-4 space-y-2 text-base text-zinc-200">
                <li className="flex gap-3">
                  <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-cyan-300/80 shrink-0" />
                  <span>Itérations courtes</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-cyan-300/80 shrink-0" />
                  <span>Design + contenu</span>
                </li>
              </ul>
            </Card>

            <Card gradient className="p-7 card-hover">
              <div className="text-sm font-semibold text-zinc-300">Étape 3</div>
              <div className="mt-2 text-xl font-semibold text-white">Mise en ligne</div>
              <p className="mt-3 text-base text-zinc-300">
                Déploiement, réglages, passation propre. Support optionnel si tu veux être tranquille.
              </p>
              <ul className="mt-4 space-y-2 text-base text-zinc-200">
                <li className="flex gap-3">
                  <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-amber-200/80 shrink-0" />
                  <span>SEO & perf de base</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-amber-200/80 shrink-0" />
                  <span>Maintenance optionnelle</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* CV */}
        <section id="cv" className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  CV
                </span>
                <span className="text-white"> — résumé</span>
              </h2>
              <p className="section-subtitle">
                Compétences orientées livraison : web moderne + IA/ML appliquée.
              </p>
            </div>

            <Link href="/cv" className="btn-secondary no-underline">
              CV complet
            </Link>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Card gradient className="p-7 card-hover">
              <h3 className="text-xl font-semibold text-white">Profil</h3>

              <div className="proseish mt-4">
                <p className="text-base text-zinc-300">
                  Informatique de gestion, master ML, et une approche pragmatique : cadrer → produire → mesurer → livrer.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Pill key={s} text={s} />
                ))}
              </div>
            </Card>

            <Card gradient className="p-7 card-hover">
              <h3 className="text-xl font-semibold text-white">Liens</h3>

              <div className="mt-4 space-y-3 text-base text-zinc-200">
                <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dorian-t-0b1168150/">
                  LinkedIn
                </a>
                <div />
                <a className="link" target="_blank" rel="noreferrer" href="https://github.com/Dorian4Git">
                  GitHub
                </a>
                <div />
                <a className="link" href="mailto:dorian.thome@proton.me">
                  dorian.thome@proton.me
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/cv" className="btn-secondary no-underline">
                  Voir le CV complet
                </Link>
                <a href="#contact" className="btn-primary no-underline">
                  Me contacter
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  Contact
                </span>
              </h2>
              <p className="section-subtitle">
                Dis-moi ton objectif, ta deadline, et 1–2 exemples de sites. Je réponds avec un plan clair (et une estimation).
              </p>
            </div>

            <a href="mailto:dorian.thome@proton.me" className="btn-secondary no-underline">
              Email direct
            </a>
          </div>

          <Card gradient className="mt-7 p-7 sm:p-8 card-hover">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <div className="text-xl font-semibold text-white">Message rapide</div>
                <p className="mt-3 text-base text-zinc-300">
                  Objectif • pages • contenu dispo • deadline • budget (optionnel) • exemples
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary no-underline">
                    Ouvrir le formulaire
                  </Link>
                  <a href="mailto:dorian.thome@proton.me" className="btn-secondary no-underline">
                    Email direct
                  </a>
                </div>
              </div>

              <div className="space-y-4 text-base text-zinc-200">
                <div>
                  <div className="text-sm text-zinc-400">Localisation</div>
                  Genève, Suisse, Suisse romande
                </div>
                <div>
                  <div className="text-sm text-zinc-400">Email</div>
                  <a className="link" href="mailto:dorian.thome@proton.me">
                    dorian.thome@proton.me
                  </a>
                </div>
                <div>
                  <div className="text-sm text-zinc-400">GitHub</div>
                  <a className="link" target="_blank" rel="noreferrer" href="https://github.com/Dorian4Git">
                    Dorian4Git
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </section>


      </div>
    </div>
  );
}
