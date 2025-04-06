import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { NETFLIX_LOGO } from "../constants";
import { RootState } from "../store/appStore";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

export const Header = () => {
  const userDetails = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();

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
            navigate("/login");
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
