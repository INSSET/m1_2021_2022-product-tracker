import axios from "axios";

export const mainPage = (_, res) => {
    res.send("Main Page");
}

export const registerAction = (req, res) => {

    if (!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name) {
        return res.json({"message": "Pas toutes les informations nécéssaires"});
    }
    
    axios.post(`${process.env.AUTH_API_URL}/register`, {
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

export const loginAction = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.json({"message": "Pas toutes les informations nécéssaires"});
    }

    axios.post(`${process.env.AUTH_API_URL}/login`, {
        email: req.body.email,
        password: req.body.password
    }).then(response => {
        return res.json({"datas": response.data});
    })
    .catch(error => {
        return res.json({"message": error.response.data});
    })
}
