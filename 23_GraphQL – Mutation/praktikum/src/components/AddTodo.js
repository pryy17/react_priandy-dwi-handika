import React, { useState } from "react";
import "./AddTodo.css";
export default function AddTodo(props) {
  const [addTodo, setAddTodo] = useState({
    title: '',
  });
  let handleChange = (e) => {
    let newAddTodo = {
      title: e.target.value,
    };

    setAddTodo(newAddTodo);
  };
  
  let handleSubmit = (e) => {
    e.preventDefault();
    if(addTodo.title === '') {
      alert("isi terlebih dahulu :(");
    }else{
      let numberId = Math.max.apply(Math, props.dataTodo.map((el) => (
        el.id
      )));
      let newData = {
        id: props.dataTodo.length === 0 ? 1 : numberId + 1,
        title: addTodo.title,
        completed: false,
      };
      props.handleAddTodo(newData);
      setAddTodo({
        title: "",
      })
    }
  };
  return (
    <div>
      <div className="container-form">
        <form className="add-todo-form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={addTodo.title}
              onChange={handleChange}
              placeholder="add Todo.."
              className="input-text"
            />
          </label>
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </div>
  );
}
