import React, { useState, useEffect } from "react";
import { FavoritesContext } from "./FavoritesContext";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("rickAndMortyFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("rickAndMortyFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (character) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === character.id);
      if (!exists) return [...prev, character];
      return prev;
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((char) => char.id !== id));
  };

  const toggleFavorite = (character) => {
    const exists = favorites.find((fav) => fav.id === character.id);
    exists ? removeFavorite(character.id) : addFavorite(character);
  };

  const isFavorite = (id) => favorites.some((char) => char.id === id);

  const clearFavorites = () => setFavorites([]);

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoritesCount: favorites.length,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
