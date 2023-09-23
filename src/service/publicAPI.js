import axios from "axios";
import { token } from "./privateAPI";

const publicAPI = axios.create({
  baseURL: 'https://node-server-team-proj.onrender.com/api/',
});

export const login = async (body) => {
  try {
    const { data } = await publicAPI.post("api/users/signin", body);
    token.set(data.token);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const register = async (body) => {
  try {
    const { data } = await publicAPI.post("api/users/signup", body);
    token.set(data.token);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};