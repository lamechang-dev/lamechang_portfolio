/**
 * @example
 * max: 3
 * return: [1, 2, 3]
 */
export const getIncrementalArrayByMaxNum = (max: number) => {
  return [...Array(max)].map((_, i) => i + 1);
};
