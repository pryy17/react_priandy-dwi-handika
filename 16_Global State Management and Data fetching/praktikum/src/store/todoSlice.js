import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
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
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialTodos,
  },
  reducers: {
    handleAddTodo: (state, action) => {
      let newData = [...state.todos];
      newData.push(action.payload);
      state.todos = newData;
      console.log(newData);
    },
    handleDelete : (state, action) => {    
    let filterNewData = state.todos.filter((item) => (
        item.id !== action.payload
      ));
      state.todos = filterNewData;
      console.log("halo")
    }
  },
});

export const { handleAddTodo, handleDelete } = todoSlice.actions;
export default todoSlice.reducer;