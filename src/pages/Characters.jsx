import React, { useEffect } from "react";
import CharactersContainer from "../components/Characters/CharactersContainer";

export default function Characters() {
  useEffect(() => {
  document.title = "Personagens | Mini Projeto M2A";
}, []);

  return <CharactersContainer />;
}
