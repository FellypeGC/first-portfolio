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
    <section className="text-white flex justify-center items-center gap-4 sm:gap-6 md:gap-12 min-h-screen p-6 md:py-20 md:flex-row md:px-20 max-w-7xl w-full mx-auto flex-wrap">
      <div className="flex flex-col w-100 max-w-full md:w-120 md:h-100 gap-6">
        {/* If: Available for Hire ? Available for hire : Currently working at [enterprise/company name] */}
        <span>
          <StatusBadge
            isAvailable={isAvailable}
            companyName={enterpriseOrCompany}
          />
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-md">
          {t("home.roleTitle")}{" "}
          <span className="text-[rgb(37,106,244)] text-glow">{t("home.roleHighlight")}</span>
        </h1>
        <p className="md:text-md text-slate-400">
          {t("home.bio")}
        </p>

        <div className="flex gap-4 pt-2">
          <Link
            to="/projects"
            className="flex items-center justify-center w-40 h-14 text-white cursor-pointer text-sm font-bold text-center bg-[rgb(37,106,244)] rounded-[10px] outline-none border-none transition-all duration-200 ease-in-out delay-0 hover:opacity-90 hover:scale-[0.95]"
          >
            {t("home.viewProjects")}
            <ArrowRight className="ml-1 w-4" />
          </Link>

          <a
            href="https://github.com/FellypeGC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-40 h-14 text-white cursor-pointer text-base font-bold text-center bg-[#0c0c0c] rounded-[10px] outline-none border border-white/10 transition-all duration-200 ease-in-out delay-0 hover:opacity-90 hover:scale-[0.95]"
          >
            <FaGithub className="w-4 h-4 mr-2 text-white group-hover:text-white transition-colors" />
            {t("home.githubProfile")}
          </a>
        </div>
      </div>

      {/* VS Code Terminal Card */}
      <TerminalCard />
    </section>
  );
};

export default Home;
