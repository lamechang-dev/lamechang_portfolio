type ViewProps = {
  rateNum?: number;
};

const MAX_STAR_NUM = 5;

export const useViewModel = ({ rateNum }: ViewProps) => {
  if (!rateNum) {
    return {
      fullStarCount: 0,
      isHalfStarExist: false,
      blankStartCount: 5,
    };
  }

  const fullStarCount = Math.floor(rateNum);
  const isHalfStarExist = rateNum - Math.floor(rateNum) === 0.5;
  const blankStartCount =
    MAX_STAR_NUM - fullStarCount - (isHalfStarExist ? 1 : 0);

  return {
    fullStarCount,
    isHalfStarExist,
    blankStartCount,
  };
};
