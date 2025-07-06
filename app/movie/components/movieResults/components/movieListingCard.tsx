"use client";

import Link from "next/link";
import Image from "next/image";
import { useMoviePageContext } from "@/app/movie/context/moviePageContext";
import { MovieListing } from "@/app/movie/types";

export type MovieListingCard = {
  readonly movie: MovieListing;
};

export const MovieListingCard: React.FC<MovieListingCard> = ({ movie }) => {
  const { page, query } = useMoviePageContext();

  const link = `/movie/${movie.id}?${new URLSearchParams({
    query,
    page,
  }).toString()}`;

  return (
    <Link href={link} className="block">
      <div className="shadow hover:shadow-lg transition-shadow duration-200 h-full">
        <Image
          width={150}
          height={225}
          src={movie.posterUrl || "https://via.placeholder.com/150"}
          alt={movie.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-lg font-semibold">{movie.title}</h2>
      </div>
    </Link>
  );
};
