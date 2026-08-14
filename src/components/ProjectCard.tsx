import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
};

type ProjectCardProps = {
  project: Project;
};

const tagStyles: Record<string, string> = {
  REACT: "bg-cyan-950/50 text-cyan-400 border-cyan-800/50",
  "REACT 19": "bg-cyan-950/50 text-cyan-400 border-cyan-800/50",
  "NEXT.JS 15": "bg-slate-900 text-slate-200 border-slate-700",
  TYPESCRIPT: "bg-blue-950/60 text-blue-400 border-blue-800/50",
  "TAILWIND CSS": "bg-teal-950/50 text-teal-400 border-teal-800/50",
  TAILWIND: "bg-teal-950/50 text-teal-400 border-teal-800/50",
  "NODE.JS": "bg-emerald-950/50 text-emerald-400 border-emerald-800/50",
  POSTGRESQL: "bg-sky-950/50 text-sky-400 border-sky-800/50",
  "C#": "bg-purple-950/50 text-purple-400 border-purple-800/50",
  DEFAULT: "bg-white/5 text-slate-300 border-white/10",
};

const getTagStyle = (tag: string): string => {
  return tagStyles[tag.toUpperCase()] || tagStyles.DEFAULT;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-[#121318] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:-translate-y-1.5 group">
      <div>
        <div className="relative w-full h-48 overflow-hidden bg-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#121318] via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-6 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-2 py-0.5 text-[10px] font-bold tracking-wider border rounded-md uppercase transition-colors ${getTagStyle(
                  tag
                )}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Título com Sintaxe de Tag */}
          <h3 className="text-xl font-bold tracking-tight text-white transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 flex items-center gap-4 text-xs font-semibold text-slate-300">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-white transition-colors nav-link-animated"
        >
          <FaExternalLinkAlt className="w-3.5 h-3.5" />
          Demo
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-white transition-colors nav-link-animated"
        >
          <FaGithub className="w-3.5 h-3.5" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;