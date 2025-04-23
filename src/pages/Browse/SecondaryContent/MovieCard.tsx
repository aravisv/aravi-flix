import { MOVIE_POSTER_IMG_PATH_PREFIX } from "../../../constants";

type MovieCardProps = {
  moviePosterPath: string;
  movieName: string;
};

const MovieCard = (props: MovieCardProps) => {
  const { moviePosterPath, movieName } = props;
  return (
    <div className="mr-2 w-[150px]">
      <img
        src={MOVIE_POSTER_IMG_PATH_PREFIX + moviePosterPath}
        alt={"movie-poster-" + movieName}
      />
    </div>
  );
};

export default MovieCard;
