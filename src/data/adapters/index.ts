import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export const baseApiClient = applyCaseMiddleware(axios.create());

// SSR only
export const tmdbApiClient = applyCaseMiddleware(
  axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: { apiKey: process.env.TMDB_API_KEY, language: "ja" },
  })
);

export type TmdbV3MoviesResponse = {
  results: Array<TmdbV3Movie>;
};

export type TmdbV3MovieResponse = TmdbV3Movie;

export type TmdbV3Movie = {
  adult?: boolean;
  backdropPath?: string;
  genres?: {
    id?: number;
    name?: string;
  };
  id?: number;
  posterPath?: string | null;
  homePage?: string;
  title: string;
};
