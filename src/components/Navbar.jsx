import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-100 dark:bg-gray-900 
                    text-gray-900 dark:text-white 
                    shadow-lg border-b 
                    border-gray-300 dark:border-green-400/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-green-700 dark:text-green-400 
                     hover:text-green-600 dark:hover:text-green-300 transition"
        >
          Mini Projeto M2A
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg transition ${
                isActive
                  ? "text-green-700 dark:text-green-300 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/characters"
            className={({ isActive }) =>
              `text-lg transition ${
                isActive
                  ? "text-green-700 dark:text-green-300 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              }`
            }
          >
            Characters
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg transition ${
                isActive
                  ? "text-green-700 dark:text-green-300 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              }`
            }
          >
            About
          </NavLink>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
