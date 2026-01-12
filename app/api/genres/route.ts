import { NextResponse } from "next/server";
import { getGenres } from "src/data/movies";

export const revalidate = 300;

export async function GET(
  _: Request,
) {
  const genres = await getGenres();
  return NextResponse.json(genres);
}
