import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  const value = import.meta.env.VITE_SECRET_VALUE;
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}> </RouterProvider>
      </Provider>
    </div>
  );
}
