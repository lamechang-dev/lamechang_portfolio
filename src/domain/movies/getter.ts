import { Movie } from "./model";

export const getImageUrlFromMovie = (isMobile: boolean, movie?: Movie) => {
  if (!movie) {
    return "";
  }

  if (isMobile) {
    return movie.thumbnail ?? "";
  }
  return movie.largeThumbnail ?? "";
};
