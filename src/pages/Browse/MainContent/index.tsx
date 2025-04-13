import { useSelector } from "react-redux";
import { RootState } from "../../../store/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContent = () => {
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movie.movies
  );

  if (!nowPlayingMovies) return;

  //@ts-ignore
  const mainMovie = nowPlayingMovies?.length ? nowPlayingMovies[0] : null;

  //@ts-ignore
  const { id, title, overview } = mainMovie;
  return (
    <>
      <VideoTitle id={id} title={title} description={overview} />
      <VideoBackground movieId={id} />
    </>
  );
};

export default MainContent;
