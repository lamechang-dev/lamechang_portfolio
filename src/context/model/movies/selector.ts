import { stateMyFavoriteMovieList } from ".";
import { useGlobalValue } from "../../hooks";

export const useStateMyFavoriteMovieList = () => {
  return useGlobalValue(stateMyFavoriteMovieList);
};
