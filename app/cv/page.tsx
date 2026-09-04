import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV & Parcours Académique | Dorian Thomé",
  description:
    "Curriculum Vitae de Dorian Thomé — Développeur Web Fullstack & Diplômé en Sciences de l'Information à Genève.",
};

const experiences = [
  {
    period: "2023 — Présent",
    role: "Développeur Web Freelance & Créateur Digital",
    company: "Indépendant • Genève & Remote",
    description:
      "Conception et livraison de sites web modernes (WordPress & Next.js), landing pages de conversion et prototypes IA pour indépendants et PME suisses. Cadrage du besoin, design, développement, déploiement et formation client.",
  },
  {
    period: "2022 — 2024",
    role: "Recherche Académique & Projets IA",
    company: "Master Sciences de l'Information • Genève",
    description:
      "Spécialisation en traitement du langage naturel (NLP) et vision par ordinateur. Réalisation d'un mémoire de recherche sur l'adaptation fine (QLoRA) de grands modèles de langage et d'un POC de détection végétale par drone (40 000 images).",
  },
  {
    period: "2019 — 2022",
    role: "Projets d'Ingénierie des Systèmes d'Information",
    company: "Haute École de Gestion (HEG) • Genève",
    description:
      "Conception d'architectures logicielles, modélisation de bases de données relationnelles, audit de processus métier et développement d'applications web collaboratives dans un cadre agile.",
  },
];

const education = [
  {
    period: "2022 — 2024",
    diploma: "Master en Sciences de l'Information",
    school: "Université / HES-SO Genève",
    detail:
      "Spécialisation Machine Learning, NLP et technologies web avancées. Mémoire de recherche sur le fine-tuning 4-bit (QLoRA) de LLMs.",
    pdfLink: "/docs/thesis-master.pdf",
    pdfLabel: "Consulter le mémoire de Master",
  },
  {
    period: "2019 — 2022",
    diploma: "Bachelor of Science en Informatique de Gestion",
    school: "Haute École de Gestion (HEG) Genève",
    detail:
      "Génie logiciel, gestion de projet agile, modélisation de bases de données, sécurité web et stratégie digitale. Travail de Bachelor en développement web d'entreprise.",
    pdfLink: "/docs/thesis-bachelor.pdf",
    pdfLabel: "Consulter le travail de Bachelor",
  },
];

const skillCategories = [
  {
    category: "Développement Web",
    items: ["React / Next.js", "TypeScript", "WordPress (sur-mesure)", "Tailwind CSS", "HTML5 / CSS3", "Node.js", "REST APIs"],
  },
  {
    category: "Data Science & IA",
    items: ["Python", "PyTorch", "Hugging Face", "LLMs & QLoRA", "Computer Vision", "SQL / Modélisation", "Traitement de données"],
  },
  {
    category: "Outils & Méthodes",
    items: ["Git & GitHub", "Vercel / Infomaniak", "SEO Technique", "Gestion de projet Agile", "UX/UI Design", "Figma"],
  },
];

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#090a0d] text-white bg-noise py-16 sm:py-24">
      <div className="container-padded">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
              <span>Curriculum Vitae</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Dorian Thomé
            </h1>
            <p className="mt-2 text-base sm:text-lg text-zinc-300">
              Développeur Web & Ingénieur en Sciences de l'Information • Genève, Suisse
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/dorian-t-0b1168150/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary no-underline text-xs sm:text-sm"
            >
              LinkedIn
            </a>
            <Link href="/contact" className="btn-primary no-underline text-xs sm:text-sm">
              Me contacter
            </Link>
          </div>
        </div>

        {/* Introduction / Bio */}
        <div className="mt-12 card p-7 sm:p-9">
          <h2 className="text-xl font-semibold text-white">Présentation</h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
            Titulaire d'un Bachelor en Informatique de Gestion (HEG Genève) et d'un Master en Sciences de l'Information, je combine une solide vision stratégique d'entreprise avec une maîtrise technique pointue du développement web moderne et de l'intelligence artificielle. Mon approche privilégie le code propre, la rapidité d'exécution, la clarté de communication et des résultats concrets pour chaque client.
          </p>
        </div>

        {/* 2-Column Section: Experience & Education */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Left: Expériences */}
          <div>
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-200" />
              <span>Expériences & Projets</span>
            </h2>

            <div className="mt-6 space-y-6">
              {experiences.map((exp) => (
                <div key={exp.role} className="card p-6 card-hover">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
                    <span>{exp.company}</span>
                    <span className="rounded-md bg-white/[0.05] px-2 py-0.5 border border-white/[0.06]">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-2.5 text-sm text-zinc-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Formations & Mémoires */}
          <div>
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-200" />
              <span>Formation Académique</span>
            </h2>

            <div className="mt-6 space-y-6">
              {education.map((edu) => (
                <div key={edu.diploma} className="card p-6 card-hover">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
                    <span>{edu.school}</span>
                    <span className="rounded-md bg-white/[0.05] px-2 py-0.5 border border-white/[0.06]">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {edu.diploma}
                  </h3>
                  <p className="mt-2.5 text-sm text-zinc-300 leading-relaxed">
                    {edu.detail}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-4">
                    <a
                      href={edu.pdfLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-200 hover:text-white transition"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>{edu.pdfLabel} (Ouvrir)</span>
                    </a>
                    <a
                      href={edu.pdfLink}
                      download
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>Télécharger</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white">Compétences Techniques</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="card p-6">
                <h3 className="text-base font-semibold text-white pb-3 border-b border-white/[0.06]">
                  {cat.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Back */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="btn-secondary no-underline text-xs sm:text-sm">
            ← Retour à l'accueil
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-primary no-underline text-xs sm:text-sm">
              Discuter d'un projet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}