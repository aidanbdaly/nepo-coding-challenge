import { Paginator } from "./components/paginator";
import { searchMovies, SearchMoviesResult } from "./server/tmdb/requests";
import { MovieListingGrid } from "./components/movieListingGrid";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const searchParamsResolved = await searchParams;

  const query = searchParamsResolved.query;
  const page = searchParamsResolved.page ?? "1";

  if (!query) {
    return (
      <div className="text-center mt-8">
        <p className="text-gray-500">
          Use the search bar above to find movies.
        </p>
      </div>
    );
  }

  const movies: SearchMoviesResult = await searchMovies({
    query: query,
    page: page,
  });

  const total = movies.totalPages ?? 0;
  const totalResults = movies.totalResults ?? 0;

  return (
    <div className="container mx-auto px-4 py-8">
      {movies.results.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold mb-4">
            Search results for {query}
          </h1>
          <p className="text-gray-600 mb-4">
            Found {totalResults} results across {total} pages.
          </p>
          <Paginator
            currentPage={parseInt(page)}
            totalPages={total}
          />
          <MovieListingGrid movies={movies.results} />
          <Paginator
            currentPage={parseInt(page)}
            totalPages={total}
          />
        </>
      ) : (
        <div className="text-center mt-8">
          <p className="text-gray-500">
            No movies found.
          </p>
        </div>
      )}
    </div>
  );
}
