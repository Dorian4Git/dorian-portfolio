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
        subtitle="Une vue d'ensemble concise axée sur les compétences pratiques et l'expérience concrète."
      />

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-semibold text-zinc-50">Profil</h2>
        <p className="text-base text-zinc-300 max-w-3xl">
          Avec un diplôme de d'informaticien de gestion et une passion pour l'IA appliquée, je m'intéresse au Web, à la science des données et à l'apprentissage automatique. Je me concentre sur des systèmes Machine learning pragmatiques : affinage efficace de LLM, pipelines de vision par ordinateur et livraison orientée produit. J'ai également de l'expérience dans la création et le déploiement de sites web.
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
            <li>• Application mobile avec cartes + paiement intégrée (MISY).</li>
            <li>• Livraison de site WordPress client (salon de massage).</li>
            <li>• Affinage de LLM avec méthodes qLoRA/PEFT.</li>
            <li>• Classification d’images drone pour détecter l’ambroisie (ResNet).</li>
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
