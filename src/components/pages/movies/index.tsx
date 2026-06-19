"use client";

import { NextPage } from "next";
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
import { CommonData } from "src/lib/getCommonData";
import Link from "next/link";

const MoviesPageComponent: NextPage<CommonData> = ({ myFavoriteMovieList }) => {
  const {
    filteredMovieList,
    handleClickGenreChip,
    handleClickResetFilterButton,
    selectedGenres,
    genres,
  } = useViewModel({ myFavoriteMovieList });


  return (
    <PageContainer>
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
            {genres?.length > 0 &&
              genres.map((genre) => (
                <Chip
                  text={genre?.name}
                  key={genre?.id}
                  clickable
                  onClick={() => handleClickGenreChip(genre)}
                  id={genre?.id}
                  variant={
                    selectedGenres.find(
                      (selectedGenre) => selectedGenre.id === genre?.id
                    )
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
              {filteredMovieList?.map((movie) => {
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
                    >
                      <Link href={`/movies/${movie.id}`}>
                        <FadeInImage
                          placeholder="blur"
                          blurDataURL={POSTER_BLUR_IMAGE_BASE64}
                          src={getImageUrlFromMovie(isMobile, movie)}
                          alt={movie.title}
                          className={clsx("text-center", "rounded-md")}
                          width={300}
                          height={450}
                          sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 20vw"
                        />
                      </Link>
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
