import {
  Bug,
  Code2,
  Database,
  Layers,
  Palette,
  Server,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { type TechCategory } from "../models/tech-category-model";
import type { SkillItem } from "../models/skill-model";
import { useTranslation } from "react-i18next";

export const useTechCategories = (): TechCategory[] => {
  const { t } = useTranslation();
  return [
    {
      label: t("skills.categories.languagesFrameworks"),
      icon: <Terminal className="w-4 h-4 text-[rgb(37,106,244)]" />,
      skills: [
        "React 19",
        "Next.js 15",
        "TypeScript",
        "JavaScript (ES6+)",
        "C#",
        "ASP.NET Core",
        "Tailwind CSS",
        "HTML5/CSS3",
      ],
    },
    {
      label: t("skills.categories.backendDatabases"),
      icon: <Server className="w-4 h-4 text-[rgb(37,106,244)]" />,
      skills: [
        "Node.js",
        "EF Core",
        "MongoDB",
        "Express",
        "REST APIs",
        "PostgreSQL",
        "JWT Auth",
      ],
    },
    {
      label: t("skills.categories.testingDevOps"),
      icon: <Wrench className="w-4 h-4 text-[rgb(37,106,244)]" />,
      skills: [
        "Vitest",
        "Playwright",
        "xUnit",
        "Docker",
        "Git/GitHub Actions",
        "Vercel/Railway",
        "shadcn/ui",
        "Figma",
      ],
    },
  ];
};

export const useSkillsData = (): SkillItem[] => {
  const { t } = useTranslation();
  return [
    {
      icon: <Code2 className="w-6 h-6 text-[#256af4]" />,
      title: t("skills.cards.fullstack.title"),
      description: t("skills.cards.fullstack.description"),
      borderColor: "group-hover:border-[#256af4]",
      iconColor: "group-hover:text-[#256af4]",
      hoverBorder:
        "hover:border-[#256af4] hover:shadow-[0_0_20px_rgba(37,106,244,0.2)]",
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d2ff]" />,
      title: t("skills.cards.database.title"),
      description: t("skills.cards.database.description"),
      borderColor: "group-hover:border-[#00d2ff]",
      iconColor: "group-hover:text-[#00d2ff]",
      hoverBorder:
        "hover:border-[#00d2ff] hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#a755f7]" />,
      title: t("skills.cards.architecture.title"),
      description: t("skills.cards.architecture.description"),
      borderColor: "group-hover:border-[#a855f7]",
      iconColor: "group-hover:text-[#a855f7]",
      hoverBorder:
        "hover:border-[#a855f7] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    },
    {
      icon: <Bug className="w-6 h-6 text-[#10b981]" />,
      title: t("skills.cards.testing.title"),
      description: t("skills.cards.testing.description"),
      borderColor: "group-hover:border-[#10b981]",
      iconColor: "group-hover:text-[#10b981]",
      hoverBorder:
        "hover:border-[#10b981] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    },
    {
      icon: <Palette className="w-6 h-6 text-[#ff007f]" />,
      title: t("skills.cards.uiux.title"),
      description: t("skills.cards.uiux.description"),
      borderColor: "group-hover:border-[#ff007f]",
      iconColor: "group-hover:text-[#ff007f]",
      hoverBorder:
        "hover:border-[#ff007f] hover:shadow-[0_0_20px_rgba(255,0,127,0.2)]",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#ffb703]" />,
      title: t("skills.cards.ai.title"),
      description: t("skills.cards.ai.description"),
      borderColor: "group-hover:border-[#ffb703]",
      iconColor: "group-hover:text-[#ffb703]",
      hoverBorder:
        "hover:border-[#ffb703] hover:shadow-[0_0_20px_rgba(255,183,3,0.2)]",
    },
  ];
};
