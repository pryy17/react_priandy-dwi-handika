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
import ReactRedux from "./components/ReactRedux/App";
import { useSelector } from 'react-redux';




function App() {
  const dataAssignment = useSelector((state) => state.assignment.menus);

  console.log(dataAssignment);
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
        <Route path="/ReactRedux" element={<ReactRedux />} />
        <Route path="/ReactRouting" element={<ReactRouting />} />
      </Routes>
    </div>
  );
}

export default App;

