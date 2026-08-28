// import Button from '../components/Button'
import { Link } from "react-router";
import StatusBadge from "../components/StatusBadge";
import TerminalCard from "../components/TerminalCard";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const isAvailable: boolean = true;
  const enterpriseOrCompany: string = "?";

  return (
    <section className="text-white max-w-7xl w-full mx-auto px-6 lg:px-8 py-10 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-14 min-h-[calc(100vh-4.5rem)]">
      <div className="flex flex-col items-start w-full md:w-[40%] lg:w-130 shrink-0 gap-6 md:gap-7">
        <div className="self-start w-fit">
          <StatusBadge
            isAvailable={isAvailable}
            companyName={enterpriseOrCompany}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4.2rem] font-bold tracking-[-0.03em] leading-[0.95] max-w-[14ch]">
            {t("home.roleTitle")}{" "}
            <span className="text-[rgb(37,106,244)] text-glow">
              {t("home.roleHighlight")}
            </span>
          </h1>
          <p className="text-[15px] md:text-base text-slate-400 leading-relaxed max-w-[52ch]">
            {t("home.bio")}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-1">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-1.5 h-12 w-auto max-[450px]:w-full md:w-full lg:w-48 px-6 text-white text-sm font-bold bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 hover:scale-[0.98] active:scale-[0.97] shadow-lg shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            {t("home.viewProjects")}
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://github.com/FellypeGC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 w-auto max-[450px]:w-full md:w-full lg:w-48 px-6 text-sm font-semibold text-white bg-white/6 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 hover:scale-[0.98] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            <FaGithub className="w-4 h-4" />
            {t("home.githubProfile")}
          </a>
        </div>
      </div>

      {/* VS Code Terminal Card */}
      <div className="w-full md:w-[55%] flex justify-center lg:justify-end">
        <TerminalCard />
      </div>
    </section>
  );
};

export default Home;
