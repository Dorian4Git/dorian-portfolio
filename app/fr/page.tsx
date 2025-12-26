import Link from "next/link";
import Pill from "@/components/Pill";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card p-6 sm:p-10">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Pill text="Ingénierie LLM" />
              <Pill text="Vision par ordinateur" />
              <Pill text="Ingénierie produit" />
              <Pill text="Livraison web" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-50">
              Dorian Thomé
            </h1>

            <p className="text-lg sm:text-xl text-zinc-200 max-w-3xl">
              Data scientist & développeur (LLMs • Vision par ordinateur • Ingénierie produit).
              Je conçois des systèmes d’IA pratiques et des sites web modernes — des modèles
              linguistiques ajustés aux expériences web prêtes pour la production.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects"
                className="rounded-xl bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition"
              >
                Voir les projets
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/60 transition"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/60 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="card card-hover p-5">
              <div className="text-sm font-medium text-zinc-50">Focus</div>
              <div className="mt-2 text-sm text-zinc-300">
                Affinage LLM (qLoRA/PEFT), évaluation et mise en production pragmatique.
              </div>
            </div>
            <div className="card card-hover p-5">
              <div className="text-sm font-medium text-zinc-50">Force</div>
              <div className="mt-2 text-sm text-zinc-300">
                Pipelines et jeux de données vision (imagerie drone, classification).
              </div>
            </div>
            <div className="card card-hover p-5">
              <div className="text-sm font-medium text-zinc-50">Aussi</div>
              <div className="mt-2 text-sm text-zinc-300">
                Livraison web : WordPress pour la simplicité, ou sites codés modernes pour la performance.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Ce que je fais</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>• Construire des prototypes ML qui tiennent la route hors notebook.</li>
            <li>• Affiner et évaluer des LLM efficacement (qLoRA/PEFT).</li>
            <li>• Entraîner des modèles de vision et concevoir des workflows d’inférence propres.</li>
            <li>• Livrer des sites web modernes (rapides, clairs, orientés conversion).</li>
          </ul>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Ma façon de travailler</h2>
          <div className="mt-4 grid gap-3">
            <div className="card card-hover p-4">
              <div className="text-sm font-medium text-zinc-100">1) Cadrage</div>
              <div className="text-sm text-zinc-300 mt-1">
                On définit l’objectif, les contraintes, et ce que veut dire “terminé”.
              </div>
            </div>
            <div className="card card-hover p-4">
              <div className="text-sm font-medium text-zinc-100">2) Construction</div>
              <div className="text-sm text-zinc-300 mt-1">
                Itérations rapides, jalons clairs, pas de sur-ingénierie.
              </div>
            </div>
            <div className="card card-hover p-4">
              <div className="text-sm font-medium text-zinc-100">3) Livraison</div>
              <div className="text-sm text-zinc-300 mt-1">
                Transmission propre avec documentation et options d’accompagnement continu.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
