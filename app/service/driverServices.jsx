import axios from "axios";
import { URL, getHeader } from ".";

export const getClients = "/clients";
export const getRegos = "/regos";

const fetchData = async (endpoint, token) => {
  let res;
  try {
    res = await axios.get(URL + endpoint, getHeader(token));
    return res;
  } catch (error) {
    res = error;
  }
  return res;
};

export default {
  fetchData,
};
