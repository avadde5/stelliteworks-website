# Stellite Works Website Build Prompt

## Role and Mission

You are a senior brand designer and web developer creating the complete website for Stellite Works LLC (www.stelliteworks.com), a Michigan-based SAP consulting and enterprise software firm. The company is pursuing SAP Implementation Partner certification, and this website must read as a credible, established implementation partner — genuine, clear, and simple, never inflated. Your mission: build a standout, memorable site that does not look like any template on the internet.

## Who Stellite Works Is

**SAP practice:** An SAP consulting firm delivering Application Management Services (AMS) and implementation work across SAP EWM, S/4HANA, FI/CO, MM, SD, GRC, Basis, and integrations.

**Active engagement:** Currently supporting an AMS client, Radiant Delivers (Seattle), under an active MSA, with delivery teams operating from both US and India offices. This is the public proof point — feature it as evidence of real, ongoing managed-services delivery.

**Product:** CuraTrax, a healthcare compliance and operations platform covering incident reporting, staff credentialing, policy management, and HIPAA-aligned workflows. Reference www.curatrax.com for product substance, but present it on this site as a Stellite Works product with its own dedicated section.

**Development team:** A software engineering team building real products. Current example: a retail analytics portal built on point-of-sale (POS) data for a multi-store Subway franchise owner, nearly complete and positioned to scale to corporate. Use this (anonymized as a multi-store QSR retail client) to demonstrate end-to-end product delivery capability.

**Deep SAP EWM thought leadership:** The existing site's blog content (EWM LOSC/POSC, WOCR optimized picking, SAP SD pricing, and similar technical articles) must be preserved and carried into the new site as a first-class Insights section.

## What the Site Must Cover

**Home:** Hero with a sharp value proposition; immediate clarity on what Stellite Works does in ten words or fewer; pathways into SAP Services, CuraTrax, and Development.

**SAP AMS & Implementation:** AMS positioning front and center: incident management, enhancements, monitoring, functional and technical support, follow-the-sun US–India delivery. Implementation capability across discovery, fit-gap, build, test, cutover, and hypercare. Module depth: EWM, FI/CO, MM, SD, GRC, Basis. Written for buyers, not consultants — plain language, concrete outcomes.

**CuraTrax:** Its own polished section: what it solves (incident reporting, credentialing, compliance), who it serves, and a clear demo/contact call to action.

**Development capabilities:** Custom software and product engineering: the retail POS analytics portal story, integration work, and readiness to build for corporate clients.

**Insights / Blog:** Migrated technical blog content with clean reading layout and category filters.

**Company pages:** About, Careers, and Contact (Auburn Hills, MI address, phone: +1 (248) 812-2100, email: info@stelliteworks.com).

## Hard Exclusions

- Do not mention Mercedes-Benz, Concur, or any client engagement details beyond Radiant Delivers and the anonymized retail project.
- No stock photography of people in any scenario — no handshakes, no smiling teams at whiteboards, no headset agents.
- No generic consulting jargon ("synergy," "leverage," "best-in-class") and no unverifiable claims ("world-leading," invented client counts).

## Design Direction

**Creative freedom:** You have full creative freedom on color, typography, and art direction. The single non-negotiable: it must stand out. If a visitor could mistake it for a template, it has failed.

**Animation over photography:** Replace photography with purposeful animation: animated gradients, generative or particle systems, flowing line work, scroll-driven reveals, micro-interactions on cards and navigation. Motion should explain and guide, never decorate for its own sake.

**Nature-inspired imagery:** Abstract nature-inspired elements (topography, organic textures, light, terrain, growth patterns) are welcome as visual metaphors — but never stock photos of people.

**Clarity:** Crystal-clear hierarchy, generous whitespace, fast load, fully responsive, accessible contrast. Simple and approachable beats clever and dense.

## Voice and Content Quality

- Write every word as if a skeptical CIO is reading. Specific over generic, evidence over adjectives.
- Each service page must answer: what problem this solves, how Stellite Works delivers it, and what the client gets — in that order.
- Short sentences. Confident, warm, human. The tone of an expert who doesn't need to shout.

## Deliverables

- Complete sitemap and page-by-page content (full copy, not lorem ipsum).
- A working homepage build (HTML/CSS/JS) demonstrating the visual system and animations.
- A short design rationale: why these colors, this type, this motion language.

---

# Implementation Notes (current build)

> The sections below document the codebase as it currently stands. They
> supplement the brief above — when the two disagree, the brief wins.

## Brand metaphor (in use)
"Stellite" is an ultra-hard, wear- and heat-resistant cobalt-chromium alloy.
Copy leans into **engineered, forged, hardened, built to endure** language,
always anchored to SAP. Tagline in use: **"SAP landscapes, engineered to
endure."** The four-step process borrows the metaphor:
**Assay → Forge → Temper → Sustain.**

## Design system
Dark, premium, "alloy" aesthetic. No stock photography — visuals are animated
(canvas lattice, gradient meshes, animated counters, marquee).
- Base: near-black charcoal (`--color-ink` #07080c).
- Primary accent: cool steel-blue (`--color-steel` #6e8bff) → lilac.
- Sparse warm "molten" amber (`--color-molten` #ff9f4d) for sparks only.
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels).
- Tokens live in `app/globals.css` under `@theme`.

## Tech stack
- **Next.js 15** (App Router, TypeScript) + **React 19**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`, config in `globals.css`)
- **Framer Motion** for entrance / scroll / counter animation

## Structure
- `app/page.tsx` — composes the homepage sections.
- `app/services/page.tsx` — the Services page (AMS, implementations, offerings).
- `components/` — one file per section (Hero, Services, Approach, Stats,
  Clients, CTA, Footer, Navbar, Pillars, Offerings, Engagements, ServicesHero)
  plus `LatticeCanvas`, `Logo`, `Reveal`, `SectionHead`, `Marquee`.
- `lib/site.ts` — all editable copy/content (nav, services, pillars, offerings,
  engagements, stats, modules, contact email). **Edit content here, not in
  components.**

## Conventions
- Respect `prefers-reduced-motion` (already handled in `globals.css` and the
  canvas).
- Keep all marketing copy SAP-specific and concrete (name modules, outcomes).
- Run `npm run build` to type-check before considering a change done.

## Build status vs. brief (open gaps)
The current build covers the **Home** and **SAP Services** pages only. Still to
do per the brief: **CuraTrax** section, **Development capabilities**,
**Insights/Blog**, and **Company pages** (About, Careers, Contact). The brief's
canonical contact is **info@stelliteworks.com** / **+1 (248) 812-2100** /
Auburn Hills, MI — note `lib/site.ts` currently uses `hr@stelliteworks.com` per
a later explicit instruction; reconcile before launch.

## Commands
- `npm run dev` — local dev server at http://localhost:3000
- `npm run build` — production build + type-check
- `npm start` — serve the production build
