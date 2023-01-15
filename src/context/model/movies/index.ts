import { atom, selector } from "recoil";
import { GLOBAL_STATE_KEYS } from "src/context/constants";
import { MovieList, Movie } from "../../../domain/movies/model";
import { stateSelectedGenreIds } from "../genres";

export const stateMyFavoriteMovieList = atom<MovieList>({
  key: GLOBAL_STATE_KEYS.MOVIE.MY_FAVORITE_MOVIE_LIST,
  default: [],
});

export const stateSelectedMovie = atom<Movie | undefined>({
  key: GLOBAL_STATE_KEYS.MOVIE.SELECTED_MOVIE,
  default: undefined,
});

export const stateSelectedMovieList = selector<MovieList>({
  key: GLOBAL_STATE_KEYS.MOVIE.SEELCTED_MOVIE_LIST,
  get: ({ get }) => {
    return get(stateMyFavoriteMovieList).filter((movie) => {
      return get(stateSelectedGenreIds).some((id) => {
        return movie.genres?.map((genre) => genre.id).includes(id);
      });
    });
  },
});
