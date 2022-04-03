import logo from './logo.svg';
import './App.css';
import FormCoding from "./components/FormCoding";
import Search from "./components/Search";
import { useInputValue } from './components/useInputValue';

function App() {
  return (
    <div className="App">
      <Search />
      <FormCoding />
    </div>
  );
}

export default App;
