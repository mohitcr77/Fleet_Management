import * as SecureStore from "expo-secure-store";

export const driverDetails = "driver_details";
export const firstTimeLogin = "firstTimeLogin";
export const loginDetail = "login_detail"

const saveData = async (key, details) => {
  try {
    await SecureStore.setItemAsync(key, details);
  } catch (error) {
    console.warn("Error in storing details.", error);
  }
};

const getData = async (key) => {
  try {
    let result = await SecureStore.getItemAsync(key);
    return result;
  } catch (error) {
    console.warn("Error in fetching details.", error);
  }
};

const deleteData = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.warn("Error in deleting details.", error);
  }
};

export default {
  saveData,
  getData,
  deleteData,
};
