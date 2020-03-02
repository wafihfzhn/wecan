import fibonacci from "../fibonacci";

describe("fibonacci numbers", () => {
  it("should return correct result", () => {
    expect(fibonacci(5)).toHaveLength(5);
  });

  it("it should return correct length result", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });
});
