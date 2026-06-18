"use client";

import { CssBaseline, Dialog, ThemeProvider } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { isMobile } from "react-device-detect";
import MovieDetailSection from "src/components/model/movie/MovieDetailSection";
import { useThemeValue } from "src/components/ui/PageTemplate";
import { Movie } from "src/domain/movies/model";
import { useBodyBackgroundColor } from "src/lib/useBodyBackgroundColor";

type Props = {
  movie: Movie;
};

const MovieDetailPageComponent: NextPage<Props> = ({ movie }) => {
  const router = useRouter();

  const handleClickCloseIconButton = useCallback(() => {
    router.push("/movies");
  }, []);

  const { completelyDarkTheme } = useThemeValue();

  useBodyBackgroundColor(completelyDarkTheme.palette.background.default);

  return (
    <>
      {movie && (
        <>
          {isMobile ? (
            <ThemeProvider theme={completelyDarkTheme}>
              <CssBaseline />
              <MovieDetailSection
                movie={movie}
                onClickCloseButton={handleClickCloseIconButton}
              />
            </ThemeProvider>
          ) : (
            <ThemeProvider theme={completelyDarkTheme}>
              <Dialog
                open={true}
                className="mx-auto aspect-[780/1170] h-[100vh]"
              >
                <MovieDetailSection
                  movie={movie}
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
