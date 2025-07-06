import { MovieDetails } from "../../types";
import Image from "next/image";

export type MovieDetailsCardProps = {
  movieDetails: MovieDetails;
};

export const MovieDetailsCard: React.FC<MovieDetailsCardProps> = ({
  movieDetails: movie,
}) => {
  const {
    title,
    originalTitle,
    tagline,
    overview,
    releaseDate,
    runtime,
    status,
    rating,
    genres,
    countries,
    posterUrl,
    backdropUrl,
  } = movie;

  return (
    <article className="relative mt-8 flex w-full max-w-4xl flex-col items-center justify-center gap-6">
      <div className="relative z-10 grid grid-cols-[auto_1fr] gap-4 p-5 md:gap-6">
        {backdropUrl && (
          <Image
            src={backdropUrl}
            alt={`${title} backdrop`}
            fill
            className="object-cover opacity-20"
          />
        )}
        {posterUrl && (
          <Image
            src={posterUrl}
            width={120}
            height={180}
            alt={`${title} poster`}
            className="h-44 w-28 rounded-md object-cover ring-1 ring-white/20 md:h-60 md:w-40"
          />
        )}

        <div className="flex flex-col gap-2 text-slate-50">
          <h2 className="text-lg font-semibold leading-tight md:text-2xl">
            {title}
          </h2>
          {originalTitle !== title && (
            <p className="text-sm italic text-slate-300">{originalTitle}</p>
          )}

          {tagline && (
            <p className="text-sm text-amber-400">{`“${tagline}”`}</p>
          )}

          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide">
            <span className="rounded bg-emerald-600/10 px-2 py-0.5 text-emerald-300">
              {status}
            </span>
            {runtime && (
              <span className="rounded bg-slate-600/20 px-2 py-0.5 text-slate-300">
                {runtime} min
              </span>
            )}
            <span className="rounded bg-indigo-600/20 px-2 py-0.5 text-indigo-300">
              {new Date(releaseDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            {countries.map((c) => (
              <span
                key={c}
                className="rounded bg-sky-600/20 px-2 py-0.5 text-sky-300"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-1 flex items-center gap-1 text-sm">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-4 w-4 fill-yellow-400"
            >
              <path d="M12 2.5 14.9 9l7.6.6-5.7 4.9 1.8 7.5L12 17.9 5.4 22l1.8-7.5L1.5 9.5 9 9l3-6.5z" />
            </svg>
            <span className="text-slate-100">{rating.average.toFixed(1)}</span>
            <span className="ml-1 text-xs text-slate-400">{`(${rating.count})`}</span>
          </div>

          {overview && (
            <p className="mt-2 line-clamp-5 max-w-prose text-sm leading-relaxed text-slate-200">
              {overview}
            </p>
          )}

          {!!genres.length && (
            <div className="mt-3 flex flex-wrap gap-2">
              {genres.map((g) => (
                <span
                  key={g}
                  className="rounded-full bg-purple-600/20 px-3 py-1 text-xs text-purple-200"
                >
                  {g}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
