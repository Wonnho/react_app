import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
export default function Rootlayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <footer> </footer>
    </>
  );
}
