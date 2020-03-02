import sumNumbers from "../sumNumbers";

describe("sum number", () => {
  it("it should return correct result", () => {
    expect(sumNumbers(10, 20)).toEqual(30);
  });
});
