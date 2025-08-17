import { useSetGlobalState } from "src/context/hooks";
import { MovieGenreId } from "src/domain/genres/model";
import { stateSelectedGenreIds } from ".";

export const useStateSelectedGenreIdsActions = () => {
  const setStateSelectedGenreIds = useSetGlobalState(stateSelectedGenreIds);

  const addGenreId2StateSelectedGenreIds = (genreId: MovieGenreId) =>
    setStateSelectedGenreIds((prev) => [...prev, genreId]);

  const removeGenreIdFromStateSelectedGenreIds = (genreId: MovieGenreId) =>
    setStateSelectedGenreIds((prev) => prev.filter((id) => id !== genreId));

  const resetStateSelectedGenreIds = () => setStateSelectedGenreIds(() => []);

  return {
    addGenreId2StateSelectedGenreIds,
    removeGenreIdFromStateSelectedGenreIds,
    resetStateSelectedGenreIds,
  };
};
