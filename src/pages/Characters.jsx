import React, { useEffect } from "react";
import CharactersContainer from "../components/CharactersContainer";

export default function Characters() {
  useEffect(() => {
  document.title = "Personagens | Mini Projeto M2A";
}, []);

  return <CharactersContainer />;
}
