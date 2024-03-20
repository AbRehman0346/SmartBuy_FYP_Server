import axios from "axios";

const getDataEndPoint = "http://localhost:5000/products/get";
const getDataByIdEndPoint = "http://localhost:5000/products/getById";
const getCategoriesEndPoint = "http://localhost:5000/products/getCategories";
const getDataByCategoryEndPoint =
  "http://localhost:5000/products/getByCategory";

export const get = async () => {
  try {
    let response = await axios.get(getDataEndPoint);
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getDataById = async (id) => {
  try {
    let response = await axios.get(getDataByIdEndPoint, {
      params: {
        id,
      },
    });
    return response.data[0];
  } catch (error) {
    return false;
  }
};

export const getDataByCategory = async (cat) => {
  try {
    let response = await axios.get(getDataByCategoryEndPoint, {
      params: {
        cat,
      },
    });
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getCategories = async (cat) => {
  try {
    let response = await axios.get(getCategoriesEndPoint);
    return response.data;
  } catch (error) {
    return false;
  }
};
