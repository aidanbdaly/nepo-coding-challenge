import { MovieListing } from "../types";
import { MovieListingCard } from "./movieListingCard";

export type MovieListingGridProps = {
  readonly movies: MovieListing[];
};

export const MovieListingGrid: React.FC<MovieListingGridProps> = ({
  movies,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
    {movies.map((movie) => (
      <MovieListingCard key={movie.id} movie={movie} />
    ))}
  </div>
);
