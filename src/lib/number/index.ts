export const getRoundNumToNearstHalf = (num: number) => {
  const half = 0.5;
  const rounded = Math.round(num / half) * half;
  return rounded;
};
