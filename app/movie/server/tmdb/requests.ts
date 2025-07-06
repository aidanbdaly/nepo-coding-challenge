"use server";

import { MovieDetails, MovieListing } from "../../types";
import { makeTMDBrequest } from "./core";
import {
  TMDBSearchMovieParams,
  TMDBGetMovieResponse,
  TMDBSearchMovieResponse,
} from "./types";
import { getTMDBImageUrl } from "./utilities";

export type SearchMovieResult = {
  results: MovieListing[];
  totalResults: number;
  totalPages: number;
};

const SEARCH_MOVIE_RESOURCE = "/search/movie" as const;

export const searchMovie = async (
  params: TMDBSearchMovieParams
): Promise<SearchMovieResult> => {
  const queryParams = new URLSearchParams({
    query: params.query,
    page: params.page,
  });

  const response = await makeTMDBrequest<TMDBSearchMovieResponse>(
    SEARCH_MOVIE_RESOURCE,
    queryParams
  );

  // For some reason, a poster_url is not a requirement for a movie to be uploaded to TMDB.
  const movies: MovieListing[] = response.results
    .filter((movie) => movie.poster_path)
    .map((movie) => ({
      id: movie.id,
      title: movie.title,
      posterUrl: movie.poster_path ? getTMDBImageUrl(movie.poster_path) : "",
    }));

  return {
    results: movies,
    totalResults: response.total_results ?? 0,
    totalPages: response.total_pages ?? 0,
  };
};

const MOVIE_DETAILS_RESOURCE = "/movie" as const;

export const getMovieDetails = async (
  movieId: number
): Promise<MovieDetails> => {
  const resource = MOVIE_DETAILS_RESOURCE + `/${movieId}`;

  const response = await makeTMDBrequest<TMDBGetMovieResponse>(resource);

  const movieDetails: MovieDetails = {
    id: response.id,
    title: response.title,
    originalTitle: response.original_title,
    tagline: response.tagline,
    overview: response.overview,
    releaseDate: response.release_date,
    runtime: response.runtime ?? null,
    status: response.status,
    rating: {
      average: response.vote_average,
      count: response.vote_count,
    },
    genres: response.genres.map((genre) => genre.name),
    countries: response.production_countries.map((country) => country.name),
    spokenLanguages: response.spoken_languages.map((lang) => lang.english_name),
    posterUrl: response.poster_path
      ? getTMDBImageUrl(response.poster_path)
      : null,
    backdropUrl: response.backdrop_path
      ? getTMDBImageUrl(response.backdrop_path)
      : null,
    homepage: response.homepage ?? null,
    imdbId: response.imdb_id ?? null,
  };

  return movieDetails;
};
