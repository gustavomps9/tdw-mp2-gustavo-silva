import React, { useEffect } from "react";
import CharactersContainer from "../components/Characters/CharactersContainer";
import { useLanguage } from "../hooks/useLanguage";

export default function Characters() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t('characters.pageTitle');
  }, [t]);

  return <CharactersContainer />;
}