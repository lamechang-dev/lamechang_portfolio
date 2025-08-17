"use client";

import { Movie } from "src/domain/movies/model";
import { useCallback } from "react";
import { Genre } from "src/domain/genres/model";
import { useRouter } from "next/navigation";
import { CommonData } from "src/lib/getCommonData";
import { useState } from "react";
import { useEffect } from "react";
import { getUniqueGenresFromGenreList } from "src/domain/genres/getter";
import { useMemo } from "react";

export const useViewModel = ({ myFavoriteMovieList }: CommonData) => {
  const router = useRouter();

  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [filteredMovieList, setFilteredMovieList] =
    useState<Movie[]>(myFavoriteMovieList);
  const genres = useMemo<Genre[]>(
    () =>
      getUniqueGenresFromGenreList(
        myFavoriteMovieList.flatMap((movie) => movie.genres)
      ),
    [myFavoriteMovieList]
  );

  /** handler系 */
  const handleClickGenreChip: (genre: Genre) => void = useCallback(
    (genre) => {
      if (
        selectedGenres.find((selectedGenre) => selectedGenre.id === genre.id)
      ) {
        setSelectedGenres(
          selectedGenres.filter(
            (selectedGenre) => selectedGenre.id !== genre.id
          )
        );
      } else {
        setSelectedGenres([...selectedGenres, genre]);
      }
    },
    [selectedGenres]
  );

  useEffect(() => {
    if (selectedGenres.length === 0) {
      setFilteredMovieList(myFavoriteMovieList);
      return;
    }

    setFilteredMovieList(
      myFavoriteMovieList.filter((movie) =>
        movie.genres.some((movieGenre) =>
          selectedGenres.some(
            (selectedGenre) => selectedGenre.id === movieGenre.id
          )
        )
      )
    );
  }, [selectedGenres, myFavoriteMovieList]);

  const handleClickResetFilterButton: () => void = useCallback(() => {
    setSelectedGenres([]);
  }, []);

  return {
    genres,
    filteredMovieList,
    handleClickGenreChip,
    handleClickResetFilterButton,
    selectedGenres,
  };
};
