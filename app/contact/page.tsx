import SectionHeading from "../../components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="Contact"
        subtitle="Send a message using the form, or email me directly."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Message</h2>
          <p className="mt-2 text-base text-zinc-300">
            Include your goal, timeline, and any links/examples. I’ll reply with a clear plan.
          </p>

          <form
            className="mt-6 space-y-4"
            action="https://formspree.io/f/YOUR_FORMSPREE_ID"
            method="POST"
          >
            <div className="space-y-2">
              <label className="text-base text-zinc-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-600"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-base text-zinc-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-600"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-base text-zinc-200" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-base text-zinc-100 outline-none focus:border-zinc-600"
                placeholder="What do you want to build? Any constraints? Timeline?"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-zinc-50 px-4 py-2.5 text-base font-medium text-zinc-950 hover:bg-zinc-200 transition"
            >
              Send
            </button>

            <p className="text-base text-zinc-500">
              This form uses Formspree (no backend). You’ll receive messages at{" "}
              <a className="link" href="mailto:dorian.thome@proton.me">
                dorian.thome@proton.me
              </a>.
            </p>
          </form>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-50">Direct</h2>
          <div className="mt-4 space-y-3 text-base text-zinc-300">
            <div>
              <div className="text-xs text-zinc-500">Email</div>
              <a className="link" href="mailto:dorian.thome@proton.me">
                dorian.thome@proton.me
              </a>
            </div>

            <div>
              <div className="text-xs text-zinc-500">LinkedIn</div>
              <a
                className="link"
                href="https://www.linkedin.com/in/dorian-t-0b1168150/"
                target="_blank"
                rel="noreferrer"
              >
                dorian-t-0b1168150
              </a>
            </div>

            <div>
              <div className="text-xs text-zinc-500">GitHub</div>
              <a
                className="link"
                href="https://github.com/Dorian4Git"
                target="_blank"
                rel="noreferrer"
              >
                Dorian4Git
              </a>
            </div>

            <div className="mt-6 card p-4">
              <div className="text-base font-medium text-zinc-50">Fast brief template</div>
              <div className="mt-2 text-base text-zinc-300">
                <div>• Goal:</div>
                <div>• Deadline:</div>
                <div>• Examples you like:</div>
                <div>• Must-haves:</div>
                <div>• Budget range (optional):</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
