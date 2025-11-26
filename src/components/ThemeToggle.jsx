import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center justify-center w-10 h-10 
        rounded-full border border-gray-400 dark:border-gray-600 
        bg-gray-200 dark:bg-gray-800 
        hover:scale-110 transition-transform duration-200
      "
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-300 transition-opacity" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700 transition-opacity" />
      )}
    </button>
  );
}
