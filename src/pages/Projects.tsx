import { ArrowUpRight } from "lucide-react";
import ProjectCard, { type Project } from "../components/ProjectCard";

const projectsData: Project[] = [
  {
    id: "1",
    title: "<HabitTrack />",
    description:
      "A habit-tracking application designed to help users build consistency through daily check-ins, visual stats, and localized persistent data logic.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["REACT 19", "TYPESCRIPT", "TAILWIND CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "<CloneReserva />",
    description:
      "An e-commerce storefront clone focused on layout replication, interactive component design, dynamic product catalogs, and responsive UX.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["NEXT.JS 15", "TAILWIND CSS", "TYPESCRIPT"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "<OvermatchEnglish />",
    description:
      "An institutional landing page built for an English learning academy, featuring course previews, modern layout structuring, and fast performance.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section className="text-white max-w-7xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col gap-8">
      <div className="flex justify-between items-end border-b border-white/5 pb-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            A selection of my recent engineering challenges and solutions.
          </p>
        </div>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link-animated text-sm font-semibold flex items-center gap-1 group"
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