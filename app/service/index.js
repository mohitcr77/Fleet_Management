import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const URL = "https://fleet-management.kalpvaig.com/api/v1";

export const getHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token} `,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
};

const userDetails = "userdetails";
//state, city & country service

const get = async (endpoint) => {
  try {
    const res = await axios.get(URL + endpoint, getHeader(token));
    return res.data;
  } catch (error) {
    console.warn("Error in getting city Api ", error);
  }
};

const getcity = async (token) => {
  try {
    const res = await axios.get(`${URL}/cities/101`, getHeader(token));
    return res.data;
  } catch (error) {
    console.warn("Error in getting city Api ", error);
  }
};

const getlistData = async (category, token) => {
  try {
    const res = await axios.get(`${URL}/${category}/101`, getHeader(token));
    return res.data;
  } catch (error) {
    console.warn("Error in getting city Api ", error);
  }
};

const getstate = async (token) => {
  try {
    const res = await axios.get(`${URL}/states/101`, {
      headers: {
        Authorization: `Bearer ${token} `,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.warn("Error in getting state Api ", error);
  }
};

const getcountry = async (token) => {
  try {
    const res = await axios.get(`${URL}/countries`, {
      headers: {
        Authorization: `Bearer ${token} `,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.warn("Error in getting country Api ", error);
  }
};

//login and logout service
const getApiData = async (data) => {
  try {
    const res = await axios.post(`${URL}/login`, data);
    return res;
  } catch (error) {
    console.warn("Error in posting login Api ", error);
  }
};

const saveData = async (details) => {
  try {
    await SecureStore.setItemAsync(userDetails, details);
  } catch (error) {
    console.warn("Error in storing setails ", error);
  }
};

const getData = async () => {
  try {
    let result = await SecureStore.getItemAsync(userDetails);
    return result;
  } catch (error) {
    console.warn("Error in storing setails ", error);
  }
};

const deleteData = async () => {
  try {
    await SecureStore.deleteItemAsync(userDetails);
  } catch (error) {
    console.warn("Error in storing setails ", error);
  }
};

//dynamic service
const getApi = async (token, url) => {
  try {
    const res = await axios.get(`${URL}/` + url, getHeader(token));
    return res.data;
  } catch (error) {
    console.warn("Error in getting Api ", error);
  }
};

const postApi = async (token, enteredItemText, url) => {
  try {
    const res = await axios.post(
      `${URL}/` + url,
      enteredItemText,
      getHeader(token)
    );
    return res.data;
  } catch (error) {
    console.warn("Error in posting Api ", error);
  }
};

const deleteApi = async (token, id, url) => {
  try {
    const res = await axios.delete(
      `${URL}/` + url + `/${id}`,
      getHeader(token)
    );
  } catch (error) {
    console.warn("Error in deleting Api ", error);
  }
};

const getaApi = async (token, id, url) => {
  try {
    const res = await axios.get(`${URL}/` + url + `/${id}`, getHeader(token));
    return res.data;
  } catch (error) {
    console.warn("Error in getting a Api ", error);
  }
};

const UpdateApi = async (token, enteredItemText, id, url) => {
  try {
    const res = await axios.put(
      `${URL}/` + url + `/${id}`,
      enteredItemText,
      getHeader(token)
    );
  } catch (error) {
    console.warn("Error in Updating Api ", error);
  }
};

export default {
  getcity,
  getstate,
  getcountry,
  getApiData,
  saveData,
  getData,
  deleteData,
  getlistData,
  getApi,
  deleteApi,
  UpdateApi,
  getaApi,
  postApi,
  userDetails,
};
