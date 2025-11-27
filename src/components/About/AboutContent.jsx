import React from "react";
import { useLanguage } from "../../hooks/useLanguage";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold gradient-text mb-4">
          {t('about.title')}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
      </section>

      <section className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-blue-700/30 backdrop-blur-sm">
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-gray-700 dark:text-blue-100">
            {t('about.projectDescription')}
          </p>
          
          <p className="text-gray-700 dark:text-blue-100">
            {t('about.listingDescription')}
          </p>

          <p className="text-gray-700 dark:text-blue-100">
            {t('about.detailDescription')}
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-blue-700/30 backdrop-blur-sm">
        <h2 className="text-3xl font-bold gradient-text mb-6">{t('about.technologies')}</h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-gray-700 dark:text-blue-100">
            {t('about.navigationDescription')}
          </p>

          <p className="text-gray-700 dark:text-blue-100">
            {t('about.codeDescription')}
          </p>

          <p className="text-gray-700 dark:text-blue-100">
            {t('about.githubDescription')}
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-blue-700/30 backdrop-blur-sm">
        <h2 className="text-3xl font-bold gradient-text mb-8 text-center">
          {t('about.technologiesUsed')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">React</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">Redux Toolkit</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">RTK Query</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">GitHub</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">React Router</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">Rick and Morty API</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">Netlify</span>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-green-200 dark:border-blue-600/30">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-blue-100 mb-3">
            {t('about.extraFeatures')}
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-700 dark:text-blue-200">{t('about.darkLightMode')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-700 dark:text-blue-200">{t('favorites.title')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-700 dark:text-blue-200">{t('characters.advanced filter')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-700 dark:text-blue-200">{t('nav.language system')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}