import { createBrowserRouter } from "react-router";
import { Login } from "../pages/Login";
import Home from "../pages/Home";

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
