"use client";

import { CssBaseline, Dialog, ThemeProvider } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { isMobile } from "react-device-detect";
import MovieDetailSection from "src/components/model/movie/MovieDetailSection";
import { useThemeValue } from "src/components/ui/PageTemplate";
import { Movie } from "src/domain/movies/model";
import { useBodyBackgroundColor } from "src/lib/useBodyBackgroundColor";
import { useSetGlobalState } from "src/context/hooks";
import { isHeaderVisible } from "src/context/ui/header";

type Props = {
  movie: Movie;
};

const MovieDetailPageComponent: NextPage<Props> = ({ movie }) => {
  const router = useRouter();
  const setHeaderVisible = useSetGlobalState(isHeaderVisible);

  useEffect(() => {
    setHeaderVisible(false);
    return () => setHeaderVisible(true);
  }, [setHeaderVisible]);

  const handleClickCloseIconButton = useCallback(() => {
    router.push("/movies");
  }, []);

  const { completelyDarkTheme } = useThemeValue();

  useBodyBackgroundColor(completelyDarkTheme.palette.background.default);

  return (
    <>
      {movie && (
        <ThemeProvider theme={completelyDarkTheme}>
          <CssBaseline />
          {isMobile ? (
            <MovieDetailSection
              movie={movie}
              onClickCloseButton={handleClickCloseIconButton}
            />
          ) : (
            <Dialog
              open={true}
              className="mx-auto aspect-[780/1170] h-[100vh]"
            >
              <MovieDetailSection
                movie={movie}
                onClickCloseButton={handleClickCloseIconButton}
              />
            </Dialog>
          )}
        </ThemeProvider>
      )}
    </>
  );
};

export default MovieDetailPageComponent;
