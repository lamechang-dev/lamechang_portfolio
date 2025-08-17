import { Movie } from "src/domain/movies/model";
import { useCallback } from "react";
import { stateFilteredMovieList } from "src/context/model/movies/index";
import { useStateSelectedMovieActions } from "src/context/model/movies/actions";
import { useStateSelectedGenreIdsActions } from "src/context/model/genres/actions";
import {
  useStateGenreList,
  useStateSelectedGenreIds,
} from "src/context/model/genres/selector";
import { MovieGenreId } from "src/domain/genres/model";
import { useRouter } from "next/router";
import { useGlobalValue } from "src/context/hooks";

export const useViewModel = () => {
  const router = useRouter();

  /** globalState参照 */
  const genreList = useStateGenreList();
  const filteredMovieList = useGlobalValue(stateFilteredMovieList);
  const selectedGenreIds = useStateSelectedGenreIds();

  /** globalState更新系 */
  const { setStateSelectedMovie } = useStateSelectedMovieActions();
  const {
    addGenreId2StateSelectedGenreIds,
    removeGenreIdFromStateSelectedGenreIds,
    resetStateSelectedGenreIds,
  } = useStateSelectedGenreIdsActions();

  /** handler系 */
  const handleClickGenreChip: (genreId: MovieGenreId) => void = useCallback(
    (genreId) => {
      if (selectedGenreIds.find((id) => id === genreId)) {
        return removeGenreIdFromStateSelectedGenreIds(genreId);
      } else {
        return addGenreId2StateSelectedGenreIds(genreId);
      }
    },
    [
      addGenreId2StateSelectedGenreIds,
      removeGenreIdFromStateSelectedGenreIds,
      selectedGenreIds,
    ]
  );

  const handleClickMovieThumbnail = useCallback(
    (movie: Movie) => {
      setStateSelectedMovie(movie);
      router.push(`/movies/${movie.id}`);
    },
    [setStateSelectedMovie, router]
  );

  const handleClickResetFilterButton: () => void = useCallback(() => {
    resetStateSelectedGenreIds();
  }, [resetStateSelectedGenreIds]);

  return {
    filteredMovieList,
    genreList,
    handleClickGenreChip,
    handleClickResetFilterButton,
    handleClickMovieThumbnail,
    selectedGenreIds,
  };
};
