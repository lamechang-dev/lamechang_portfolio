import { useRecoilCallback } from "recoil";
import { MovieList } from "src/domain/movies/model";
import { stateMyFavoriteMovieList } from ".";

export const useStateMyFavoriteMovieListActions = () => {
  const setStateMyFavoriteMovieList = useRecoilCallback(
    ({ set }) =>
      (movieList: MovieList) => {
        set(stateMyFavoriteMovieList, () => movieList);
      }
  );

  return { setStateMyFavoriteMovieList };
};
