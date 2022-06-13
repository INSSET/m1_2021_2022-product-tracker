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

    connection.query(`SELECT Product.idProduct, Product.nom as 'productName', pricelimit, Product.createdAt, Website.nom as 'website' FROM Product 
                    INNER JOIN UserProduct ON Product.idProduct = UserProduct.idProduct    
                    INNER JOIN Website ON Product.idWebsite = Website.id
                    WHERE Product.idProduct in (SELECT idProduct FROM UserProduct WHERE userUUID = "${userUuid}")`,
    callback
  );
}

export const getProductById = (id, callback) => {
    const connection = createConnection();

    connection.query(`SELECT DISTINCT pp.price, pp.date, p.nom, p.createdAt, p.url, up.priceLimit
    FROM Product as p 
    INNER JOIN ProductPrice as pp ON pp.idProduct = p.idProduct
    INNER JOIN UserProduct as up ON up.idProduct = pp.idProduct
    WHERE p.idProduct = ${id}`, callback);
}

const getWebsiteId = (website, callback) => {
    const connection = createConnection();

    connection.query(`SELECT id FROM Website WHERE nom LIKE '${website}'`, callback);
}

const getLastProductId = (callback) => {
    const connection = createConnection();

    connection.query('SELECT MAX(idProduct) as id FROM Product', callback);
}

export const addProductInDb = (datas, callback) => {
    const connection = createConnection();

    getWebsiteId(datas.website, (err, row) => {
        if (err) throw err;

        var rows = Object.values(JSON.parse(JSON.stringify(row)));
        let websiteId = rows[0].id;

        if (websiteId == undefined) {
            throw "Aucun site associé au nom";
        }

        let currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

        connection.query(`INSERT INTO Product 
        (nom, url, idWebsite, createdAt, updatedAt)
            VALUES (
                '${datas.productName}',
                '${datas.productUrl}',
                ${websiteId},
                '${currentDate}',
                '${currentDate}'
                )
        ;`);
    })

    getLastProductId((err, rows) => {
        if (err) throw err;

        var rows = Object.values(JSON.parse(JSON.stringify(rows)));
        var idProduct = rows[0].id;

        let currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        
        connection.query(`INSERT INTO UserProduct 
            (idProduct, userUUID, priceLimit, createdAt, updatedAt)
            VALUES (
                ${idProduct},
                '${datas.userUUID}',
                ${datas.priceLimit},
                '${currentDate}',
                '${currentDate}'
            )
        `, callback);
    })
}