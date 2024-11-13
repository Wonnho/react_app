import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Hello from "./pages/Hello";
import { Provider } from "react-redux";
import store from "./store/store";
store
export default function App() {
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      </Provider></>
  );
}
