import React from "react";
import './Todo.css';
export default function Todo({user}) {
  let handleStrip = (completed) => {
    if (completed) {
      return { textDecoration: "line-through" };
    }
    return;
  };

  return (
    <div className="toDoTitle">
      <p style={handleStrip(user.completed)}>{user.title}</p>
    </div>
  );
}
