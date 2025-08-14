import { NextPage } from "next";
import MoviesPageComponent from "src/components/pages/movies";
import { withCommonStaticProps } from "src/lib/withCommonStaticProps";

const MoviePage: NextPage = () => {
  return <MoviesPageComponent />;
};

export default MoviePage;

export const getStaticProps = withCommonStaticProps(async () => {
  return { props: {} };
});
