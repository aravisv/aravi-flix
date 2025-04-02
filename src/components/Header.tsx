import { NETFLIX_LOGO } from "../constants";

export const Header = () => {
  return (
    <div className="bg-gradient-to-b from-black w-[100vw] h-[80px] p-2.5">
      <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-44" />
    </div>
  );
};
