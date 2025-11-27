import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import { useLanguage } from "../../hooks/useLanguage";

export default function CharacterCard({ character }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { t } = useLanguage();
  
  const statusClass =
    character.status === "Alive"
      ? "status-indicator status-alive"
      : character.status === "Dead"
      ? "status-indicator status-dead"
      : "status-indicator status-unknown";

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(character);
  };

  return (
    <Link to={`/characters/${character.id}`} className="block group">
      <div className="character-card p-1 relative">
        
        <button
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group/fav"
          title={isFavorite(character.id) ? t('favorites.remove') : t('favorites.add')}
        >
          {isFavorite(character.id) ? (
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-400 group-hover/fav:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>

        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {character.name}
          </h2>

          <div className="flex items-center gap-2 mb-4">
            <span className={statusClass}></span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {t(`characters.${character.status.toLowerCase()}`)} • {character.species}
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                {t('characters.lastLocation')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-1">{character.location?.name}</p>
            </div>
            
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                {t('characters.firstSeen')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-1">{character.origin?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}