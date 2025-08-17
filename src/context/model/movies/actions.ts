import { stateSelectedMovie } from ".";
import { useSetGlobalState } from "src/context/hooks";
import { useCallback } from "react";

export const useStateSelectedMovieActions = () => {
  const setStateSelectedMovie = useSetGlobalState(stateSelectedMovie);

  const resetStateSelectedMovie = useCallback(() => {
    setStateSelectedMovie(undefined);
  }, [setStateSelectedMovie]);

  return { setStateSelectedMovie, resetStateSelectedMovie };
};
