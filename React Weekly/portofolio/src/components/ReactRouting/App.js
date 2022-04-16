import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutAuthor from "./pages/About/AboutAuthor";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/homeRouting" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/about-author" element={ <AboutAuthor /> }/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
