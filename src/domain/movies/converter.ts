import { TmdbV3Movie } from "../../data/adapters/index";
import { Movie } from "./model";

export const convertTmdbV3Movie2Movie = (tmdbV3Movie: TmdbV3Movie): Movie => {
  return {
    title: tmdbV3Movie.title,
    thumbnail:
      "https://image.tmdb.org/t/p/original/" + tmdbV3Movie.posterPath ?? "",
  };
};
