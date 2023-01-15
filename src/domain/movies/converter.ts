import {
  TmdbV3Movie,
  TmdbV3Genre,
  TmdbV3MyFavoriteMovie,
} from "../../data/adapters/index";
import { Genre } from "../genres/model";
import { Movie, MyFavoriteMovie } from "./model";

export const convertTmdbV3Movie2Movie = (tmdbV3Movie: TmdbV3Movie): Movie => {
  return {
    title: tmdbV3Movie.title,
    thumbnail:
      "https://image.tmdb.org/t/p/original/" + tmdbV3Movie.posterPath ?? "",
    genres: tmdbV3Movie.genres,
  };
};

export const convertTmdbV3MyFavoriteMovie2Movie = (
  tmdbV3Movie: TmdbV3MyFavoriteMovie
): MyFavoriteMovie => {
  return {
    title: tmdbV3Movie.title,
    thumbnail:
      "https://image.tmdb.org/t/p/original/" + tmdbV3Movie.posterPath ?? "",
    genreIds: tmdbV3Movie.genreIds,
    globalRate: tmdbV3Movie.voteAverage,
    overview: tmdbV3Movie.overview,
  };
};

export const convertTmdbV3Genre2Genre = (genre: TmdbV3Genre): Genre => {
  return genre;
};
