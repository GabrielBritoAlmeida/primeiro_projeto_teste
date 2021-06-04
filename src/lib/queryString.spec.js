const { queryString } = require("./queryString");

describe("Object to query string", () => {
  it("should creating a valid string", () => {
    const obj = {
      name: "Fabio",
      profession: "developer",
    };

    expect(queryString(obj)).toBe("name=Fabio&profession=developer");
  });
});
