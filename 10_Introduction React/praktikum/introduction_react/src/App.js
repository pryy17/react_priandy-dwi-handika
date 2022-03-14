import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Form from './pages/Form';

function App() {
  return (
    <div className="App">
      <Router>
          <main>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/About" element={<About />} exact />
              <Route path="/Form" element={<Form />} exact/>
            </Routes>
          </main>
        </Router>
    </div>
  );
}

export default App;
