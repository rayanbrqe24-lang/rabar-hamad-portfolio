"use client";

import { useState } from "react";

const DEFAULT_NOTE =
  "This form is a front-end demo — connect it to an email service or Supabase to receive submissions.";

export default function Contact() {
  const [note, setNote] = useState(DEFAULT_NOTE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNote(
      "Thanks — this is a demo form, so nothing was actually sent yet. Wire it up to email or Supabase."
    );
  };

  return (
    <section id="contact" className="bg-navy text-white px-6 md:px-8 py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-14 md:gap-20">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.14em] flex items-center gap-2 mb-4 text-mist">
            <span className="dot" /> Contact
          </div>
          <h2 className="font-display font-bold text-[28px] md:text-[44px] leading-tight mb-6">
            Let&rsquo;s build
            <br />
            something.
          </h2>
          <p className="text-mist text-base leading-relaxed max-w-[420px] mb-9">
            Based in Erbil, Iraq — working with clients everywhere. Tell me
            about the project and I&rsquo;ll get back to you shortly.
          </p>
          <div className="flex flex-col gap-3.5 font-mono text-[13px] text-mist">
            <a href="mailto:hello@rabarhamad.com" className="hover:text-orange w-max border-b border-transparent hover:border-orange">
              hello@rabarhamad.com
            </a>
            <a href="#" className="hover:text-orange w-max border-b border-transparent hover:border-orange">
              GitHub — rayanbrqe24-lang
            </a>
            <a href="#" className="hover:text-orange w-max border-b border-transparent hover:border-orange">
              LinkedIn
            </a>
            <a href="#" className="hover:text-orange w-max border-b border-transparent hover:border-orange">
              Instagram
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="cname" className="font-mono text-[11px] uppercase tracking-widest text-mist">
              Name
            </label>
            <input
              id="cname"
              type="text"
              placeholder="Your name"
              required
              className="bg-transparent border-0 border-b border-white/10 text-white text-[15px] py-2.5 outline-none focus:border-orange transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cemail" className="font-mono text-[11px] uppercase tracking-widest text-mist">
              Email
            </label>
            <input
              id="cemail"
              type="email"
              placeholder="you@company.com"
              required
              className="bg-transparent border-0 border-b border-white/10 text-white text-[15px] py-2.5 outline-none focus:border-orange transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ctype" className="font-mono text-[11px] uppercase tracking-widest text-mist">
              Project type
            </label>
            <select
              id="ctype"
              className="bg-transparent border-0 border-b border-white/10 text-white text-[15px] py-2.5 outline-none focus:border-orange transition-colors"
            >
              <option className="bg-navy-soft">Web Development</option>
              <option className="bg-navy-soft">Creative Direction</option>
              <option className="bg-navy-soft">Motion / 3D Experience</option>
              <option className="bg-navy-soft">Brand Identity</option>
              <option className="bg-navy-soft">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cmsg" className="font-mono text-[11px] uppercase tracking-widest text-mist">
              Message
            </label>
            <textarea
              id="cmsg"
              placeholder="Tell me about the project..."
              required
              rows={3}
              className="bg-transparent border-0 border-b border-white/10 text-white text-[15px] py-2.5 outline-none focus:border-orange transition-colors resize-y"
            />
          </div>
          <button
            type="submit"
            className="self-start mt-1.5 bg-orange text-navy border border-orange font-mono text-xs uppercase tracking-widest px-7 py-3.5 hover:bg-transparent hover:text-orange transition-colors"
          >
            Send Message
          </button>
          <p className="font-mono text-[11.5px] text-white/35">{note}</p>
        </form>
      </div>
    </section>
  );
}
