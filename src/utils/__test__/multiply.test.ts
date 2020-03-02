import multiply from "../multiply";

describe("multiply number", () => {
  it("it should return correct result", () => {
    expect(multiply(9, 2)).toEqual(18);
  });
});
