# Stellite Works — Website

Marketing site for **Stellite Works**, an SAP consulting and implementation firm
(SAP AMS, S/4HANA, EWM, FI/CO). Dark, premium design with animated visuals
instead of photography.

## Stack
- [Next.js 15](https://nextjs.org) (App Router, TypeScript) + React 19
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build + type-check |
| `npm start` | Serve the production build |

## Editing content
All copy lives in [`lib/site.ts`](lib/site.ts) (nav, services, approach steps,
stats, SAP modules). Section components in [`components/`](components/) read from
it. Design tokens (colors, fonts, animations) are in
[`app/globals.css`](app/globals.css).

See [`CLAUDE.md`](CLAUDE.md) for the brand brief and conventions.
