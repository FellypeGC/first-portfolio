const DEFAULT_TAG_STYLE = "bg-white/5 text-slate-300 border-white/10";

const tagStyles: Record<string, string> = {
  // ─── Languages & Frameworks ─────────────────────────────────────────
  REACT: "bg-cyan-950/60 text-cyan-300 border-cyan-800/60",
  "REACT 19": "bg-cyan-950/60 text-cyan-300 border-cyan-800/60",
  "NEXT.JS": "bg-slate-900 text-slate-100 border-slate-700",
  "NEXT.JS 15": "bg-slate-900 text-slate-100 border-slate-700",
  TYPESCRIPT: "bg-blue-950/70 text-blue-300 border-blue-800/60",
  JAVASCRIPT: "bg-yellow-950/60 text-yellow-300 border-yellow-800/60",
  "JAVASCRIPT (ES6+)": "bg-yellow-950/60 text-yellow-300 border-yellow-800/60",
  "C#": "bg-purple-950/60 text-purple-300 border-purple-800/60",
  ".NET": "bg-indigo-950/60 text-indigo-300 border-indigo-800/60",
  "ASP.NET CORE": "bg-indigo-950/60 text-indigo-300 border-indigo-800/60",
  TAILWIND: "bg-teal-950/60 text-teal-300 border-teal-800/60",
  "TAILWIND CSS": "bg-teal-950/60 text-teal-300 border-teal-800/60",
  HTML: "bg-orange-950/60 text-orange-300 border-orange-800/60",
  HTML5: "bg-orange-950/60 text-orange-300 border-orange-800/60",
  CSS: "bg-sky-950/60 text-sky-300 border-sky-800/60",
  CSS3: "bg-sky-950/60 text-sky-300 border-sky-800/60",
  "HTML5/CSS3": "bg-amber-950/60 text-amber-300 border-amber-800/60",

  // ─── Backend & Databases ────────────────────────────────────────────
  "NODE.JS": "bg-emerald-950/60 text-emerald-300 border-emerald-800/60",
  EXPRESS: "bg-neutral-900 text-neutral-300 border-neutral-700",
  "REST APIS": "bg-lime-950/60 text-lime-300 border-lime-800/60",
  "REST API": "bg-lime-950/60 text-lime-300 border-lime-800/60",
  POSTGRESQL: "bg-sky-950/60 text-sky-300 border-sky-800/60",
  "EF CORE": "bg-violet-950/60 text-violet-300 border-violet-800/60",
  MONGODB: "bg-green-950/60 text-green-300 border-green-800/60",
  JWT: "bg-yellow-950/50 text-yellow-200 border-yellow-800/50",
  "JWT AUTH": "bg-yellow-950/50 text-yellow-200 border-yellow-800/50",

  // ─── Testing, DevOps & Tools ────────────────────────────────────────
  VITEST: "bg-amber-950/60 text-amber-300 border-amber-800/60",
  PLAYWRIGHT: "bg-rose-950/60 text-rose-300 border-rose-800/60",
  XUNIT: "bg-purple-950/60 text-purple-300 border-purple-800/60",
  DOCKER: "bg-blue-950/80 text-blue-400 border-blue-700/60",
  GIT: "bg-red-950/60 text-red-300 border-red-800/60",
  "GITHUB ACTIONS": "bg-blue-950/80 text-blue-300 border-blue-800/60",
  "GIT/GITHUB ACTIONS": "bg-red-950/60 text-red-300 border-red-800/60",
  "SHADCN/UI": "bg-zinc-900 text-zinc-200 border-zinc-700",
  FIGMA: "bg-purple-950/50 text-purple-300 border-purple-800/50",
  VERCEL: "bg-black text-white border-zinc-700",
  RAILWAY: "bg-fuchsia-950/60 text-fuchsia-300 border-fuchsia-800/60",
  "VERCEL/RAILWAY": "bg-zinc-900 text-zinc-200 border-zinc-700",
};

export const getTagStyle = (tag: string): string => {
  return tagStyles[tag.toUpperCase().trim()] || DEFAULT_TAG_STYLE;
};