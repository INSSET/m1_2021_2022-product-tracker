const puppeteer = require("puppeteer");
const url =
  "https://www.amazon.fr/Kingston-SSD-A400-240GB-Disque-SATA/dp/B01N5IB20Q";

// Future function for getting the price of a product on Amazon
try {
  (async () => {
    var browser = await puppeteer.launch();
    var page = await browser.newPage();

    await page.goto(url);

    var price = await page.evaluate(() => {
      return document.querySelector(".a-price .a-offscreen").innerText;
    });

    await browser.close();
    console.log(price);
  })();
} catch (err) {
  console.error(err);
}
