import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { RouterProvider } from "react-router";
import { appRoute } from "./routes/AppRouter.tsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRoute} />
      </Provider>
    </div>
  );
};

export default App;
