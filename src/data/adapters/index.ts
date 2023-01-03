import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export const baseApiClient = applyCaseMiddleware(axios.create());

// SSR only
export const tmdbApiClient = applyCaseMiddleware(
  axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      apiKey: process.env.TMDB_API_KEY,
      language: "en-US",
      sessionId: "38a39d7b12251c6ea4014ecbd957af15d2f1e694",
    },
  })
);

export type TmdbV3MoviesResponse = {
  results: Array<TmdbV3Movie>;
};

export type TmdbV3MovieResponse = TmdbV3Movie;

export type TmdbV3Movie = {
  adult?: boolean;
  backdropPath?: string;
  genres?: Array<TmdbV3Genre>;
  id?: number;
  posterPath?: string | null;
  homePage?: string;
  title: string;
};

export type TmdbV3MyFavoriteMovie = {
  adult?: boolean;
  backdropPath?: string;
  genreIds?: Array<TmdbV3Genre["id"]>;
  id?: number;
  posterPath?: string | null;
  homePage?: string;
  voteAverage?: number;
  overview?: string;
  title: string;
};

export type TmdbV3GetMyFavoriteMoviesResponse = {
  page: number;
  results: Array<TmdbV3MyFavoriteMovie>;
};

export type TmdbV3Genre = {
  id?: number;
  name?: string;
};

export type TmdbV3GetGenresResponse = { genres: Array<TmdbV3Genre> };
