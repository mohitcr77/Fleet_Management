import axios from "axios";
import { URL, getHeader } from ".";

const clients = "/clients";
const rego = "/regos";
const getId = (id) => `/id${id}`;

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
  clients,
  rego,
  getId,
};
