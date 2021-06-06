import { queryString, parse } from "./queryString";

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

describe("Query string to object", () => {
  it("should convert a query string to object", () => {
    const qs = "name=Gabriel&developer=front-end";

    expect(parse(qs)).toEqual({
      name: "Gabriel",
      developer: "front-end",
    });
  });

  it("should convert a query string of a single key-value to object", () => {
    const qs = "name=Gabriel";

    expect(parse(qs)).toEqual({
      name: "Gabriel",
    });
  });

  it("should convert a query string and a array", () => {
    const qs = "name=Gabriel&abilities=Js,TDD";

    expect(parse(qs)).toEqual({
      name: "Gabriel",
      abilities: ["Js", "TDD"],
    });
  });
});
