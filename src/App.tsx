import { Provider } from "react-redux";
import appStore from "./store/appStore";
import AppLayout from "./components/AppLayout.tsx";
import { RouterProvider } from "react-router";
import { appRoute } from "./routes/AppRouter.tsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <AppLayout>
          <RouterProvider router={appRoute} />
        </AppLayout>
      </Provider>
    </div>
  );
};

export default App;
