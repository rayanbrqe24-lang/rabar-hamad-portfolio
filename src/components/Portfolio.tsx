const WORK = [
  {
    yr: "2026",
    name: "Blanc Design",
    sub: "Luxury architecture & interiors — cinematic scroll home page",
    tags: ["Next.js", "GSAP", "R3F"],
  },
  {
    yr: "2026",
    name: "UNLIMITED e-Visa Platform",
    sub: "Visa applications, FIB payments & OTP verification",
    tags: ["Supabase", "Resend", "Payments"],
  },
  {
    yr: "2026",
    name: "Northline Commercial",
    sub: "Landing page for a commercial services brand",
    tags: ["React", "Tailwind"],
  },
  {
    yr: "2025",
    name: "Zedian",
    sub: "Designer portfolio site with editorial layout",
    tags: ["HTML/CSS/JS"],
  },
  {
    yr: "2025",
    name: "OLIN Production",
    sub: "Multilingual (EN/AR/KU) production company showcase",
    tags: ["Supabase Storage", "i18n"],
  },
  {
    yr: "2025",
    name: "RAYAN AI",
    sub: "Personal AI creative studio — image & video generation SPA",
    tags: ["Vanilla JS", "AI APIs"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-paper text-navy px-6 md:px-8 py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[640px] mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.14em] flex items-center gap-2 mb-4">
            <span className="dot" /> Portfolio
          </div>
          <h2 className="font-display font-bold text-[30px] md:text-[48px] leading-tight">
            Selected work
          </h2>
        </div>

        <div className="border-t border-navy/10">
          {WORK.map((w) => (
            <div
              key={w.name}
              className="group grid grid-cols-1 md:grid-cols-[100px_1fr_auto_auto] gap-3 md:gap-6 items-center py-6 border-b border-navy/10 cursor-pointer transition-[padding] hover:pl-3"
            >
              <span className="font-mono text-[13px] text-slate">{w.yr}</span>
              <span className="font-display font-semibold text-[22px] md:text-[23px]">
                {w.name}
                <span className="block font-body font-normal text-[13.5px] text-slate mt-1">
                  {w.sub}
                </span>
              </span>
              <span className="flex gap-2 flex-wrap md:justify-end">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10.5px] uppercase tracking-wide px-2.5 py-1 border border-navy/10 text-slate"
                  >
                    {t}
                  </span>
                ))}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="hidden md:block w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              >
                <path
                  d="M5 19L19 5M19 5H8M19 5V16"
                  stroke="#0A1D2E"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
