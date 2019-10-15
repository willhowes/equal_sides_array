const findEvenIndex = require("./findEvenIndex");

describe("findEvenIndex", () => {
  it("returns the middle index where all the numbers are the same", () => {
    expect(findEvenIndex([1, 1, 1])).toEqual(1);
  });

  it("returns the middle index where the array is a mirror image", () => {
    expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toEqual(3);
  });
});
