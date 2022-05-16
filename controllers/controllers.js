import {callRegisterApi, callLoginApi} from "../services/callAuth.js";

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
