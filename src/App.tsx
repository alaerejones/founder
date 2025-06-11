
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Ventures from "./pages/Ventures";
import Philanthropy from "./pages/Philanthropy";
import Media from "./pages/Media";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/philanthropy" element={<Philanthropy />} />
        <Route path="/media" element={<Media />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
