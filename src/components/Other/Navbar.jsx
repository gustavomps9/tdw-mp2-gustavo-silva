import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useFavorites } from "../../hooks/useFavorites";
import { useLanguage } from "../../hooks/useLanguage";
import logo from "/public/rick-and-morty-v2.png";

export default function Navbar() {
  const { favoritesCount } = useFavorites();
  const { t } = useLanguage();

  return (
    <nav className="navbar-glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Rick and Morty Logo" 
            className="h-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
          />
          <div>
            <h1 className="text-2xl font-bold gradient-text">
              {t('home.title')}
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {t('footer.miniProject')} - TDW
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            {t('nav.home')}
          </NavLink>

          <NavLink
            to="/characters"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            {t('nav.characters')}
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            {t('nav.favorites')}
            {favoritesCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">
                {favoritesCount}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            {t('nav.about')}
          </NavLink>

          <LanguageToggle />
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}