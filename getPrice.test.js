const getPrice = require("./getPrice");

describe("getPrice testing", function () {
  test("a specific product should have its true price", () => {
    expect(
      // note that the price may vary... because Amazon lol
      getPrice("https://www.boulanger.com/ref/1177246").prod_name
    ).toBe("Smartphone Xiaomi Redmi Note 11 Gris 64Go");
  });

  test("an unexistant product shouldn't have a price", () => {
    expect(
      getPrice("https://www.boulanger.com/ref/9999999").error
    ).toBe("TimeoutError: waiting for selector `.product-title__main` failed: timeout 30000ms exceeded: Product may be unavailable, or website may be down... or crawler was banned.");
  });
});
