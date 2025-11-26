import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Characters from "../pages/Characters.jsx";
import CharacterDetail from "../pages/CharacterDetail.jsx";
import Favorites from "../pages/Favorites.jsx";
import About from "../pages/About.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />

      <main className="flex-grow min-h-[calc(80vh-4rem)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
