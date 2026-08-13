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
import SkillCard from "../components/SkillCard"

type SkillItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
  iconColor: string;
  hoverBorder: string;
};

type TechCategory = {
  label: string;
  icon: React.ReactNode;
  skills: string[];
};

const Skills = () => {
  const skillsData: SkillItem[] = [
    {
      icon: <Code2 className="w-6 h-6 text-[#256af4]" />,
      title: "Full-Stack Software Engineering",
      description:
        "Designing and building end-to-end software solutions by combining clean code, modern frontend interfaces, and scalable backend architectures.",
      borderColor: "group-hover:border-[#256af4]",
      iconColor: "group-hover:text-[#256af4]",
      hoverBorder:
        "hover:border-[#256af4] hover:shadow-[0_0_20px_rgba(37,106,244,0.2)]",
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d2ff]" />,
      title: "Database Systems & Data Modeling",
      description:
        "Designing, modeling, and managing relational (SQL) and NoSQL databases, focusing on data integrity, efficient indexing, and ORM integration.",
      borderColor: "group-hover:border-[#00d2ff]",
      iconColor: "group-hover:text-[#00d2ff]",
      hoverBorder:
        "hover:border-[#00d2ff] hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#a755f7]" />,
      title: "Software Architecture",
      description:
        "Designing and implementing scalable software solutions with a focus on maintainability, SOLID principles, and system performance.",
      borderColor: "group-hover:border-[#a855f7]",
      iconColor: "group-hover:text-[#a855f7]",
      hoverBorder:
        "hover:border-[#a855f7] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    },
    {
      icon: <Bug className="w-6 h-6 text-[#10b981]" />,
      title: "Automated Testing",
      description:
        "Writing and maintaining tests to ensure code quality and reliability with unit, integration, and E2E testing strategies.",
      borderColor: "group-hover:border-[#10b981]",
      iconColor: "group-hover:text-[#10b981]",
      hoverBorder:
        "hover:border-[#10b981] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    },
    {
      icon: <Palette className="w-6 h-6 text-[#ff007f]" />,
      title: "UI/UX Design & Styling",
      description:
        "Creating beautiful and functional user interfaces with a focus on usability, accessibility, and modern aesthetics.",
      borderColor: "group-hover:border-[#ff007f]",
      iconColor: "group-hover:text-[#ff007f]",
      hoverBorder:
        "hover:border-[#ff007f] hover:shadow-[0_0_20px_rgba(255,0,127,0.2)]",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#ffb703]" />,
      title: "AI-Assisted Development",
      description:
        "Leveraging AI tools such as ChatGPT, DeepSeek, OpenCode and techniques to enhance the development process, from code generation to automated testing and optimization.",
      borderColor: "group-hover:border-[#ffb703]",
      iconColor: "group-hover:text-[#ffb703]",
      hoverBorder:
        "hover:border-[#ffb703] hover:shadow-[0_0_20px_rgba(255,183,3,0.2)]",
    },
  ];

  const techCategories: TechCategory[] = [
    {
      label: "Languages & Frameworks",
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
      label: "Backend & Databases",
      icon: <Server className="w-4 h-4 text-[rgb(37,106,244)]" />,
      skills: [
        "Node.js",
        "Express",
        "REST APIs",
        "PostgreSQL",
        "EF Core",
        "MongoDB",
        "JWT Auth",
      ],
    },
    {
      label: "Testing, DevOps & Tools",
      icon: <Wrench className="w-4 h-4 text-[rgb(37,106,244)]" />,
      skills: [
        "Vitest",
        "Playwright",
        "xUnit",
        "Docker",
        "Git/GitHub Actions",
        "shadcn/ui",
        "Figma",
        "Vercel/Railway",
      ],
    },
  ];

  return (
    <section className="text-white flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-8 lg:gap-12 px-6 py-8 md:py-12">
      <div className="flex flex-col w-full lg:w-96 shrink-0 gap-6 h-full">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[rgb(37,106,244)]">
            Engineering Mindset
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Technical Expertise
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            I'm currently building robust frontend infrastructures that scale.
            My approach combines clean code principles, full type safety, and
            AI-assisted workflows with a relentless focus on the end-user
            experience.
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            An overview of the technologies, frameworks, and tools I use to
            build end-to-end applications.
          </p>
        </div>

        <div className="flex flex-col gap-5 pt-2">
          {techCategories.map((category, i) => (
            <div key={i} className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                {category.icon}
                <span>{category.label}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((tech, id) => (
                  <span
                    key={id}
                    className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-[#121318] border border-white/10 rounded-md transition-colors hover:border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:flex-1">
        {skillsData.map((skill, i) => (
          <SkillCard
            key={i}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            iconColor={skill.iconColor}
            hoverBorder={skill.hoverBorder}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
