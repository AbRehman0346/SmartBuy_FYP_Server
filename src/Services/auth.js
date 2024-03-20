import axios from "axios";
import { setLoginInfo } from "./cookies";

const registerEndPoint = "http://localhost:5000/auth/register";
const loginEndPoint = "http://localhost:5000/auth/login";

export const register = async (data) => {
  try {
    await axios.post(registerEndPoint, data);
    return true;
  } catch (error) {
    console.log("Can't register");
    return false;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(loginEndPoint, {
      username: email,
      password,
    });

    if (response.status === 200) {
      let token = response.data.token;
      let email = response.data.email;
      setLoginInfo(email, token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Can't Login");
    return false;
  }
};
