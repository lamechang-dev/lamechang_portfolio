import MovieDetailPageComponent from "src/components/pages/movies/id";
import { getGenres, getMovieById, getMyFavoriteMovies } from "src/data/movies";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovieById(Number(id));

  return <MovieDetailPageComponent movie={movie} />;
}

export async function generateStaticParams() {
  const genres = await getGenres();
  const myFavoriteMovieList = await getMyFavoriteMovies(genres);
  return myFavoriteMovieList.map((movie) => ({ id: movie.id.toString() }));
}
