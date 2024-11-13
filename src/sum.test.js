import { sum } from "./sum.js";
import { capitalize } from "./sum.js";
import { reverseString } from "./sum.js";
import { calculator } from "./sum.js";
import { caesar } from "./sum.js";
import { analyzeArray } from "./sum.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Capitalize first letter", () => {
  expect(capitalize("man")).toBe("Man");
});

test("Reverse string", () => {
  expect(reverseString("dog")).toBe("god");
});

test("Add function", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Sub function", () => {
  expect(calculator.substract(5, 2)).toBe(3);
});

test("Div function", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("Mul function", () => {
  expect(calculator.multiply(3, 1)).toBe(3);
});

test("Caesar", () => {
  expect(caesar("dog", 2)).toBe("fqi");
});

test("Analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
