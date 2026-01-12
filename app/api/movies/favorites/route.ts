import { NextResponse } from "next/server";
import { getGenres, getMyFavoriteMovies } from "src/data/movies";

export const revalidate = 300;

export async function GET() {
  const genres = await getGenres();
  const movies = await getMyFavoriteMovies(genres);
  return NextResponse.json(movies);
}
