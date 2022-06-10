import {callRegisterApi, callLoginApi} from "../services/callAuth.js";
import { getProductsByUserUUID } from "../services/callDatabase.js";

export const registerAction = async (req, res) => {

    if (!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name) {
        return res.status(417).json({"message": "Pas toutes les informations nécéssaires"});
    }
    
    let returnedDatas = await callRegisterApi(req.body);
    if (!returnedDatas) {
        return res.status(503).json({"message": "Une erreur est survenue"})
    }

    return res.status(200).json({datas: returnedDatas});

}

export const loginAction = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(417).json({"message": "Pas toutes les informations nécéssaires"});
    }

    let loginDatas = await callLoginApi(req.body);
    if (!loginDatas) {
        return res.status(503).json({"message": "Une erreur est survenue"})
    }

    return res.status(200).json({datas: loginDatas});
}

export const getProductsByUuidAction = (req, res) => {
    const uuid = req.query.userUUID;

    if (uuid == undefined) {
        res.status(400).json({message: "Pas de paramètres userUUID donné"});
    }

    const result = getProductsByUserUUID(uuid, (err, rows) => {
        if (err) throw err;

        var toReturnedArray = [];

        var arrayRows = Object.values(JSON.parse(JSON.stringify(rows)));

        arrayRows.forEach( row => {
            let newObject = {};

            newObject.product_id = row.idProduct
            newObject.product_name = row.nom
            newObject.date_added = row.createdAt
            newObject.website = row.url

            toReturnedArray.push(newObject);
        })

        res.status(200).json(toReturnedArray);
    });
}



