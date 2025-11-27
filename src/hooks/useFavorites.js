import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (context === null) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
};
