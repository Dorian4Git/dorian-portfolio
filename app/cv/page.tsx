import SectionHeading from "../../components/SectionHeading";
import Pill from "@/components/Pill";

const skills = [
  "LLM fine-tuning (qLoRA/PEFT)",
  "Prompting & evaluation mindset",
  "Computer Vision (ResNet-class models)",
  "Dataset curation & augmentation",
  "Python / PyTorch workflows",
  "Web delivery (WordPress + modern static sites)",
  "Product scoping & communication",
];

export default function CVPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="CV"
        subtitle="A concise overview focused on practical skills and real-world experience."
      />

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-semibold text-zinc-50">Profile</h2>
        <p className="text-base text-zinc-300 max-w-3xl">
          Applied AI Engineer focused on practical ML systems: efficient LLM fine-tuning,
          computer vision pipelines, and product-oriented delivery. Also experienced in
          building and deploying modern websites for real clients.
        </p>
      </section>

      <section className="card p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-zinc-50">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <Pill key={s} text={s} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Selected Work</h2>
          <ul className="mt-4 space-y-3 text-base text-zinc-300">
            <li>• LLM fine-tuning using qLoRA/PEFT methods.</li>
            <li>• Drone imagery classification for ambrosia detection (ResNet).</li>
            <li>• App concept with maps + payment flow (MISY).</li>
            <li>• Client WordPress site delivery (massage salon).</li>
          </ul>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Links</h2>
          <div className="mt-4 space-y-2 text-base">
            <a
              className="link"
              href="https://www.linkedin.com/in/dorian-t-0b1168150/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <a
              className="link"
              href="https://github.com/Dorian4Git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <br />
            <a className="link" href="mailto:dorian.thome@proton.me">
              dorian.thome@proton.me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
