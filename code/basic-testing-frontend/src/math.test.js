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
