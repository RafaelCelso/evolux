import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
// Logo removida - usando imagem direta

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { name: t("nav.home"), href: "#home", section: "home" },
    { name: t("nav.about"), href: "#about", section: "about" },
    { name: t("nav.services"), href: "#services", section: "services" },
    { name: t("nav.team"), href: "#team", section: "team" },
    { name: t("nav.contact"), href: "#contact", section: "contact" },
  ];

  // Função para scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Altura do header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // Detectar seção ativa baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "team", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset para melhor detecção

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar posição inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <header className="bg-primary shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src="/images/Logo sem fundo.webp"
              alt="Evolux Trading"
              className="h-8 w-auto sm:h-10 md:h-12 lg:h-14"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-24">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-secondary ${
                  isActive(item.section)
                    ? "text-secondary border-b-2 border-secondary pb-1"
                    : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:text-secondary hover:bg-white/10 transition-colors duration-200"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.section);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.section)
                      ? "text-secondary bg-secondary/10"
                      : "text-white hover:text-secondary hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
