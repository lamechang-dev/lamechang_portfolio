import { Movie } from "src/domain/movies/model";
import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { stateSelectedMovieList } from "src/context/model/movies/index";
import { useStateSelectedMovieActions } from "src/context/model/movies/actions";
import { useStateSelectedGenreIdsActions } from "src/context/model/genres/actions";
import {
  useStateGenreList,
  useStateSelectedGenreIds,
} from "src/context/model/genres/selector";
import { MovieGenreId } from "src/domain/genres/model";
import { useRouter } from "next/router";

export const useViewModel = () => {
  const router = useRouter();

  /** globalState参照 */
  const genreList = useStateGenreList();
  const selectedMovieList = useRecoilValue(stateSelectedMovieList);
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
    selectedMovieList,
    genreList,
    handleClickGenreChip,
    handleClickResetFilterButton,
    handleClickMovieThumbnail,
    selectedGenreIds,
  };
};
