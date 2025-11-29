import React from "react";
import FavoritesContent from "../components/Favorites/FavoritesContent";
import { useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";

export default function Favorites() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t("favorites.pageTitle");
  }, [t]);

  return <FavoritesContent />;
}
