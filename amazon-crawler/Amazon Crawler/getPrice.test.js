describe("getPrice testing", function () {
  test("a specific product should have its true price", () => {
    expect(
      // note that the price may vary... because Amazon lol
      getPrice("https://www.amazon.fr/Alive-1997-Daft-Punk/dp/B09CHDZSV7")
    ).toBe("8,99€");
  });

  test("an unavailable product shouldn't have a price", () => {
    expect(
      getPrice("https://www.amazon.fr/Alive-1997-Daft-Punk/dp/B099XF6XY7")
    ).toBe("Product may be unavailable.");
  });
});
