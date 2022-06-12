import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const mysql = require('mysql');

const createConnection = () => {
    const con = mysql.createConnection({
        host: "45.9.188.170",
        port: "3306",
        user: "scra_per",
        password: "gHHpwjrqwCtGou",
        database: "scra_per"
    });

    con.connect( (err) => {
        if (err) throw err;

        console.log("Connection a la base ok");
    } )

    return con;
}

export const getProductsByUserUUID = (userUuid, callback) => {
    const connection = createConnection();

    connection.query(`SELECT * FROM Product WHERE idProduct in (SELECT idProduct FROM UserProduct WHERE userUUID = "${userUuid}")`,
        callback);
}

export const getProductById = (id, callback) => {
    const connection = createConnection();

    connection.query(`SELECT DISTINCT pp.price, pp.date, p.nom, p.createdAt, p.url, up.priceLimit
    FROM Product as p 
    INNER JOIN ProductPrice as pp ON pp.idProduct = p.idProduct
    INNER JOIN UserProduct as up ON up.idProduct = pp.idProduct
    WHERE p.idProduct = ${id}`, callback);
    
}
