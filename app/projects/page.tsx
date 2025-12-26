import SectionHeading from "../../components/SectionHeading";

const projects = [
  {
    title: "WordPress Website — Massage Salon",
    tags: ["Client delivery", "WordPress", "UX"],
    description:
      "Client-friendly WordPress site with clean design, service pages, and a simple contact flow. Built for easy edits by non-technical owners.",
  },
  {
    title: "MISY — Parcel Delivery via Carshare",
    tags: ["Product", "Maps", "Payments", "Mobile UX"],
    description:
      "End-to-end app concept enabling users to send parcels using carshare routes. Map-based matching + payment flow + in-app logistics UX.",
  },
  {
    title: "LLM Fine-tuning with qLoRA",
    tags: ["LLMs", "qLoRA", "PEFT", "Efficiency"],
    description:
      "Efficient fine-tuning setup to adapt large language models with reduced compute. Focus on training setup, hyperparameters, and evaluation thinking.",
  },
  {
    title: "Ambrosia Detection from Drone Imagery",
    tags: ["Computer Vision", "ResNet", "Aerial imagery"],
    description:
      "Computer vision pipeline using ResNet-based models to detect ambrosia in drone images. Dataset preparation, augmentation, and inference workflow.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="Projects"
        subtitle="A selection of work across web delivery, product design, LLM fine-tuning, and computer vision."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card card-hover p-6">
            <h2 className="text-base font-semibold text-zinc-50">{p.title}</h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm text-zinc-300">{p.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
