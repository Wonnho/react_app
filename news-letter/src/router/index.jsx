import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NewsList from "../pages/NewsList";
import Rootlayout from "../Rootlayout";
import PageDetail from "../pages/PageDetail";

const router = createBrowserRouter([
{
  path:"/",
  element:<Rootlayout/>,
  children:[
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/news",
    element: <NewsList />,
  },
  {
    path: "/news/:newsId",
    element: <PageDetail />,
  },
]
}
]);

export default router;
