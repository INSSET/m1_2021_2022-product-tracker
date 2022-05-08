import { response } from "express";
import { callRegister } from "../services/apiCalls.js"
import axios from "axios";



export const mainPage = (_, res) => {
    res.send("Main Page");
}

export const registerAction = (req, res) => {

    if (!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name) {
        return res.json({"message": "Pas toutes les informations nécéssaires"});
    }
    
    axios.post('https://productracker-zcddpyns6q-lm.a.run.app/register', {
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }).then(response => {
        return res.json({"datas": response.data});
    })
    .catch(error => {
        return res.json({"message": error.response.data});
    })

}
