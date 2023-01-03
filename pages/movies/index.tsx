import { NextPage } from "next";
import { MovieList, Genre, Movie } from "../../src/domain/movies/model";
import { getMyFavoriteMovies } from "../../src/data/movies/index";
import { getGenres } from "../../src/data/movies/index";
import MoviePageComponent from "src/components/pages/movies";

type PageProps = {
  movieList: MovieList;
  genres: Array<Genre>;
};

const MoviePage: NextPage<PageProps> = ({ movieList, genres }) => {
  return <MoviePageComponent movieList={movieList} genres={genres} />;
};

export default MoviePage;

export const getStaticProps = async () => {
  const genres = await getGenres();

  const myFavoriteMovieList = await getMyFavoriteMovies();

  const movieList: Array<Movie> = myFavoriteMovieList.map((movie) => ({
    ...movie,
    genres: movie.genreIds?.map((genreId) =>
      genres.find((genre) => genre.id === genreId)
    ) as Genre[],
  }));

  return {
    props: { movieList, genres },
  };
};
