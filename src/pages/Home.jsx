import React, { useEffect } from "react";
import HomeContent from "../components/Home/HomeContent";
import { useLanguage } from "../hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t("home.pageTitle");
  }, [t]);

  return <HomeContent />;
}
