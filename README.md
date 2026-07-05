# Rabar Hamad — Portfolio

Next.js 15 (React 19, TypeScript, Tailwind CSS) portfolio site, built from your logo colors (`#0A1D2E` navy, `#E85800` orange) and your work history.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Deploy

Push to a GitHub repo and import it in Vercel (same flow as your other projects) — no extra config needed, it's a standard Next.js App Router project.

## What's still a placeholder

- **Testimonials** (`src/components/Testimonials.tsx`) — swap in real client quotes.
- **Blog posts** (`src/components/Blog.tsx`) — replace with real write-ups, or wire up a CMS/MDX later.
- **Contact form** (`src/components/Contact.tsx`) — currently front-end only (shows a message but sends nothing). Wire it to Supabase or an email service (e.g. Resend) when ready.
- **Social links** in Contact — GitHub/LinkedIn/Instagram hrefs are `#`, add real URLs.
- `public/portrait.jpg` — your headshot, already in place at full resolution.
- `public/logo-full.png` — your full logo file, included but not yet used anywhere on the page (currently the header uses a simplified inline SVG mark). Swap it in if you'd rather use the real logo file.

## Structure

```
src/
  app/
    layout.tsx      — fonts, metadata
    page.tsx         — assembles all sections
    globals.css      — base styles, brand utility classes
  components/
    Header.tsx           — sticky nav + mobile drawer
    Hero.tsx             — headline, scramble/typewriter text, portrait
    ParticleBackground.tsx — canvas particle field (mouse-reactive)
    About.tsx
    Services.tsx
    Portfolio.tsx
    Testimonials.tsx
    Blog.tsx
    Contact.tsx
    Footer.tsx
```
