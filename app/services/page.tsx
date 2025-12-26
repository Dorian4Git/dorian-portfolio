import SectionHeading from "../../components/SectionHeading";
import Link from "next/link";

const services = [
  {
    title: "WordPress Business Website",
    who: "Best for small businesses who want easy editing and familiar tooling.",
    bullets: [
      "4–7 pages (or more if needed)",
      "Mobile responsive + clean design",
      "Contact form + basic SEO setup",
      "Handover training included",
    ],
    note: "Optional monthly Care plan available (updates, backups, small edits).",
  },
  {
    title: "Modern Static Website (Next.js)",
    who: "Best for premium look, speed, and security — low maintenance hosting.",
    bullets: [
      "Custom design, modern UI",
      "Fast performance + great Lighthouse scores",
      "Hosted on GitHub Pages or Vercel",
      "Contact form integration + analytics option",
    ],
    note: "Content updates require code changes (unless you add a CMS later).",
  },
  {
    title: "Conversion Landing Page",
    who: "Best for lead generation: one page, focused message, clear CTA.",
    bullets: [
      "Single-page layout optimized for clarity",
      "CTA sectioning (why / proof / offer / contact)",
      "Form integration + optional tracking",
      "Quick delivery",
    ],
    note: "Ideal for campaigns or solo service providers.",
  },
  {
    title: "AI Prototype / Consultation",
    who: "Best for scoped experiments: feasibility, quick POCs, and technical direction.",
    bullets: [
      "LLM fine-tuning feasibility & setup advice",
      "Evaluation strategy (what to measure, how)",
      "CV pipeline guidance (data → model → inference)",
      "Clear deliverables & documentation",
    ],
    note: "No vague promises — we define scope up front.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="Services"
        subtitle="Clear offers. Clear scope. Delivered with a focus on quality and speed."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((s) => (
          <article key={s.title} className="card card-hover p-6">
            <h2 className="text-base font-semibold text-zinc-50">{s.title}</h2>
            <p className="mt-2 text-base text-zinc-300">{s.who}</p>

            <ul className="mt-4 space-y-2 text-base text-zinc-300">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>

            <p className="mt-4 text-base text-zinc-400">{s.note}</p>
          </article>
        ))}
      </div>

      <div className="card p-6 sm:p-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-base font-medium text-zinc-50">Want a quote?</div>
          <div className="text-base text-zinc-300">
            Send your goal, timeline, and 1–2 examples you like.
          </div>
        </div>
        <Link
          href="/contact"
          className="rounded-xl bg-zinc-50 px-4 py-2.5 text-base font-medium text-zinc-950 hover:bg-zinc-200 transition w-fit"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
}
