import { createSlice } from "@reduxjs/toolkit";
import dataAssignment from "../data/dataAssignment";


export const assignmentSlice = createSlice({
  name: "assignment",
  initialState: {
    menus: dataAssignment,
  }
});

export default assignmentSlice.reducer;