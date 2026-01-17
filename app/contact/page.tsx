import Link from "next/link";
import SectionHeading from "@/components/SectionHeading"; // Check path if needed

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-20">
      
      {/* 1. Background Ambiance (Matches Hero) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <div className="container-padded">
        <SectionHeading
          title="Contact"
          subtitle="Un projet ? Une question ? Je réponds généralement sous 24h."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          
          {/* LEFT: The Form */}
          <div className="gborder">
            <section className="card h-full p-6 sm:p-10">
              <h2 className="text-xl font-semibold text-white">Envoyer un message</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Parlez-moi de votre projet, de vos délais et de vos attentes.
              </p>

              <form
                className="mt-8 space-y-5"
                /* SOLUTION: Uses FormSubmit.co - No API key needed, just your email */
                action="https://formsubmit.co/dorian.thome@proton.me"
                method="POST"
              >
                {/* HoneyPot & Config (Hide Captcha to make it smoother) */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nouveau contact via Portfolio" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300" htmlFor="name">
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-300/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-cyan-300/50 transition"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-300/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-cyan-300/50 transition"
                      placeholder="jean@entreprise.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300" htmlFor="message">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-300/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-cyan-300/50 transition"
                    placeholder="Bonjour, je souhaite créer un site vitrine pour mon agence..."
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Envoyer le message
                  </button>
                  <p className="text-xs text-zinc-500 hidden sm:block">
                    100% direct & sécurisé.
                  </p>
                </div>
              </form>
            </section>
          </div>

          {/* RIGHT: Info & Copy-Paste */}
          <div className="space-y-6">
            
            {/* Quick Links Card */}
            <div className="gborder">
              <section className="card p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-white">Coordonnées directes</h3>
                <div className="mt-6 space-y-4">
                  <a 
                    href="mailto:dorian.thome@proton.me" 
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:bg-white/[0.05]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                      @
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">Email</div>
                      <div className="font-medium text-white">dorian.thome@proton.me</div>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/dorian-t-0b1168150/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:bg-white/[0.05]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                      in
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">LinkedIn</div>
                      <div className="font-medium text-white">Dorian Thomé</div>
                    </div>
                  </a>
                </div>
              </section>
            </div>

            {/* Helper: Brief Template */}
            <div className="card p-6 sm:p-8 border-dashed border-zinc-700/50">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Modèle de brief</h3>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-zinc-300">
                  À copier
                </span>
              </div>
              <div className="mt-4 rounded-xl bg-black/40 p-4 text-sm leading-relaxed text-zinc-400 font-mono select-all">
                <p>• Objectif du site : ...</p>
                <p>• Deadline souhaitée : ...</p>
                <p>• Budget estimé : ...</p>
                <p>• Exemples de design aimés : ...</p>
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                Copiez ces points dans le formulaire pour gagner du temps.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}