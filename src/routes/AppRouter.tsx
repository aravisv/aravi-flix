import { createBrowserRouter } from "react-router";
import { Login } from "../pages/Login";
import Browse from "../pages/Browse";

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Browse />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
