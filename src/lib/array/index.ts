/**
 * @example
 * max: 3
 * return: [1, 2, 3]
 * max: 0
 * return: []
 */
export const getIncrementalArrayByMaxNum = (max: number) => {
  if (max < 0) {
    return [];
  }

  return [...Array(max)].map((_, i) => i + 1);
};
