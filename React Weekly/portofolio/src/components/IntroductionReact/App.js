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
      <About />
    </div>
  );
}

export default App;
