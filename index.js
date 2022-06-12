import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Auth-Token"
  );
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
