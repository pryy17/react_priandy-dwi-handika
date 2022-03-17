import React from "react";
import './Todo.css';
export default function Todo(props) {

  return (
    <div className="toDoTitle">
      <p style={props.user.completed ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{props.user.title}</p>
    </div>
  );
}
