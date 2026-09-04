"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroModern } from "@/components/Hero";
import ThesisSection from "@/components/ThesisSection";
import { asset } from "@/lib/asset";

const skills = [
  "High-Converting Landing Pages",
  "Custom Showcase Websites (WordPress & Next.js)",
  "User Experience & Interface Design (UX/UI)",
  "Technical SEO & Local Search Optimization",
  "Modern Fullstack Development (React, Next.js, Node)",
  "Information Science & Applied Machine Learning (Python, PyTorch)",
  "Client Training, Maintenance & Cloud Deployment",
];

const services = [
  {
    badge: "Acquisition & Sales",
    title: "High-Converting Landing Page",
    image: "/media/services/landing.png",
    who: "For founders, creators, and businesses launching an offer and looking to turn traffic into qualified leads or paying customers.",
    bullets: [
      "Persuasive narrative structure and action-oriented copywriting",
      "Clean, distraction-free design with sub-second loading speeds",
      "Optimized contact form or direct booking integration (Calendly)",
      "Tracking setup (Google Analytics, Meta Pixel, CRM integration)",
    ],
    note: "Ideal for: Product launches, ad campaigns, webinar registrations, consultancies.",
  },
  {
    badge: "Branding & Authority",
    title: "Showcase Website & Full Autonomy",
    image: "/media/services/wp.png",
    who: "For companies and professionals seeking a polished, trustworthy online presence they can easily update themselves without code.",
    bullets: [
      "Bespoke design aligned with your brand identity",
      "Intuitive content management interface for text and images",
      "Built-in technical SEO optimization for local discovery",
      "Personalized video walkthrough included for complete autonomy",
    ],
    note: "Ideal for: Independent consultants, medical/legal practices, craftspeople, SMBs.",
  },
  {
    badge: "Local AI & Systems",
    title: "LLM Pipelines & Applied AI",
    image: "/media/services/llm-pipeline.jpg",
    who: "For founders and organizations looking to integrate local, privacy-first language model pipelines connected to their private data.",
    bullets: [
      "RAG architecture (Retrieval-Augmented Generation) & vector database setup",
      "Local inference pipelines with open weights (Llama, Mistral) without recurring API tolls",
      "Strict data privacy: proprietary documents remain on your private infrastructure",
      "Custom interactive web interfaces and secure integrations with internal tools",
    ],
    note: "Ideal for: Private knowledge assistants, automated document analysis, custom tools.",
  },
  {
    badge: "Support & Troubleshooting",
    title: "Technical Rescue & Maintenance",
    image: "/media/services/rescue.png",
    who: "For business owners stuck with a broken website, slow performance, or complicated domain configurations.",
    bullets: [
      "Domain, DNS, and professional email configuration (Infomaniak, OVH)",
      "WordPress security audits, updates, and speed optimizations",
      "Cross-browser bug fixing and responsive layout repairs",
      "Fast response times with straightforward, human explanations",
    ],
    note: "Ideal for: Technical emergencies, routine maintenance, smooth migrations.",
  },
];

const projects = [
  {
    title: "L'Amie Sage — lamiesage.ch",
    tags: ["WordPress", "Health & Wellness", "Client Autonomy"],
    description:
      "Design and deployment of a welcoming showcase website for a Geneva massage therapist. Customized admin interface enabling the client to update pricing and bookings independently.",
    image: "/media/projects/lamiesage.png",
  },
  {
    title: "Héloïse D. — heloised.com",
    tags: ["Visual Identity", "Responsive Design", "Branding"],
    description:
      "Creation of an elegant showcase website highlighting the client's professional expertise with a smooth, minimalist aesthetic across mobile and desktop.",
    image: "/media/projects/heloised.png",
  },
  {
    title: "Luxury Real Estate Showcase",
    tags: ["Next.js", "High Performance", "Luxury Aesthetic"],
    description:
      "Ultra-fast interactive web showcase designed to spotlight a premier architectural estate. Smooth transitions, optimized media galleries, and refined typography.",
    image: "/media/projects/luxury-real-estate.png",
  },
  {
    title: "LLM Fine-Tuning via QLoRA (Research)",
    tags: ["Artificial Intelligence", "NLP", "Machine Learning", "Research"],
    description:
      "Master's research thesis exploring parameter-efficient fine-tuning on open-source language models. Local training with 4-bit QLoRA significantly improving domain accuracy.",
    image: "/media/projects/llm-qlora-poster.jpg",
  },
  {
    title: "Ragweed Detection via Drone (POC)",
    tags: ["Computer Vision", "PyTorch", "Drones", "Data Processing"],
    description:
      "Curation and processing of over 40,000 aerial images to train computer vision models for early detection of invasive allergenic plants.",
    image: "/media/projects/ambroisie-detection.jpg",
  },
];

