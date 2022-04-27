import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let data;  
axios
  .get("https://api.jsonbin.io/b/6267596e25069545a3293fab")
  .then(function async (response) {
    data = response
    console.log(response);
  });

  console.log("data", data);

  

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menus: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.menus = action.payload;
      console.log(state.menus);
    },
  },
});

export const { fetchData } = menuSlice.actions;

export default menuSlice.reducer;
