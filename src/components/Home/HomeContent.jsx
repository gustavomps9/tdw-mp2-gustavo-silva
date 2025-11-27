import React from "react";
import logo from "../../assets/rick-and-morty-logo.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

export default function HomeContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      
      <section className="text-center space-y-8">
        <div className="flex items-center justify-center gap-6 mb-8">
          <h1 className="text-5xl font-bold gradient-text">
            {t('home.title')}
          </h1>
          <img 
            src={logo} 
            alt="Rick and Morty Logo" 
            className="h-16 portal-glow"
          />
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {t('home.subtitle')} <span className="font-semibold text-green-600 dark:text-green-400">Rick and Morty API</span>.{" "}
          {t('home.discoverCharacters')}
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/characters" className="btn-primary">
            {t('home.exploreCharacters')}
          </Link>
          <a 
            href="https://rickandmortyapi.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {t('home.viewApiDocs')}
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold gradient-text">{t('home.aboutProject')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('home.projectDescription')}
          </p>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
              RTK Query
            </span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{t('home.aboutMe')}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t('home.aboutMeSection.age')}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t('home.aboutMeSection.hobbies')}
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>🎓 {t('home.aboutMeSection.degree')}</p>
            <p>💻 {t('home.aboutMeSection.development')}</p>
            <p>🎨 {t('home.aboutMeSection.design')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}