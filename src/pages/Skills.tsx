import SkillCard from "../components/SkillCard";
import { techCategories } from "../data/skills";
import { skillsData } from "../data/skills";

const Skills = () => {
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
