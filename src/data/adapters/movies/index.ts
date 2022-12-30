import { AxiosInstance } from "axios";
import { Movie, MovieList } from "src/domain/movies/model";
import {
  tmdbApiClient,
  TmdbV3MovieResponse,
  TmdbV3MoviesResponse,
} from "../index";
import { convertTmdbV3Movie2Movie } from "../../../domain/movies/converter";

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

export const getMoviesByIds: (
  ids: number[],
  apiClient?: AxiosInstance
) => Promise<MovieList> = async (ids, apiClient = tmdbApiClient) => {
  const movieList = await Promise.all(ids.map((id) => getMovieById(id))).then(
    (values) => values
  );

  return movieList;
};
