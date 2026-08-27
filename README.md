# fllpdev — Software Developer Portfolio

Portfólio de Fellype Gabriel — Software Developer focado em React, TypeScript, Node.js e PostgreSQL. Projetos em destaque: **Quinto Set** (Next.js + Drizzle) e **HabitTrack** (React 19).

**Live:** https://fllpdev.vercel.app · **LinkedIn:** https://linkedin.com/in/fllpdev · **GitHub:** https://github.com/FellypeGC

## Stack
React 19 · TypeScript · Vite 7 · Tailwind CSS 4 · React Router 7 · i18next (PT/EN) · EmailJS

## Rodar local
```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # build prod
npm run lint
```

## Estrutura
`src/pages/` Home, Projects, Skills, Contact · `src/components/` Header, TerminalCard, ProjectCard · `src/data/` projects & skills · `src/locales/` i18n

## Deploy
Vercel (SPA fallback em `vercel.json`). CI em `.github/workflows/main.yml` (Node 20, lint + build).

## Branch de polimento
`feat/polish-linkedin` — layout core intacto + SEO + copy refinado. Preview automático na Vercel.
