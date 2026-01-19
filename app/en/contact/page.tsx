"use client";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading"; // Ensure this path is correct relative to your folder structure
import { useState } from "react";

export default function ContactPageEn() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Construct the email body (English prefixes)
    const subject = encodeURIComponent(`New Contact: ${formData.subject || "Project"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nMessage:\n${formData.message}`
    );

    // 2. Trigger the mailto link
    window.location.href = `mailto:dorian.thome@proton.me?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-20">
      
      {/* Background Ambiance */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <div className="container-padded">
        <SectionHeading
          title="Contact"
          subtitle="A project? A question? I usually reply within 24h."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          
          {/* LEFT: The Form */}
          <div className="gborder">
            <section className="card h-full p-6 sm:p-10">
              <h2 className="text-xl font-semibold text-white">Prepare your email</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Fill out this form to automatically generate the email in your favorite app.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-300/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-cyan-300/50 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-300/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-cyan-300/50 transition"
                    placeholder="Showcase Site, Next.js App..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-300/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-cyan-300/50 transition"
                    placeholder="Hello, I would like to create a website for my agency..."
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Open my mail app
                  </button>
                </div>
              </form>
            </section>
          </div>

          {/* RIGHT: Info & Copy-Paste */}
          <div className="space-y-6">
            
            {/* Quick Links Card */}
            <div className="gborder">
              <section className="card p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-white">Direct Details</h3>
                <div className="mt-6 space-y-4">
                  <a 
                    href="mailto:dorian.thome@proton.me" 
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:bg-white/[0.05]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                      @
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">Email</div>
                      <div className="font-medium text-white">dorian.thome@proton.me</div>
                    </div>
                  </a>

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
                </div>
              </section>
            </div>

            {/* Helper: Brief Template */}
            <div className="card p-6 sm:p-8 border-dashed border-zinc-700/50">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Brief Template</h3>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-zinc-300">
                  Copy
                </span>
              </div>
              <div className="mt-4 rounded-xl bg-black/40 p-4 text-sm leading-relaxed text-zinc-400 font-mono select-all">
                <p>• Site Goal: ...</p>
                <p>• Desired Deadline: ...</p>
                <p>• Estimated Budget: ...</p>
                <p>• Design Examples I like: ...</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}