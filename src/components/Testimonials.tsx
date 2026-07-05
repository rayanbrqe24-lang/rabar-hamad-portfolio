const TESTIMONIALS = [
  {
    quote:
      "Rabar took a rough brief and turned it into a site that actually felt like our brand — fast, and with almost no back-and-forth.",
    meta: "Placeholder — Client, Architecture Studio",
  },
  {
    quote:
      "The payment integration and admin dashboard just worked. He handled the whole backend without hand-holding.",
    meta: "Placeholder — Client, Travel Platform",
  },
  {
    quote:
      "Direct, fast, and detail-obsessed. Exactly what you want from someone building your site.",
    meta: "Placeholder — Client, Commercial Brand",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy text-white px-6 md:px-8 py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[640px] mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.14em] flex items-center gap-2 mb-4 text-mist">
            <span className="dot" /> Testimonials
          </div>
          <h2 className="font-display font-bold text-[30px] md:text-[48px] leading-tight">
            What clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.meta}
              className="bg-navy px-7 py-8 flex flex-col justify-between min-h-[230px]"
            >
              <p className="font-display font-medium text-[17px] leading-snug">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 font-mono text-[11.5px] uppercase tracking-wide text-mist">
                {t.meta}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-7 font-mono text-xs text-white/35">
          ↳ Placeholder quotes — swap these for real client testimonials when
          you have them.
        </p>
      </div>
    </section>
  );
}
