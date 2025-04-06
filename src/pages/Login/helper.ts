export const onSuccessfulLogin = (userCredential) => {
  const user = userCredential.user;
  console.log("signup", userCredential);
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
