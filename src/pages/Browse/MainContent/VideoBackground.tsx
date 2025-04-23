import { useEffect } from "react";
import { useMovies } from "../../../hooks/useMovies";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/appStore";

const VideoBackground: React.FC<{ movieId: string }> = ({ movieId }) => {
  const movieVideo = useSelector((store: RootState) => store.movie.movieVideo);
  const { fetchMovieTrailer } = useMovies();

  useEffect(() => {
    fetchMovieTrailer(movieId);
  }, []);

  return (
    <div className="">
      {movieVideo && (
        <iframe
          className="w-screen aspect-video"
          //@ts-ignore
          src={`https://www.youtube.com/embed/${movieVideo.key}?autoplay=1&mute=1&loop=1&playlist=${movieVideo.key}&controls=0&modestbranding=1&showinfo=0`}
          title="YouTube video player"
          referrerPolicy=""
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
