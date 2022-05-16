import express from 'express';
import { getPrice } from "./getPrice.js";

const router = express.Router()

router.get('/getPrice', async (req, res) => {
  const product_data = await getPrice(req.query.url);
  res.statusCode = product_data.code;
  res.send(product_data);
});

const port = 5000;

const app = express()

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});