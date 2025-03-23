import { NextPage } from "next";
import HeaderMenuBar from "src/components/ui/HeaderMenu";
import ContentSection from "src/components/ui/ContentSection";
import { MovieList } from "src/domain/movies/model";
import clsx from "clsx";
import { useViewModel } from "./useViewModel";
import Chip from "src/components/ui/Chip";
import { ThemeProvider } from "@material-ui/core";
import { useThemeValue } from "src/components/ui/PageTemplate";
import { isMobile } from "react-device-detect";
import MovieDetailSection from "src/components/model/movie/MovieDetailSection";
import { Genre } from "src/domain/genres/model";
import PageContainer from "src/components/ui/PageContainer";
import { Typography } from "src/components/ui/Typography";
import { Dialog } from "src/components/ui/Dialog";
import { getImageUrlFromMovie } from "src/domain/movies/getter";
import { POSTER_BLUR_IMAGE_BASE64 } from "src/domain/movies/constants";
import { FadeInImage } from "src/components/ui/FadeInImage";
type PageProps = {
  movieList: MovieList;
  genres: Array<Genre>;
};

const MoviePageComponent: NextPage<PageProps> = ({ movieList, genres }) => {
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

  const { completelyDarkTheme } = useThemeValue();

  if (selectedMovie) {
    if (isMobile) {
      return (
        <ThemeProvider theme={completelyDarkTheme}>
          <MovieDetailSection
            movie={selectedMovie}
            onClickCloseButton={handleClickCloseIconButton}
          />
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={completelyDarkTheme}>
          <Dialog open={!!selectedMovie}>
            <MovieDetailSection
              movie={selectedMovie}
              onClickCloseButton={handleClickCloseIconButton}
            />
          </Dialog>
        </ThemeProvider>
      );
    }
  }

  return (
    <PageContainer>
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
          <div className={clsx("flex", "flex-wrap", "gap-2")}>
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
                      <FadeInImage
                        placeholder="blur"
                        blurDataURL={POSTER_BLUR_IMAGE_BASE64}
                        src={getImageUrlFromMovie(isMobile, movie)}
                        alt={movie.title}
                        className={clsx("text-center", "rounded-md")}
                        width={300}
                        height={450}
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
    </PageContainer>
  );
};

export default MoviePageComponent;
