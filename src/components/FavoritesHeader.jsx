import React from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

export default function FavoritesHeader({ favoritesCount, onClearFavorites }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-4xl font-bold gradient-text mb-2">
          Meus Favoritos
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {favoritesCount} personagem{favoritesCount !== 1 ? 's' : ''} guardado{favoritesCount !== 1 ? 's' : ''}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <button
          onClick={onClearFavorites}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
        >
          Limpar Todos
        </button>
        <Link 
          to="/characters" 
          className="btn-secondary text-center"
        >
          Voltar para Personagens
        </Link>
      </div>
    </div>
  );
}