import {
  Genre,
  MovieGenreId,
  MovieList,
  Movie,
} from "../../src/domain/movies/model";
import { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  stateSelectedMovie,
  stateSelectedMovieList,
} from "../../src/context/movies/index";
import {
  stateGenreList,
  stateMyFavoriteMovieList,
  stateSelectedGenreIds,
} from "src/context/movies";

export const useViewModel = ({
  movies,
}: {
  movies: MovieList;
  genres: Array<Genre>;
}) => {
  const [myFavoriteMovieList, setStateMyFavoriteMovieList] = useRecoilState(
    stateMyFavoriteMovieList
  );

  const [selectedMovie, setSelectedMovie] = useRecoilState(stateSelectedMovie);

  useEffect(() => {
    if (movies) {
      setStateMyFavoriteMovieList(movies);
    }
  }, [movies, myFavoriteMovieList, setStateMyFavoriteMovieList]);

  const [selectedGenreIds, setSelectedGenreIds] = useRecoilState(
    stateSelectedGenreIds
  );

  const myFavoriteMoviesGenreList = useRecoilValue(stateGenreList);
  const selectedMovieList = useRecoilValue(stateSelectedMovieList);

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
