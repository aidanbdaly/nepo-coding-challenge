import { MovieListing } from "../../types";
import { MovieListingGrid } from "./movieListingGrid";
import { Paginator } from "./paginator";

export type MovieResultsProps = {
  readonly movies: MovieListing[];
  readonly query: string;
  readonly totalPages: number;
  readonly totalResults: number;
};

export const MovieResults: React.FC<MovieResultsProps> = (props) => {
  const { movies, query, totalPages, totalResults } = props;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Search results for {query}</h1>
      <p className="text-gray-600 mb-4">
        Found {totalResults} results across {totalPages} pages.
      </p>
      <Paginator totalPages={totalPages} />
      <MovieListingGrid movies={movies} />
      <Paginator totalPages={totalPages} />
    </div>
  );
};
