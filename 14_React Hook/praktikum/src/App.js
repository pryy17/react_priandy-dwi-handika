import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ListItem from "./components/ListItem";
function App() {
  const [dataTodo, setDataTodo] = useState([
    {
      id: 1,
      title: "mengerjakan Exercise",
      completed: false,
    },
    {
      id: 2,
      title: "mengerjakan assigment",
      completed: false,
    },
  ]);

  let handleAddTodo = (data) => {
    let newData= [...dataTodo];
    newData.push(data)
    setDataTodo(newData);
    console.log(newData);
  }

  function handleDelete(id) {
    let filterNewData = dataTodo.filter((item) => (
      item.id !== id
    ));
    setDataTodo(filterNewData);
    console.log("halo")
  }

  return (
    <div className="App">
      <h1>TODOS</h1>
      <AddTodo dataTodo={dataTodo} handleAddTodo={handleAddTodo} />
      {dataTodo.map((list) => (
        <ListItem 
        dataTodo={list}
        key={list.id}
        handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
