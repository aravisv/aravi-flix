import { useSelector } from "react-redux";

const Home = () => {
  //@ts-ignore
  const userDetails = useSelector((store) => store.user);
  console.log({ userDetails });

  return <div>index</div>;
};

export default Home;
