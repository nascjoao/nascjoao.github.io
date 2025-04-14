import { describe, expect, it } from "vitest";
import flatObject from "./flat";

describe("flatObject", () => {
  it("should flatten a nested object", () => {
    const nestedObject = {
      a: {
        b: {
          c: 1,
        },
      },
    };

    const expectedFlatObject = {
      "a.b.c": 1,
    };

    const result = flatObject(nestedObject);

    expect(result).toEqual(expectedFlatObject);
  });
});
