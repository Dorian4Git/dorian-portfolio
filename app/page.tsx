import Link from "next/link";
import Pill from "@/components/Pill";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card p-6 sm:p-10">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Pill text="LLM Engineering" />
              <Pill text="Computer Vision" />
              <Pill text="Product Engineering" />
              <Pill text="Web Delivery" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-50">
              Dorian Thomé
            </h1>

            <p className="text-lg sm:text-xl text-zinc-200 max-w-3xl">
              Data scientist & developer (LLMs • Computer Vision • Product Engineering).
              I build practical AI systems and modern websites — from fine-tuned
              language models to production-ready web experiences.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects"
                className="rounded-xl bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition"
              >
                View Projects
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
                LLM fine-tuning (qLoRA/PEFT), evaluation, and practical ML delivery.
              </div>
            </div>
            <div className="card card-hover p-5">
              <div className="text-sm font-medium text-zinc-50">Strength</div>
              <div className="mt-2 text-sm text-zinc-300">
                Computer vision pipelines and datasets (drone imagery, classification).
              </div>
            </div>
            <div className="card card-hover p-5">
              <div className="text-sm font-medium text-zinc-50">Also</div>
              <div className="mt-2 text-sm text-zinc-300">
                Web delivery: WordPress for easy maintenance, or modern coded sites for premium performance.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">What I do</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>• Build ML prototypes that don’t collapse outside notebooks.</li>
            <li>• Fine-tune and evaluate LLMs efficiently (qLoRA/PEFT).</li>
            <li>• Train computer vision models and craft clean inference workflows.</li>
            <li>• Deliver modern websites (fast, clear, and conversion-friendly).</li>
          </ul>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">How I work</h2>
          <div className="mt-4 grid gap-3">
            <div className="card card-hover p-4">
              <div className="text-sm font-medium text-zinc-100">1) Scope</div>
              <div className="text-sm text-zinc-300 mt-1">
                We define the goal, constraints, and what “done” means.
              </div>
            </div>
            <div className="card card-hover p-4">
              <div className="text-sm font-medium text-zinc-100">2) Build</div>
              <div className="text-sm text-zinc-300 mt-1">
                Fast iterations, clear checkpoints, no over-engineering.
              </div>
            </div>
            <div className="card card-hover p-4">
              <div className="text-sm font-medium text-zinc-100">3) Deliver</div>
              <div className="text-sm text-zinc-300 mt-1">
                Clean handoff with documentation and options for ongoing support.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
