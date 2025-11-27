import React from "react";
import { useLanguage } from "../../hooks/useLanguage";

export default function LanguageToggle() {
  const { isPortuguese, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-20 h-8 flex items-center bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-full p-1 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl group"
      title={isPortuguese ? "Switch to English" : "Mudar para Português"}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-green-300 dark:from-blue-600 dark:to-green-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      <div className={`
        relative w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-green-500 
        shadow-lg transform transition-all duration-500 ease-in-out flex items-center justify-center
        ${isPortuguese ? 'translate-x-12' : 'translate-x-0'}
        group-hover:scale-110
      `}>
        <div className="absolute transition-all duration-500 ease-in-out flex items-center justify-center">
          {isPortuguese ? (
            <div className="flex flex-col w-3 h-3 rounded-full overflow-hidden">
              <div className="w-full h-1/2 bg-green-600"></div>
              <div className="w-full h-1/2 bg-red-600"></div>
            </div>
          ) : (
            <div className="w-3 h-3 bg-gradient-to-br from-blue-600 via-white to-red-600 rounded-full border border-white/30"></div>
          )}
        </div>
        
        <div className="absolute inset-0 rounded-full bg-current opacity-20 animate-pulse"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <span className={`text-xs font-bold transition-all duration-300 ${isPortuguese ? 'text-gray-400' : 'text-white'}`}>
          EN
        </span>
        <span className={`text-xs font-bold transition-all duration-300 ${isPortuguese ? 'text-white' : 'text-gray-400'}`}>
          PT
        </span>
      </div>
    </button>
  );
}