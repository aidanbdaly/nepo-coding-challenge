import { MovieListing } from "../../types";
import { MovieListingGrid, Paginator } from "./components";

export type MovieResultsProps = {
  readonly movies: MovieListing[];
  readonly query: string;
  readonly totalPages: number;
  readonly totalResults: number;
  readonly omitted?: number;
};

export const MovieResults: React.FC<MovieResultsProps> = (props) => {
  const { movies, query, totalPages, totalResults } = props;

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">Search results for {query}</h1>
      <p className="text-gray-600 mb-4">
        Found {totalResults} results across {totalPages} pages.
      </p>
      {props.omitted ? (
        <p className="text-gray-600 mb-4">
          {props.omitted} results were omitted due to missing poster images.
        </p>
      ) : null}
      <MovieListingGrid movies={movies} />
      <Paginator totalPages={totalPages} />
    </div>
  );
};
