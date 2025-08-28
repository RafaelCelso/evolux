import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const languages = [
    {
      code: "pt-BR",
      label: "PT",
      flag: "/images/brasil.svg",
      alt: "Bandeira do Brasil",
    },
    {
      code: "en-US",
      label: "EN",
      flag: "/images/eua.svg",
      alt: "Bandeira dos Estados Unidos",
    },
  ];

  return (
    <div className="flex items-center space-x-2">
      {languages.map((language) => {
        const isActive = i18n.language === language.code;
        return (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-200 ${
              isActive
                ? "border-secondary bg-secondary/20 text-secondary"
                : "border-white/30 text-white hover:border-secondary hover:text-secondary"
            }`}
            aria-label={`Alterar idioma para ${language.label}`}
          >
            <img
              src={language.flag}
              alt={language.alt}
              className="w-6 h-4 object-cover rounded-sm"
            />
            <span className="text-sm font-medium">{language.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
