import { Header } from "../../components/Header";
import { BACKGROUND_IMG_URL } from "../../constants";
import LoginForm from "./LoginForm";

export const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BACKGROUND_IMG_URL})`,
      }}
      className="h-[100vh]"
    >
      <Header />
      <LoginForm />
    </div>
  );
};
