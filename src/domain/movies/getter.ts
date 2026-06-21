import { Movie } from "./model";

export const getImageUrlFromMovie = (_isMobile: boolean, movie?: Movie) => {
  if (!movie) {
    return "";
  }

  return movie.largeThumbnail ?? "";
};
