import {callRegisterApi, callLoginApi, callVerifyToken} from "../services/callAuth.js";

export const mainPage = (_, res) => {
    res.send("Main Page");
}

export const registerAction = async (req, res) => {

    if (!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name) {
        return res.statusCode(417).json({"message": "Pas toutes les informations nécéssaires"});
    }
    
    let returnedDatas = await callRegisterApi(req.body);
    if (!returnedDatas) {
        return res.statusCode(503).json({"message": "Une erreur est survenue"})
    }

    return res.statusCode(200).json({datas: returnedDatas});

}

export const loginAction = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.json({"message": "Pas toutes les informations nécéssaires"});
    }

    let loginDatas = await callLoginApi(req.body);
    if (!loginDatas) {
        return res.json({"message": "Une erreur est survenue"})
    }

    return res.json({datas: loginDatas});
}

export const verifyAction = async (req, res) => {
    if (!req.body.token) {
        return res.json({"message": "Pas de token fourni"});
    }

    let verifyDatas = await callVerifyToken(req.body.token);

    if (!verifyDatas.body) {
        return res.json({"message": verifyDatas});
    }

    return res.json({datas: verifyDatas});
}
