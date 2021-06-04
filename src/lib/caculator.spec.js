const { sum } = require("./calculator");

it("sum 2 and 2 the result must be 4", () => {
  expect(sum(2, 2)).toBe(4);
});

it("should sum 2 and 2 even if one of then is a string and the result must be", () => {
  expect(sum("2", "2")).toBe(4);
});

it("it is possible to add 2 plus 2 ", () => {
  expect(() => {
    sum("", 2);
  }).toThrowError();

  expect(() => {
    sum(["", 2]);
  }).toThrowError();
});
