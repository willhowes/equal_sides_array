const findEvenIndex = require("./findEvenIndex");

describe("findEvenIndex", () => {
  it("returns the middle index where all the numbers are the same", () => {
    expect(findEvenIndex([1, 1, 1])).toEqual(1);
  });

  it("returns the middle index where the array is a mirror image", () => {
    expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toEqual(3);
  });

  it("returns the index position of 1 where that is the halfway point", () => {
    expect(findEvenIndex([5, 5, 3, 6, 3, 1])).toEqual(2);
  });

  it("Returns -1 in the edge case where no halfpoint is found", () => {
    expect(findEvenIndex([1, 2, 3, 4, 5, 6])).toEqual(-1);
  });
});
