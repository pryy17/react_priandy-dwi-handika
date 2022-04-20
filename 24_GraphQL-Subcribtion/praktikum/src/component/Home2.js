import React, { useState } from "react";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { useMutation, useQuery, gql, useSubscription } from "@apollo/client";

const getDataApi = gql`
  query MyQuery {
    todo_apps_passanger {
      Id
      nama
      umur
      jenisKelamin
    }
  }
`;

const mutationInsertGraph = gql`
mutation MyMutation($Id: Int = 10, $nama: String = "", $umur: Int = 10, $jenisKelamin: String = "") {
  insert_todo_apps_passanger(objects: {Id: $Id, nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin}) {
    returning {
      Id
      nama
      umur
      jenisKelamin
    }
  }
}
`;

const mutationDeleteGraph = gql`
mutation MyMutation($_eq: Int = "") {
  delete_todo_apps_passanger(where: {Id: {_eq: $_eq}}) {
    returning {
      Id
      nama
      umur
      jenisKelamin
    }
  }
}
`;

const mutationUpdateGraph = gql`
mutation MyMutation($_eq: Int = "", $umur: Int = "", $nama: String = "", $jenisKelamin: String = "", $Id: Int = 10) {
  update_todo_apps_passanger(where: {Id: {_eq: $_eq}}, _set: {nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin}) {
    returning {
      Id
      nama
      umur
      jenisKelamin
    }
  }
}
`;

const subscribtionData = gql`
subscription MySubscription {
  todo_apps_passanger {
    Id
    nama
    umur
    jenisKelamin
  }
}
`;

// const getDataLazy = gql`
// query MyQuery($_eq: Int = "") {
//   todo_apps_passanger(where: {Id: {_eq: $_eq}}) {
//     Id
//     nama
//     umur
//     jenisKelamin
//   }
// }
// `;



export default function Home2() {

    // const { loading, error, data : getData, refetch } = useQuery(getDataApi);
    const [mutationInsert, {data : insertData, loading: insertLoading}] = useMutation(mutationInsertGraph);
    const [mutationDelete, {data : deleteData}] = useMutation(mutationDeleteGraph);
    const [mutationUpdate, {data : updateData}] = useMutation(mutationUpdateGraph);
    const {data : getData, loading, error} = useSubscription(subscribtionData);

    if (loading) return <p>Loading...</p>;

    
  

 

  const hapusPengunjung = async (id) => {
    await mutationDelete({
      variables : {
        "_eq": id
      }
    })
    
    alert("data berhasil di hapus");
  };

  const tambahPengunjung = async (newUser) => {
    await mutationInsert({
      variables : {
        "Id": Math.floor(Math.random() * 100) + 1,
        "nama": newUser.nama,
        "umur": newUser.umur,
        "jenisKelamin": newUser.jenisKelamin
      }
    })
    
  };

  const editPengunjung = async (item) => {
    let nama = prompt("masukan data nama baru", item.nama);
    let umur = prompt("masukan data umur baru", item.umur);
    let jenisKelamin = prompt("masukan data jenis kelamin baru", item.jenisKelamin);
    console.log(item);
    await mutationUpdate({
      variables : {
        "_eq": item.Id,
        "nama": nama,
        "umur" : umur,
        "jenisKelamin": jenisKelamin
      }
    })

    alert("data berhasil di update")
  }

  // const handleLazy = () => {
  //   getLazy({ variables: {
  //     "_eq": id
  //   }
  // })
  // }

  return (
    <div>
      <Header />
      <ListPassenger
        data={getData?.todo_apps_passanger}
        hapusPengunjung={hapusPengunjung}
        editPengunjung={editPengunjung}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
      
    </div>
  );
}
