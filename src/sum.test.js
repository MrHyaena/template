import { sum } from "./sum.js";
import { capitalize } from "./sum.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Capitalize first letter", () => {
  expect(capitalize("man")).toBe("Man");
});
