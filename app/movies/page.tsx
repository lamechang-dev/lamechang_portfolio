import MoviesPageComponent from "src/components/pages/movies";
import { getGenres, getMyFavoriteMovies } from "src/data/movies";

const MoviePage = async () => {
  const genres = await getGenres();
  const myFavoriteMovieList = await getMyFavoriteMovies(genres);

  return <MoviesPageComponent myFavoriteMovieList={myFavoriteMovieList} />;
};

export default MoviePage;
