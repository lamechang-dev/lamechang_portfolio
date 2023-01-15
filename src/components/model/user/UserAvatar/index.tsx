import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";

export const UserAvatar: React.VFC = () => {
  return (
    <Avatar
      alt="Ryosuke Yoshimoto"
      src="/img/portfolio.png"
      className={clsx("w-16", "h-16", "border-white", "border-2")}
    />
  );
};
