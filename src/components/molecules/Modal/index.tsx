import {
  Dialog,
  DialogProps,
  Typography,
  IconButton,
  Theme,
} from "@material-ui/core";
import { CloseRounded, Star } from "@material-ui/icons";
import clsx from "clsx";
import Chip from "src/components/atoms/Chip";
import { Movie } from "../../../domain/movies/model";
import { useTheme } from "@material-ui/styles";

type Props = {
  movie?: Movie;
  onClickCloseButton?: () => void;
} & DialogProps;

const Modal: React.VFC<Props> = ({
  movie,
  onClickCloseButton,
  ...dialogProps
}) => {
  const theme = useTheme<Theme>();
  return (
    <Dialog
      classes={{ paper: clsx("bg-black", "max-w-[400px]", "sm:max-h-[700px]") }}
      {...dialogProps}
    >
      <div>
        <div
          className={clsx(
            "absolute",
            "h-[600px]",
            "w-full",
            "max-w-[400px]",
            "bg-gradient-to-b from-transparent via-black/50 to-black"
          )}
        >
          <IconButton
            onClick={onClickCloseButton}
            className={clsx("absolute", "right-2", "top-2")}
          >
            <CloseRounded />
          </IconButton>
        </div>
        <img src={movie?.thumbnail} className={"max-w-[400px]"} />
      </div>
      <div
        className={clsx(
          "z-10",
          "mt-[-148px]",
          "flex",
          "flex-col",
          "p-4",
          "gap-y-2"
        )}
      >
        <div className={clsx("flex", "items-center", "gap-x-2")}>
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
          <div className={clsx("flex", "items-center")}>
            <Star className={clsx("text-yellow-400", "text-sm")} />
            <Typography className={clsx("text-yellow-400", "text-xs")}>
              {movie?.globalRate}
            </Typography>
          </div>
        </div>
        <div className={clsx("flex", "justify-start", "flex-wrap")}>
          {movie?.genres?.map((genre) => (
            <Chip
              text={genre?.name}
              key={genre?.id}
              id={genre?.id}
              variant="fill"
            />
          ))}
        </div>
        <div>
          <Typography className={clsx("text-xs")}>{movie?.overview}</Typography>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
