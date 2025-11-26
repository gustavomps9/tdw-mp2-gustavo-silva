import React, { useEffect } from "react";
import AboutContent from "../components/AboutContent";

export default function About() {
  useEffect(() => {
    document.title = "Sobre o Projeto — Mini Projeto M2A";
  }, []);

  return <AboutContent />;
}
