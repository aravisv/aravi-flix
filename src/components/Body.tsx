import { useEffect } from "react";
import { RouterProvider } from "react-router/dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged, User } from "firebase/auth";
import { appRoute } from "../routes/AppRouter";
import { auth } from "../utils/firebase";
import { signin, signout } from "../store/userSlice";
import AppLayout from "./AppLayout";

export const Body = () => {
  const dispatch = useDispatch();

  const loginHandler = async (user: User) => {
    if (user) {
      const token = await user.getIdToken();
      dispatch(
        signin({
          userName: user.email,
          displayName: user.displayName,
          token: token,
          imageUrl: user.photoURL,
        })
      );
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        loginHandler(user);
      } else {
        dispatch(signout());
      }
    });
  }, []);

  return (
    <div>
      <AppLayout>
        <RouterProvider router={appRoute} />
      </AppLayout>
    </div>
  );
};
