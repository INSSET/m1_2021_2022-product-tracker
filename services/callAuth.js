import axios from "axios";

export const callRegisterApi = async (datas) => {
  try {
    return await axios
      .post(`${process.env.AUTH_API_URL}/register`, {
        email: datas.email,
        password: datas.password,
        first_name: datas.first_name,
        last_name: datas.last_name,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  } catch (error) {
    console.error(error);

    return undefined;
  }
};

export const callLoginApi = async (datas) => {
  console.warn(process.env.AUTH_API_URL);
  try {
    return await axios
      .post(`${process.env.AUTH_API_URL}/login`, {
        email: datas.email,
        password: datas.password,
      })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch(() => {
        return undefined;
      });
  } catch (error) {
    console.error(error);

    return undefined;
  }
};
