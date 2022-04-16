import React, { useState, useEffect } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ListItem from "./components/ListItem";
import {
  useMutation,
  useQuery,
  gql,
} from "@apollo/client";

const getData = gql`
query MyQuery {
  todo_apps_kegiatan {
    id
    title
    completed
  }
}
`;

const getAddTodo = gql`
mutation MyMutation($id: Int = 10, $title: String = "", $completed: Boolean = false) {
  insert_todo_apps_kegiatan(objects: {id: $id, title: $title, completed: $completed}) {
    returning {
      id
      title
      completed
    }
  }
}
`;

const deleteTodoApi = gql`
mutation MyMutation($_eq: Int = 10) {
  delete_todo_apps_kegiatan(where: {id: {_eq: $_eq}}) {
    returning {
      id
      title
      completed
    }
  }
}
`;

const updateTodoApi = gql`
mutation MyMutation($title: String = "", $_eq: Int = "") {
  update_todo_apps_kegiatan(where: {id: {_eq: $_eq}}, _set: {title: $title}) {
    returning {
      id
      title
      completed
    }
  }
}
`;

function App() {
  const [addTodo, { dataMutation, loadingMutation, errorMutation }] = useMutation(getAddTodo, {refetchQueries: [getData]});
  const [deleteTodo, { dataDelete, loadingDelete, errorDelete }] = useMutation(deleteTodoApi);
  const [updateTodo] = useMutation(updateTodoApi);
  const { loading, error, data, refetch } = useQuery(getData);
 
  
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (loadingMutation) return 'Submitting...';
  if (errorMutation) return `Submission error! ${error.message}`;

  let stringy = JSON.stringify(data.todo_apps_kegiatan);
  let getDataTodo = JSON.parse(stringy);
  

  let handleAddTodo = async (data) => {
    await addTodo({ variables: { 
        id: data.id,
        title: data.title,
        completed: data.completed
      } 
    });
    refetch()
    await alert("data berhasil di tambahkan");
  };

  const handleDelete = async (id) => {
    await deleteTodo({ variables: {
      "_eq": id,
    }
    });
    refetch();
    await alert("data berhasil di hapus");
  }

  const handleUpdate = async (id, input) => {
    await updateTodo({
      variables: {
        "_eq": id,
        "title": input
      }
    });
    refetch()
    await alert("data berhasil di update");
  }

  return (
    <div className="App">
      <h1>TODOS</h1>
      <AddTodo dataTodo={getDataTodo} handleAddTodo={handleAddTodo} />
      {getDataTodo.map((list) => (
        <ListItem dataTodo={list} key={list.id} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      ))}
    </div>
  );
}

export default App;
