import { searchMovie, SearchMovieResult } from "./server/tmdb/requests";
import { MovieResults } from "./components/movieResults/movieResults";
import { NoResults } from "./components/noResults";
import { NoQuery } from "./components/noQuery";
import { MoviePageProvider } from "./components/moviePageProvider";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const searchParamsResolved = await searchParams;

  const query = searchParamsResolved.query;
  const page = searchParamsResolved.page ?? "1";

  if (!query) {
    return <NoQuery />;
  }

  const movies: SearchMovieResult = await searchMovie({
    query: query,
    page: page,
  });

  return (
    <MoviePageProvider query={query} page={page}>
      <div className="container mx-auto px-4 py-8">
        {movies.results.length > 0 ? (
          <MovieResults
            movies={movies.results}
            query={query} 
            totalPages={movies.totalPages}
            totalResults={movies.totalResults}
          />
        ) : (
          <NoResults />
        )}
      </div>
    </MoviePageProvider>
  );
}
