const findEvenIndex = require("./findEvenIndex");

describe("findEvenIndex", () => {
  it("returns an index of 1 for an array of [1,1,1]", () => {
    expect(findEvenIndex([1, 1, 1])).toEqual(1);
  });
});
