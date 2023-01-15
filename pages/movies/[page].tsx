import { GetStaticProps, NextPage } from "next";
import { MovieList } from "../../src/domain/movies/model";
import {
  getMyFavoriteMovies,
  getMyFavoriteMoviesTotalCount,
} from "../../src/data/movies/index";
import { getGenres } from "../../src/data/movies/index";
import MoviePageComponent from "src/components/pages/movies";
import { Genre } from "src/domain/genres/model";
import { MY_FAVORITE_MOVIES_COUNT_PER_PAGE } from "src/data/movies/constants";

type PageProps = {
  myFavoriteMovieList: MovieList;
  genres: Array<Genre>;
  lastPageNum: number;
};

const MoviePage: NextPage<PageProps> = ({
  myFavoriteMovieList,
  genres,
  lastPageNum,
}) => {
  return (
    <MoviePageComponent
      movieList={myFavoriteMovieList}
      genres={genres}
      lastPageNum={lastPageNum}
    />
  );
};

export default MoviePage;

export const getStaticPaths = async () => {
  const moviesTotalCount = await getMyFavoriteMoviesTotalCount();

  const lastPageNum = Math.ceil(
    moviesTotalCount / MY_FAVORITE_MOVIES_COUNT_PER_PAGE
  );

  const staticPaths = [...Array(lastPageNum)]
    .map((_, i) => (i + 1).toString())
    .map((page) => ({
      params: {
        page,
      },
    }));

  return {
    paths: staticPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context?.params?.page);

  const genres = await getGenres();

  const moviesTotalCount = await getMyFavoriteMoviesTotalCount();
  const lastPageNum = Math.ceil(
    moviesTotalCount / MY_FAVORITE_MOVIES_COUNT_PER_PAGE
  );

  const myFavoriteMovieList = await getMyFavoriteMovies(genres, page);

  return {
    props: { myFavoriteMovieList, genres, lastPageNum },
  };
};
