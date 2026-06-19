import { CloseRounded } from "@mui/icons-material";
import clsx from "clsx";
import Chip from "src/components/ui/Chip";
import { Movie } from "../../../../domain/movies/model";
import { Typography } from "src/components/ui/Typography";
import { IconButton } from "src/components/ui/IconButton";
import { isMobile } from "react-device-detect";
import { RateStars } from "../../../ui/RateStars/index";
import { getImageUrlFromMovie } from "src/domain/movies/getter";
import { POSTER_BLUR_IMAGE_BASE64 } from "src/domain/movies/constants";
import { FadeInImage } from "src/components/ui/FadeInImage";
import CollapsibleText from "src/components/ui/CollapsibleText";

type Props = {
  movie?: Movie;
  onClickCloseButton?: () => void;
};

const MovieDetailSection: React.FC<Props> = ({
  movie,
  onClickCloseButton,
}) => {
  return (
    <div className={clsx("relative", "h-dvh", "overflow-hidden", "bg-darkDefault")}>
      {/* Poster image - fits full width, aspect ratio preserved */}
      <FadeInImage
        placeholder="blur"
        blurDataURL={POSTER_BLUR_IMAGE_BASE64}
        src={getImageUrlFromMovie(isMobile, movie)}
        className="w-full"
        width={isMobile ? 1000 : 780}
        height={isMobile ? 1500 : 1170}
        priority
      />

      {/* Top gradient + close button */}
      <div
        className={clsx(
          "absolute",
          "inset-x-0",
          "top-0",
          "h-28",
          "bg-gradient-to-b",
          "from-darkDefault",
          "to-transparent",
          "z-10"
        )}
      >
        <IconButton
          onClick={onClickCloseButton}
          className={clsx("absolute", "right-2", "top-2")}
        >
          <CloseRounded />
        </IconButton>
      </div>

      {/* Glass content panel */}
      <div
        className={clsx(
          "absolute",
          "bottom-0",
          "left-0",
          "right-0",
          "z-20",
          "rounded-t-3xl",
          "backdrop-blur-md",
          "bg-gradient-to-b",
          "from-black/20",
          "to-darkDefault",
          "overflow-y-auto",
          "flex",
          "flex-col",
          "px-5",
          "pt-4",
          "pb-8",
          "gap-y-3"
        )}
      >
        {/* Drag handle */}
        <div
          className={clsx(
            "w-10",
            "h-1",
            "bg-white/30",
            "rounded-full",
            "mx-auto",
            "mb-1",
            "shrink-0"
          )}
        />

        <Typography
          className={clsx(
            "text-xl",
            "font-bold",
            "text-white",
            "animate-fade-in-up",
            "shrink-0"
          )}
        >
          {movie?.title}
        </Typography>

        <div className={clsx("flex", "items-center", "gap-x-2", "shrink-0")}>
          <div className={clsx("animate-fade-in-up", "[animation-delay:0.1s]")}>
            <RateStars rateNum={movie?.globalRate} />
          </div>
          {movie?.voteCount != null && (
            <Typography
              className={clsx(
                "text-xs",
                "text-gray-400",
                "animate-fade-in-up",
                "[animation-delay:0.25s]"
              )}
            >
              {movie.voteCount.toLocaleString()} votes
            </Typography>
          )}
        </div>

        <div
          className={clsx(
            "flex",
            "justify-start",
            "flex-wrap",
            "gap-1",
            "animate-fade-in-up",
            "[animation-delay:0.35s]",
            "shrink-0"
          )}
        >
          {movie?.genres?.map((genre) => (
            <Chip
              text={genre?.name}
              key={genre?.id}
              id={genre?.id}
              variant="outlined"
            />
          ))}
        </div>

        {movie?.overview && (
          <div
            className={clsx("animate-fade-in-up", "[animation-delay:0.5s]")}
          >
            <CollapsibleText
              text={movie.overview}
              maxLines={3}
              typographyProps={{
                className: clsx("text-sm", "text-gray-300", "leading-relaxed"),
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailSection;
