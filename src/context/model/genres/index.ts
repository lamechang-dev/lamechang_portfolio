import { atom } from "jotai";
import { getUniqueGenresFromGenreList } from "src/domain/genres/getter";
import { Genre, MovieGenreId } from "src/domain/genres/model";
import { stateMyFavoriteMovieList } from "../movies";

export const stateGenreList = atom<Array<Genre>>((get) => {
  const genreList = get(stateMyFavoriteMovieList)
    ?.map((movie) => movie.genres)
    .flat();

  return getUniqueGenresFromGenreList(genreList);
});

export const stateSelectedGenreIds = atom<Array<MovieGenreId>>([]);
