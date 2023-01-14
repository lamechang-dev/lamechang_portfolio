import { atom, selector } from "recoil";
import { GLOBAL_STATE_KEYS } from "src/domain";
import { getUniqueGenresFromGenreList } from "src/domain/genres/getter";
import { Genre, MovieGenreId } from "src/domain/movies/model";
import { stateMyFavoriteMovieList } from "../movies";

export const stateGenreList = selector<Array<Genre>>({
  key: GLOBAL_STATE_KEYS.GENRE.GENRE_LIST,
  get: ({ get }) => {
    const genreList = get(stateMyFavoriteMovieList)
      .map((movie) => movie.genres)
      .flat();

    return getUniqueGenresFromGenreList(genreList);
  },
});

export const stateSelectedGenreIds = atom<Array<MovieGenreId>>({
  key: GLOBAL_STATE_KEYS.GENRE.SELECTED_GENRE_IDS,
  default: [],
});