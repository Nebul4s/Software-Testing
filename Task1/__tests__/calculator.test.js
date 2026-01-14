import { add, divide } from "../src/calculator.js";

/*
describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("throws when inputs are not numbers", () => {
    expect(() => add("2", 3)).toThrow("add expects two numbers");
  });
});
*/
describe("divide", () => {
  it("divides two numbers", () => {
    expect(divide(2, 1)).toBe(2);
  });

  it("throws when first input is not a number", () => {
    expect(() => divide("2", 3)).toThrow("Both arguments must be numbers");
  });

  it("throws when second input is not a number", () => {
    expect(() => divide(3, "2")).toThrow("Both arguments must be numbers");
  });

  it("throws when the first input is NaN", () => {
    expect(() => divide(NaN, 3)).toThrow("Arguments cannot be NaN");
  });

  it("throws when the second input is NaN", () => {
    expect(() => divide(3, NaN)).toThrow("Arguments cannot be NaN");
  });

  it("throws when the second input is 0", () => {
    expect(() => divide(2, 0)).toThrow("Division by zero is not allowed");
  });
});
