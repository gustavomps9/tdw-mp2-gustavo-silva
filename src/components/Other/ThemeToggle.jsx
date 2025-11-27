import React from "react";
import { useTheme } from '../../hooks/useTheme'; 

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 flex items-center bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-full p-1 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl group"
      title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200 to-orange-300 dark:from-purple-600 dark:to-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      <div className={`
        relative w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 dark:from-blue-400 dark:to-purple-500 
        shadow-lg transform transition-all duration-500 ease-in-out flex items-center justify-center
        ${isDark ? 'translate-x-6' : 'translate-x-0'}
        group-hover:scale-110
      `}>
        <div className="absolute transition-all duration-500 ease-in-out">
          {isDark ? (
            <span className="text-white text-xs">🌙</span>
          ) : (
            <span className="text-white text-xs">☀️</span>
          )}
        </div>
        
        <div className="absolute inset-0 rounded-full bg-current opacity-20 animate-pulse"></div>
      </div>

      {isDark && (
        <>
          <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full opacity-60"></div>
          <div className="absolute bottom-1 left-4 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
        </>
      )}
    </button>
  );
}