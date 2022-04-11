import React from 'react';
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Contact_us from './pages/Contact_us';

function App() {
  return (
    <div className="App">
      <Router>
          <main>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/About" element={<About />} exact />
              <Route path="/Form" element={<Contact_us />} exact/>
            </Routes>
          </main>
        </Router>
    </div>
  );
}

export default App;
