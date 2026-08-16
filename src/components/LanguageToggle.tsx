import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(nextLang);
  };

  const isPt = i18n.language.startsWith("pt");

  return (
    <button
      onClick={toggleLanguage}
      className="w-full sm:w-auto px-4 py-2.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-md bg-[#161b22] border border-white/10 text-xs font-mono font-bold text-slate-300 hover:text-white hover:border-blue-500/50 transition-all cursor-pointer flex items-center justify-evenly gap-2"
      aria-label="Toggle language"
    >
      <span className={!isPt ? "text-blue-400" : "text-slate-500"}>EN</span>
      <span className="text-slate-600 font-normal">/</span>
      <span className={isPt ? "text-blue-400" : "text-slate-500"}>PT</span>
    </button>
  );
};

export default LanguageToggle;