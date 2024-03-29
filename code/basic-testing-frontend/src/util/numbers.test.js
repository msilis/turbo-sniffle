import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should return a number when a number string is passed in", () => {
  const stringNumber = "8";
  const result = transformToNumber(stringNumber);

  expect(result).toBeTypeOf("number");
});

it("should return NaN if a letter is passed in as an argument", () => {
  const string = "a";
  const result = transformToNumber(string);

  expect(result).toBe(NaN);
});

it("should return NaN if multiple values are passed in", () => {
  const string1 = "a";
  const string2 = "b";

  const result = transformToNumber(string1, string2);

  expect(result).toBe(NaN);
});
