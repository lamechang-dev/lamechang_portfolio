import { Genre, MovieGenreId, MovieList, Movie } from "src/domain/movies/model";
import { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  stateSelectedMovie,
  stateSelectedMovieList,
} from "src/context/movies/index";
import { useTheme, Theme } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import { stateGenreList, stateSelectedGenreIds } from "src/context/genres";
import { useStateMyFavoriteMovieList } from "src/context/movies/selector";
import { useStateMyFavoriteMovieListActions } from "src/context/movies/actions";

export const useViewModel = ({
  movies,
}: {
  movies: MovieList;
  genres: Array<Genre>;
}) => {
  const theme = useTheme<Theme>();

  /** globalState関連 */
  const myFavoriteMovieList = useStateMyFavoriteMovieList();
  const { setStateMyFavoriteMovieList } = useStateMyFavoriteMovieListActions();

  const [selectedMovie, setSelectedMovie] = useRecoilState(stateSelectedMovie);

  const myFavoriteMoviesGenreList = useRecoilValue(stateGenreList);
  const selectedMovieList = useRecoilValue(stateSelectedMovieList);

  useEffect(() => {
    if (movies) {
      setStateMyFavoriteMovieList(movies);
    }
  }, [movies, myFavoriteMovieList, setStateMyFavoriteMovieList]);

  const [selectedGenreIds, setSelectedGenreIds] = useRecoilState(
    stateSelectedGenreIds
  );

  const handleClickGenreChip: (genreId: MovieGenreId) => void = useCallback(
    (genreId) => {
      setSelectedGenreIds((prev) => {
        if (prev.find((id) => id === genreId)) {
          return prev.filter((id) => id !== genreId);
        } else {
          return [...prev, genreId];
        }
      });
    },
    [setSelectedGenreIds]
  );

  const handleClickMovieThumbnail = useCallback(
    (movie: Movie) => {
      setSelectedMovie(movie);
    },
    [setSelectedMovie]
  );

  const handleClickCloseIconButton = useCallback(() => {
    setSelectedMovie(undefined);
  }, [setSelectedMovie]);

  const handleClickResetFilterButton: () => void = useCallback(() => {
    setSelectedGenreIds([]);
  }, [setSelectedGenreIds]);

  useEffect(() => {
    if (isMobile) {
      if (!!selectedMovie) {
        document.body.style.backgroundColor = "black";
      } else {
        document.body.style.backgroundColor = theme.palette.background.default;
      }
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [selectedMovie, theme.palette.background.default]);

  return {
    selectedMovieList: selectedGenreIds.length
      ? selectedMovieList
      : myFavoriteMovieList,
    genreList: myFavoriteMoviesGenreList,
    handleClickGenreChip,
    handleClickResetFilterButton,
    handleClickMovieThumbnail,
    handleClickCloseIconButton,
    selectedGenreIds,
    selectedMovie,
  };
};
