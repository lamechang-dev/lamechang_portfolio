import { stateGenreList, stateSelectedGenreIds } from ".";
import { useGlobalValue } from "../../hooks";

export const useStateGenreList = () => {
  return useGlobalValue(stateGenreList);
};

export const useStateSelectedGenreIds = () => {
  return useGlobalValue(stateSelectedGenreIds);
};
