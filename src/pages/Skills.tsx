import SkillCard from "../components/SkillCard";
import { useTechCategories } from "../data/skills";
import { useSkillsData } from "../data/skills";
import { useTranslation } from "react-i18next";


const Skills = () => {
  const { t } = useTranslation();
  const techCategories = useTechCategories();
  const skillsData = useSkillsData();

  return (
    <section className="text-white flex flex-col lg:flex-row justify-between items-start max-w-7xl mx-auto w-full gap-8 lg:gap-12 px-6 lg:px-8 py-8 md:py-12 min-h-[calc(100vh-4.5rem)]">
      <div className="flex flex-col w-full lg:w-[340px] xl:w-[360px] shrink-0 gap-6 lg:sticky lg:top-24 self-start">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit px-2.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-xs font-bold uppercase tracking-widest text-blue-400">
            {t("skills.tagline")}
          </span>
          <h1 className="text-4xl md:text-[2.6rem] font-bold tracking-tight text-white leading-tight">
            {t("skills.title")}
          </h1>
          <p className="text-slate-400 text-[15px] leading-relaxed">
            {t("skills.description1")}
          </p>
          <p className="text-slate-400 text-[15px] leading-relaxed">
            {t("skills.description2")}
          </p>
        </div>

        <div className="flex flex-col gap-5 pt-2 border-t border-white/5 mt-2">
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
                    className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/10 rounded-lg transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:flex-1 content-start">
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
