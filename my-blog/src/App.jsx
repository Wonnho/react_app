import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
// import router from "./router/index";
// import router from "./router/index.jsx";

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
