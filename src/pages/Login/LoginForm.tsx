import { useRef, useState } from "react";
import { checkValidData } from "../../utils/loginFormValidator";

const LoginForm = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <div className="mx-auto my-[10vh] p-4 w-[500px] border rounded-2xl bg-black relative opacity-85 text-center">
      <h1 className="text-white text-3xl">Sign In</h1>
      <form
        className="flex flex-col justify-center items-center text-white text-center"
        onSubmit={(e) => {
          e.preventDefault();
          setErrorMessage(
            checkValidData(
              nameRef?.current?.value,
              //usernameOrNumberRef?.current?.value || "",
              username,
              passwordRef?.current?.value || ""
            )
          );
        }}
      >
        {!isRegistered && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
            className="p-2 m-3 bg-gray-600 rounded-md w-[300px]"
          />
        )}
        <input
          //ref={usernameOrNumberRef}
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 m-3 bg-gray-600 rounded-md w-[300px]"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-2 m-3 bg-gray-600 rounded-md w-[300px]"
        />
        <button
          type="submit"
          className="bg-red-700 mt-2 h-10 rounded-md w-[350px] cursor-pointer"
        >
          {isRegistered ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 text-red-500">{errorMessage}</p>
        <button
          className="text-white m-2 cursor-pointer"
          onClick={() => {
            setIsRegistered(!isRegistered);
          }}
        >
          {isRegistered
            ? "New to Netflix? Sign up Now!"
            : "Already a user? Login "}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
