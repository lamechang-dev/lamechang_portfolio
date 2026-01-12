import { Genre } from "src/domain/genres/model";
import { Movie } from "src/domain/movies/model";

export const getGenres = async (): Promise<Array<Genre>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/genres`,
    { next: { revalidate: 300 } }
  );
  const data = await res.json();
  return data;
};

export const getMyFavoriteMovies = async (): Promise<Array<Movie>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/movies/favorites`,
    { next: { revalidate: 300 } }
  );
  const data = await res.json();
  return data;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/movies/${id}`,
    { next: { revalidate: 300 } }
  );
  const data = await res.json();
  return data;
};