import React, { useState } from "react";
import "./ListItem.css";
export default function ListItem(props) {

  const [idItem, setItem] = useState(props.dataTodo.id);
  const [completed, setCompleted] = useState(props.dataTodo.completed);
  
  let handleChecked = (condition) => {
    condition ? setCompleted(false) : setCompleted(true);
  }
  return (
    <div className="container-list">
      <div className="list-item">
        <span>
        <input type="checkbox" id="todo1" name="todo" value="todo" defaultChecked={completed} onClick={()=>{handleChecked(completed)}}/>
        </span>
        <span style={completed ? { textDecoration: "line-through"} : { textDecoration: "none" } }>{props.dataTodo.title}</span>
        <span className="item" onClick={()=>{props.handleDelete(idItem)}}>Delete</span>
      </div>
    </div>
  );
}
