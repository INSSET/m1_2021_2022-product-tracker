import puppeteer from "puppeteer";

const SELECTORS = {
  productTitle: ".product-title__main",
  productPrice: '.price .price__amount',
};
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4889.0 Safari/537.36";

function checkUrl(url) {
  return url.match(/^https:\/\/www.boulanger.com\/ref\/\d+$/);
}

// Function for getting the price of a product on Boulanger.com
async function getPrice(url) {
  if (!checkUrl(url)) {
    return { error: `Invalid URL (${url})` };
  }

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
  await page.setUserAgent(USER_AGENT);
  try {
    // Go to the url
    await page.goto(url);
    // Wait for the page to load
    await page.waitForSelector(SELECTORS.productTitle, { visible: true });

    // get the price of the product
    try {
      let price = await page.$eval(SELECTORS.productPrice, (el) => el.innerText);
      let prod_name = await page.$eval(SELECTORS.productTitle, (el) => el.innerText);
      return {
        price: price,
        prod_name: prod_name,
        seller_name: "Boulanger",
      };
    } catch (error) {
      return {
        error: `${error}: Product may be unavailable, or user didn't specify a valid URL for a specific product.`,
      };
    }
  } catch (error) {
    return {
      error: `${error}: Product may be unavailable, or website may be down... or crawler was banned.`,
    };
  } finally {
    // Free the resources
    await page.close();
    await browser.close();
  }
}

export { getPrice };
