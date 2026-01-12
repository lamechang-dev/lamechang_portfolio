import { NextResponse } from "next/server";
import { getMovieById } from "src/data/movies";

export const revalidate = 300;

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const movie = await getMovieById(Number(params.id));
  return NextResponse.json(movie);
}
