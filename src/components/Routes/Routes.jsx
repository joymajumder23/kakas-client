import { createBrowserRouter } from "react-router-dom";
import Root from "../Home/Root/Root";
import Home from "../Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [{
        path: "/",
        element: <Home></Home>
      }]
    },
  ]);

  export default router;