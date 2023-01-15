import { useGlobalCallback } from "src/context/hooks";
import { MovieGenreId } from "src/domain/genres/model";
import { stateSelectedGenreIds } from ".";

export const useStateSelectedGenreIdsActions = () => {
  const addGenreId2StateSelectedGenreIds = useGlobalCallback(
    ({ set }) =>
      (genreId: MovieGenreId) => {
        set(stateSelectedGenreIds, (prev) => [...prev, genreId]);
      }
  );

  const removeGenreIdFromStateSelectedGenreIds = useGlobalCallback(
    ({ set }) =>
      (genreId: MovieGenreId) => {
        set(stateSelectedGenreIds, (prev) =>
          prev.filter((id) => id !== genreId)
        );
      }
  );

  const resetStateSelectedGenreIds = useGlobalCallback(({ set }) => () => {
    set(stateSelectedGenreIds, () => []);
  });

  return {
    addGenreId2StateSelectedGenreIds,
    removeGenreIdFromStateSelectedGenreIds,
    resetStateSelectedGenreIds,
  };
};
