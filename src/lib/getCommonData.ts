import { getMyFavoriteMovies } from "src/data/movies";

export type CommonData = {
  myFavoriteMovieList: Awaited<ReturnType<typeof getMyFavoriteMovies>>;
};
