"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Pill from "@/components/Pill";
import { HeroModern } from "@/components/Hero";
import { asset } from "@/lib/asset";

const skills = [
  "Expertise Next.js / React",  // Stronger than "Web Delivery"
  "WordPress Architecture",
  "LLM Fine-tuning & RAG",      // More buzzword-friendly but accurate
  "Computer Vision (PyTorch)",
  "Cloud Deployment & CI/CD",
  "Technical SEO Optimization", // Businesses love SEO
  "Pragmatic Approach",
];

const services = [
  {
    // Was: "WordPress Site for Business"
    title: "Showcase Site & Full Control", 
    image: "/media/services/wp.png",
    // Focus on the benefit: THEY control it.
    who: "For professionals who want control over their content without touching code.",
    bullets: [
      "Custom design (no generic templates)",
      "Simplified admin interface",
      "Optimized for local SEO",
      "Video training included",
    ],
    note: "Ideal for: SMBs, artisans, freelancers.",
  },
  {
    // Was: "Modern custom site (Next.js)"
    title: "Premium Web Experience",
    image: "/media/services/next.png",
    // Focus on the result: Speed and branding.
    who: "Stand out with perfect fluidity and unique design.",
    bullets: [
      "Next.js architecture (Airbnb/Netflix tech)",
      "100% Google Lighthouse score",
      "Smooth & interactive animations",
      "Maximum security (static site)",
    ],
    note: "Ideal for: Startups, SaaS, creative portfolios.",
  },
  {
    title: "Conversion Landing Page",
    image: "/media/services/landing.png",
    who: "One goal: turn your visitors into customers.",
    bullets: [
      "Sales-driven copywriting",
      "Instant loading (< 1s)",
      "CRM / Email integration",
      "A/B Testing ready",
    ],
    note: "Ideal for: Product launches, ad campaigns.",
  },
  {
    title: "Configuration & Technical Rescue",
      image: "/media/services/rescue.png", 
      who: "For those who have the pieces of the puzzle but can't put them together.",
      bullets: [
        "Domain & DNS connection (Infomaniak, OVH)",
        "Hosting & Email configuration",
        "Abandoned WordPress site recovery",
        "Express deployment (< 24h)",
      ],
      note: "Ideal for: Blocked freelancers, orphaned domains.",
  },
  {
    // Was: "AI Prototype / consultation"
    title: "Applied Artificial Intelligence",
    image: "/media/services/ai.png",
    // Highlight your expertise
    who: "Analyze your data or automate tasks with Machine Learning.",
    bullets: [
      "Honest AI feasibility audit",
      "LLM fine-tuning (your private data)",
      "Computer vision (drone/industry)",
      "Secure server deployment",
    ],
    note: "No hype: we solve real business problems.",
  },
];

const projects = [
  {
    title: "L'Amie Sage — lamiesage.ch",
    tags: ["WordPress", "Health & Wellness", "Autonomy"],
    description: "Creation of a complete showcase site for a massage salon. Simplified administration interface allowing the client to manage content autonomously.",
    image: "/media/projects/lamiesage.png"
  },
  {
    title: "Héloïse D. — heloised.com",
    tags: ["Web Design", "Responsive", "Visual Identity"],
    description: "Design and development of a modern, elegant website highlighting the client's professional expertise with an optimized user journey.",
    image: "/media/projects/heloised.png"
  },
  {
    title: "Luxury Real Estate",
    tags: ["Next.js", "React", "High Performance", "Luxury"],
    description: "Ultra-fast Next.js web application designed specifically to showcase a luxury property. Smooth animations and maximum SEO optimization.",
    image: "/media/projects/luxury-real-estate.png"
  },
  {
    title: "LLM Fine-Tuning via QLoRA (Research)",
    tags: ["AI", "LLMs", "QLoRA", "Machine Learning"],
    description: "Master's project exploring state-of-the-art fine-tuning. Local training of an LLM (5h) on a mathematics dataset, drastically reducing the model's perplexity.",
    image: "/media/projects/llm-qlora-poster.jpg"
  },
  {
    title: "Ragweed Detection via Drone (POC)",
    tags: ["Computer Vision", "PyTorch", "Drones", "Data Cleaning"],
    description: "Processed 40,000 field images. Massive data cleaning, training computer vision models, and real-life drone testing to detect this allergenic plant.",
    image: "/media/projects/ambroisie-detection.jpg"
  },
];

