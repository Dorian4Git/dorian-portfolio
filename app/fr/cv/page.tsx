import SectionHeading from "../../../components/SectionHeading";
import Pill from "@/components/Pill";

const skills = [
  "Affinage LLM (qLoRA/PEFT)",
  "Approche prompting et évaluation",
  "Vision par ordinateur (modèles type ResNet)",
  "Curation et augmentation de datasets",
  "Workflows Python / PyTorch",
  "Livraison web (WordPress + sites statiques modernes)",
  "Cadrage produit et communication",
];

export default function CVPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="CV"
        subtitle="Vue d’ensemble rapide et scannable. Vous pouvez remplacer/compléter les détails à tout moment."
      />

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-semibold text-zinc-50">Profil</h2>
        <p className="text-base text-zinc-300 max-w-3xl">
          Ingénieur IA appliquée, focalisé sur des systèmes ML pragmatiques : affinage LLM efficace,
          pipelines de vision par ordinateur et livraison orientée produit. Expérience aussi en
          création et déploiement de sites web modernes pour des clients réels.
        </p>
      </section>

      <section className="card p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-zinc-50">Compétences</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <Pill key={s} text={s} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Travaux sélectionnés</h2>
          <ul className="mt-4 space-y-3 text-base text-zinc-300">
            <li>• Affinage de LLM avec méthodes qLoRA/PEFT.</li>
            <li>• Classification d’images drone pour détecter l’ambroisie (ResNet).</li>
            <li>• Concept d’app avec cartes + parcours paiement (MISY).</li>
            <li>• Livraison de site WordPress client (salon de massage).</li>
          </ul>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Liens</h2>
          <div className="mt-4 space-y-2 text-base">
            <a
              className="link"
              href="https://www.linkedin.com/in/dorian-t-0b1168150/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <a
              className="link"
              href="https://github.com/Dorian4Git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <br />
            <a className="link" href="mailto:dorian.thome@proton.me">
              dorian.thome@proton.me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
