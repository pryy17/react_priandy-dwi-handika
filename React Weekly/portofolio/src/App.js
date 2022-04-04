import './App.css';
import ReactFundamental from "./components/ReactFundamental/App";
import EventHandling from "./components/EventHandling/App";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';
import Practice from './Practice';


function App() {
  return (
    <div className="App">
      {/* <Sidebar style={{position : "fixed"}} />
      <Home /> */}
      <Practice />
    </div>
  );
}

export default App;
