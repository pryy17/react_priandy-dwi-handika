import './App.css';
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Assignment from "./pages/Assignment";
import IntroductionReact from "./components/IntroductionReact/App";
import ReactFundamental from "./components/ReactFundamental/App";
import ReactRouting from "./components/ReactRouting/App";
import EventHandling from "./components/EventHandling/App";
import ReactHook from "./components/ReactHook/App";
import ReactForm from "./components/ReactForm/App";
// import ReactRedux from "./components/ReactRedux/App"



const dataAssignment = [
  {
    id: 1,
    name: "Introduction React",
    url: "IntroductionReact",
    img: ["halaman ABOUT.jpeg", "halaman FORM.jpeg", "halaman HOME.jpeg"]
  },
  {
    id: 2,
    name: "React Fundamental",
    url: "ReactFundamental",
    img : ["ssreactfundamental.jpeg"]
  },
  {
    id: 3,
    name: "React Routing",
    url: "ReactRouting",
    img : ["halaman about.jpeg", "halaman about-author.jpeg", "halaman Home.jpeg", "not-found.jpeg"]
  },
  {
    id: 4,
    name: "Event Handling",
    url: "EventHandling",
    img : ["appTodo.jpeg", "eventHandler.jpeg"]
  },
  {
    id: 5,
    name: "React Hook",
    url: "ReactHook",
    img : ["appTodo.jpeg", "eventHandler.jpeg"]
  },
  {
    id: 6,
    name: "React Form",
    url: "ReactForm",
    img : ["reactform validation.jpeg"]
  },
  {
    id: 7,
    name: "Global State Management and Data fetching",
    url: "ReactRedux",
    img : ["redux implementation.jpeg", "ss app.jpeg"]
  },
  {
    id: 8,
    name: "Testing",
    url: "Testing",
    img : ["formCodingTesting.jpeg", "searchTest.jpeg", "useHookTest.jpeg"]
  },
  {
    id: 9,
    name: "Deployment",
    url: "Deployment",
    img : ["deployment.jpeg"]
  },
];

function App() {
  const [dataMenu, setDataMenu] = useState(dataAssignment);
  return (
    <div className="App">
      <Sidebar dataMenu = {dataMenu}/>
      <Routes>
        <Route path="/" element={<Home  dataMenu = {dataMenu}/>} />
        {
          dataMenu.map((item)=>(
            <Route key={item.id} path={`/${item.id}`} element={ <Assignment dataMenu = {item} /> } />
          ))
        }
        {/* routes app */}
        <Route path="/IntroductionReact" element={<IntroductionReact />} />
        <Route path="/ReactFundamental" element={<ReactFundamental />} />
        <Route path="/EventHandling" element={<EventHandling />} />
        <Route path="/ReactForm" element={<ReactForm />} />
        <Route path="/ReactHook" element={<ReactHook />} />
        {/* <Route path="/ReactRedux" element={<ReactRedux />} /> */}
        <Route path="/ReactRouting" element={<ReactRouting />} />
      </Routes>
    </div>
  );
}

export default App;

