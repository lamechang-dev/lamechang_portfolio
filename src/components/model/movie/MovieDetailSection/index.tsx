"use client";

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
import { useRef, useState } from "react";

type Props = {
  movie?: Movie;
  onClickCloseButton?: () => void;
};

// Poster aspect ratio: height / width (both mobile 1000x1500 and desktop 780x1170 are 1.5)
const POSTER_ASPECT_RATIO = 1.5;
// Minimum height (px) of panel that stays visible when collapsed
const PANEL_PEEK_HEIGHT = 48;

const MovieDetailSection: React.FC<Props> = ({
  movie,
  onClickCloseButton,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [slideDistance, setSlideDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleGlassPanelToggle = () => {
    if (!isCollapsed) {
      const container = containerRef.current;
      const panel = panelRef.current;
      if (container && panel) {
        const containerH = container.clientHeight;
        const panelH = panel.clientHeight;
        const containerW = container.clientWidth;
        const posterH = containerW * POSTER_ASPECT_RATIO;
        const currentPanelTop = containerH - panelH;
        // Slide the panel so its top edge aligns with the poster bottom,
        // but keep at least PANEL_PEEK_HEIGHT visible for re-expansion.
        const targetPanelTop = Math.min(
          posterH,
          containerH - PANEL_PEEK_HEIGHT
        );
        const distance = Math.max(0, targetPanelTop - currentPanelTop);
        setSlideDistance(distance);
      }
    }
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative",
        "h-dvh",
        "overflow-hidden",
        "bg-darkDefault"
      )}
    >
      {/* Poster image - fits full width, aspect ratio preserved */}
      <FadeInImage
        placeholder="blur"
        blurDataURL={POSTER_BLUR_IMAGE_BASE64}
        src={getImageUrlFromMovie(isMobile, movie)}
        className="w-full cursor-pointer"
        onClick={handleGlassPanelToggle}
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
        ref={panelRef}
        style={{
          transform: isCollapsed
            ? `translateY(${slideDistance}px)`
            : "translateY(0)",
          transition: "transform 0.35s ease-in-out",
        }}
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
          "gap-y-3",
          "tall:min-h-96",
          "short:min-h-0"
        )}
      >
        {/* Drag handle - tapping toggles poster/detail view */}
        <button
          onClick={handleGlassPanelToggle}
          aria-label={isCollapsed ? "詳細を表示" : "ポスターを表示"}
          className={clsx(
            "flex",
            "justify-center",
            "items-center",
            "w-full",
            "py-1",
            "-mt-1",
            "mb-1",
            "bg-transparent",
            "border-none",
            "outline-none",
            "cursor-pointer",
            "shrink-0"
          )}
        >
          <div
            className={clsx("w-10", "h-1", "bg-white/30", "rounded-full")}
          />
        </button>

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
