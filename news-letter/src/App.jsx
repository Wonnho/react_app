import React from "react";
// import NewsList from "./pages/NewsList";
import { RouterProvider } from "react-router-dom";
// import  router  from "react-router-dom";
import router from "./router";

export default function () {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
