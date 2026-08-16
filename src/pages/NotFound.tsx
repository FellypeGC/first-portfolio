import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Terminal } from "lucide-react";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[calc(100vh-4.5rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#161b22]/50 backdrop-blur-md p-6 sm:p-8 space-y-6 text-center shadow-2xl">
        
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
          <Terminal className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">
            {t("notFound.code")}
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {t("notFound.title")}
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed pt-1">
            {t("notFound.description")}
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0d1117] border border-white/5 text-xs text-slate-500 text-left flex items-center gap-2">
          <span className="text-blue-500">$</span>
          <span className="truncate">err: route_not_resolved</span>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-lg shadow-blue-600/20"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("notFound.button")}
        </Link>
        
      </div>
    </section>
  );
};

export default NotFound;