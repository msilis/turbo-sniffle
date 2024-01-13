import { it, expect } from "vitest";
import { add } from "./math";

it("should add all number values in array", () => {
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );
  const result = add(numbers);
  expect(result).toBe(expectedResult);
});

it("should return NaN if at least one invalid number is provided", () => {
  const numbers = ["a", 2];

  const result = add(numbers);
  expect(result).toBeNaN;
});

it("should return correct sum if adding numeric string values", () => {
  const numbers = ["1", "2"];
  const result = add(numbers);
  const expectedResult = numbers.reduce(
    (prevValue, currValue) => +prevValue + +currValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

it("should throw an error if no error is passed into function", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

it("should throw an error if provided with multiple arguments instead of array", () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrow();
});
