import Link from "next/link";
import SectionHeading from "../../../components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="container-fluid">
      <div className="space-y-10">
        <SectionHeading
          title="Contact"
          subtitle="Formulaire rapide ou contact direct. Je réponds avec un plan clair et une estimation."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* FORM */}
          <div className="gborder">
            <section className="card p-7 sm:p-9">
              <h2 className="text-2xl font-semibold text-white">Message</h2>
              <p className="mt-3 text-base sm:text-lg text-zinc-300">
                Indique ton objectif, ta deadline, et tout lien/exemple utile. Je te réponds avec une proposition simple
                (et les prochaines étapes).
              </p>

              <form
                className="mt-7 space-y-5"
                action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                method="POST"
              >
                <div className="space-y-2">
                  <label className="text-base text-zinc-200" htmlFor="name">
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className={[
                      "w-full rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3",
                      "text-base text-zinc-100 placeholder:text-zinc-500 outline-none",
                      "focus:border-white/25 focus:ring-2 focus:ring-cyan-200/25",
                    ].join(" ")}
                    placeholder="Votre nom"
                    autoComplete="name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base text-zinc-200" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className={[
                      "w-full rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3",
                      "text-base text-zinc-100 placeholder:text-zinc-500 outline-none",
                      "focus:border-white/25 focus:ring-2 focus:ring-cyan-200/25",
                    ].join(" ")}
                    placeholder="vous@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base text-zinc-200" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    className={[
                      "w-full resize-none rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3",
                      "text-base text-zinc-100 placeholder:text-zinc-500 outline-none",
                      "focus:border-white/25 focus:ring-2 focus:ring-cyan-200/25",
                    ].join(" ")}
                    placeholder="Que voulez-vous construire ? Contraintes ? Délai ? Exemples de sites que vous aimez ?"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button type="submit" className="btn-primary no-underline">
                    Envoyer
                  </button>

                  <Link href="/" className="btn-secondary no-underline">
                    Retour à l’accueil
                  </Link>
                </div>

                <p className="mt-3 text-sm text-zinc-400">
                  Les messages sont envoyés directement à{" "}
                  <a className="link" href="mailto:dorian.thome@proton.me">
                    dorian.thome@proton.me
                  </a>
                  .
                </p>
              </form>
            </section>
          </div>

          {/* DIRECT */}
          <div className="gborder">
            <section className="card p-7 sm:p-9">
              <h2 className="text-2xl font-semibold text-white">Direct</h2>
              <p className="mt-3 text-base sm:text-lg text-zinc-300">
                Si tu préfères, contacte-moi directement. Je suis basé à Genève.
              </p>

              <div className="mt-7 space-y-5 text-base text-zinc-200">
                <div className="card p-5">
                  <div className="text-sm text-zinc-400">Email</div>
                  <a className="link text-base" href="mailto:dorian.thome@proton.me">
                    dorian.thome@proton.me
                  </a>
                </div>

                <div className="card p-5">
                  <div className="text-sm text-zinc-400">LinkedIn</div>
                  <a
                    className="link text-base"
                    href="https://www.linkedin.com/in/dorian-t-0b1168150/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    dorian-t-0b1168150
                  </a>
                </div>

                <div className="card p-5">
                  <div className="text-sm text-zinc-400">GitHub</div>
                  <a
                    className="link text-base"
                    href="https://github.com/Dorian4Git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dorian4Git
                  </a>
                </div>

                {/* Brief template */}
                <div className="gborder">
                  <div className="card p-6">
                    <div className="text-lg font-semibold text-white">Brief rapide (copier-coller)</div>
                    <div className="proseish mt-3 text-base text-zinc-300">
                      <p className="m-0">• Objectif :</p>
                      <p className="m-0">• Deadline :</p>
                      <p className="m-0">• Exemples que vous aimez :</p>
                      <p className="m-0">• Indispensables :</p>
                      <p className="m-0">• Budget (optionnel) :</p>
                    </div>

                    <div className="mt-5">
                      <a href="#top" className="link text-sm text-zinc-200">
                        ↑ Retour en haut
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-zinc-500">
                  Temps de réponse typique : 24–48h (hors week-end).
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
