import { Genre } from "../movies/model";

export const getGenreById = (
  genreList: Array<Genre>,
  genreId: Genre["id"]
): Genre | undefined => genreList.find((genre) => genre.id === genreId);

export const getUniqueGenresFromGenreList = (genres: Genre[]): Genre[] => {
  return genres.filter((genre, idx, self) => {
    return idx === self.findIndex((g) => genre?.id === g?.id);
  });
};
