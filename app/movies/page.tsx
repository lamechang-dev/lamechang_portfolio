import MoviesPageComponent from "src/components/pages/movies";
import { getGenres, getMyFavoriteMovies } from "src/services";

const MoviePage = async () => {
  const myFavoriteMovieList = await getMyFavoriteMovies();

  return <MoviesPageComponent myFavoriteMovieList={myFavoriteMovieList} />;
};

export default MoviePage;
