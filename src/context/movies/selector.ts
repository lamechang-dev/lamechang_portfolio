import {
  stateMyFavoriteMovieList,
  stateSelectedMovie,
  stateSelectedMovieList,
} from ".";
import { useGlobalValue } from "../hooks";

export const useStateMyFavoriteMovieList = () => {
  return useGlobalValue(stateMyFavoriteMovieList);
};

export const useStateSelectedMovie = () => {
  return useGlobalValue(stateSelectedMovie);
};

export const useStateSelectedMovieList = () => {
  return useGlobalValue(stateSelectedMovieList);
};
