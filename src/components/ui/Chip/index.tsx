import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { muiThemeType } from "src/context/ui/theme";

type Props = {
  text?: string;
  clickable?: boolean;
  variant?: "outlined" | "fill";
  onClick?: (id: number) => void;
  id?: number;
};

const Chip: React.FC<Props> = ({
  text,
  clickable = false,
  variant = "fill",
  onClick,
  id,
}) => {
  const themeType = useRecoilValue(muiThemeType);

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
          ? themeType === "light"
            ? "bg-lightPaper"
            : "bg-darkPaper"
          : "",
        themeType === "light" ? "border-lightPaper" : "border-darkPaper",
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
