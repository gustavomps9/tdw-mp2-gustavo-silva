import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  const statusClass =
    character.status === "Alive"
      ? "status-indicator status-alive"
      : character.status === "Dead"
      ? "status-indicator status-dead"
      : "status-indicator status-unknown";

  return (
    <Link to={`/characters/${character.id}`} className="block group">
      <div className="character-card p-1">
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
              {character.status} • {character.species}
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Last Location</p>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-1">{character.location?.name}</p>
            </div>
            
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">First Seen</p>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-1">{character.origin?.name}</p>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}