import { createBrowserRouter } from "react-router-dom";
import Root from "../Home/Root/Root";
import Home from "../Home/Home/Home";
import Dashboard from "../Shared/Dashboard/Dashboard";
import Login from "../Home/Pages/Login/Login";
import Register from "../Home/Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [{
        path: "/",
        element: <Home></Home>
      },
    {
      path: "/login",
      element: <Login></Login>
    }, 
  {
    path: "/register",
    element: <Register></Register>
  }]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>
    }
  ]);

  export default router;