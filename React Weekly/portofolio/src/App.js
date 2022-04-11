import './App.css';
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Assignment from "./pages/Assignment";

const dataAssignment = [
  {
    id: 1,
    name: "Introduction React",
    img: ["halaman ABOUT.jpeg", "halaman FORM.jpeg", "halaman HOME.jpeg"]
  },
  {
    id: 2,
    name: "React Fundamental",
    img : ["ssreactfundamental.jpeg"]
  },
  {
    id: 3,
    name: "React Routing",
    img : ["halaman about.jpeg", "halaman about-author.jpeg", "halaman Home.jpeg", "halaman not-found.jpeg"]
  },
  {
    id: 4,
    name: "Event Handling",
    img : ["appTodo.jpeg", "eventHandler.jpeg"]
  },
  {
    id: 5,
    name: "React Hook",
    img : ["appTodo.jpeg", "eventHandler.jpeg"]
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

        {
          dataMenu.map((item)=>(
            <Route path={`/${item.id}`} element={ <Assignment dataMenu = {item} /> } />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
