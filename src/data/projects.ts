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
      imageUrl: "../../public/habit-track.png",
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
      imageUrl: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/682359393700750bc6cd6bfd/screenshot_2025-05-13-14-37-56-0000.webp&fit=cover&h=500&q=40&w=800",
      tags: ["HTML", "SASS", "JavaScript"],
      demoUrl: "https://clone-reserva.netlify.app/",
      githubUrl: "https://github.com/FellypeGC/clone-reserva",
    },
    {
      id: "4",
      title: "<OvermatchEnglish />",
      description: t("projects.overmatch.description"),
      imageUrl: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/646923998139170008057243/screenshot_2023-05-20-19-46-43-0000.png&fit=cover&h=500&q=40&w=800",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "https://cursoovermatch.netlify.app/",
      githubUrl: "https://github.com/FellypeGC/Site-Overmatch",
    },
  ];
};