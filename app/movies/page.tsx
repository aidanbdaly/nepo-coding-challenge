import { getMovies } from "./server";
import { Movie } from "./types";

export default async function MoviesPage(
    searchParams: { search?: string; page: string }
) {

    const movies: Movie[] = getMovies({
        search: searchParams.search,
        page: parseInt(searchParams.page, 10) || 1,
    })

    return (
        <div>
            <div className="flex flex-col items-center justify-between py-8">
                <h1>Movies Page</h1>
                <p>This is the movies page content.</p>
            </div>
            <div className="flex items-center justify-center gap-4">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="border border-gray-300 rounded p-2 w-full"
                />
                <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="border border-gray-300 rounded p-4 shadow hover:shadow-lg transition-shadow duration-200"
                    >
                        <img
                            src={movie.posterUrl}
                            alt={movie.title}
                            className="w-full h-64 object-cover rounded mb-4"
                        />
                        <h2 className="text-lg font-semibold">{movie.title}</h2>
                        <p className="text-gray-600">{movie.description}</p>
                        <p className="text-sm text-gray-500">
                            Release Date: {new Date(movie.releaseDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-yellow-500">Rating: {movie.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}