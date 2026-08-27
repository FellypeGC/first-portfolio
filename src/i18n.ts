import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt-br/translation.json";

const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

i18n.on("languageChanged", (lng) => {
  const htmlLang = lng.startsWith("pt") ? "pt-BR" : "en";
  document.documentElement.lang = htmlLang;
});

// set initial html lang
if (typeof document !== "undefined") {
  const initial = i18n.language?.startsWith("pt") ? "pt-BR" : "en";
  document.documentElement.lang = initial;
}

export default i18n;