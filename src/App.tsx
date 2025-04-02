import { RouterProvider } from "react-router/dom";
import { appRoute } from "./routes/AppRouter.tsx";
import "./App.css";

const App = () => (
  <div>
    <RouterProvider router={appRoute} />
  </div>
);

export default App;
