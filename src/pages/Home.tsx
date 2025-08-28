import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedTimeline from "../components/AnimatedTimeline";
import ClientsSlider from "../components/ClientsSlider";

const Home: React.FC = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      icon: "🎯",
      title: t("achievements.experience.title"),
      description: t("achievements.experience.description"),
    },
    {
      icon: "🌍",
      title: t("achievements.global.title"),
      description: t("achievements.global.description"),
    },
    {
      icon: "🔧",
      title: t("achievements.integrated.title"),
      description: t("achievements.integrated.description"),
    },
    {
      icon: "✨",
      title: t("achievements.curation.title"),
      description: t("achievements.curation.description"),
    },
    {
      icon: "🏢",
      title: t("achievements.showroom.title"),
      description: t("achievements.showroom.description"),
    },
    {
      icon: "🎓",
      title: t("achievements.support.title"),
      description: t("achievements.support.description"),
    },
    {
      icon: "📊",
      title: t("achievements.data.title"),
      description: t("achievements.data.description"),
    },
    {
      icon: "🤝",
      title: t("achievements.values.title"),
      description: t("achievements.values.description"),
    },
  ];

  const services = [
    {
      title: t("services.sourcing.title"),
      description: t("services.sourcing.description"),
      icon: "🔍",
    },
    {
      title: t("services.import.title"),
      description: t("services.import.description"),
      icon: "🚢",
    },
    {
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
      icon: "📈",
    },
    {
      title: t("services.curation.title"),
      description: t("services.curation.description"),
      icon: "✨",
    },
  ];

  const whyChoose = [
    {
      title: t("why.local.title"),
      description: t("why.local.description"),
      icon: <img src="/images/brasil.svg" alt="Brasil" className="w-8 h-8" />,
    },
    {
      title: t("why.network.title"),
      description: t("why.network.description"),
      icon: "🌐",
    },
    {
      title: t("why.marketing.title"),
      description: t("why.marketing.description"),
      icon: "🎯",
    },
    {
      title: t("why.support.title"),
      description: t("why.support.description"),
      icon: "🤝",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/media/video-hero.webm" type="video/webm" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-4xl mx-auto whitespace-pre-line">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/message/V2FZ6LEAVU7VL1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-8 py-4 inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-lg border-2 border-white hover:border-white/80"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                </svg>
                {t("hero.cta")}
              </a>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                {t("nav.about")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Slider */}
      <ClientsSlider />

      {/* About Section - Mission, Vision, Values */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {t("about.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {t("about.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm hover:-translate-y-2 overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                  {t("about.mission.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {t("about.mission.text")}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-10 translate-x-5 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-8 -translate-x-4 group-hover:scale-125 transition-transform duration-700"></div>
            </div>

            {/* Vision */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm hover:-translate-y-2 overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                  {t("about.vision.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {t("about.vision.text")}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-10 translate-x-5 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-8 -translate-x-4 group-hover:scale-125 transition-transform duration-700"></div>
            </div>

            {/* Values */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm hover:-translate-y-2 overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                  {t("about.values.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {t("about.values.text")}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section id="quem-somos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                {t("companyStory.title")}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {(t("companyStory.content", { returnObjects: true }) as string[]).map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-xl font-bold mb-6">{t("philosophy.pillars.title")}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{t("philosophy.pillars.strategy")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{t("philosophy.pillars.planning")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{t("philosophy.pillars.compliance")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section 
        className="py-16 bg-gray-50 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/parallax.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
              {t("achievements.title")}
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {t("achievements.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm hover:-translate-y-2 overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  {/* Icon container with gradient background */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">{achievement.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-10 translate-x-5 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-8 -translate-x-4 group-hover:scale-125 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("services.title")}
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm hover:-translate-y-2 overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon container with gradient background */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">{service.icon}</span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-10 translate-x-5 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-8 -translate-x-4 group-hover:scale-125 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline Animada */}
      <section id="process" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {t("process.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("process.subtitle")}
            </p>
          </div>

          <AnimatedTimeline
            items={[
              {
                step: "01",
                title: t("process.steps.analysis.title"),
                description: t("process.steps.analysis.description"),
              },
              {
                step: "02",
                title: t("process.steps.planning.title"),
                description: t("process.steps.planning.description"),
              },
              {
                step: "03",
                title: t("process.steps.execution.title"),
                description: t("process.steps.execution.description"),
              },
              {
                step: "04",
                title: t("process.steps.monitoring.title"),
                description: t("process.steps.monitoring.description"),
              },
            ]}
            className="mt-8"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                {t("benefits.title")}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: t("benefits.items.experience.title"),
                    description: t("benefits.items.experience.description"),
                  },
                  {
                    title: t("benefits.items.network.title"),
                    description: t("benefits.items.network.description"),
                  },
                  {
                    title: t("benefits.items.support.title"),
                    description: t("benefits.items.support.description"),
                  },
                  {
                    title: t("benefits.items.results.title"),
                    description: t("benefits.items.results.description"),
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-6">{t("benefits.cta.title")}</h3>
              <p className="mb-6 text-gray-200">
                {t("benefits.cta.description")}
              </p>
              <a
                href="https://wa.me/message/V2FZ6LEAVU7VL1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515" />
                </svg>
                <span>{t("benefits.cta.button")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {t("why.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("why.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm hover:-translate-y-2 overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex items-start space-x-6">
                  {/* Icon container with gradient background */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">{item.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-10 translate-x-5 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-8 -translate-x-4 group-hover:scale-125 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {t("team.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("team.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t("team.paula.name"),
                role: t("team.paula.role"),
                description: t("team.paula.description"),
                image: "/images/paula.webp",
                alt: "Paula Ariana",
              },
              {
                name: t("team.isabella.name"),
                role: t("team.isabella.role"),
                description: t("team.isabella.description"),
                image: "/images/isabela.webp",
                alt: "Isabella Palmeira",
              },
              {
                name: t("team.vanessa.name"),
                role: t("team.vanessa.role"),
                description: t("team.vanessa.description"),
                image: "/images/vanessa.webp",
                alt: "Vanessa Alves",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-white via-gray-50 to-primary/5 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center overflow-hidden border border-gray-100/50 hover:border-primary/20 backdrop-blur-sm"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-10 translate-x-5 group-hover:scale-150 transition-transform duration-700"></div>
  
                
                {/* Profile image with enhanced styling */}
                <div className="relative z-10 w-28 h-28 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gradient-to-r from-primary/30 to-secondary/30 hover:border-primary/60 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 relative z-10"
                  />
                </div>
                
                {/* Content with enhanced typography */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/90 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="inline-block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-semibold mb-4 text-sm uppercase tracking-wide">
                    {member.role}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {member.description}
                  </p>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {t("experienceHighlight.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("experienceHighlight.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: t("experienceHighlight.areas.strategy.title"),
                description: t("experienceHighlight.areas.strategy.description"),
                icon: t("experienceHighlight.areas.strategy.icon"),
              },
              {
                area: t("experienceHighlight.areas.trade.title"),
                description: t("experienceHighlight.areas.trade.description"),
                icon: t("experienceHighlight.areas.trade.icon"),
              },
              {
                area: t("experienceHighlight.areas.logistics.title"),
                description: t("experienceHighlight.areas.logistics.description"),
                icon: t("experienceHighlight.areas.logistics.icon"),
              },
              {
                area: t("experienceHighlight.areas.relationships.title"),
                description: t("experienceHighlight.areas.relationships.description"),
                icon: t("experienceHighlight.areas.relationships.icon"),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {item.area}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                {t("philosophy.title")}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {t("philosophy.collaboration.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("philosophy.collaboration.description")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {t("philosophy.innovation.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("philosophy.innovation.description")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {t("philosophy.commitment.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("philosophy.commitment.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">{t("philosophy.pillars.title")}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="font-medium">{t("philosophy.pillars.strategy")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="font-medium">{t("philosophy.pillars.planning")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="font-medium">{t("philosophy.pillars.compliance")}</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-gray-200 mb-4">
                  {t("philosophy.pillars.cta.description")}
                </p>
                <a
                  href="https://wa.me/message/V2FZ6LEAVU7VL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-block"
                >
                  {t("philosophy.pillars.cta.button")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary mb-2">
                  {t("contact.email")}
                </h4>
                <a
                  href="https://wa.me/message/V2FZ6LEAVU7VL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm"
                >
                  contato@evoluxgroup.com.br
                </a>
              </div>

              {/* WhatsApp */}
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary mb-2">
                  {t("contact.whatsapp")}
                </h4>
                <a
                  href="https://wa.me/message/V2FZ6LEAVU7VL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm"
                >
                  {t("contact.directContact")}
                </a>
              </div>

              {/* Location */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary mb-2">
                  {t("contact.location")}
                </h4>
                <p className="text-gray-600 text-sm">{t("contact.country")}</p>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">{t("quickContact.title")}</h4>
              <p className="text-gray-200 mb-6">
                {t("quickContact.description")}
              </p>
              <a
                href="https://wa.me/message/V2FZ6LEAVU7VL1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2 text-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>{t("quickContact.button")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
