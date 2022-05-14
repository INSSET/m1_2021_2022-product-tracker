import puppeteer from "puppeteer";

var SELECTORS = {
  productTitle: "#productTitle",
  productPrice: '#buybox [data-feature-name="corePrice"] .a-price .a-offscreen',
};

// Function for getting the price of a product on Amazon
async function getPrice(url) {
  // Create a new browser
  var browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 1280,
      height: 720,
    },
  });
  // Create a new page in the browser
  var page = await browser.newPage();
  try {
    // Go to the url
    await page.goto(url);
    // Wait for the page to load
    await page.waitForSelector(SELECTORS.productTitle, { visible: true });

    // get the price of the product
    try {
      return await page.$eval(SELECTORS.productPrice, (el) => el.innerText);
    } catch (error) {
      console.log("Error getting price: ", error);
      return {
        error: "Product may be unavailable.",
      };
    }
  } catch (err) {
    console.error(err);
  } finally {
    // Free the resources
    await page.close();
    await browser.close();
  }
}

export { getPrice };
