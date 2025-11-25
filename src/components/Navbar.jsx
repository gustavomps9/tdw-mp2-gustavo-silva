import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="w-full bg-gray-900 dark:bg-black text-white shadow-lg border-b border-green-400/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-green-400 drop-shadow-[0_0_5px_rgba(0,255,159,0.6)] hover:text-green-300 transition"
        >
          Rick & Morty Explorer
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg transition ${
                isActive
                  ? "text-green-400 font-semibold drop-shadow-[0_0_6px_rgba(0,255,159,0.8)]"
                  : "text-gray-300 hover:text-green-300"
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
                  ? "text-green-400 font-semibold drop-shadow-[0_0_6px_rgba(0,255,159,0.8)]"
                  : "text-gray-300 hover:text-green-300"
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
                  ? "text-green-400 font-semibold drop-shadow-[0_0_6px_rgba(0,255,159,0.8)]"
                  : "text-gray-300 hover:text-green-300"
              }`
            }
          >
            About
          </NavLink>
        </div>

      </div>
    </nav>
  );
}
