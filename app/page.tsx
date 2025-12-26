import Link from "next/link";
import Pill from "@/components/Pill";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card p-6 sm:p-10">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Pill text="WordPress Websites" />
              <Pill text="Modern Personal Sites" />
              <Pill text="Small Business Sites" />
              <Pill text="Fast Delivery" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-50">
              Dorian Thomé
            </h1>

            <p className="text-lg sm:text-xl text-zinc-200 max-w-3xl">
              Website developer. I build clean, modern websites for small businesses and individuals —
              WordPress if you want easy maintenance, or a custom-coded site if you want a premium look and speed.
            </p>

            <p className="text-base text-zinc-400 max-w-3xl">
              Also: I have a background in AI/ML, useful when you need automation or smarter features later.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/services"
                className="rounded-xl bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition"
              >
                See Services
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/60 transition"
              >
                Get a Quote
              </Link>
              <Link
                href="/projects"
                className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/60 transition"
              >
                View Work
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="card card-hover p-5">
              <div className="text-base font-medium text-zinc-50">WordPress (easy to manage)</div>
              <div className="mt-2 text-base text-zinc-300">
                Perfect if you want to update text/photos yourself and keep things simple after launch.
              </div>
            </div>

            <div className="card card-hover p-5">
              <div className="text-base font-medium text-zinc-50">Modern custom site (premium)</div>
              <div className="mt-2 text-base text-zinc-300">
                Fast, secure, and designed for a modern look. Great for portfolios, landing pages, and brands.
              </div>
            </div>

            <div className="card card-hover p-5">
              <div className="text-base font-medium text-zinc-50">Support options</div>
              <div className="mt-2 text-base text-zinc-300">
                One-time delivery or monthly assistance (updates, backups, small edits). Your choice.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">What I build</h2>
          <ul className="mt-4 space-y-3 text-base text-zinc-300">
            <li>• WordPress websites for local businesses (services, contact, booking-ready).</li>
            <li>• Personal portfolios / CV websites that look modern and load fast.</li>
            <li>• Landing pages focused on getting you more leads.</li>
            <li>• Simple redesigns: make an old website look clean and trustworthy.</li>
          </ul>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">How it works</h2>
          <div className="mt-4 grid gap-3">
            <div className="card card-hover p-4">
              <div className="text-base font-medium text-zinc-100">1) Quick brief</div>
              <div className="text-base text-zinc-300 mt-1">
                You tell me your goal, pages needed, and any examples you like.
              </div>
            </div>
            <div className="card card-hover p-4">
              <div className="text-base font-medium text-zinc-100">2) Build & review</div>
              <div className="text-base text-zinc-300 mt-1">
                I build a first version fast. You give feedback. We refine.
              </div>
            </div>
            <div className="card card-hover p-4">
              <div className="text-base font-medium text-zinc-100">3) Launch</div>
              <div className="text-base text-zinc-300 mt-1">
                Site goes live, plus a clean handoff and optional ongoing support.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
