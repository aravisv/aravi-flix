import { useEffect } from "react";
import { Header } from "../../components/Header";
import { SecondaryContent } from "./SecondaryContent";
import { useMovies } from "../../hooks/useMovies";
import MainContent from "./MainContent";

const Browse = () => {
  const {
    fetchNowPlayingMovies,
    fetchTopRatedMovies,
    fetchPopularMovies,
    fetchUpcomingMovies,
  } = useMovies();

  useEffect(() => {
    fetchNowPlayingMovies();
    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchUpcomingMovies;
  }, []);

  return (
    <div className="">
      <Header />
      <div className="bg-black pr-10 pb-10">
        <MainContent />
        <SecondaryContent />
      </div>
    </div>
  );
};

export default Browse;
