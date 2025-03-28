import { Theme } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import clsx from "clsx";
import Chip from "src/components/ui/Chip";
import { Movie } from "../../../../domain/movies/model";
import { useTheme } from "@material-ui/styles";
import { Typography } from "src/components/ui/Typography";
import { IconButton } from "src/components/ui/IconButton";
import { isMobile } from "react-device-detect";
import { RateStars } from "../../../ui/RateStars/index";
import { getImageUrlFromMovie } from "src/domain/movies/getter";
import { POSTER_BLUR_IMAGE_BASE64 } from "src/domain/movies/constants";
import { FadeInImage } from "src/components/ui/FadeInImage";

type Props = {
  movie?: Movie;
  onClickCloseButton?: () => void;
};

const MovieDetailSection: React.VFC<Props> = ({
  movie,
  onClickCloseButton,
}) => {
  const theme = useTheme<Theme>();

  return (
    <>
      <div className={clsx("relative", "lt-sm:h-screen")}>
        <div
          className={clsx(
            "absolute",
            "h-full",
            "w-full",
            "max-w-screen",
            "bg-gradient-to-b",
            isMobile
              ? "from-transparent via-black/90 to-black"
              : "from-transparent via-black/70 to-black",
            "z-10"
          )}
        >
          <IconButton
            onClick={onClickCloseButton}
            className={clsx(
              isMobile ? "fixed" : "absolute",
              "right-2",
              "top-2"
            )}
          >
            <CloseRounded />
          </IconButton>
        </div>
        <FadeInImage
          placeholder="blur"
          blurDataURL={POSTER_BLUR_IMAGE_BASE64}
          loading="lazy"
          src={getImageUrlFromMovie(isMobile, movie)}
          className={clsx("sm:h-screen", "object-cover")}
          width={1000}
          height={1500}
        />
      </div>
      <div
        className={clsx("mt-[-280px]", "flex", "flex-col", "p-4", "gap-y-2")}
      >
        <div className={clsx("z-20", "flex", "items-center", "gap-x-2")}>
          <Typography
            className={clsx(
              "text-lg",
              "text-ellipsis",
              "overflow-hidden",
              "whitespace-nowrap",
              theme.palette.primary
            )}
          >
            {movie?.title}
          </Typography>
          <div className={clsx("flex", "items-center", "z-20")}>
            <RateStars rateNum={movie?.globalRate} />
          </div>
        </div>
        <div
          className={clsx(
            "z-20",
            "flex",
            "justify-start",
            "flex-wrap",
            "gap-1"
          )}
        >
          {movie?.genres?.map((genre) => (
            <Chip
              text={genre?.name}
              key={genre?.id}
              id={genre?.id}
              variant="fill"
            />
          ))}
        </div>
        <div className={clsx("z-20")}>
          <Typography className={clsx("z-20", "text-xs")}>
            {movie?.overview}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default MovieDetailSection;
