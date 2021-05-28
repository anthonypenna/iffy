import { If } from "../src";

describe("If", () => {
  describe("when the condition is true", () => {
    test("it returns the then value", () => {
      const actual = If(2 > 1, { then: 2, else: 1 });
      const expected = 2;
      expect(actual).toBe(expected);
    });
  });

  describe("when the condition is false", () => {
    test("it returns the else value", () => {
      const actual = If(2 < 1, { then: 2, else: 1 });
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });

  describe("when there are shallowly nested conditions", () => {
    test("it returns the correct value", () => {
      const actual = If(2 < 1, {
        then: 2,
        else: If(1 + 1 === 2, { then: 1, else: 0 }),
      });
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });

  describe("when there are deeply nested conditions", () => {
    test("it returns the correct value", () => {
      const actual = If(10 < 9, {
        then: 10,
        else: If(9 < 8, {
          then: 9,
          else: If(8 < 7, { then: 8, else: If(7 < 6, { then: 7, else: 6 }) }),
        }),
      });
      const expected = 6;
      expect(actual).toBe(expected);
    });
  });
});
