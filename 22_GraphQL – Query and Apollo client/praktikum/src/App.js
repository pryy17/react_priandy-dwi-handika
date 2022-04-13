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

function App() {
  const [addTodo, { dataMutation, loadingMutation, errorMutation }] = useMutation(getAddTodo);
  const [deleteTodo, { dataDelete, loadingDelete, errorDelete }] = useMutation(deleteTodoApi);
  const { loading, error, data } = useQuery(getData);
 
  
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (loadingMutation) return 'Submitting...';
  if (errorMutation) return `Submission error! ${error.message}`;

  let stringy = JSON.stringify(data.todo_apps_kegiatan);
  let getDataTodo = JSON.parse(stringy);
  

  let handleAddTodo = (data) => {
    addTodo({ variables: { 
        id: data.id,
        title: data.title,
        completed: data.completed
      } 
    });
    alert("data telah di tambahkan, mohon untuk refresh halaman");
  };

  function handleDelete(id) {
    deleteTodo({ variables: {
      "_eq": id,
    }
    });
    alert("data telah di hapus, mohon untuk refresh halaman");
  }

  

  return (
    <div className="App">
      <h1>TODOS</h1>
      <AddTodo dataTodo={getDataTodo} handleAddTodo={handleAddTodo} />
      {getDataTodo.map((list) => (
        <ListItem dataTodo={list} key={list.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
