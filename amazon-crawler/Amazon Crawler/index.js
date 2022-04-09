import { getPrice } from "./getPrice.js";

var param_url = process.argv[2];
getPrice(param_url).then((result) => {
  console.log(result);
});
