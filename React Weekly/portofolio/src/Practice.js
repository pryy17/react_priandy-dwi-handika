import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Practice() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>hei</h1>
    </div>
  );
}
