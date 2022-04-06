import './App.css';
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

const dataAssignment = [
  {
    id: 1,
    name: "Introduction React",
  },
  {
    id: 2,
    name: "React Fundamental",
  },
  {
    id: 3,
    name: "React Routing",
  },
  {
    id: 4,
    name: "Event Handling",
  },
  {
    id: 5,
    name: "React Hook",
  },
  {
    id: 6,
    name: "React Form",
  },
  {
    id: 7,
    name: "Global State Management and Data fetching",
  },
  {
    id: 8,
    name: "Testing",
  },
  {
    id: 9,
    name: "Deployment",
  },
];

function App() {
  const [dataMenu, setDataMenu] = useState(dataAssignment);

  return (
    <div className="App">
      <Sidebar style={{position : "fixed"}} dataMenu = {dataMenu}/>
      <Routes>
        <Route path="/" element={<Home  dataMenu = {dataMenu}/>} />
      </Routes>
    </div>
  );
}

export default App;
