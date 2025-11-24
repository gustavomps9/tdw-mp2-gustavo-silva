import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Characters from "../pages/Characters/Characters.jsx";
import CharacterDetail from "../pages/CharacterDetail/CharacterDetail.jsx";
import About from "../pages/About/About.jsx";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
