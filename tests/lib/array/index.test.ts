import { getIncrementalArrayByMaxNum } from "src/lib/array";

describe("getIncrementalArrayByMaxNum", () => {
  test("maxが1の場合、[1]が返される", () => {
    expect(getIncrementalArrayByMaxNum(1)).toEqual([1]);
  });

  test("maxが5の場合、[1, 2, 3, 4, 5]が返される", () => {
    expect(getIncrementalArrayByMaxNum(5)).toEqual([1, 2, 3, 4, 5]);
  });

  test("maxが0以下の場合、空の配列[]が返される", () => {
    expect(getIncrementalArrayByMaxNum(0)).toEqual([]);
    expect(getIncrementalArrayByMaxNum(-1)).toEqual([]);
  });

  test("maxが小数の場合、TypeErrorが発生する", () => {
    expect(() => {
      getIncrementalArrayByMaxNum(2.5);
    }).toThrow(TypeError);
  });
});
