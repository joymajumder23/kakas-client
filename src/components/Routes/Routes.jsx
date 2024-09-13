import { createBrowserRouter } from "react-router-dom";
import Root from "../Home/Root/Root";
import Home from "../Home/Home/Home";
import Dashboard from "../Shared/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [{
        path: "/",
        element: <Home></Home>
      }]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>
    }
  ]);

  export default router;