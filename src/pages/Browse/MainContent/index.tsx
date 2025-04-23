import { useSelector } from "react-redux";
import { RootState } from "../../../store/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContent = () => {
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movie.nowPlayingMovies
  );

  if (!nowPlayingMovies) return;

  //@ts-ignore
  const mainMovie = nowPlayingMovies?.length ? nowPlayingMovies[1] : null;

  //@ts-ignore
  const { id, title, overview } = mainMovie;
  return (
    <div className="">
      <VideoBackground movieId={id} />
      <VideoTitle title={title} description={overview} />
    </div>
  );
};

export default MainContent;
