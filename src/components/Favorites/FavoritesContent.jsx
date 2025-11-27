import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import CharacterCard from "../Characters/CharacterCard";
import FavoritesStats from "./FavoritesStats";
import FavoritesEmptyState from "./FavoritesEmptyState";
import FavoritesHeader from "./FavoritesHeader";

export default function FavoritesContent() {
  const { favorites, clearFavorites, favoritesCount } = useFavorites();

  if (favoritesCount === 0) {
    return <FavoritesEmptyState />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <FavoritesHeader 
          favoritesCount={favoritesCount} 
          onClearFavorites={clearFavorites} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {favorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        <FavoritesStats favorites={favorites} />
      </div>
    </div>
  );
}