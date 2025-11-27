import React from "react";
import FavoritesContent from "../components/Favorites/FavoritesContent";
import { useEffect } from "react";

export default function Favorites() {
  useEffect(() => {
    document.title = "Favoritos | Mini Projeto M2A";
  }, []);
  return <FavoritesContent />;
}