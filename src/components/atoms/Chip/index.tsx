import { Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useTheme } from "@material-ui/styles";
import { useCallback } from "react";

type Props = {
  text?: string;
  clickable?: boolean;
  variant?: "outlined" | "fill";
  onClick?: (id: number) => void;
  id?: number;
};

const Chip: React.VFC<Props> = ({
  text,
  clickable = false,
  variant = "fill",
  onClick,
  id,
}) => {
  const theme = useTheme<Theme>();

  const handleClick = useCallback(() => {
    id && onClick?.(id);
  }, [id, onClick]);

  return (
    <div
      onClick={handleClick}
      className={clsx(
        "break-keep",
        "px-2",
        "py-1",
        "rounded-xl",
        "self-start",
        "transition",
        variant === "fill"
          ? theme.palette.type === "light"
            ? "bg-lightPaper"
            : "bg-darkPaper"
          : "",
        theme.palette.type === "light"
          ? "border-lightPaper"
          : "border-darkPaper",
        "border-2",
        clickable && "cursor-pointer"
      )}
    >
      {text && (
        <Typography className="text-[12px]" variant="body1">
          {text}
        </Typography>
      )}
    </div>
  );
};

export default Chip;
