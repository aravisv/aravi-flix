import { useSelector } from "react-redux";
import { RootState } from "../../../store/appStore";
import MoviesList from "./MoviesList";

export const SecondaryContent = () => {
  const { nowPlayingMovies, topRatedMovies, popularMovies, upcomingMovies } =
    useSelector((store: RootState) => store.movie);
  return (
    <div className="pl-[60px]">
      {nowPlayingMovies && (
        <MoviesList title="Now Playing" movies={nowPlayingMovies} />
      )}
      {topRatedMovies && (
        <MoviesList title="Top Rated" movies={topRatedMovies} />
      )}
      {popularMovies && <MoviesList title="Popular" movies={popularMovies} />}
      {upcomingMovies && (
        <MoviesList title="Upcoming" movies={upcomingMovies} />
      )}
    </div>
  );
};
