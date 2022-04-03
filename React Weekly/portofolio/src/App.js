import './App.css';
import ReactFundamental from "./components/ReactFundamental/App";
import EventHandling from "./components/EventHandling/App";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Sidebar style={{position : "fixed"}} />
      <Home />
    </div>
  );
}

export default App;
