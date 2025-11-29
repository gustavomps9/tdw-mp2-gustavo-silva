import React from "react";
import { useLanguage } from "../../hooks/useLanguage";

export default function SearchBar({ value, onChange }) {
  const { t } = useLanguage();

  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder={t("characters.searchPlaceholder")}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-4 pl-12 pr-4 rounded-xl 
                     border border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 
                     text-gray-900 dark:text-white 
                     placeholder-gray-500 dark:placeholder-gray-400 
                     transition-all duration-300 
                     focus:ring-2 focus:ring-green-400 focus:border-transparent 
                     shadow-sm"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
