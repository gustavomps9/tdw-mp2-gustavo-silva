import React, { useEffect } from "react";
import HomeContent from "../components/HomeContent";

export default function Home() {

  useEffect(() => {
    document.title = "Home | Mini Projeto M2A";
  }, []);

  return <HomeContent />;
}
