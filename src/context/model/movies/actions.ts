import { useRecoilCallback } from "recoil";
import { useGlobalCallback } from "src/context/hooks";
import { Movie, MovieList } from "src/domain/movies/model";
import { stateMyFavoriteMovieList, stateSelectedMovie } from ".";

export const useStateMyFavoriteMovieListActions = () => {
  const setStateMyFavoriteMovieList = useGlobalCallback(
    ({ set }) =>
      (movieList: MovieList) => {
        set(stateMyFavoriteMovieList, () => movieList);
      }
  );

  return { setStateMyFavoriteMovieList };
};

export const useStateSelectedMovieActions = () => {
  const setStateSelectedMovie = useGlobalCallback(
    ({ set }) =>
      (movie: Movie) => {
        set(stateSelectedMovie, () => movie);
      }
  );

  const resetStateSelectedMovie = useRecoilCallback(({ set }) => () => {
    set(stateSelectedMovie, () => undefined);
  });

  return { setStateSelectedMovie, resetStateSelectedMovie };
};
