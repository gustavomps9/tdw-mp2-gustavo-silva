import React, { useEffect } from "react";
import AboutContent from "../components/About/AboutContent";
import { useLanguage } from "../../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t('about.pageTitle');
  }, [t]);

  return <AboutContent />;
}