function CheckIcon({ colorClass }: { colorClass: string }) {
  return (
    <svg 
      className={`mt-1 h-5 w-5 shrink-0 ${colorClass}`} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Card({
  children,
  className = "",
  gradient = false,
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}) {
  const inner = (
    <div className={["card", className].join(" ")}>
      {children}
    </div>
  );

  return gradient ? <div className="gborder">{inner}</div> : inner;
}

export default function HomePage() {
  // CONFIG: How many cards to show initially? 
    // Recommended: 4 (keeps the 2-column grid symmetrical)
    const INITIAL_LIMIT = 4;
    
    const [showAllServices, setShowAllServices] = useState(false);
  
    // Decide which services to display
    const displayedServices = showAllServices 
      ? services 
      : services.slice(0, INITIAL_LIMIT);

  return (
    <div className="bg-zinc-950 text-white bg-noise">
      {/* Background vibes */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="container-fluid py-10 sm:py-14">
        {/* HERO */}
        <HeroModern lang="en" />

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="section-subtitle">
                WordPress for full autonomy, Next.js for uncompromised performance and custom design.
              </p>
            </div>

            <Link href="/contact" className="btn-secondary no-underline">
              Direct Contact
            </Link>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {/* CHANGED: We map over 'displayedServices' instead of 'services' */}
            {displayedServices.map((s) => (
              <Card key={s.title} gradient className="relative overflow-hidden p-7 card-hover">
                
                {/* UNIFIED IMAGE HEADER: Applies to ALL cards now */}
                <div className="mb-6 -mx-7 -mt-7 h-64 relative group overflow-hidden bg-zinc-900">
                  
                  {s.title === "Conversion Landing Page" ? (
                    /* --- OPTION A: SPECIAL SPLIT VIEW (Landing Page) --- */
                    <div className="grid grid-cols-2 h-full w-full">
                      <div className="relative h-full border-r border-zinc-800">
                        <Image 
                          src={asset("/media/services/minimalist-landing-page-bright-clair-lumineux-minimaliste.png")} 
                          alt="Light Style" 
                          fill 
                          className="object-cover object-top" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-90" />
                      </div>
                      <div className="relative h-full">
                        <Image 
                          src={asset("/media/services/minimalist-landing-page-dark-sombre-luxe.png")} 
                          alt="Dark Style" 
                          fill 
                          className="object-cover object-top" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-90" />
                      </div>
                      {/* Badge */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] text-white backdrop-blur-sm shadow-lg">
                        2 Styles Included
                      </div>
                    </div>
                  ) : (
                    /* --- OPTION B: STANDARD FULL IMAGE (Other Services) --- */
                    <>
                      <Image 
                        src={asset(s.image)} 
                        alt={`Service illustration: ${s.title}`} 
                        fill 
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                      />
                      {/* Dark Gradient Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90" />
                    </>
                  )}
                </div>

                {/* CONTENT (Same for all) */}
                <h3 className="text-xl font-semibold text-white relative z-10">{s.title}</h3>
                <p className="mt-2 text-base text-zinc-300 relative z-10">{s.who}</p>

                <ul className="mt-5 space-y-2 text-base text-zinc-200 relative z-10">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <CheckIcon colorClass="text-cyan-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-base text-zinc-400 relative z-10">{s.note}</p>
              </Card>
            ))}
          </div>

          {/* NEW: EXPAND BUTTON */}
          {services.length > INITIAL_LIMIT && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="group flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800 hover:text-white"
              >
                {showAllServices ? "Voir moins" : "Voir les autres services"}
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showAllServices ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </section>

        {/* WORK */}
        <section id="realisations" className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="section-subtitle">
                Real projects deployed in production, from optimized showcase sites to complex AI solutions.
              </p>
            </div>

            <a href="#contact" className="btn-secondary no-underline">
              Discuss a Project
            </a>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.title} gradient className="relative overflow-hidden p-7 card-hover flex flex-col h-full">
                {p.image && (
                  <div className="mb-6 -mx-7 -mt-7 h-48 relative group overflow-hidden bg-zinc-900 border-b border-white/5">
                    <Image 
                      src={asset(p.image)} 
                      alt={`Project illustration : ${p.title}`} 
                      fill 
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                  </div>
                )}
                
                <div className="flex flex-col flex-grow relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-sm text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-base text-zinc-300 flex-grow">{p.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* --- STYLE COMPARISON GALLERY --- */}
          <div className="mt-12 w-full max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <h4 className="text-lg font-medium text-white">One Expertise, Two Universes</h4>
              <p className="text-sm text-zinc-400">Total flexibility on art direction.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              
              {/* Card 1: Light / Editorial */}
              <div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-3 transition-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-zinc-800">
                  <Image 
                    src={asset("/media/services/minimalist-landing-page-bright-clair-lumineux-minimaliste.png")} 
                    alt="Minimalist Bright Style" 
                    width={800} 
                    height={500} 
                    className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" 
                  />
                  {/* Label Overlay */}
                  <div className="absolute bottom-3 left-3 rounded-md bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black backdrop-blur">
                    Editorial Style
                  </div>
                </div>
                <div className="mt-4 px-1">
                  <h5 className="text-white font-medium">The "Gallery" Approach</h5>
                  <p className="text-xs text-zinc-400 mt-1">Serif typography, bright background, asymmetrical layout.</p>
                </div>
              </div>

              {/* Card 2: Dark / Luxury */}
              <div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-3 transition-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/10">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-zinc-800">
                  <Image 
                    src={asset("/media/services/minimalist-landing-page-dark-sombre-luxe.png")} 
                    alt="Dark Luxury Style" 
                    width={800} 
                    height={500} 
                    className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" 
                  />
                  {/* Label Overlay */}
                  <div className="absolute bottom-3 left-3 rounded-md bg-[#0f1014]/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur">
                    Prestige Style
                  </div>
                </div>
                <div className="mt-4 px-1">
                  <h5 className="text-white font-medium">The "Cinematic" Approach</h5>
                  <p className="text-xs text-zinc-400 mt-1">Dark mode, golden accents, glassmorphism effects.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="section-subtitle">
                Simple method: reduce confusion, ship V1 fast, iterate cleanly.
              </p>
            </div>

            <a href="#services" className="btn-secondary no-underline">
              View Offers
            </a>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            <Card gradient className="p-7 card-hover">
              <div className="inline-flex items-center">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 text-white font-bold text-lg shadow-lg shadow-fuchsia-500/50">
                1
              </div>
              <div className="mt-4 text-xl font-semibold text-white ml-3 flex items-center">Clear Scope</div>
              </div>
              <p className="mt-3 text-base text-zinc-300">
              We define exact scope. Fixed price, fixed deadline. No surprises.
              </p>
              <ul className="mt-4 space-y-2 text-base text-zinc-200">
              <li className="flex gap-3">
                <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-fuchsia-300/80 shrink-0" />
                <span>Clear scope</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-fuchsia-300/80 shrink-0" />
                <span>Page sitemap</span>
              </li>
              </ul>
            </Card>

            <Card gradient className="p-7 card-hover">
              <div className="inline-flex items-center">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/50">
                2
              </div>
              <div className="mt-4 text-xl font-semibold text-white ml-3 flex items-center">Agile Development</div>
              </div>
              <p className="mt-3 text-base text-zinc-300">
              I build, you validate. We iterate fast via a live preview link.
              </p>
              <ul className="mt-4 space-y-2 text-base text-zinc-200">
              <li className="flex gap-3">
                <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-cyan-300/80 shrink-0" />
                <span>Short iterations</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-cyan-300/80 shrink-0" />
                <span>Design + content</span>
              </li>
              </ul>
            </Card>

            <Card gradient className="p-7 card-hover">
              <div className="inline-flex items-center">

                <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-amber-300 to-amber-500 text-white font-bold text-lg shadow-lg shadow-amber-500/50">
                3
                </div>
              <div className="mt-4 text-xl font-semibold text-white ml-3 flex items-center">Turnkey Delivery</div>
              </div>
              <p className="mt-3 text-base text-zinc-300">
              Deployment, domain setup, HTTPS. I don't leave until everything is green.
              </p>
              <ul className="mt-4 space-y-2 text-base text-zinc-200">
              <li className="flex gap-3">
                <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-amber-200/80 shrink-0" />
                <span>Basic SEO & performance</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-amber-200/80 shrink-0" />
                <span>Optional maintenance</span>
              </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* CV */}
        <section id="cv" className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  Resume
                </span>
                <span className="text-white"> — Summary</span>
              </h2>
              <p className="section-subtitle">
                Delivery-focused skills: modern web + applied AI/ML.
              </p>
            </div>

            <Link href="/cv" className="btn-secondary no-underline">
              Full Resume
            </Link>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Card gradient className="p-7 card-hover">
              <h3 className="text-xl font-semibold text-white">Profile</h3>

              <div className="mt-4 space-y-4">
              <p className="text-base text-zinc-300">
                Business IT degree, ML master's, and pragmatic approach: scope → build → measure → ship.
              </p>

              <div className="space-y-3">
                <div className="text-sm font-medium text-zinc-400">Expertise</div>
                <div className="grid grid-cols-1 gap-2">
                {skills.map((s) => (
                  <div
                  key={s}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 transition hover:bg-white/[0.06] hover:border-white/20"
                  >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300" />
                  <span className="text-sm text-zinc-200">{s}</span>
                  </div>
                ))}
                </div>
              </div>
              </div>
            </Card>

            <Card gradient className="p-7 card-hover">
              <h3 className="text-xl font-semibold text-white">Links</h3>

              <div className="mt-4 space-y-3 text-base text-zinc-200">
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
                <div />
                <a 
                    href="https://github.com/Dorian4Git" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:bg-white/[0.05]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200/20 text-gray-300">
                      <Image src={asset("/media/github-icon.png")} alt="GitHub" width={20} height={20} />
                      
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">GitHub</div>
                      <div className="font-medium text-white">Dorian4Git</div>
                    </div>
                  </a>
                <div />
                <a 
                    href="mailto:contact@dorianthome.ch" 
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:bg-white/[0.05]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                      @
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">Email</div>
                      <div className="font-medium text-white">contact@dorianthome.ch</div>
                    </div>
                  </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/cv" className="btn-secondary no-underline">
                  View Full Resume
                </Link>
                <a href="#contact" className="btn-primary no-underline">
                  Contact Me
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  Contact
                </span>
              </h2>
              <p className="section-subtitle">
                Tell me about your goal, deadlines and show me what you like. I'll respond with a clear plan.
              </p>
            </div>

            <a href="mailto:contact@dorianthome.ch" className="btn-secondary no-underline">
              Direct Email
            </a>
          </div>

          <Card gradient className="mt-7 p-7 sm:p-8 card-hover">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <div className="text-xl font-semibold text-white">Quick Message</div>
                <p className="mt-3 text-base text-zinc-300">
                  Goal • pages • content available • deadline • budget (optional) • examples
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary no-underline">
                    Open Form
                  </Link>
                  <a href="mailto:contact@dorianthome.ch" className="btn-secondary no-underline">
                    Direct Email
                  </a>
                </div>
              </div>

              <div className="space-y-4 text-base text-zinc-200">
                <div>
                  <div className="text-sm text-zinc-400">Location</div>
                  Geneva, Switzerland, French-speaking Switzerland
                </div>
                <div>
                  <div className="text-sm text-zinc-400">Email</div>
                  <a className="link" href="mailto:contact@dorianthome.ch">
                    contact@dorianthome.ch
                  </a>
                </div>
                <div>
                  <div className="text-sm text-zinc-400">GitHub</div>
                  <a className="link" target="_blank" rel="noreferrer" href="https://github.com/Dorian4Git">
                    Dorian4Git
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </section>


      </div>
    </div>
  );
}
