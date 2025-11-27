import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

export default function FavoritesHeader({ favoritesCount, onClearFavorites }) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-4xl font-bold gradient-text mb-2">
          {t('favorites.title')}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {t('favorites.charactersSaved', { count: favoritesCount })}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <button
          onClick={onClearFavorites}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
        >
          {t('favorites.clearAll')}
        </button>
        <Link 
          to="/characters" 
          className="btn-secondary text-center"
        >
          {t('favorites.backToCharacters')}
        </Link>
      </div>
    </div>
  );
}