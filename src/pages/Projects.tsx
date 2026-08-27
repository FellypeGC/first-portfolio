import { ArrowUpRight } from "lucide-react";
import { useProjectsData } from '../data/projects';
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projectsData = useProjectsData();

  return (
    <section className="text-white max-w-7xl min-h-[calc(100vh-4.5rem)] mx-auto w-full px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-b border-white/5 pb-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            {t("projects.title")}
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </div>

        <a
          href="https://github.com/FellypeGC?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors group self-start sm:self-auto px-3 py-1.5 rounded-lg hover:bg-white/5"
        >
          {t("projects.viewAll")}
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
