const { queryString } = require("./queryString");

describe("Object to query string", () => {
  it("should creating a valid string", () => {
    const obj = {
      name: "Fabio",
      profession: "developer",
    };

    expect(queryString(obj)).toBe("name=Fabio&profession=developer");
  });

  it("must create a valid string, using a string and an array", () => {
    const obj = {
      name: "Fabio",
      abilities: ["Js", "TDD"],
    };

    expect(queryString(obj)).toBe("name=Fabio&abilities=Js,TDD");
  });

  it("must create a valid string, using a string and an array", () => {
    const obj = {
      name: "Fabio",
      abilities: {
        first: "JS",
        second: "TDD",
      },
    };

    expect(() => queryString(obj)).toThrowError();
  });
});
