import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

export default function FavoritesEmptyState() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="w-24 h-24 mx-auto mb-6 text-gray-300 dark:text-gray-600">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {t("favorites.emptyTitle")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            {t("favorites.emptyMessage")}
          </p>
          <Link to="/characters" className="btn-primary inline-block">
            {t("favorites.exploreCharacters")}
          </Link>
        </div>
      </div>
    </div>
  );
}
