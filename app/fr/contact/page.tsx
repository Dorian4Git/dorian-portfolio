import SectionHeading from "../../../components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="Contact"
        subtitle="Envoyez-moi un message via le formulaire ou contactez-moi directement."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Message</h2>
          <p className="mt-2 text-base text-zinc-300">
            Indiquez votre objectif, votre calendrier, et tout lien/exemple utile. Je répondrai avec un plan clair.
          </p>

          <form
            className="mt-6 space-y-4"
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
                className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
                placeholder="Votre nom"
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
                className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
                placeholder="vous@example.com"
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
                rows={6}
                className="w-full resize-none rounded-xl border border-zinc-300 bg-white px-3 py-2 text-base text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
                placeholder="Que voulez-vous construire ? Contraintes ? Délai ?"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-zinc-50 px-4 py-2.5 text-base font-medium text-zinc-950 hover:bg-zinc-200 transition"
            >
              Envoyer
            </button>

            <p className="text-xs text-zinc-500">
              Les messages sont envoyés directement à{" "}
              <a className="link" href="mailto:dorian.thome@proton.me">
                dorian.thome@proton.me
              </a>.
            </p>
          </form>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Direct</h2>
          <div className="mt-4 space-y-3 text-base text-zinc-300">
            <div>
              <div className="text-xs text-zinc-500">Email</div>
              <a className="link" href="mailto:dorian.thome@proton.me">
                dorian.thome@proton.me
              </a>
            </div>

            <div>
              <div className="text-base text-zinc-500">LinkedIn</div>
              <a
                className="link"
                href="https://www.linkedin.com/in/dorian-t-0b1168150/"
                target="_blank"
                rel="noreferrer"
              >
                dorian-t-0b1168150
              </a>
            </div>

            <div>
              <div className="text-base text-zinc-500">GitHub</div>
              <a
                className="link"
                href="https://github.com/Dorian4Git"
                target="_blank"
                rel="noreferrer"
              >
                Dorian4Git
              </a>
            </div>

            <div className="mt-6 card p-4">
              <div className="text-base font-medium text-zinc-50">Modèle de brief rapide</div>
              <div className="mt-2 text-base text-zinc-300">
                <div>• Objectif :</div>
                <div>• Deadline :</div>
                <div>• Exemples que vous aimez :</div>
                <div>• Indispensables :</div>
                <div>• Budget (optionnel) :</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
