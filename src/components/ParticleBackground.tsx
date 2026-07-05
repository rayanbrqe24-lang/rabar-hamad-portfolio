"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  r: number;
  isOrange: boolean;
};

const PARTICLE_COUNT = 130;

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };
    let animId = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
    };

    const initParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => {
        const p: Particle = {
          x: Math.random() * width,
          y: Math.random() * height,
          ox: 0,
          oy: 0,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          r: Math.random() * 1.6 + 0.6,
          isOrange: Math.random() < 0.06,
        };
        p.ox = p.x;
        p.oy = p.y;
        return p;
      });
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110 && dist > 0) {
          const force = (110 - dist) / 110;
          p.x += (dx / dist) * force * 2.4;
          p.y += (dy / dist) * force * 2.4;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.x += (p.ox - p.x) * 0.02;
        p.y += (p.oy - p.y) * 0.02;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isOrange ? "rgba(232,88,0,0.7)" : "rgba(255,255,255,0.22)";
        ctx.fill();
      });

      ctx.strokeStyle = "rgba(136,170,255,0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(step);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    initParticles();
    step();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });
    canvas.parentElement?.addEventListener("mousemove", onMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("mousemove", onMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}
