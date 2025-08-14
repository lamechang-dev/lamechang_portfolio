import { Dialog, ThemeProvider } from "@material-ui/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { isMobile } from "react-device-detect";
import MovieDetailSection from "src/components/model/movie/MovieDetailSection";
import { useThemeValue } from "src/components/ui/PageTemplate";
import { useStateSelectedMovieActions } from "src/context/model/movies/actions";
import { useStateMyFavoriteMovieList } from "src/context/model/movies/selector";

type Props = {
  id: string;
};

const MovieDetailPageComponent: NextPage<Props> = ({ id }) => {
  const router = useRouter();
  /** globalState参照 */
  const movieList = useStateMyFavoriteMovieList();
  const selectedMovie = movieList.find((movie) => movie.id === Number(id));

  const { resetStateSelectedMovie } = useStateSelectedMovieActions();

  const handleClickCloseIconButton = useCallback(() => {
    resetStateSelectedMovie();
    router.push("/movies");
  }, [resetStateSelectedMovie]);

  const { completelyDarkTheme } = useThemeValue();

  return (
    <>
      {selectedMovie && (
        <>
          {isMobile ? (
            <ThemeProvider theme={completelyDarkTheme}>
              <MovieDetailSection
                movie={selectedMovie}
                onClickCloseButton={handleClickCloseIconButton}
              />
            </ThemeProvider>
          ) : (
            <ThemeProvider theme={completelyDarkTheme}>
              <Dialog open={true}>
                <MovieDetailSection
                  movie={selectedMovie}
                  onClickCloseButton={handleClickCloseIconButton}
                />
              </Dialog>
            </ThemeProvider>
          )}
        </>
      )}
    </>
  );
};

export default MovieDetailPageComponent;
