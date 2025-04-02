import { createBrowserRouter } from "react-router";
import { Login } from "../pages/Login";

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
