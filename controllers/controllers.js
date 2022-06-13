import {callRegisterApi, callLoginApi} from "../services/callAuth.js";
import { getProductsByUserUUID, getProductById, addProductInDb } from "../services/callDatabase.js";

export const registerAction = async (req, res) => {
  if (
    !req.body.email ||
    !req.body.password ||
    !req.body.first_name ||
    !req.body.last_name
  ) {
    return res
      .status(417)
      .json({ message: "Pas toutes les informations nécéssaires" });
  }

  let returnedDatas = await callRegisterApi(req.body);
  if (!returnedDatas) {
    return res.status(503).json({ message: "Une erreur est survenue" });
  }

  return res.status(200).json({ datas: returnedDatas });
};

export const loginAction = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(417)
      .json({ message: "Pas toutes les informations nécéssaires" });
  }

  let loginDatas = await callLoginApi(req.body);
  if (!loginDatas) {
    return res.status(503).json({ message: "Une erreur est survenue" });
  }

  return res.status(200).json({ datas: loginDatas });
};

export const getProductsByUuidAction = (req, res) => {
  const uuid = req.query.userUUID;

  if (uuid == undefined) {
    return res
      .status(400)
      .json({ message: "Pas de paramètres userUUID donné" });
  }

  getProductsByUserUUID(uuid, (err, rows) => {
    if (err) throw err;

    var toReturnedArray = [];

    var arrayRows = Object.values(JSON.parse(JSON.stringify(rows)));

    arrayRows.forEach((row) => {
      let newObject = {};

      newObject.product_id = row.idProduct;
      newObject.product_name = row.productName;
      newObject.price_limit = row.pricelimit;
      newObject.date_added = row.createdAt;
      newObject.website = row.website;

      toReturnedArray.push(newObject);
     })

        return res.status(200).json(toReturnedArray);
    });
}

export const getProductByIdAction = (req, res) => {
    const id = req.params.id;

        getProductById(id, (err, rows) => {
            if (err) return res.status(500);

            if (Object.keys(rows).length === 0) {
                return res.status(404).json({message: "Product not found"});
            }

            var arrayRows = Object.values(JSON.parse(JSON.stringify(rows)));
            
            if (arrayRows == []) {
                res.status(404);
            }
            
            var datas = {};
            datas.product_name = arrayRows[0].nom;
            datas.price_limit = arrayRows[0].priceLimit;
            datas.website = arrayRows[0].url;
            datas.date_added = arrayRows[0].createdAt;
    
            let prices = []
    
            arrayRows.forEach( (row) => {
                let bufferData = {}
                bufferData.price = row.price
                bufferData.date = row.date
                prices.push(bufferData);
            })
    
            datas.prices = prices;
    
            return res.status(200).json(datas);
        })
}

export const addProductInDbAction = (req, res) => {
    let datas = req.body;
    if (
        !datas.productName ||
        !datas.productUrl ||
        !datas.priceLimit ||
        !datas.website
        ) {
        return res
          .status(417)
          .json({ message: "Pas toutes les informations nécéssaires" });
      }

    
      addProductInDb(datas, (err) => {
        if (err) res.status(500);
        
        res.status(200).json({message: "1 row inserted"});
      })
    
}
