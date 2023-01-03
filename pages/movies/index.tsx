import { NextPage } from "next";
import HeaderMenuBar from "src/components/organisms/HeaderMenu";
import MainContainer from "src/components/layout/MainContainer";
import ContentSection from "src/components/organisms/ContentSection";
import { MovieList, Genre, Movie } from "../../src/domain/movies/model";
import clsx from "clsx";
import { getMyFavoriteMovies } from "../../src/data/movies/index";
import { useViewModel } from "./useViewModel";
import Chip from "src/components/atoms/Chip";
import { getGenres } from "../../src/data/movies/index";
import { ThemeProvider, Typography } from "@material-ui/core";
import MovieDetailModal from "src/components/molecules/Modal";
import { useThemeValue } from "src/components/layout/PageTemplate";

type PageProps = {
  movieList: MovieList;
  genres: Array<Genre>;
};

const MoviePage: NextPage<PageProps> = ({ movieList, genres }) => {
  const {
    selectedMovieList,
    genreList,
    handleClickGenreChip,
    handleClickResetFilterButton,
    handleClickMovieThumbnail,
    handleClickCloseIconButton,
    selectedGenreIds,
    selectedMovie,
  } = useViewModel({
    movies: movieList,
    genres,
  });

  const { darkTheme } = useThemeValue();

  return (
    <>
      <MainContainer>
        <HeaderMenuBar className={"mb-2"} />
        <ContentSection
          className={"p-4"}
          content={
            <Typography className="text-xs">
              好きな映画をTmdb API経由で載るようにしてます🙏
              <br />
              あなたの好きな映画は見つかりましたか？
            </Typography>
          }
        />
        <ContentSection
          className={"p-4"}
          title={"ジャンル"}
          subActionText={"Reset Filter"}
          onClickSubActionText={handleClickResetFilterButton}
          content={
            <div className={clsx("flex", "flex-wrap")}>
              {genreList?.map((genre) => (
                <Chip
                  text={genre?.name}
                  key={genre?.id}
                  clickable
                  onClick={handleClickGenreChip}
                  id={genre?.id}
                  variant={
                    selectedGenreIds.find((id) => id === genre?.id)
                      ? "fill"
                      : "outlined"
                  }
                />
              ))}
            </div>
          }
        />
        <ContentSection
          className={"p-4"}
          title="MOVIES"
          content={
            <>
              <div
                className={clsx(
                  "flex",
                  "flex-wrap",
                  "mx-auto",
                  "grid grid-cols-3"
                )}
              >
                {selectedMovieList.map((movie) => {
                  return (
                    <div
                      key={movie.title}
                      className={clsx("p-2", "flex", "flex-col", "gap-y-2")}
                    >
                      <div
                        className={clsx(
                          "hover:brightness-[.80]",
                          "transition",
                          "cursor-pointer"
                        )}
                        onClick={() => {
                          handleClickMovieThumbnail(movie);
                        }}
                      >
                        <img
                          src={movie.thumbnail}
                          alt={movie.title}
                          className={clsx("text-center", "rounded-md")}
                        />
                      </div>
                      <Typography className={clsx("text-center", "text-xs")}>
                        {movie.title}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </>
          }
        />
      </MainContainer>
      <ThemeProvider theme={darkTheme}>
        <MovieDetailModal
          fullScreen
          open={!!selectedMovie}
          movie={selectedMovie}
          onClickCloseButton={handleClickCloseIconButton}
          onClose={handleClickCloseIconButton}
        />
      </ThemeProvider>
    </>
  );
};

export default MoviePage;

export const getServerSideProps = async () => {
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
