import React, { useEffect } from "react";
import HomeContent from "../components/Home/HomeContent";

export default function Home() {

  useEffect(() => {
    document.title = "Home | Mini Projeto M2A";
  }, []);

  return <HomeContent />;
}
