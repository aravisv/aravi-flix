import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { NETFLIX_LOGO } from "../constants";
import { RootState } from "../store/appStore";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { signin, signout } from "../store/userSlice";

export const Header = () => {
  const userDetails = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();
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
      navigate("/");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        loginHandler(user);
      } else {
        dispatch(signout());
        navigate("/login");
      }
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black w-[100vw] h-[80px] p-2.5 flex justify-between">
      <img
        src={NETFLIX_LOGO}
        alt="netflix-logo"
        className="w-44 inline-block"
      />
      {userDetails?.token?.length > 0 && (
        <div
          className="text-white cursor-pointer flex items-center"
          onClick={() => {
            signOut(auth);
            //navigate("/login");
          }}
        >
          <img
            className="mx-2 w-[50px] h-fit rounded-md"
            src={userDetails.imageUrl}
          />
          <span>Sign Out</span>
        </div>
      )}
    </div>
  );
};
