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
    image: "/media/wp.png",
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
    image: "/media/next.png",
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
    image: "/media/landing.png",
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
    // Was: "AI Prototype / consultation"
    title: "Applied Artificial Intelligence",
    image: "/media/ai.png",
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
    title: "WordPress Site — Massage Salon",
    tags: ["Client Delivery", "WordPress", "UX"],
    description:
      "Easy-to-manage site, clean design, service pages, simple contact flow. Built for non-technical team updates.",
  },
  {
    title: "MISY — Package Delivery via Carpooling",
    tags: ["Product", "Maps", "Payments", "Mobile UX"],
    description:
      "End-to-end app concept: map matching, payment flow, in-app logistics UX.",
  },
  {
    title: "LLM Fine-tuning with qLoRA",
    tags: ["LLMs", "qLoRA", "PEFT", "Efficiency"],
    description:
      "Efficient fine-tuning pipeline: training config, hyperparameters, pragmatic evaluation approach.",
  },
  {
    title: "Ragweed Detection on Drone Imagery",
    tags: ["Vision", "ResNet", "Aerial Imaging"],
    description:
      "Dataset preparation, augmentation, training and inference workflow to detect ragweed in drone images.",
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
            {services.map((s) => (
              <Card key={s.title} gradient className="relative overflow-hidden p-7 card-hover">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-56 opacity-20 blur-[1px]">
                  <Image 
                    src={asset(s.image)} 
                    alt={`Illustration service : ${s.title}`} 
                    width={500} 
                    height={300} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                

                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-base text-zinc-300">{s.who}</p>

                <ul className="mt-5 space-y-2 text-base text-zinc-200">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      {/* REPLACE the <span> dot with the Icon ss */}
                      <CheckIcon colorClass="text-cyan-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-base text-zinc-400">{s.note}</p>
              </Card>
            ))}
          </div>
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
              <Card key={p.title} gradient className="p-7 card-hover">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <span className="hidden sm:inline-flex rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-sm text-zinc-200">
                    Project
                  </span>
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

                <p className="mt-5 text-base text-zinc-300">{p.description}</p>

                <div className="mt-6">
                  <a href="#contact" className="link text-sm text-zinc-200">
                    → Request a quote for a similar project
                  </a>
                </div>
              </Card>
            ))}
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
              <div className="text-sm font-semibold text-zinc-300">Step 1</div>
              <div className="mt-2 text-xl font-semibold text-white">Clear Scope</div>
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
              <div className="text-sm font-semibold text-zinc-300">Step 2</div>
              <div className="mt-2 text-xl font-semibold text-white">Agile Development</div>
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
              <div className="text-sm font-semibold text-zinc-300">Step 3</div>
              <div className="mt-2 text-xl font-semibold text-white">Turnkey Delivery</div>
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

              <div className="proseish mt-4">
                <p className="text-base text-zinc-300">
                  Business IT degree, ML master's, and pragmatic approach: scope → build → measure → ship.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Pill key={s} text={s} />
                ))}
              </div>
            </Card>

            <Card gradient className="p-7 card-hover">
              <h3 className="text-xl font-semibold text-white">Links</h3>

              <div className="mt-4 space-y-3 text-base text-zinc-200">
                <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dorian-t-0b1168150/">
                  LinkedIn
                </a>
                <div />
                <a className="link" target="_blank" rel="noreferrer" href="https://github.com/Dorian4Git">
                  GitHub
                </a>
                <div />
                <a className="link" href="mailto:dorian.thome@proton.me">
                  dorian.thome@proton.me
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

            <a href="mailto:dorian.thome@proton.me" className="btn-secondary no-underline">
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
                  <a href="mailto:dorian.thome@proton.me" className="btn-secondary no-underline">
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
                  <a className="link" href="mailto:dorian.thome@proton.me">
                    dorian.thome@proton.me
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
