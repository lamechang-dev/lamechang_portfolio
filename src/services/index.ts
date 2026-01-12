import { Genre } from "src/domain/genres/model";
import { Movie } from "src/domain/movies/model";

const DEFAULT_REVALIDATE_TIME = 300;

export const getGenres = async (): Promise<Array<Genre>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/genres`,
    { next: { revalidate: DEFAULT_REVALIDATE_TIME } }
  );
  const data = await res.json();
  return data;
};

export const getMyFavoriteMovies = async (): Promise<Array<Movie>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/movies/favorites`,
    { next: { revalidate: DEFAULT_REVALIDATE_TIME } }
  );
  const data = await res.json();
  return data;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/movies/${id}`,
    { next: { revalidate: DEFAULT_REVALIDATE_TIME } }
  );
  const data = await res.json();
  return data;
};