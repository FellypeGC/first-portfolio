import { useTranslation } from "react-i18next";
import type { Project } from "../models/project-model";

export const useProjectsData = (): Project[] => {
  const { t } = useTranslation();

  return [
    {
      id: "1",
      title: "<HabitTrack />",
      description: t("projects.habitTrack.description"),
      tags: ["React 19", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://habittrack-eight.vercel.app/",
      githubUrl: "https://github.com/FellypeGC/HabitTrack",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "<VaultEngine />",
      description: t("projects.vaultEngine.description"),
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
      tags: ["Node.js", "PostgreSQL", "TypeScript", "Docker"],
      githubUrl: "https://github.com",
    },
    {
      id: "3", 
      title: "<CloneReserva />",
      description: t("projects.cloneReserva.description"),
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      tags: ["NEXT.JS 15", "TAILWIND CSS", "TYPESCRIPT"],
      demoUrl: "https://clone-reserva.netlify.app/",
      githubUrl: "https://github.com/FellypeGC/clone-reserva",
    },
    {
      id: "4",
      title: "<OvermatchEnglish />",
      description: t("projects.overmatch.description"),
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "https://cursoovermatch.netlify.app/",
      githubUrl: "https://github.com/FellypeGC/Site-Overmatch",
    },
  ];
};