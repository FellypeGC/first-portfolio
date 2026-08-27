# fllpdev — Software Developer Portfolio

<p align="center">
  <a href="#english"><img alt="English" src="https://img.shields.io/badge/English-0A0B10?style=for-the-badge&logo=github&logoColor=white&labelColor=256AF4"></a>
  <a href="#português"><img alt="Português" src="https://img.shields.io/badge/Português-0A0B10?style=for-the-badge&logo=github&logoColor=white&labelColor=256AF4"></a>
</p>

<p align="center">
  <a href="https://fllpdev.vercel.app">Live</a> · <a href="https://linkedin.com/in/fllpdev">LinkedIn</a> · <a href="https://github.com/FellypeGC">GitHub</a>
</p>

---

## English

Portfolio of **Fellype Gabriel** — Software Developer focused on React, TypeScript, Node.js and PostgreSQL. Featured projects: **Quinto Set** (Next.js + Drizzle) and **HabitTrack** (React 19).

### Stack
React 19 · TypeScript · Vite 7 · Tailwind CSS 4 · React Router 7 · i18next (EN/PT) · EmailJS

### Architecture

```
first-portfolio/
├── public/                 # static assets (resume PDF, screenshots)
│   ├── resume-fgc.pdf
│   ├── curriculo-fgc.pdf
│   ├── habit-track.png
│   └── quinto-set.png
├── src/
│   ├── assets/             # code-icon-*.svg
│   ├── components/         # Header, Navbar, Footer, TerminalCard, ProjectCard, SkillCard, StatusBadge, LanguageToggle
│   ├── data/               # projects.ts, skills.tsx, blocked-domains.ts
│   ├── locales/            # en/translation.json, pt-br/translation.json
│   ├── models/             # project-model.ts, skill-model.ts
│   ├── pages/              # Home.tsx, Projects.tsx, Skills.tsx, Contact.tsx, NotFound.tsx
│   ├── utils/              # tag-styles.ts
│   ├── App.tsx             # layout: Header + Outlet + Footer + ScrollToTop
│   ├── main.tsx            # Router (lazy + Suspense) + i18n
│   ├── i18n.ts             # i18next + LanguageDetector + html lang sync
│   └── index.css           # Tailwind + @theme (brand/surface) + utilities
├── index.html              # SEO: title, description, OG/Twitter, JSON-LD, canonical
├── vercel.json             # SPA rewrites + cleanUrls + cache headers
├── vite.config.ts
└── .github/workflows/main.yml  # CI Node 20: lint + build
```

| Path | Description |
|---|---|
| `src/pages/` | Main routes (`/` `/projects` `/skills` `/contact` `*`) |
| `src/components/` | Reusable UI (cards, header, terminal) |
| `src/data/` | Decoupled content (projects & skills use `t()` from i18n) |
| `src/locales/` | EN/PT translations (projects, skills, home, contact) |
| `src/utils/tag-styles.ts` | Tag colors by technology |
| `public/` | PDFs and images served as static |
| `vercel.json` | SPA fallback + asset caching |

### Deploy
Vercel (SPA fallback in `vercel.json`). CI in `.github/workflows/main.yml` (Node 20, lint + build).

### Polishing Branch
`feat/polish-linkedin` — core layout intact + SEO + original copy EN/PT. Automatic preview on Vercel.

---

## Português

Portfólio de **Fellype Gabriel** — Software Developer focado em React, TypeScript, Node.js e PostgreSQL. Projetos em destaque: **Quinto Set** (Next.js + Drizzle) e **HabitTrack** (React 19).

### Stack
React 19 · TypeScript · Vite 7 · Tailwind CSS 4 · React Router 7 · i18next (PT/EN) · EmailJS

### Arquitetura

```
first-portfolio/
├── public/                 # assets estáticos (resume/curriculo PDF, prints)
│   ├── resume-fgc.pdf
│   ├── curriculo-fgc.pdf
│   ├── habit-track.png
│   └── quinto-set.png
├── src/
│   ├── assets/             # code-icon-*.svg
│   ├── components/         # Header, Navbar, Footer, TerminalCard, ProjectCard, SkillCard, StatusBadge, LanguageToggle
│   ├── data/               # projects.ts, skills.tsx, blocked-domains.ts
│   ├── locales/            # en/translation.json, pt-br/translation.json
│   ├── models/             # project-model.ts, skill-model.ts
│   ├── pages/              # Home.tsx, Projects.tsx, Skills.tsx, Contact.tsx, NotFound.tsx
│   ├── utils/              # tag-styles.ts
│   ├── App.tsx             # layout Header + Outlet + Footer + ScrollToTop
│   ├── main.tsx            # Router (lazy + Suspense) + i18n
│   ├── i18n.ts             # i18next + LanguageDetector + html lang sync
│   └── index.css           # Tailwind + @theme (brand/surface) + utilities
├── index.html              # SEO: title, description, OG/Twitter, JSON-LD, canonical
├── vercel.json             # SPA rewrites + cleanUrls + cache headers
├── vite.config.ts
└── .github/workflows/main.yml  # CI Node 20: lint + build
```

| Caminho | Descrição |
|---|---|
| `src/pages/` | Rotas principais (`/` `/projects` `/skills` `/contact` `*`) |
| `src/components/` | UI reutilizável (cards, header, terminal) |
| `src/data/` | Conteúdo desacoplado (projetos e skills consomem `t()` do i18n) |
| `src/locales/` | Traduções PT/EN (projetos, skills, home, contact) |
| `src/utils/tag-styles.ts` | Cores das tags por tecnologia |
| `public/` | PDFs e imagens servidas como estático |
| `vercel.json` | Fallback SPA + cache de assets |

### Deploy
Vercel (SPA fallback em `vercel.json`). CI em `.github/workflows/main.yml` (Node 20, lint + build).

### Branch de polimento
`feat/polish-linkedin` — layout core intacto + SEO + copy original PT/EN. Preview automático na Vercel.
