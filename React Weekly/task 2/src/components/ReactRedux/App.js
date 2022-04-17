import "./App.css";
import AddTodo from "./components/AddTodo";
import ListItem from "./components/ListItem";
import { useSelector} from "react-redux";
function App() {
  const dataTodos = useSelector((state) => state.todo.todos);
  return (
    <div className="App">
      <h1>TODOS</h1>
      <AddTodo dataTodo={dataTodos} />
      {dataTodos.map((list) => (
        <ListItem 
        dataTodo={list}
        key={list.id}
        />
      ))}
    </div>
  );
}

export default App;
