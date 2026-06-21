import { Movie } from "./model";

export const getImageUrlFromMovie = (movie?: Movie) => {
  if (!movie) {
    return "";
  }

  return movie.largeThumbnail ?? "";
};
