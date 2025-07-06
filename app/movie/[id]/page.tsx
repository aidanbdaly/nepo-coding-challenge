import Link from "next/link";
import { getMovieDetails } from "../server/tmdb/requests";
import { MovieDetails } from "../types";
import { MovieDetailsCard } from "./components/movieDetailsCard";

type MoviePageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ query?: string; page?: string }>;
};

export default async function Page({ params, searchParams }: MoviePageProps) {
  const paramsResolved = await params;
  const searchParamsResolved = await searchParams;

  const movie: MovieDetails = await getMovieDetails(
    parseInt(paramsResolved.id)
  );

  return (
    <div className="flex items-center justify-center px-4 py-8">
      <Link
        href={`/movie?${new URLSearchParams(searchParamsResolved).toString()}`}
        className="z-20 rounded-full bg-white/10 p-2 text-slate-50 hover:bg-white/20"
        aria-label="Back to movies list"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 translate-x-[-2px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7m-7 7h12"
          />
        </svg>
      </Link>

      <MovieDetailsCard movieDetails={movie} />
    </div>
  );
}
