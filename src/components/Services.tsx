const SERVICES = [
  {
    n: "01",
    title: "Product & Web Development",
    body: "Full-stack builds in Next.js/React or lean vanilla stacks — from data model and backend to a shipped, deployed product.",
  },
  {
    n: "02",
    title: "Creative Direction",
    body: "Setting the visual language for a brand or product — palette, type, layout logic — so every page feels like one decision.",
  },
  {
    n: "03",
    title: "Motion & 3D Experiences",
    body: "Scroll-driven storytelling, pinned scenes, and interactive 3D built with GSAP, Framer Motion, and React Three Fiber.",
  },
  {
    n: "04",
    title: "Brand Identity Systems",
    body: "Logo-to-interface consistency: translating a mark and palette into a coherent design system across a full site.",
  },
  {
    n: "05",
    title: "E-commerce & Payments",
    body: "Booking flows, checkout, and payment gateway integrations (incl. FIB Bank), with admin dashboards to run them.",
  },
  {
    n: "06",
    title: "Deployment & Maintenance",
    body: "Hosting setup across Vercel, GitHub Pages, and Hostinger, plus ongoing fixes, content updates, and iteration.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-navy text-white px-6 md:px-8 py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[640px] mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.14em] flex items-center gap-2 mb-4 text-mist">
            <span className="dot" /> Services
          </div>
          <h2 className="font-display font-bold text-[30px] md:text-[48px] leading-tight">
            What I take on, start to finish
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="bg-navy hover:bg-navy-soft transition-colors px-7 py-9"
            >
              <div className="font-mono text-orange text-xs mb-6">{s.n}</div>
              <h3 className="font-display font-semibold text-[21px] mb-3">
                {s.title}
              </h3>
              <p className="text-mist text-[14.5px] leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
