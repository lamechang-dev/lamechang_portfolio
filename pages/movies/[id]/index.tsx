import { NextPage, GetStaticPaths } from "next";
import MovieDetailPageComponent from "src/components/pages/movies/id";
import { getGenres, getMyFavoriteMovies } from "src/data/movies";
import { withCommonStaticProps } from "src/lib/withCommonStaticProps";

type Props = {
  id: string;
};

const MovieDetailPage: NextPage<Props> = ({ id }) => {
  return <MovieDetailPageComponent id={id} />;
};

export default MovieDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const genres = await getGenres();
  const myFavoriteMovieList = await getMyFavoriteMovies(genres);

  const paths = myFavoriteMovieList.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = withCommonStaticProps(async (context) => {
  const id = context.params?.id as string;
  return { props: { id } };
});
