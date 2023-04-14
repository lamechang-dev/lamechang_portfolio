import { getIncrementalArrayByMaxNum } from "src/lib/array";

describe("getIncrementalArrayByMaxNum", () => {
  test("maxが1の場合、[1]が返される", () => {
    expect(getIncrementalArrayByMaxNum(1)).toEqual([1]);
  });

  test("maxが5の場合、[1, 2, 3, 4, 5]が返される", () => {
    expect(getIncrementalArrayByMaxNum(5)).toEqual([1, 2, 3, 4, 5]);
  });
});
