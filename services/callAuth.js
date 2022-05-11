import axios from "axios";

export const callRegisterApi = async (datas) => {
    try {
        return await axios.post(`${process.env.AUTH_API_URL}/register`, {
            email: datas.email,
            password: datas.password,
            first_name: datas.first_name,
            last_name: datas.last_name
        }).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        })
    } catch (error) {
        console.error(error);

        return undefined;
    }
}

export const callLoginApi = async (datas) => {
    try {
        return await axios.post(`${process.env.AUTH_API_URL}/login`, {
            email: datas.email,
            password: datas.password
        }).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        })
    } catch (error) {
        console.error(error);

        return undefined;
    }
}

export const callVerifyToken = async (access_token) => {
    try {
        return await axios.get(`${process.env.AUTH_API_URL}/verify`, {
            headers: {
                'Authorization': `token ${access_token}`
            }
        }).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.data;
        })
    } catch (error) {
        return undefined;
    }
}
