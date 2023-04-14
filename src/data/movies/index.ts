import { AxiosInstance } from "axios";
import { Movie, MovieList } from "src/domain/movies/model";
import { tmdbApiClient } from "../adapters/index";
import {
  convertTmdbV3Movie2Movie,
  convertTmdbV3Genre2Genre,
  convertTmdbV3MyFavoriteMovie2Movie,
} from "../../domain/movies/converter";
import { MY_ACCOUNT_ID } from "src/domain/tmdb/constants";
import { getGenreById } from "src/domain/genres/getter";
import { Genre } from "src/domain/genres/model";
import {
  TmdbV3MoviesResponse,
  TmdbV3MovieResponse,
  TmdbV3GetMyFavoriteMoviesResponse,
  TmdbV3GetGenresResponse,
} from "../adapters/model";
import { getIncrementalArrayByMaxNum } from "src/lib/array";

export const getLatestMovies: (
  apiClient?: AxiosInstance
) => Promise<MovieList> = async (apiClient = tmdbApiClient) => {
  const { data } = await apiClient.get<TmdbV3MoviesResponse>(
    "movie/now_playing",
    {
      params: { page: 1 },
    }
  );

  return data.results.map((v3Movie) => convertTmdbV3Movie2Movie(v3Movie));
};

export const getMovieById: (
  id: number,
  apiClient?: AxiosInstance
) => Promise<Movie> = async (id, apiClient = tmdbApiClient) => {
  const { data } = await apiClient.get<TmdbV3MovieResponse>(`movie/${id}`);

  return convertTmdbV3Movie2Movie(data);
};

export const getMoviesByIds: (ids: number[]) => Promise<MovieList> = async (
  ids
) => {
  const movieList = await Promise.all(ids.map((id) => getMovieById(id))).then(
    (values) => values
  );

  return movieList;
};

export const getMyFavoriteMovies: (
  genres: Array<Genre>,
  apiClient?: AxiosInstance
) => Promise<Array<Movie>> = async (genres, apiClient = tmdbApiClient) => {
  const { data } = await apiClient.get<TmdbV3GetMyFavoriteMoviesResponse>(
    `/account/${MY_ACCOUNT_ID}/favorite/movies`
  );

  const tmdbPageNumList = getIncrementalArrayByMaxNum(data.totalPages);

  const results = await Promise.all(
    tmdbPageNumList.map(
      async (page) =>
        await apiClient
          .get<TmdbV3GetMyFavoriteMoviesResponse>(
            `/account/${MY_ACCOUNT_ID}/favorite/movies`,
            {
              params: { page },
            }
          )
          .then((data) => data.data.results)
    )
  );

  return results
    .flat()
    .map((v3Movie) => convertTmdbV3MyFavoriteMovie2Movie(v3Movie))
    .map((movie) => ({
      ...movie,
      genres: movie.genreIds?.map((genreId) => getGenreById(genres, genreId)),
    })) as Array<Movie>;
};

export const getGenres: (
  apiClient?: AxiosInstance
) => Promise<Array<Genre>> = async (apiClient = tmdbApiClient) => {
  const { data } = await apiClient.get<TmdbV3GetGenresResponse>(
    `/genre/movie/list`
  );

  return data.genres.map((genre) => convertTmdbV3Genre2Genre(genre));
};
