import { Avatar } from "@mui/material";
import clsx from "clsx";

type Props = {
  className?: string;
};

export const UserAvatar: React.FC<Props> = ({ className }) => {
  return (
    <Avatar
      alt="Ryosuke Yoshimoto"
      src="/img/portfolio.png"
      className={clsx("border-white", "border-2", className)}
    />
  );
};
