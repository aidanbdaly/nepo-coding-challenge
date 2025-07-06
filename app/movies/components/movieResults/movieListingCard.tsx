import Link from "next/link";
import Image from "next/image";

import { MovieListing } from "../../types";
import { useMoviePageContext } from "../moviePageProvider";

export type MovieListingCard = {
  readonly movie: MovieListing;
};

export const MovieListingCard: React.FC<MovieListingCard> = ({ movie }) => {
  const { getSearchParams } = useMoviePageContext();

  return (
    <Link
      href={`/movies/${movie.id}?${getSearchParams().toString()}`}
      className="block"
    >
      <div className="shadow hover:shadow-lg transition-shadow duration-200 h-full">
        <Image
          src={movie.posterUrl || "https://via.placeholder.com/150"}
          alt={movie.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-lg font-semibold">{movie.title}</h2>
      </div>
    </Link>
  );
};
