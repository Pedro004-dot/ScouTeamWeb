import {
    createBrowserRouter
  } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout"
export const router = createBrowserRouter([
    {
      path: "/",
      element:<Login/>,
    },{
      path: "/register",
      element:<Register/>
    },{
      path: "/Home",
      element : <HomeLayout/>
    }
  ]);