"use client";

import { useState } from "react";
import PdfViewerModal from "./PdfViewerModal";

interface ThesisItem {
  id: "master" | "bachelor";
  badge: string;
  degree: string;
  year: string;
  title: string;
  abstract: string;
  highlights: string[];
  tags: string[];
  pdfUrl: string;
}

const dataFR: ThesisItem[] = [
  {
    id: "master",
    badge: "Mémoire de Master",
    degree: "Master en Sciences de l'Information • Genève",
    year: "Projet de Recherche",
    title: "Spécialisation et Fine-Tuning de LLMs via QLoRA",
    abstract:
      "Étude expérimentale approfondie sur l'adaptation de grands modèles de langage open-source à des tâches spécialisées. Entraînement local via quantification 4-bit (QLoRA) sur un corpus ciblé, permettant une réduction significative de la perplexité sans dégradation des capacités générales et à moindre coût computationnel.",
    highlights: [
      "Fine-tuning QLoRA en 4-bit sur GPU local",
      "Évaluation rigoureuse de la perplexité et benchmarks",
      "Nettoyage et structuration de datasets d'entraînement",
    ],
    tags: ["Machine Learning", "LLMs", "QLoRA", "PyTorch", "NLP"],
    pdfUrl: "/docs/thesis-master.pdf",
  },
  {
    id: "bachelor",
    badge: "Travail de Bachelor",
    degree: "Bachelor en Informatique de Gestion • HEG Genève",
    year: "Diplôme Universitaire",
    title: "Ingénierie et Conception de Systèmes d'Information Web",
    abstract:
      "Conception complète d'une plateforme web applicative répondant à des problématiques métier concrètes. Alignement des exigences business, modélisation de bases de données, développement fullstack et ergonomie utilisateur soignée dans un cadre agile.",
    highlights: [
      "Analyse des exigences métiers et architecture logicielle",
      "Développement web responsive et sécurisé",
      "Tests d'utilisabilité et conduite de projet agile",
    ],
    tags: ["Informatique de Gestion", "Fullstack", "Bases de Données", "UX/UI", "Agilité"],
    pdfUrl: "/docs/thesis-bachelor.pdf",
  },
];

const dataEN: ThesisItem[] = [
  {
    id: "master",
    badge: "Master's Thesis",
    degree: "Master in Information Science • Geneva",
    year: "Research Thesis",
    title: "Specialization and Fine-Tuning of LLMs via QLoRA",
    abstract:
      "Comprehensive experimental study on adapting open-source large language models to domain-specific tasks. Local training utilizing 4-bit quantization (QLoRA) on targeted datasets, achieving substantial perplexity reduction while maintaining general reasoning and minimizing computational overhead.",
    highlights: [
      "4-bit QLoRA fine-tuning on local hardware",
      "Rigorous perplexity evaluations and benchmarks",
      "Dataset curation, cleaning, and tokenization pipeline",
    ],
    tags: ["Machine Learning", "LLMs", "QLoRA", "PyTorch", "NLP"],
    pdfUrl: "/docs/thesis-master.pdf",
  },
  {
    id: "bachelor",
    badge: "Bachelor's Thesis",
    degree: "Bachelor in Business Information Systems • HEG Geneva",
    year: "Degree Thesis",
    title: "Engineering and Design of Web Information Systems",
    abstract:
      "Full lifecycle development of a custom web application tailored to practical business workflows. Bridging commercial objectives, relational database schema design, modern fullstack engineering, and intuitive UX in an agile development cycle.",
    highlights: [
      "Business requirements elicitation & software architecture",
      "Responsive, secure web development",
      "Usability testing and agile delivery milestones",
    ],
    tags: ["Information Systems", "Fullstack Web", "Database Design", "UX/UI", "Agile"],
    pdfUrl: "/docs/thesis-bachelor.pdf",
  },
];

export default function ThesisSection({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const isEN = lang === "en";
  const items = isEN ? dataEN : dataFR;

  const [activePdf, setActivePdf] = useState<{
    url: string;
    title: string;
    subtitle: string;
  } | null>(null);

  return (
    <section id={isEN ? "research" : "recherche"} className="section">
      <div className="section-head">
        <div>
          <div className="pill mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
            <span>{isEN ? "Academic Rigor" : "Rigueur Académique"}</span>
          </div>
          <h2 className="section-title">
            <span>{isEN ? "Research & " : "Recherche & "}</span>
            <span className="text-gradient-warm">
              {isEN ? "Theses" : "Mémoires Universitaires"}
            </span>
          </h2>
          <p className="section-subtitle">
            {isEN
              ? "My technical foundation is rooted in formal university research in Information Systems and Machine Learning. Both theses are available for online preview or PDF download."
              : "Mon expertise technique s'appuie sur une double formation universitaire en informatique de gestion et machine learning. Vous pouvez consulter ou télécharger librement mes deux mémoires ci-dessous."}
          </p>
        </div>

        <a
          href={isEN ? "/en/cv" : "/cv"}
          className="btn-secondary no-underline hidden sm:inline-flex"
        >
          {isEN ? "View Full Resume" : "Consulter le CV complet"}
        </a>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="card relative flex flex-col justify-between p-7 sm:p-9 card-hover"
          >
            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="rounded-full border border-amber-200/20 bg-amber-200/[0.06] px-3 py-1 text-xs font-medium text-amber-200 tracking-wide">
                  {item.badge}
                </span>
                <span className="text-xs text-zinc-400">{item.year}</span>
              </div>

              {/* Title & Degree */}
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white leading-snug">
                {item.title}
              </h3>
              <div className="mt-1 text-xs sm:text-sm text-zinc-400 font-medium">
                {item.degree}
              </div>

              {/* Abstract */}
              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                {item.abstract}
              </p>

              {/* Key Highlights */}
              <div className="mt-5 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {isEN ? "Key Findings & Methodology" : "Points clés & Méthodologie"}
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-200/80 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActivePdf({
                    url: item.pdfUrl,
                    title: item.title,
                    subtitle: item.degree,
                  })
                }
                className="btn-primary text-xs sm:text-sm py-2.5 px-4"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {isEN ? "Preview Thesis (PDF)" : "Consulter le mémoire (PDF)"}
              </button>

              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-xs sm:text-sm py-2.5 px-3.5 no-underline inline-flex items-center"
                title={isEN ? "Open PDF in new tab" : "Ouvrir le PDF dans un nouvel onglet"}
              >
                <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {isEN ? "Open PDF" : "Ouvrir le PDF"}
              </a>

              <a
                href={item.pdfUrl}
                download
                className="rounded-2xl border border-white/10 bg-white/[0.04] text-xs sm:text-sm py-2.5 px-3 text-zinc-300 hover:text-white hover:bg-white/10 transition no-underline inline-flex items-center"
                title={isEN ? "Download PDF" : "Télécharger le PDF"}
              >
                <svg
                  className="mr-1.5 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {isEN ? "Download" : "Télécharger"}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Modal Reader */}
      {activePdf && (
        <PdfViewerModal
          isOpen={!!activePdf}
          onClose={() => setActivePdf(null)}
          pdfUrl={activePdf.url}
          title={activePdf.title}
          subtitle={activePdf.subtitle}
          lang={lang}
        />
      )}
    </section>
  );
}
