"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = NAV_ITEMS[0].id;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = item.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-8 py-4 bg-navy/70 backdrop-blur-md border-b border-white/10">
        <a href="#home" className="flex items-center gap-2.5">
          <svg viewBox="0 0 100 100" fill="none" className="w-6 h-6">
            <path
              d="M20 10H70C82 10 90 20 90 32C90 40 86 46 80 51L38 90H30C24 90 20 86 20 80V20C20 14 24 10 30 10H20Z"
              fill="#fff"
            />
          </svg>
          <span className="font-display font-bold text-white text-sm uppercase tracking-wide">
            Rabar Hamad
          </span>
        </a>

        <nav className="hidden lg:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative font-mono text-xs uppercase tracking-widest py-1 transition-colors ${
                active === item.id ? "text-white" : "text-mist hover:text-white"
              }`}
            >
              {active === item.id && (
                <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange" />
              )}
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex font-mono text-xs uppercase tracking-widest text-navy bg-orange border border-orange px-[18px] py-2.5 hover:bg-transparent hover:text-orange transition-colors"
        >
          Start a Project
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden flex flex-col gap-1.5"
        >
          <span className="w-[22px] h-0.5 bg-white block" />
          <span className="w-[22px] h-0.5 bg-white block" />
          <span className="w-[22px] h-0.5 bg-white block" />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-[99] bg-navy flex flex-col px-8 pt-24 pb-10 gap-6 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="self-end text-white text-2xl mb-4"
        >
          ✕
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMobileOpen(false)}
            className="font-display font-semibold text-2xl text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
