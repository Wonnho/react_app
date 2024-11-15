import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  isLoggedIn: false,
  // isAdmin:false,
  // user:{
  //   name:'anonymoususer'
  // }
};

// const [value, setValue] = useState("기본값");

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
