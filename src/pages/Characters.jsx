import React, { useEffect } from "react";
import CharactersContainer from "../components/CharactersContainer";

export default function Characters() {
  useEffect(() => {
  document.title = "Characters | Mini Projeto M2A";
}, []);

  return <CharactersContainer />;
}
