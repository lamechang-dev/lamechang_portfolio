import { NextPage } from "next";
import HeaderMenuBar from "src/components/ui/HeaderMenu";
import ContentSection from "src/components/ui/ContentSection";
import clsx from "clsx";
import { useViewModel } from "./useViewModel";
import Chip from "src/components/ui/Chip";
import { isMobile } from "react-device-detect";
import PageContainer from "src/components/ui/PageContainer";
import { Typography } from "src/components/ui/Typography";
import { getImageUrlFromMovie } from "src/domain/movies/getter";
import { POSTER_BLUR_IMAGE_BASE64 } from "src/domain/movies/constants";
import { FadeInImage } from "src/components/ui/FadeInImage";

const MoviesPageComponent: NextPage = () => {
  const {
    selectedMovieList,
    genreList,
    handleClickGenreChip,
    handleClickResetFilterButton,
    handleClickMovieThumbnail,
    selectedGenreIds,
  } = useViewModel();

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
            {genreList?.length > 0 &&
              genreList.map((genre) => (
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
              {selectedMovieList?.map((movie) => {
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

export default MoviesPageComponent;
