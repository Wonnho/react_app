import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

export default function Rootlayout() {
  return (
    <div className="width100 flex-center">
      <Header> </Header>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
