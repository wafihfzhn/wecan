import primeFactors from "../primeFactors";

describe("multiply number", () => {
  it("should return correct result", () => {
    expect(primeFactors(5)).toHaveLength(5);
  });

  it("it should return correct length result", () => {
    expect(primeFactors(5)).toEqual([2, 3, 5, 7, 11]);
  });
});
