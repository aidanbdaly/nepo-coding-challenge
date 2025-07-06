"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MovieListing } from "../types";
import Image from "next/image";

export type MovieListingCard = {
  readonly movie: MovieListing;
};

export const MovieListingCard: React.FC<MovieListingCard> = ({ movie }) => {
  const searchParams = useSearchParams();

  return (
    <Link
      href={`/movies/${movie.id}?${searchParams.toString()}`}
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
