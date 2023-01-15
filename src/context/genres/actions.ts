import { useRecoilCallback } from "recoil";
import { MovieGenreId } from "src/domain/genres/model";
import { stateSelectedGenreIds } from ".";

export const useStateSelectedGenreIdsActions = () => {
  const addGenreId2StateSelectedGenreIds = useRecoilCallback(
    ({ set }) =>
      (genreId: MovieGenreId) => {
        set(stateSelectedGenreIds, (prev) => [...prev, genreId]);
      }
  );

  const removeGenreIdFromStateSelectedGenreIds = useRecoilCallback(
    ({ set }) =>
      (genreId: MovieGenreId) => {
        set(stateSelectedGenreIds, (prev) =>
          prev.filter((id) => id !== genreId)
        );
      }
  );

  const resetStateSelectedGenreIds = useRecoilCallback(({ set }) => () => {
    set(stateSelectedGenreIds, () => []);
  });

  return {
    addGenreId2StateSelectedGenreIds,
    removeGenreIdFromStateSelectedGenreIds,
    resetStateSelectedGenreIds,
  };
};
