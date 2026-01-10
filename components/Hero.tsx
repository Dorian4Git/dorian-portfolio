import Image from "next/image";
import Link from "next/link";

export function HeroModern() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] p-6 sm:p-10">
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft blobs */}
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-24 -left-24 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-3xl" />

        {/* geometric “frames” */}
        <div className="absolute right-6 top-6 h-24 w-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl" />
        <div className="absolute left-6 bottom-6 h-16 w-40 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl" />
      </div>

      {/* Top mini-nav (optionnel, si tu veux vraiment coller au template) */}
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="text-4xl font-semibold bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
            Dorian Thomé
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-300">
          <a className="rounded-xl px-3 py-2 hover:bg-white/10 hover:text-white transition no-underline" href="#services">Services</a>
          <a className="rounded-xl px-3 py-2 hover:bg-white/10 hover:text-white transition no-underline" href="#realisations">Réalisations</a>
          <a className="rounded-xl px-3 py-2 hover:bg-white/10 hover:text-white transition no-underline" href="#contact">Contact</a>
        </div>
        <Link
          href="/contact"
          className="rounded-3xl border border-white/15 bg-white/5 px-4 py-2.5 text-xl font-semibold text-white hover:bg-white/10 transition no-underline"
        >
          Devis
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left: text */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Sites WordPress / Next.js • Genève
          </div>

          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Je crée votre site web
            <span className="block">
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                moderne & rapide
              </span>
              , sans blabla.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-200">
            Pour particuliers et petites entreprises : landing page, site vitrine, ou site WordPress administrable.
            Si besoin, je peux aussi intégrer des briques IA/automatisation.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-3xl bg-white px-5 py-3 text-xl font-semibold text-zinc-950 hover:bg-zinc-200 transition no-underline"
            >
              Me contacter
            </a>
            <a
              href="#services"
              className="rounded-3xl border border-white/15 bg-white/5 px-5 py-3 text-xl font-semibold text-white hover:bg-white/10 transition no-underline"
            >
              Voir les offres
            </a>
            <a
              href="#realisations"
              className="rounded-3xl border border-white/15 bg-white/5 px-5 py-3 text-xl font-semibold text-white hover:bg-white/10 transition no-underline"
            >
              Voir le portfolio
            </a>
          </div>

          {/* quick credibility row */}
          <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-zinc-300 max-w-xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-white font-semibold">Livraison</div>
              <div className="mt-1">V1 rapide</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-white font-semibold">Stack</div>
              <div className="mt-1">WP / Next.js</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-white font-semibold">Local</div>
              <div className="mt-1">Genève</div>
            </div>
          </div>
        </div>

        {/* Right: framed image */}
        <div className="relative">
          {/* Big gradient frame behind (the “shape” from template) */}
          <div className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/60 via-fuchsia-500/30 to-amber-300/30 blur-[1px]" />

          {/* Image card */}
          <div className="relative rounded-[1.6rem] p-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
              <Image
                src="/media/illustration_start.png"
                alt="Illustration moderne de site web"
                fill
                className="object-cover"
                priority
                unoptimized
              />
              
              {/* small overlay shapes */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl" />
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-28 w-40 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl" />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="text-sm text-zinc-200">
                <span className="font-semibold text-white">Design moderne</span> • performant • SEO
              </div>
              <div className="text-xs text-zinc-400">Next.js / WP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
