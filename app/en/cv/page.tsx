import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Academic Background | Dorian Thomé",
  description:
    "Curriculum Vitae of Dorian Thomé — Web Developer & Information Science Graduate based in Geneva, Switzerland.",
};

const experiences = [
  {
    period: "2023 — Present",
    role: "Freelance Web Developer & Digital Creator",
    company: "Independent • Geneva & Remote",
    description:
      "Design and delivery of modern websites (WordPress & Next.js), high-converting landing pages, and practical AI prototypes for founders and Swiss SMBs. Scope definition, UI design, fullstack development, deployment, and client training.",
  },
  {
    period: "2022 — 2024",
    role: "Academic Research & AI Engineering",
    company: "Master in Information Science • Geneva",
    description:
      "Specialization in Natural Language Processing (NLP) and Computer Vision. Conducted a research thesis on 4-bit parameter-efficient fine-tuning (QLoRA) of LLMs, and developed an aerial drone computer vision POC over 40,000 images.",
  },
  {
    period: "2019 — 2022",
    role: "Information Systems Engineering Projects",
    company: "Geneva School of Business Administration (HEG)",
    description:
      "Software architecture design, relational database modeling, business workflow audits, and collaborative web application development in an agile environment.",
  },
];

const education = [
  {
    period: "2022 — 2024",
    diploma: "Master of Science in Information Science",
    school: "University of Geneva / HES-SO",
    detail:
      "Specialization in Machine Learning, NLP, and modern web architectures. Research thesis on parameter-efficient fine-tuning (QLoRA) of open LLMs.",
    pdfLink: "/docs/thesis-master.pdf",
    pdfLabel: "View Master's Thesis",
  },
  {
    period: "2019 — 2022",
    diploma: "Bachelor of Science in Business Information Systems",
    school: "Geneva School of Business Administration (HEG)",
    detail:
      "Software engineering, agile project management, database design, web security, and digital strategy. Bachelor's thesis on enterprise web platform architecture.",
    pdfLink: "/docs/thesis-bachelor.pdf",
    pdfLabel: "View Bachelor's Thesis",
  },
];

const skillCategories = [
  {
    category: "Web Development",
    items: ["React / Next.js", "TypeScript", "Custom WordPress", "Tailwind CSS", "HTML5 / CSS3", "Node.js", "REST APIs"],
  },
  {
    category: "Data Science & AI",
    items: ["Python", "PyTorch", "Hugging Face", "LLMs & QLoRA", "Computer Vision", "SQL / Modeling", "Data Pipelines"],
  },
  {
    category: "Tools & Methods",
    items: ["Git & GitHub", "Vercel / Infomaniak", "Technical SEO", "Agile Management", "UX/UI Design", "Figma"],
  },
];

export default function EnglishCVPage() {
  return (
    <div className="min-h-screen bg-[#090a0d] text-white bg-noise py-16 sm:py-24">
      <div className="container-padded">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
              <span>Curriculum Vitae</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Dorian Thomé
            </h1>
            <p className="mt-2 text-base sm:text-lg text-zinc-300">
              Web Developer & Information Systems Engineer • Geneva, Switzerland
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/dorian-t-0b1168150/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary no-underline text-xs sm:text-sm"
            >
              LinkedIn
            </a>
            <Link href="/en/contact" className="btn-primary no-underline text-xs sm:text-sm">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Introduction / Bio */}
        <div className="mt-12 card p-7 sm:p-9">
          <h2 className="text-xl font-semibold text-white">Profile Overview</h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
            Holding a Bachelor's in Business Information Systems (HEG Geneva) and a Master's in Information Science, I bridge strategic commercial understanding with deep technical mastery in modern web development and applied artificial intelligence. My approach focuses on clean code, rapid execution, transparent communication, and measurable results for every client.
          </p>
        </div>

        {/* 2-Column Section: Experience & Education */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Left: Experience */}
          <div>
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-200" />
              <span>Experience & Selected Work</span>
            </h2>

            <div className="mt-6 space-y-6">
              {experiences.map((exp) => (
                <div key={exp.role} className="card p-6 card-hover">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
                    <span>{exp.company}</span>
                    <span className="rounded-md bg-white/[0.05] px-2 py-0.5 border border-white/[0.06]">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-2.5 text-sm text-zinc-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education & Theses */}
          <div>
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-200" />
              <span>Academic Education</span>
            </h2>

            <div className="mt-6 space-y-6">
              {education.map((edu) => (
                <div key={edu.diploma} className="card p-6 card-hover">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
                    <span>{edu.school}</span>
                    <span className="rounded-md bg-white/[0.05] px-2 py-0.5 border border-white/[0.06]">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {edu.diploma}
                  </h3>
                  <p className="mt-2.5 text-sm text-zinc-300 leading-relaxed">
                    {edu.detail}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-4">
                    <a
                      href={edu.pdfLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-200 hover:text-white transition"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>{edu.pdfLabel} (Open)</span>
                    </a>
                    <a
                      href={edu.pdfLink}
                      download
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white">Technical Toolkit</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="card p-6">
                <h3 className="text-base font-semibold text-white pb-3 border-b border-white/[0.06]">
                  {cat.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Back */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/en" className="btn-secondary no-underline text-xs sm:text-sm">
            ← Back to Homepage
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/en/contact" className="btn-primary no-underline text-xs sm:text-sm">
              Discuss a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}