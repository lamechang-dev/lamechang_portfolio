import { GetStaticProps, GetStaticPropsContext } from "next";
import { getGenres, getMyFavoriteMovies } from "src/data/movies";

export function withCommonStaticProps<P extends object>(
  handler?: (
    context: GetStaticPropsContext,
    common: any
  ) => Promise<{ props: P }>
): GetStaticProps<P> {
  return async (context) => {
    const genres = await getGenres();
    const myFavoriteMovieList = await getMyFavoriteMovies(genres);

    const common = { genres, myFavoriteMovieList };

    if (handler) {
      const result = await handler(context, common);
      return {
        props: {
          ...result.props,
          ...common,
        } as P,
      };
    }

    return {
      props: common as P,
    };
  };
}
