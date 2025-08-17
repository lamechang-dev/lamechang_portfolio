import { Star, StarHalf, StarBorder } from "@mui/icons-material";
import clsx from "clsx";
import { useViewModel } from "./useViewModel";
import { getIncrementalArrayByMaxNum } from "../../../lib/array/index";

type Props = {
  rateNum?: number;
};

export const RateStars: React.VFC<Props> = ({ rateNum }) => {
  const { fullStarCount, isHalfStarExist, blankStartCount } = useViewModel({
    rateNum,
  });
  return (
    <div>
      {getIncrementalArrayByMaxNum(fullStarCount).map((idx) => (
        <Star key={idx} className={clsx("text-yellow-400", "text-sm")} />
      ))}
      {isHalfStarExist && (
        <StarHalf className={clsx("text-yellow-400", "text-sm")} />
      )}
      {getIncrementalArrayByMaxNum(blankStartCount).map((idx) => (
        <StarBorder key={idx} className={clsx("text-yellow-400", "text-sm")} />
      ))}
    </div>
  );
};
