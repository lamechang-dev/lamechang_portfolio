import { MovieList, Movie } from "src/domain/movies/model";
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { stateSelectedMovieList } from "src/context/movies/index";
import { useTheme, Theme } from "@material-ui/core";
import {
  useStateMyFavoriteMovieList,
  useStateSelectedMovie,
} from "src/context/movies/selector";
import {
  useStateMyFavoriteMovieListActions,
  useStateSelectedMovieActions,
} from "src/context/movies/actions";
import { useStateSelectedGenreIdsActions } from "src/context/genres/actions";
import {
  useStateGenreList,
  useStateSelectedGenreIds,
} from "src/context/genres/selector";
import { Genre, MovieGenreId } from "src/domain/genres/model";

export const useViewModel = ({
  movies,
}: {
  movies: MovieList;
  genres: Array<Genre>;
}) => {
  const theme = useTheme<Theme>();

  /** globalState参照 */
  const myFavoriteMovieList = useStateMyFavoriteMovieList();
  const selectedMovie = useStateSelectedMovie();
  const genreList = useStateGenreList();
  const selectedMovieList = useRecoilValue(stateSelectedMovieList);
  const selectedGenreIds = useStateSelectedGenreIds();

  /** globalState更新系 */
  const { setStateMyFavoriteMovieList } = useStateMyFavoriteMovieListActions();
  const { setStateSelectedMovie, resetStateSelectedMovie } =
    useStateSelectedMovieActions();
  const {
    addGenreId2StateSelectedGenreIds,
    removeGenreIdFromStateSelectedGenreIds,
    resetStateSelectedGenreIds,
  } = useStateSelectedGenreIdsActions();

  useEffect(() => {
    if (movies) {
      setStateMyFavoriteMovieList(movies);
    }
  }, [movies, myFavoriteMovieList, setStateMyFavoriteMovieList]);

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
    },
    [setStateSelectedMovie]
  );

  const handleClickCloseIconButton = useCallback(() => {
    resetStateSelectedMovie();
  }, [resetStateSelectedMovie]);

  const handleClickResetFilterButton: () => void = useCallback(() => {
    resetStateSelectedGenreIds();
  }, [resetStateSelectedGenreIds]);

  // FIXME
  // useEffect(() => {
  //   if (isMobile) {
  //     if (!!selectedMovie) {
  //       document.body.style.backgroundColor = "black";
  //     } else {
  //       document.body.style.backgroundColor = theme.palette.background.default;
  //     }
  //   }

  //   return () => {
  //     document.body.style.backgroundColor = "";
  //   };
  // }, [selectedMovie, theme.palette.background.default]);

  return {
    selectedMovieList: selectedGenreIds.length
      ? selectedMovieList
      : myFavoriteMovieList,
    genreList,
    handleClickGenreChip,
    handleClickResetFilterButton,
    handleClickMovieThumbnail,
    handleClickCloseIconButton,
    selectedGenreIds,
    selectedMovie,
  };
};
