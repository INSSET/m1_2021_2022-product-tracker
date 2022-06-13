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

const splitSeller = (seller) => {
  if (seller.includes("amazon"))
    return 3;
  
  if (seller.includes("boulanger"))
    return 2;

  return 1;
}

export const callOrchestrator = async (datas, theProductId) => {
  try {
    return await axios
      .post(`http://orchestrator-service:5000/getPrice`, {
        api_key: '8ac7a909a23e4801c4c59cc5d828bc07',
        sellerId: splitSeller(datas.productUrl),
        productId: theProductId,
        productUrl: datas.productUrl
      })
      .catch((error) => {
        console.log(error);
      })
  }
  catch (err) {
    console.log(err);
    
    return undefined;
  }
}
