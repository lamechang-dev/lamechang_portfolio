import { NextPage } from "next";
import HeaderMenuBar from "src/components/organisms/HeaderMenu";
import MainContainer from "src/components/layout/MainContainer";
import ContentSection from "src/components/organisms/ContentSection";
import { MovieList } from "../../src/domain/movies/model";
import clsx from "clsx";
import { getMoviesByIds } from "../../src/data/adapters/movies/index";
import { MY_FAVORITE_MOVIES } from "src/domain/movies/constants";

type PageProps = {
  movieList: MovieList;
};

const MoviePage: NextPage<PageProps> = ({ movieList }) => {
  return (
    <MainContainer>
      <HeaderMenuBar className={"mb-2"} />
      <ContentSection
        className={"p-4"}
        title="MOVIES"
        content={
          <>
            <div className={clsx("flex", "flex-wrap", "mx-auto")}>
              {movieList.map((movie) => {
                return (
                  <div key={movie.title} className={clsx("p-2")}>
                    <img
                      src={movie.thumbnail}
                      alt={movie.title}
                      className={clsx(
                        "text-center",
                        "rounded-md",
                        "max-w-[300px]",
                        "max-h-[450px]"
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </>
        }
      />
    </MainContainer>
  );
};

export default MoviePage;

export const getServerSideProps = async () => {
  const movieList = await getMoviesByIds(
    MY_FAVORITE_MOVIES.map((movie) => movie.tmdbId)
  );

  console.log(movieList);

  return {
    props: { movieList: movieList },
  };
};
