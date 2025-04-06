import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signin } from "../../store/userSlice";
import { UserCredential } from "firebase/auth";

const useAuthentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccessfulLogin = (userCredential: UserCredential) => {
    const user = userCredential.user;
    user.getIdToken().then((token: string) => {
      dispatch(
        signin({
          userName: user.email,
          token: token,
        })
      );
    });
    navigate("/");
  };

  return { onSuccessfulLogin };
};

export default useAuthentication;
