import { ArrowUpRight } from "lucide-react";
import { useProjectsData } from '../data/projects';
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectsData = useProjectsData();

  return (
    <section className="text-white max-w-7xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-b border-white/5 pb-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            A selection of my recent engineering challenges and solutions.
          </p>
        </div>

        <a
          href="https://github.com/FellypeGC?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link-animated text-sm font-semibold flex items-center gap-1 group self-start sm:self-auto"
        >
          View all projects
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
