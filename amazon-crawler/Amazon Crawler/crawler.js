import puppeteer from "puppeteer";

// Function for getting the price of a product on Amazon
async function getPrice(url) {
  try {
    var browser = await puppeteer.launch();
    var page = await browser.newPage();

    await page.goto(url);

    var price = await page.evaluate(() => {
      return document.querySelector(".a-price .a-offscreen").innerText;
    });

    await browser.close();
    return price;
  } catch (err) {
    console.error(err);
  }
}

export { getPrice };
