import SectionHeading from "../../../components/SectionHeading";

const projects = [
  {
    title: "Site WordPress — Salon de massage",
    tags: ["Livraison client", "WordPress", "UX"],
    description:
      "Site WordPress facile à gérer avec design épuré, pages services et un parcours de contact simple. Conçu pour des mises à jour faciles par des profils non techniques.",
  },
  {
    title: "MISY — Livraison de colis via covoiturage",
    tags: ["Produit", "Cartes", "Paiements", "UX mobile"],
    description:
      "Concept d’app end-to-end permettant d’envoyer des colis en utilisant les trajets de covoiturage. Matching via carte + parcours paiement + UX logistique in-app.",
  },
  {
    title: "Affinage LLM avec qLoRA",
    tags: ["LLMs", "qLoRA", "PEFT", "Efficacité"],
    description:
      "Pipeline d’affinage efficace pour adapter de grands modèles de langage avec moins de compute. Accent sur la config d’entraînement, les hyperparamètres et la démarche d’évaluation.",
  },
  {
    title: "Détection d’ambroisie sur imagerie drone",
    tags: ["Vision par ordinateur", "ResNet", "Imagerie aérienne"],
    description:
      "Pipeline de vision utilisant des modèles ResNet pour détecter l’ambroisie sur des images drone. Préparation dataset, augmentation et workflow d’inférence.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="Projets"
        subtitle="Une sélection de travaux : livraison web, design produit, affinage de LLM et vision par ordinateur."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card card-hover p-6">
            <h2 className="text-base font-semibold text-zinc-50">{p.title}</h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm text-zinc-300">{p.description}</p>
          </article>
        ))}
      </div>

      <div className="card p-6 sm:p-8">
        <h3 className="text-base font-semibold text-zinc-50">Prochaine amélioration</h3>
        <p className="mt-2 text-sm text-zinc-300">
          Ajouter 1–2 captures par projet et des sections courtes « Problème → Approche → Résultat ».
          C’est ce qui fait s’arrêter les recruteurs et les clients.
        </p>
      </div>
    </div>
  );
}
