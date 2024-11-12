import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostList from "../pages/PostList";
import Hello from "../pages/Hello";
import Rootlayout from "../Rootlayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/posts",
        element:<PostList/>
      },
    ]
  }
  
]);

export default router;