const faqs = [
  {
    q: "What is the difference between a Landing Page and a Showcase Website?",
    a: "A Landing Page is a single focused page designed around a single action (lead capture, booking, or buying). It is ideal for targeted ad campaigns or product launches. A Showcase Website features multiple structured pages (Home, About, Detailed Services, Contact) and is built to establish long-term brand credibility and organic search presence.",
  },
  {
    q: "How long does it take to deliver my website?",
    a: "On average, a fully functional first version (V1) of a landing page or showcase website is delivered within 7 to 14 business days once your core materials are gathered. We then review and iterate together on final adjustments.",
  },
  {
    q: "Can I edit text and images myself after launch?",
    a: "Yes, absolutely. For CMS-powered sites (WordPress or headless CMS), you get an intuitive administration dashboard. A short, customized video walkthrough is provided so you are completely confident managing your content.",
  },
  {
    q: "How do we get started?",
    a: "We begin with a brief discovery call (or a coffee if you are in Geneva) to understand your goals, timeline, and expectations. I then provide a transparent, fixed-price proposal with no hidden surprises.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 shrink-0 text-amber-200"
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

export default function EnglishHomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#090a0d] text-white bg-noise min-h-screen">
      {/* Subtle Warm Ambiance */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-white/[0.02] blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-[450px] w-[450px] rounded-full bg-amber-200/[0.015] blur-3xl" />
        <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-white/[0.015] blur-3xl" />
      </div>

      <div className="container-fluid py-8 sm:py-12">
        {/* HERO SECTION */}
        <HeroModern lang="en" />

        {/* SERVICES SECTION */}
        <section id="services" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
                <span>Services & Offerings</span>
              </div>
              <h2 className="section-title">
                <span>Web solutions built for </span>
                <span className="text-gradient-warm">real growth.</span>
              </h2>
              <p className="section-subtitle">
                From high-converting landing pages to comprehensive company websites, every solution is built with Swiss technical discipline and a focus on clarity.
              </p>
            </div>

            <Link href="/en/contact" className="btn-secondary no-underline hidden sm:inline-block">
              Request a Quote
            </Link>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="card relative flex flex-col justify-between overflow-hidden p-7 sm:p-8 card-hover"
              >
                <div>
                  {/* Top image preview */}
                  <div className="mb-6 -mx-7 -mt-7 sm:-mx-8 sm:-mt-8 h-56 relative overflow-hidden bg-zinc-900/80 border-b border-white/[0.06]">
                    <Image
                      src={asset(s.image)}
                      alt={`Illustration ${s.title}`}
                      fill
                      className="object-cover object-top opacity-90 transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-[#0d0e14]/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md">
                        {s.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {s.who}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-medium">{s.note}</span>
                  <a
                    href="#contact"
                    className="text-xs font-medium text-white hover:text-amber-200 transition"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Explainer: Landing Page vs Showcase Website */}
          <div className="mt-10 rounded-3xl border border-white/[0.08] bg-zinc-900/30 p-6 sm:p-8 backdrop-blur-md">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Landing Page vs Showcase Website: Which do you need?
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Two complementary approaches depending on your immediate priority:
              </p>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                <div className="inline-block rounded-lg bg-amber-200/10 px-2.5 py-1 text-xs font-semibold text-amber-200">
                  Option 1: The Landing Page
                </div>
                <h4 className="mt-3 text-base font-semibold text-white">
                  Ideal to convert quickly
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  A single page dedicated to a specific offer with zero distracting navigation. Built to maximize return on advertising campaigns or validate a new product rapidly.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                <div className="inline-block rounded-lg bg-white/10 px-2.5 py-1 text-xs font-semibold text-zinc-200">
                  Option 2: The Showcase Website
                </div>
                <h4 className="mt-3 text-base font-semibold text-white">
                  Ideal to build brand authority
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Multiple structured pages (Home, About, Detailed Services, Contact). Designed to explain who you are, reassure prospective clients, and rank steadily on search engines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK / PROJECTS */}
        <section id="projects" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                <span>Featured Work</span>
              </div>
              <h2 className="section-title">
                <span>Selected </span>
                <span className="text-gradient-subtle">production projects.</span>
              </h2>
              <p className="section-subtitle">
                From responsive small business websites to fullstack web applications and data science projects.
              </p>
            </div>

            <a href="#contact" className="btn-secondary no-underline">
              Discuss a Project
            </a>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.title}
                className="card relative flex flex-col justify-between overflow-hidden p-7 card-hover"
              >
                <div>
                  {p.image && (
                    <div className="mb-6 -mx-7 -mt-7 h-52 relative overflow-hidden bg-zinc-900 border-b border-white/[0.06]">
                      <Image
                        src={asset(p.image)}
                        alt={`Project illustration: ${p.title}`}
                        fill
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-[#0d0e14]/30 to-transparent" />
                    </div>
                  )}

                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-xs text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Art Direction Comparison */}
          <div className="mt-12 rounded-3xl border border-white/[0.08] bg-zinc-900/20 p-6 sm:p-10 backdrop-blur-md">
            <div className="text-center mb-8">
              <h4 className="text-lg sm:text-xl font-medium text-white">
                Art Direction: Two tailored aesthetics
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Whether you prefer luminous editorial lightness or dark luxury depth, both directions are executed with precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Light */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-white/20">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-800">
                  <Image
                    src={asset("/media/services/minimalist-landing-page-bright-clair-lumineux-minimaliste.png")}
                    alt="Editorial Minimalist Style"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-black backdrop-blur">
                    Editorial Style
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="text-white text-sm font-medium">Luminous & Clean</h5>
                  <p className="text-xs text-zinc-400 mt-0.5">Light backgrounds, refined serif typography, generous whitespace.</p>
                </div>
              </div>

              {/* Card 2: Dark */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-white/20">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-800">
                  <Image
                    src={asset("/media/services/minimalist-landing-page-dark-sombre-luxe.png")}
                    alt="Dark Prestige Style"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-md bg-[#0f1014]/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-200 border border-amber-200/30 backdrop-blur">
                    Prestige Style
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="text-white text-sm font-medium">Immersive & Tactile</h5>
                  <p className="text-xs text-zinc-400 mt-0.5">Dark canvas, warm accents, subtle glassmorphic depth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACADEMIC RESEARCH & THESES SECTION */}
        <ThesisSection lang="en" />

        {/* PROCESS SECTION */}
        <section id="process" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                <span>Working Together</span>
              </div>
              <h2 className="section-title">
                <span>A simple, </span>
                <span className="text-gradient-subtle">transparent workflow.</span>
              </h2>
              <p className="section-subtitle">
                No endless meetings or opaque bottlenecks. Just clear communication, agile iterations, and solid delivery.
              </p>
            </div>

            <a href="#contact" className="btn-secondary no-underline">
              Start Your Project
            </a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="card p-7 card-hover">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white font-bold text-sm">
                  1
                </div>
                <div className="text-lg font-semibold text-white">Discovery & Scoping</div>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                We define your core goals, timeline, and requirements. Fixed scope, fixed price: complete transparency.
              </p>
            </div>

            <div className="card p-7 card-hover">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white font-bold text-sm">
                  2
                </div>
                <div className="text-lg font-semibold text-white">Design & Fast V1</div>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                I build your initial working version and share a private interactive preview. We review and refine together.
              </p>
            </div>

            <div className="card p-7 card-hover">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white font-bold text-sm">
                  3
                </div>
                <div className="text-lg font-semibold text-white">Launch & Handover</div>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Domain connection, SSL certification, and video walkthrough. Everything is tested, verified, and 100% yours.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="section-title">
                <span>Everything you need to </span>
                <span className="text-gradient-warm">know.</span>
              </h2>
              <p className="section-subtitle">
                Straightforward answers to help you make an informed decision.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/[0.08] bg-zinc-900/30 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-base font-medium text-white hover:bg-white/[0.02]"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-4 text-zinc-400 text-lg">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* RESUME / SUMMARY */}
        <section id="resume" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                <span>Background & Skills</span>
              </div>
              <h2 className="section-title">
                <span>Profile & </span>
                <span className="text-gradient-subtle">Core Expertise.</span>
              </h2>
              <p className="section-subtitle">
                A blend of business information systems acumen and modern engineering capabilities.
              </p>
            </div>

            <Link href="/en/cv" className="btn-secondary no-underline">
              View Full Resume
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="card p-7 sm:p-8 card-hover">
              <h3 className="text-xl font-semibold text-white">Key Capabilities</h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Covering the complete digital product lifecycle: from initial scope definition to high-speed delivery and reliable maintenance.
              </p>

              <div className="mt-6 space-y-2">
                {skills.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 text-xs sm:text-sm text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-200 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-7 sm:p-8 card-hover flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Direct Connect</h3>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  Available for freelance collaborations in Switzerland (Geneva, Vaud) and remote worldwide.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="https://www.linkedin.com/in/dorian-t-0b1168150/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition hover:bg-white/[0.05] no-underline"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 text-xs font-bold">
                      in
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">LinkedIn</div>
                      <div className="text-sm font-medium text-white">Dorian Thomé</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Dorian4Git"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition hover:bg-white/[0.05] no-underline"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white text-xs font-bold">
                      GH
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">GitHub</div>
                      <div className="text-sm font-medium text-white">Dorian4Git</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@dorianthome.ch"
                    className="flex items-center gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition hover:bg-white/[0.05] no-underline"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-200/15 text-amber-200 text-xs font-bold">
                      @
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">Direct Email</div>
                      <div className="text-sm font-medium text-white">contact@dorianthome.ch</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                <Link href="/en/cv" className="btn-secondary text-xs sm:text-sm py-2.5 px-4 no-underline">
                  View Full Resume
                </Link>
                <a href="#contact" className="btn-primary text-xs sm:text-sm py-2.5 px-4 no-underline">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <div className="section-head">
            <div>
              <div className="pill mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Get in Touch</span>
              </div>
              <h2 className="section-title">
                <span>Let's discuss your </span>
                <span className="text-gradient-warm">project.</span>
              </h2>
              <p className="section-subtitle">
                Share your ideas, timeline, and expectations. I'll get back to you within 24 hours with clear next steps.
              </p>
            </div>
          </div>

          <div className="card mt-8 p-7 sm:p-10 card-hover">
            <div className="grid gap-8 sm:grid-cols-3 items-center">
              <div className="sm:col-span-2">
                <div className="text-xl sm:text-2xl font-semibold text-white">
                  Ready to launch or elevate your online presence?
                </div>
                <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Whether you are starting from scratch or upgrading an existing platform, let's explore the best approach for your specific business goals.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/en/contact" className="btn-primary no-underline">
                    Open Contact Form
                  </Link>
                  <a href="mailto:contact@dorianthome.ch" className="btn-secondary no-underline">
                    Send Direct Email
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-6 space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="text-zinc-400 text-xs">Location</div>
                  <div className="text-white font-medium mt-0.5">Geneva, Switzerland</div>
                </div>
                <div>
                  <div className="text-zinc-400 text-xs">Coverage</div>
                  <div className="text-white font-medium mt-0.5">Geneva, Romandie & Remote Worldwide</div>
                </div>
                <div>
                  <div className="text-zinc-400 text-xs">Response Time</div>
                  <div className="text-emerald-400 font-medium mt-0.5">Typically within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
