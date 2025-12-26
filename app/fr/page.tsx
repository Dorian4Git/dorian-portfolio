import Link from "next/link";
import Pill from "@/components/Pill";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card p-6 sm:p-10">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Pill text="Sites WordPress" />
              <Pill text="Sites personnels modernes" />
              <Pill text="Sites petites entreprises" />
              <Pill text="Livraison rapide" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-50">
              Dorian Thomé
            </h1>

            <p className="text-lg sm:text-xl text-zinc-200 max-w-3xl">
              Développeur web. Je crée des sites propres et modernes pour les petites entreprises et particuliers —
              WordPress si vous voulez une maintenance simple, ou un site codé sur mesure pour un rendu premium et rapidement.
            </p>

            <p className="text-base text-zinc-400 max-w-3xl">
              J’ai aussi un parcours en IA/ML, utile si vous voulez de l’automatisation ou des fonctions plus intelligentes plus tard.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/services"
                className="rounded-xl bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition"
              >
                Voir les services
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/60 transition"
              >
                Demander un devis
              </Link>
              <Link
                href="/projects"
                className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/60 transition"
              >
                Voir les réalisations
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="card card-hover p-5">
              <div className="text-base font-medium text-zinc-50">WordPress (simple à gérer)</div>
              <div className="mt-2 text-base text-zinc-300">
                Parfait si vous voulez mettre à jour textes/photos vous-même et garder les choses simples après le lancement.
              </div>
            </div>

            <div className="card card-hover p-5">
              <div className="text-base font-medium text-zinc-50">Site sur mesure moderne (premium)</div>
              <div className="mt-2 text-base text-zinc-300">
                Rapide, sécurisé, et conçu pour un look moderne. Idéal pour portfolios, landing pages et marques.
              </div>
            </div>

            <div className="card card-hover p-5">
              <div className="text-base font-medium text-zinc-50">Options de support</div>
              <div className="mt-2 text-base text-zinc-300">
                Livraison one-shot ou accompagnement mensuel (mises à jour, sauvegardes, petites retouches). À vous de choisir.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Ce que je réalise</h2>
          <ul className="mt-4 space-y-3 text-base text-zinc-300">
            <li>• Sites WordPress pour commerces locaux (services, contact, prêt pour la prise de rendez-vous).</li>
            <li>• Portfolios / sites CV personnels modernes et rapides.</li>
            <li>• Landing pages conçues pour générer plus de leads.</li>
            <li>• Refontes légères : rendre un site ancien plus clair et rassurant.</li>
          </ul>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Comment ça se passe</h2>
          <div className="mt-4 grid gap-3">
            <div className="card card-hover p-4">
              <div className="text-base font-medium text-zinc-100">1) Brief rapide</div>
              <div className="text-base text-zinc-300 mt-1">
                Vous me dites votre objectif, les pages nécessaires et les exemples qui vous plaisent.
              </div>
            </div>
            <div className="card card-hover p-4">
              <div className="text-base font-medium text-zinc-100">2) Construction & retours</div>
              <div className="text-base text-zinc-300 mt-1">
                Je construis une première version rapidement. Vous donnez vos retours. On affine.
              </div>
            </div>
            <div className="card card-hover p-4">
              <div className="text-base font-medium text-zinc-100">3) Mise en ligne</div>
              <div className="text-base text-zinc-300 mt-1">
                Le site est mis en ligne, avec une passation propre et un support continu si besoin.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
