import MovieCard from "./MovieCard";

type MoviesListProps = {
  title: string;
  movies: any;
};

const MoviesList = (props: MoviesListProps) => {
  const { title, movies } = props;

  return (
    <>
      <h1 className="font-medium text-2xl my-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie: any) => (
            <MovieCard
              key={movie.id}
              moviePosterPath={movie.poster_path}
              movieName={movie.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
