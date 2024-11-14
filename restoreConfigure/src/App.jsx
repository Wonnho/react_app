import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}> </RouterProvider>
      </Provider>
    </div>
  );
}
