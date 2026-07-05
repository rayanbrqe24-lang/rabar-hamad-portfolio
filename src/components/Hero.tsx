"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";

const WORDS = ["DESIGN", "PRODUCT", "MOTION", "BRAND"];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const BIO =
  "I'm Rabar — a developer and creative director in Erbil, building cinematic, full-stack web experiences from architecture to art direction.";

export default function Hero() {
  const [rotateWord, setRotateWord] = useState(WORDS[0]);
  const [bio, setBio] = useState("");

  useEffect(() => {
    let wIndex = 0;
    let scrambleTimer: ReturnType<typeof setInterval> | undefined;

    const scrambleTo = (target: string) => {
      let frame = 0;
      const frames = 10;
      scrambleTimer = setInterval(() => {
        let out = "";
        for (let i = 0; i < target.length; i++) {
          if (i < (frame / frames) * target.length) out += target[i];
          else out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        setRotateWord(out);
        frame++;
        if (frame > frames) {
          clearInterval(scrambleTimer);
          setRotateWord(target);
        }
      }, 40);
    };

    const rotate = setInterval(() => {
      wIndex = (wIndex + 1) % WORDS.length;
      scrambleTo(WORDS[wIndex]);
    }, 3200);

    return () => {
      clearInterval(rotate);
      if (scrambleTimer) clearInterval(scrambleTimer);
    };
  }, []);

  useEffect(() => {
    let typeTimer: ReturnType<typeof setInterval> | undefined;

    const typeBio = () => {
      setBio("");
      let i = 0;
      typeTimer = setInterval(() => {
        setBio((prev) => prev + BIO[i]);
        i++;
        if (i >= BIO.length && typeTimer) clearInterval(typeTimer);
      }, 22);
    };

    typeBio();
    const loop = setInterval(typeBio, 9000);

    return () => {
      clearInterval(loop);
      if (typeTimer) clearInterval(typeTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy flex flex-col overflow-hidden"
    >
      <ParticleBackground />

      <div className="relative z-[5] flex-1 flex items-center max-w-[1280px] mx-auto w-full px-6 md:px-8 pt-[150px] pb-14 gap-10 md:gap-16 flex-col md:flex-row">
        <div className="flex-[1.15] min-w-0 w-full">
          <div className="font-mono text-xs uppercase tracking-[0.14em] flex items-center gap-2 mb-4 text-mist">
            <span className="dot" /> Developer &amp; Creative Director · Erbil, Iraq
          </div>
          <h1 className="font-display font-bold text-white text-[38px] md:text-[58px] lg:text-[78px] leading-[1.02] tracking-tight">
            <span className="text-stroke">CODE MEETS</span>
            <br />
            <span className="text-orange inline-flex items-baseline gap-2.5">
              {rotateWord}
              <span className="cursor-blink" />
            </span>
          </h1>
          <p className="mt-7 max-w-[480px] text-mist text-base leading-relaxed min-h-[84px]">
            {bio}
          </p>
          <div className="mt-9 flex gap-4 items-center flex-wrap">
            <a
              href="#portfolio"
              className="font-mono text-xs uppercase tracking-widest px-6 py-3.5 bg-orange text-navy border border-orange hover:bg-transparent hover:text-orange transition-colors"
            >
              View Work →
            </a>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest px-6 py-3.5 text-white border border-white/10 hover:border-orange hover:text-orange transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end items-end relative min-w-[260px] self-stretch w-full">
          <div className="relative w-[min(340px,90%)] aspect-[3/4] border border-white/10 p-2.5">
            <Image
              src="/portrait.jpg"
              alt="Rabar Hamad"
              fill
              className="object-cover object-top grayscale contrast-[1.08] brightness-[1.02]"
              style={{ mixBlendMode: "luminosity" }}
              priority
            />
            <div className="absolute -top-2.5 -right-2.5 w-[60px] h-[60px] border-t border-r border-orange" />
            <div className="absolute -bottom-4 -left-px bg-orange text-navy font-mono text-[11px] tracking-wide px-3 py-1.5">
              RABAR HAMAD ✦ EST. ERBIL
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[5] border-t border-white/10 overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-display font-bold text-[15px] tracking-[0.08em] text-stroke uppercase px-5 flex-shrink-0"
            >
              FULL-STACK DEVELOPMENT ✦ CREATIVE DIRECTION ✦ INTERACTIVE WEB ✦
              BRAND SYSTEMS ✦
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
