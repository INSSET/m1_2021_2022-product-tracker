import express from 'express';
import { getPrice } from "./getPrice.js";

const router = express.Router()

router.get('/getPrice', async (req, res) => {
  const product_data = await getPrice(req.query.url);
  res.statusCode = product_data.code;
  if (product_data.code === 200) {
    res.send({
      product_name: product_data.prod_name,
      price: product_data.price
    });
  }
  else {
    res.send({
      error: product_data.error
    });
  }
  
});

const port = 5100;

const app = express()

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});