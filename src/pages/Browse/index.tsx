import { useEffect } from "react";
import { Header } from "../../components/Header";
import { SecondaryContent } from "./SecondaryContent";
import { useMovies } from "../../hooks/useMovies";
import MainContent from "./MainContent";

const Browse = () => {
  const { fetchNowPlayingMovies } = useMovies();

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
      <div className="pl-[60px] pr-10 ">
        <MainContent />
        <SecondaryContent />
      </div>
    </div>
  );
};

export default Browse;
