import { atom, selector } from "recoil";
import {
  MovieList,
  Movie,
  MovieGenreId,
  Genre,
} from "../../domain/movies/model";

export const stateMyFavoriteMovieList = atom<MovieList>({
  key: "movieList",
  default: [],
});

export const stateSelectedMovie = atom<Movie | undefined>({
  key: "selectedMovie",
  default: undefined,
});

export const stateGenres = atom<Array<Genre>>({
  key: "genreList",
  default: [],
});

export const stateGenreList = selector<Movie["genres"]>({
  key: "genreList",
  get: ({ get }) => {
    const genreList = get(stateMyFavoriteMovieList)
      .map((movie) => movie.genres)
      .flat() as Movie["genres"];
    return (
      genreList &&
      genreList.filter((genre, idx, self) => {
        return idx === self.findIndex((g) => genre?.id === g?.id);
      })
    );
  },
});

export const stateSelectedGenreIds = atom<Array<MovieGenreId>>({
  key: "selectedGenreIds",
  default: [],
});

export const stateSelectedMovieList = selector<MovieList>({
  key: "selectedMovieList",
  get: ({ get }) => {
    return get(stateMyFavoriteMovieList).filter((movie) => {
      return get(stateSelectedGenreIds).some((id) => {
        return movie.genres?.map((genre) => genre.id).includes(id);
      });
    });
  },
});
