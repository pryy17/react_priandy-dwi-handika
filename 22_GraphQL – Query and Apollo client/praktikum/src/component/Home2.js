import React, { useState } from "react";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { useLazyQuery, useQuery, gql } from "@apollo/client";

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
const getDataLazy = gql`
query MyQuery($_eq: Int = 1) {
  todo_apps_passanger(where: {Id: {_eq: $_eq}}) {
    Id
    nama
    umur
    jenisKelamin
  }
}
`;

export default function Home2() {

    const { loading, error, data : getData } = useQuery(getDataApi);
    const [getLazy, { data, error: lazyError, loading: lazyLoading}] = useLazyQuery(getDataLazy);
    
    const [ id , setId ] = useState();

    console.log(lazyError)
    if (loading) return <p>Loading...</p>;
    if (lazyLoading) return <p>Loading...</p>;
  

  const handleChange = (e) => {
    setId(e.target.value);
  }

  const hapusPengunjung = (id) => {
    this.setState({
      data: [
        ...this.state.data.filter((item) => {
          return item.id !== id;
        }),
      ],
    });
  };

  const tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };
    this.setState({
      data: [...this.state.data, newData],
    });
  };

  const handleLazy = () => {
    getLazy({ variables: {
      "_eq": id
    }
  })
  }

  return (
    <div>
      <div>
      <p>masukan id dengan angka</p>
      <input type="text" onChange={handleChange}/>
      <button onClick={()=>{handleLazy()}}>get</button>
      </div>
      <Header />
      <ListPassenger
        data={data?.todo_apps_passanger}
        hapusPengunjung={hapusPengunjung}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
      
    </div>
  );
}
