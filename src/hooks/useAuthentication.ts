import { useDispatch } from "react-redux";
import { signin } from "../store/userSlice";
import { auth } from "../utils/firebase";

const useAuthentication = () => {
  const dispatch = useDispatch();

  const onSuccessfulSignup = () => {
    const currentUser = auth.currentUser;
    currentUser?.getIdToken().then((token: string) => {
      dispatch(
        signin({
          userName: currentUser.email,
          displayName: currentUser.displayName,
          imageUrl: currentUser.photoURL,
          token: token,
        })
      );
    });
  };

  return { onSuccessfulSignup };
};

export default useAuthentication;
