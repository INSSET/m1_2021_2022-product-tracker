import puppeteer from "puppeteer";

const SELECTORS = {
  productTitle: ".product-title__main",
  productPrice: '.price .price__amount',
};
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4889.0 Safari/537.36";

function checkUrl(url) {
  if (url != null && url.length > 0) {
    return url.match(/^https:\/\/www.boulanger.com\/ref\/\d+$/);
  }
  else {
    return false;
  }
}

// Function for getting the price of a product on Boulanger.com
async function getPrice(url) {
  if (!checkUrl(url)) {
    return {
      error: `Invalid URL (${url})`,
      code: 400
    };
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
    const response = await page.goto(url);
    // only continue if we don't have an error code
    if (response.status() !== 200) {
      return {
        code: response.status(),
        error: `Status code ${response.status()}: Product may be unavailable, or website may be down... or crawler was banned.`
      };
    }

    // get the price of the product
    try {
      // Wait for the page to load
      await page.waitForSelector(SELECTORS.productTitle, { visible: true, timeout: 10000 });

      // get product data
      let price = await page.$eval(SELECTORS.productPrice, (el) => el.innerText);
      let prod_name = await page.$eval(SELECTORS.productTitle, (el) => el.innerText);
      return {
        code: 200,
        price: price,
        prod_name: prod_name,
        seller_name: "Boulanger",
      };
    } catch (error) {
      return {
        error: `${error}: Website might have changed and is unrecognizable.`,
        code: 500
      };
    }
  } catch (error) {
    return {
      error: `${error}: Website may be down, or crawler might got banned.`,
      code: 500
    };
  } finally {
    // Free the resources
    await page.close();
    await browser.close();
  }
}

export { getPrice };
