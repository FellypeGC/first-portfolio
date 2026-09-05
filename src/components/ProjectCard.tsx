import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "../models/project-model";
import { getTagStyle } from "../utils/tag-styles";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-surface-card border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:-translate-y-1.5 group cursor-pointer isolate">
      <div>
        <div className="relative w-full h-48 overflow-hidden bg-surface-card rounded-t-2xl transform-[translateZ(0)]">
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            loading="lazy"
            decoding="async"
            width={800}
            height={450}
            className="block w-[calc(100%+2px)] h-[calc(100%+2px)] -m-px object-cover object-top transition-transform duration-500 will-change-transform transform-gpu backface-hidden group-hover:scale-[1.03] origin-top"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface-card via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        <div className="p-6 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2 cursor-auto py-0.5 text-[10px] font-bold tracking-wider border rounded-md uppercase transition-colors ${getTagStyle(
                  tag
                )}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl cursor-auto font-bold tracking-tight cur text-white transition-colors">
            {project.title}
          </h3>

          <p className="text-sm cursor-auto text-slate-400 leading-relaxed" title={project.description} aria-description={project.description}>
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 flex items-center gap-4 text-xs font-semibold text-slate-300">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors nav-link-animated"
          >
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
            Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors nav-link-animated"
          >
            <FaGithub className="w-3.5 h-3.5" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
