import SectionHeading from "../../../components/SectionHeading";
import Link from "next/link";

const services = [
  {
    title: "Site WordPress pour Entreprise",
    who: "Idéal pour les petites entreprises qui veulent éditer facilement avec des outils familiers.",
    bullets: [
      "4–7 pages (ou plus si nécessaire)",
      "Responsive mobile + design épuré",
      "Formulaire de contact + configuration SEO basique",
      "Formation à la prise en main incluse",
    ],
    note: "Plan de maintenance mensuel optionnel (mises à jour, sauvegardes, petites modifications).",
  },
  {
    title: "Site Moderne Statique (Next.js)",
    who: "Idéal pour un look premium, vitesse et sécurité — hébergement peu exigeant.",
    bullets: [
      "Design personnalisé, UI moderne",
      "Performance rapide + excellents scores Lighthouse",
      "Hébergé sur GitHub Pages ou Vercel",
      "Intégration formulaire de contact + option analytics",
    ],
    note: "Les mises à jour de contenu nécessitent des changements de code (sauf ajout d'un CMS).",
  },
  {
    title: "Landing Page de Conversion",
    who: "Idéal pour générer des leads : une page, message ciblé, CTA clair.",
    bullets: [
      "Mise en page optimisée pour la clarté",
      "Sections CTA (pourquoi / preuves / offre / contact)",
      "Intégration formulaire + suivi optionnel",
      "Livraison rapide",
    ],
    note: "Parfait pour les campagnes ou prestataires indépendants.",
  },
  {
    title: "Prototype IA / Consultation",
    who: "Idéal pour expériences cadrées : faisabilité, POC rapides et direction technique.",
    bullets: [
      "Conseil faisabilité fine-tuning LLM et mise en place",
      "Stratégie d'évaluation (quoi mesurer, comment)",
      "Conseils pipeline CV (données → modèle → inférence)",
      "Livrables clairs et documentation",
    ],
    note: "Pas de promesses vagues — nous définissons le périmètre à l'avance.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="Services"
        subtitle="Offres claires. Périmètre clair. Livré avec un focus sur la qualité et la rapidité."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((s) => (
          <article key={s.title} className="card card-hover p-6">
            <h2 className="text-base font-semibold text-zinc-50">{s.title}</h2>
            <p className="mt-2 text-sm text-zinc-300">{s.who}</p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-zinc-400">{s.note}</p>
          </article>
        ))}
      </div>

      <div className="card p-6 sm:p-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-medium text-zinc-50">Vous voulez un devis ?</div>
          <div className="text-sm text-zinc-300">
            Envoyez votre objectif, délai et 1–2 exemples que vous aimez.
          </div>
        </div>
        <Link
          href="/contact"
          className="rounded-xl bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition w-fit"
        >
          Me contacter
        </Link>
      </div>
    </div>
  );
}
