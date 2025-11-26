import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "/public/rick-and-morty-v2.png";

export default function Navbar() {
  return (
    <nav className="navbar-glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
        >
          <img 
            src={logo} 
            alt="Rick and Morty Logo" 
            className="h-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
          />
          <div>
            <h1 className="text-2xl font-bold gradient-text">
              Rick & Morty Explorer
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              Mini Projeto M2A - TDW
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/characters"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Personagens
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Sobre o Projeto
          </NavLink>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}