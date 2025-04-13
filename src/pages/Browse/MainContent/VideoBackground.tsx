import { useEffect } from "react";
import { useMovies } from "../../../hooks/useMovies";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/appStore";

const VideoBackground: React.FC<{ movieId: string }> = ({ movieId }) => {
  const movieVideo = useSelector((store: RootState) => store.movie.movieVideo);
  const { fetchMovieTrailer } = useMovies();
  console.log({ movieVideo });

  useEffect(() => {
    fetchMovieTrailer(movieId);
  }, []);

  return (
    <div>
      {movieVideo && (
        <iframe
          width="560"
          height="315"
          //@ts-ignore
          src={`https://www.youtube.com/embed/${movieVideo.key}`}
          title="YouTube video player"
          referrerPolicy=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
