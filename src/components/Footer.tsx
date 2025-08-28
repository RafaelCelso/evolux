import React from "react";
import { useTranslation } from "react-i18next";
// Logo removida - usando imagem direta

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t("nav.home"), section: "home" },
    { name: t("nav.about"), section: "about" },
    { name: t("nav.services"), section: "services" },
    { name: t("nav.team"), section: "team" },
    { name: t("nav.contact"), section: "contact" },
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

  const services = [
    t("services.sourcing.title"),
    t("services.import.title"),
    t("services.marketing.title"),
    t("services.curation.title"),
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/images/Logo sem fundo.webp"
                alt="Evolux Trading"
                className="h-8 w-auto sm:h-10 md:h-12"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t("footer.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:contato@evoluxgroup.com.br"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  contato@evoluxgroup.com.br
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">Brasil</span>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <a
                  href="https://wa.me/message/V2FZ6LEAVU7VL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col justify-center items-center space-y-2">
          <p className="text-gray-300 text-sm text-center">
            © {new Date().getFullYear()} Evolux Group.{" "}
            {t("footer.rights")}
          </p>
          <p className="text-gray-400 text-xs text-center">
            {t("footer.developedBy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
