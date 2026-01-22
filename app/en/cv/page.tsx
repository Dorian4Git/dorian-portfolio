import Link from "next/link";

export const metadata = {
  title: "CV en cours... | Dorian Thomé",
  description: "Le CV est en cours de mise à jour. Retrouvez-moi sur LinkedIn en attendant.",
};

export default function CVWaitingPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-zinc-950 bg-grid bg-noise px-4">
      {/* Background Vibes (Centered) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute h-[300px] w-[300px] translate-x-20 translate-y-20 rounded-full bg-fuchsia-500/10 blur-[80px]" />
      </div>

      <div className="relative w-full max-w-lg">
        {/* The Card Wrapper with Gradient Border */}
        <div className="gborder p-[1px]">
          <div className="card flex flex-col items-center p-8 sm:p-12 text-center backdrop-blur-xl">
            
            {/* Animated Icon */}
            <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 animate-float">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-12 w-12 text-zinc-200"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="M8 15l4 3 4-3" />
              </svg>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Juste un <br />
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                petit moment.
              </span>
            </h1>

            {/* Cozy text */}
            <p className="mt-4 text-lg text-zinc-300">
              Je suis en train de peaufiner le PDF pour qu'il soit aussi propre que mon code. Il sera disponible très bientôt.
            </p>

            {/* Divider */}
            <div className="my-8 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* CTAs */}
            <div className="flex flex-col w-full gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://www.linkedin.com/in/dorian-t-0b1168150/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full sm:w-auto no-underline"
              >
                Voir mon LinkedIn
              </a>
              <Link
                href="/"
                className="btn-secondary w-full sm:w-auto no-underline"
              >
                Retour à l'accueil
              </Link>
            </div>

            <p className="mt-8 text-xs text-zinc-500">
              En attendant, on peut discuter par <a href="mailto:dorian.thome@proton.me" className="link text-zinc-400">email</a>.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}