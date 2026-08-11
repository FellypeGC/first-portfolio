type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
  hoverBorder: string;
};

const SkillCard = ({
  icon,
  title,
  description,
  iconColor,
  hoverBorder,
}: SkillCardProps) => {
  return (
    <div
      className={`p-6 rounded-2xl border border-white/10 bg-[#121318] flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${hoverBorder}`}
    >
      <div className={`p-2.5 w-fit rounded-xl bg-white/5 ${iconColor}`}>
        {icon}
      </div>

      <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default SkillCard;
