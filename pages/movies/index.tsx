import { NextPage } from "next";
import { MovieList, Genre } from "../../src/domain/movies/model";
import { getMyFavoriteMovies } from "../../src/data/movies/index";
import { getGenres } from "../../src/data/movies/index";
import MoviePageComponent from "src/components/pages/movies";

type PageProps = {
  myFavoriteMovieList: MovieList;
  genres: Array<Genre>;
};

const MoviePage: NextPage<PageProps> = ({ myFavoriteMovieList, genres }) => {
  return <MoviePageComponent movieList={myFavoriteMovieList} genres={genres} />;
};

export default MoviePage;

export const getStaticProps = async () => {
  const genres = await getGenres();

  const myFavoriteMovieList = await getMyFavoriteMovies(genres);

  return {
    props: { myFavoriteMovieList, genres },
  };
};
