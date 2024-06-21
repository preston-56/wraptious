const { get_random_items_from_range } = require("./index");

describe("get_random_items_from_range test", () => {
  it("generates 5 numbers out of 20 in random order", () => {
    const randomItems = get_random_items_from_range(5, 1, 20, 1);
    expect(randomItems.length).toBe(5);
    randomItems.forEach((item) => {
      expect(item).toBeGreaterThanOrEqual(1);
      expect(item).toBeLessThanOrEqual(20);
    });
  });

  it("throws an error when number of items is greater than range length", () => {
    expect(() => get_random_items_from_range(5, 10, 30, 5)).toThrow(new Error("Out of bounds, only 4 numbers are possible"));
    
  });

  it("generates only 4 numbers in random order", () => {
    const randomItems = get_random_items_from_range(4, 10, 30, 5);
    expect(randomItems.length).toBe(4);
    randomItems.forEach((item) => {
      expect(item).toBeGreaterThanOrEqual(10);
      expect(item).toBeLessThanOrEqual(30);
      expect((item - 10) % 5).toBe(0);
    });
  });

  it("generates 9 numbers out of 13 in random order", () => {
    const randomItems = get_random_items_from_range(9, 50, 200, 12);
    expect(randomItems.length).toBe(9);
    randomItems.forEach((item) => {
      expect(item).toBeGreaterThanOrEqual(50);
      expect(item).toBeLessThanOrEqual(200);
      expect((item - 50) % 12).toBe(0);
    });
  });
});
