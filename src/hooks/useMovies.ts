import { useDispatch } from "react-redux";
import { movieDBOptions } from "../constants";
import { addNowPlayingMovies, addMovieVideo } from "../store/movieSlice";

export const useMovies = () => {
  const dispatch = useDispatch();
  const fetchNowPlayingMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      movieDBOptions
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(addNowPlayingMovies(res.results));
      })
      .catch((err) => console.error(err));
  };

  const fetchMovieTrailer = (movieId: string) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      movieDBOptions
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);

        const video =
          //@ts-ignore
          res?.results?.filter((video) => video?.type === "Trailer")[0] ||
          res?.results[0];
        dispatch(addMovieVideo(video));
      })
      .catch((err) => console.error(err));
  };

  return { fetchNowPlayingMovies, fetchMovieTrailer };
};
