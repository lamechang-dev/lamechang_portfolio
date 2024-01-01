import { getRoundNumToNearstHalf } from "src/lib/number";

describe("getRoundNumToNearstHalf", () => {
  it("should round a number to the nearest half", () => {
    expect(getRoundNumToNearstHalf(3.7)).toBe(3.5);
    expect(getRoundNumToNearstHalf(3.8)).toBe(4);
    expect(getRoundNumToNearstHalf(4)).toBe(4);
    expect(getRoundNumToNearstHalf(4.2)).toBe(4);
    expect(getRoundNumToNearstHalf(4.25)).toBe(4.5);
    expect(getRoundNumToNearstHalf(4.6)).toBe(4.5);
    expect(getRoundNumToNearstHalf(-3.7)).toBe(-3.5);
    expect(getRoundNumToNearstHalf(-3.8)).toBe(-4);
    expect(getRoundNumToNearstHalf(-4)).toBe(-4);
    expect(getRoundNumToNearstHalf(-4.2)).toBe(-4);
    expect(getRoundNumToNearstHalf(-4.25)).toBe(-4);
    expect(getRoundNumToNearstHalf(-4.6)).toBe(-4.5);
  });
});
