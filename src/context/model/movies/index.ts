import { atom } from "jotai";
import { MovieList, Movie } from "../../../domain/movies/model";
import { stateSelectedGenreIds } from "../genres";

export const stateMyFavoriteMovieList = atom<MovieList>([]);

export const stateSelectedMovie = atom<Movie | undefined>(undefined);

export const stateFilteredMovieList = atom<MovieList>((get) => {
  if (get(stateSelectedGenreIds).length === 0) {
    return get(stateMyFavoriteMovieList);
  }

  return get(stateMyFavoriteMovieList).filter((movie) => {
    return get(stateSelectedGenreIds).some((id) => {
      return movie.genres?.map((genre) => genre.id).includes(id);
    });
  });
});
