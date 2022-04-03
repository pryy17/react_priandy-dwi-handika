import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import users from "./mockupData";

function App() {
  return (
    <div className="App">
      <header>
        <Header text='To Do Apps' />
      </header>
      <div>
        {users.map((user) => 
          <Todo user={user} />
        )}
      </div>
    </div>
  );
}

export default App;
