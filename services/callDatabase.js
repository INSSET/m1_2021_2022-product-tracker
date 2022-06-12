import { createRequire } from "module";
const require = createRequire(import.meta.url);

const mysql = require("mysql");

const createConnection = () => {
  const con = mysql.createConnection({
    host: "45.9.188.170",
    port: "3306",
    user: "scra_per",
    password: "gHHpwjrqwCtGou",
    database: "scra_per",
  });

  con.connect((err) => {
    if (err) throw err;

    console.log("Connection a la base ok");
  });

  return con;
};

export const getProductsByUserUUID = (userUuid, callback) => {
  const connection = createConnection();

  connection.query(
    `SELECT Product.idProduct, Product.nom as 'productName', pricelimit, Product.createdAt, Website.nom as 'website' FROM Product 
                    INNER JOIN UserProduct ON Product.idProduct = UserProduct.idProduct    
                    INNER JOIN Website ON Product.idWebsite = Website.id
                    WHERE Product.idProduct in (SELECT idProduct FROM UserProduct WHERE userUUID = "${userUuid}")`,
    callback
  );
};
