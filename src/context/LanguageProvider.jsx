import ptTranslations from '../locales/pt.json';
import enTranslations from '../locales/en.json';
import React, { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";


const translations = {
  pt: ptTranslations,
  en: enTranslations
};


export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('appLanguage');
    return saved || 'pt'; 
  });

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (value === undefined) {
      let fallbackValue = translations.pt;
      for (const k of keys) {
        fallbackValue = fallbackValue?.[k];
      }
      value = fallbackValue || key; 
    }

    if (typeof value === 'string') {
      return value.replace(/{(\w+)}/g, (match, param) => {
        return params[param] !== undefined ? params[param] : match;
      });
    }

    return value;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const value = {
    language,
    setLanguage,
    t,
    toggleLanguage,
    isPortuguese: language === 'pt',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
