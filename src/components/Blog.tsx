const POSTS = [
  {
    tag: "Motion / GSAP",
    title: "Building a cinematic scroll home page with ScrollTrigger",
    body: "How pinned scenes and a scrubbed timeline can make a scroll feel like a produced video trailer.",
  },
  {
    tag: "Backend",
    title: "Why I moved every project to Supabase",
    body: "Comparing Firebase, Neon, PocketBase, and Supabase for real client work — and what actually mattered.",
  },
  {
    tag: "Process",
    title: "Single-file SPA vs. full Next.js: when to use each",
    body: "A practical framework for choosing project structure based on client needs and timeline.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-paper text-navy px-6 md:px-8 py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[640px] mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.14em] flex items-center gap-2 mb-4">
            <span className="dot" /> Blog
          </div>
          <h2 className="font-display font-bold text-[30px] md:text-[48px] leading-tight">
            Notes on building
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((p) => (
            <div key={p.title} className="border-t-2 border-navy pt-5">
              <div className="font-mono text-[11px] text-orange uppercase tracking-wide mb-3.5">
                {p.tag}
              </div>
              <h3 className="font-display font-semibold text-[19px] leading-snug mb-2.5">
                {p.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">{p.body}</p>
              <a
                href="#"
                className="inline-block mt-4 font-mono text-[11.5px] uppercase tracking-wide border-b border-navy"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
        <p className="mt-7 font-mono text-[11.5px] text-slate">
          ↳ Placeholder posts — replace with real write-ups whenever you
          publish.
        </p>
      </div>
    </section>
  );
}
