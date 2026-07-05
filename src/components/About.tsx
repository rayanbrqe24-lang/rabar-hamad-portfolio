const STACK = [
  { num: "01", label: "Frontend", val: "Next.js · React · TypeScript · Tailwind" },
  { num: "02", label: "Motion & 3D", val: "GSAP · Framer Motion · Lenis · R3F / Three.js" },
  { num: "03", label: "Backend", val: "Supabase · Auth · Storage · Payments" },
  { num: "04", label: "Deployment", val: "Vercel · GitHub Pages · Hostinger" },
  { num: "05", label: "Direction", val: "Brand systems · Art direction · UI/UX" },
  { num: "06", label: "Based in", val: "Erbil, Iraq — working globally" },
];

export default function About() {
  return (
    <section id="about" className="bg-paper text-navy px-6 md:px-8 py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-start">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.14em] flex items-center gap-2 mb-4">
            <span className="dot" /> About
          </div>
          <h2 className="font-display font-bold text-[28px] md:text-[42px] leading-tight mb-7">
            Building products end&#8209;to&#8209;end, from architecture to the
            last pixel.
          </h2>
          <div className="space-y-4 text-slate text-[17px] leading-relaxed max-w-[560px]">
            <p>
              I&rsquo;m <strong className="text-navy font-semibold">Rabar Hamad</strong>,
              a developer and creative director based in{" "}
              <strong className="text-navy font-semibold">Erbil, Iraq</strong>.
              I run full builds for clients across product, brand, and
              marketing — planning the system, writing the code, and
              directing the visual language so each site feels considered
              rather than assembled.
            </p>
            <p>
              My work spans{" "}
              <strong className="text-navy font-semibold">
                vanilla HTML/CSS/JS single-page apps
              </strong>{" "}
              to full{" "}
              <strong className="text-navy font-semibold">
                Next.js 15 / React 19
              </strong>{" "}
              builds with TypeScript, Tailwind, GSAP, Framer Motion, and React
              Three Fiber — deployed on Vercel, GitHub Pages, or Hostinger,
              with Supabase as my default backend.
            </p>
            <p>
              Recent work includes a cinematic, scroll-driven site for a
              luxury architecture studio, e-visa and booking platforms with
              live payment integration, and brand-first landing pages for
              commercial and creative clients.
            </p>
          </div>
        </div>

        <div className="border-t border-navy/10">
          {STACK.map((row) => (
            <div
              key={row.num}
              className="flex justify-between items-center py-4 border-b border-navy/10 font-mono text-[13px]"
            >
              <span className="text-orange w-9">{row.num}</span>
              <span className="flex-1 uppercase tracking-wide">
                {row.label}
              </span>
              <span className="text-slate text-right">{row.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
