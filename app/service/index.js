import axios from "axios";
import * as SecureStore from "expo-secure-store";

const url = "https://fleet-management.kalpvaig.com/api/v1/login";

const getHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token} `,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }
}

const userDetails = "userdetails";
//state, city & country service
const getcity = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/cities/101",
      getHeader(token)
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting city Api ", error);
  }
};

const getlistData = async ( category ,token) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/${category}/101`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting city Api ", error);
  }
};


const getstate = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/states/101",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting state Api ", error);
  }
};

const getcountry = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/countries",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting country Api ", error);
  }
};

//login and logout service
const getApiData = async (data) => {
  try {
    const res = await axios.post(url, data);
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

//Regos service
const getRegoData = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/regos",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting rego Api ", error);
  }
};

const getaRego = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/regos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a rego ", error);
  }
};

const deleteRegoData = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/regos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    //console.log(res.data);
    //return res.data;
  } catch (error) {
    console.warn("Error in deleting rego ", error);
  }
};

const postRegoData = async (token, enteredItemText) => {
  try {
    //console.log(enteredItemText);
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/regos",
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in posting rego ", error);
  }
};

const UpdateRegoData = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/regos/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating rego ", error);
  }
};

//jobcolor service
const getJobColor = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/color",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting jobColor Api ", error);
  }
};

const postJobColor = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/color",
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in posting job ", error);
  }
};

const deletejobcolor = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/color/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    //console.log(res.data);
    //return res.data;
  } catch (error) {
    console.warn("Error in deleting job color ", error);
  }
};

const getajobColor = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/color/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a color ", error);
  }
};

const UpdatejobColor = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/color/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating jobcolor ", error);
  }
};
//client service
const getclient = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/clients",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting client Api ", error);
  }
};

const postclient = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/clients",
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in posting client ", error);
  }
};

const deleteclient = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/clients/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    //console.log(res.data);
    //return res.data;
  } catch (error) {
    console.warn("Error in deleting client ", error);
  }
};

const getaclient = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/clients/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a client ", error);
  }
};

const Updateclient = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/clients/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating client ", error);
  }
};

//currency service
const getcurrency = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/currency",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting currency Api ", error);
  }
};

const postcurrency = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/currency",
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in posting currency ", error);
  }
};

const deletecurrency = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/currency/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting currency ", error);
  }
};

const getacurrency = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/currency/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a currency ", error);
  }
};

const Updatecurrency = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/currency/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating currency ", error);
  }
};

//Fuel Efficiency
const getfuelEfficiency = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/fuel_efficiency",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting fuelEfficiency Api ", error);
  }
};

const postfuelEfficiency = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/fuel_efficiency",
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in posting fuelEfficiency ", error);
  }
};

const deletefuelEfficiency = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/fuel_efficiency/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting fuelEfficiency ", error);
  }
};

const getafuelEfficiency = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/fuel_efficiency/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a fuelEfficiency ", error);
  }
};

const UpdatefuelEfficiency = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/fuel_efficiency/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating fuelEfficiency ", error);
  }
};

//driver service
const postdriver = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/driver",
       enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data
  } catch (error) {
    console.warn("Error in posting driver ", error);
  }
};

const getdriver = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/driver",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // res.data.data.data[0].user.name
    //console.log(res.data.data.data[0].user.user_details.mobile); 
    return res.data;
  } catch (error) {
    console.warn("Error in getting driver api ", error);
  }
};

const deletedriver = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/driver/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting driver ", error);
  }
};

const getadriver = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/driver/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a driver ", error);
  }
};

const Updatedriver = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/driver/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating driver ", error);
  }
};

//company service
const postcompany = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/company",
       enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data
  } catch (error) {
    console.warn("Error in posting company ", error);
  }
};

const getcompany = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/company",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // res.data.data.data[0].user.name
    //console.log(res.data.data.data[0].user.user_details.mobile); 
    return res.data;
  } catch (error) {
    console.warn("Error in getting company api ", error);
  }
};

const deletecompany = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/company/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting company ", error);
  }
};

const getacompany = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/company/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a company ", error);
  }
};

const Updatecompany = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/company/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating company ", error);
  }
};

//fuelLog service
const postfuellog = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/fuellog",
       enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data
  } catch (error) {
    console.warn("Error in posting fuellog ", error);
  }
};

const getfuellog = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/fuellog",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // res.data.data.data[0].user.name
    //console.log(res.data.data.data[0].user.user_details.mobile); 
    return res.data;
  } catch (error) {
    console.warn("Error in getting fuellog api ", error);
  }
};

const deletefuellog = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/fuellog/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting fuellog ", error);
  }
};

const getafuellog = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/fuellog/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      } 
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a fuellog ", error);
  }
};

const Updatefuellog = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/fuellog/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating fuellog ", error);
  }
};

//tax service
const posttaxes = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/taxes",
       enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data
  } catch (error) {
    console.warn("Error in posting taxes ", error);
  }
};

const gettaxes = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/taxes",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // res.data.data.data[0].user.name
    //console.log(res.data.data.data[0].user.user_details.mobile); 
    return res.data;
  } catch (error) {
    console.warn("Error in getting taxes api ", error);
  }
};

const deletetaxes = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/taxes/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting taxes ", error);
  }
};

const getatax = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/taxes/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      } 
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a taxes ", error);
  }
};

const Updatetaxes = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/taxes/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating taxes ", error);
  }
};

//issues service
const postissues = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/issues",
       enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data
  } catch (error) {
    console.warn("Error in posting issues ", error);
  }
};

const getissues = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/issues",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // res.data.data.data[0].user.name
    //console.log(res.data.data.data[0].user.user_details.mobile); 
    return res.data;
  } catch (error) {
    console.warn("Error in getting issues api ", error);
  }
};

const deleteissues = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/issues/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting issues ", error);
  }
};

const getanIssue = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/issues/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      } 
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a issues ", error);
  }
};

const Updateissues = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/issues/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating issues ", error);
  }
};

//staff service
const poststaff = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/staff",
       enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data
  } catch (error) {
    console.warn("Error in posting staff ", error);
  }
};

const getstaff = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/staff",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // res.data.data.data[0].user.name
    //console.log(res.data.data.data[0].user.user_details.mobile); 
    return res.data;
  } catch (error) {
    console.warn("Error in getting staff api ", error);
  }
};

const deletestaff = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/staff/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting staff ", error);
  }
};

const getastaff = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/staff/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      } 
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a staff ", error);
  }
};

const Updatestaff = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/staff/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating staff ", error);
  }
};

//Mechanic service
const postmechanic = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/mechanic",
       enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data
  } catch (error) {
    console.warn("Error in posting mechanic ", error);
  }
};

const getmechanic = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/mechanic",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // res.data.data.data[0].user.name
    //console.log(res.data.data.data[0].user.user_details.mobile); 
    return res.data;
  } catch (error) {
    console.warn("Error in getting mechanic api ", error);
  }
};

const deletemechanic = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/mechanic/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting mechanic ", error);
  }
};

const getamechanic = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/mechanic/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      } 
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a mechanic ", error);
  }
};

const Updatemechanic = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/mechanic/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating mechanic ", error);
  }
};

//Mechanic timesheet service
const postmechanic_timesheet = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/mechanic_timesheet",
       enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data
  } catch (error) {
    console.warn("Error in posting mechanic_timesheet ", error);
  }
};

const getmechanic_timesheet = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/mechanic_timesheet",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // res.data.data.data[0].user.name
    //console.log(res.data.data.data[0].user.user_details.mobile); 
    return res.data;
  } catch (error) {
    console.warn("Error in getting mechanic_timesheet api ", error);
  }
};

const deletemechanic_timesheet = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/mechanic_timesheet/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting mechanic_timesheet ", error);
  }
};

const getamechanic_timesheet = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/mechanic_timesheet/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      } 
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a mechanic_timesheet ", error);
  }
};

const Updatemechanic_timesheet = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/mechanic_timesheet/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating mechanic_timesheet ", error);
  }
};

//vehicle maintenance service
const postvehicle_maintenance = async (token, enteredItemText) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/vehicle_maintenance",
       enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data
  } catch (error) {
    console.warn("Error in posting vehicle_maintenance ", error);
  }
};

const getvehicle_maintenance = async (token) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/vehicle_maintenance",
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // res.data.data.data[0].user.name
    //console.log(res.data.data.data[0].user.user_details.mobile); 
    return res.data;
  } catch (error) {
    console.warn("Error in getting vehicle_maintenance api ", error);
  }
};

const deletevehicle_maintenance = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/vehicle_maintenance/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in deleting vehicle_maintenance ", error);
  }
};

const getavehicle_maintenance = async (token, id) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/vehicle_maintenance/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      } 
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a vehicle_maintenance ", error);
  }
};

const Updatevehicle_maintenance = async (token, enteredItemText, id) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/vehicle_maintenance/${id}`,
      enteredItemText,
      {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    console.warn("Error in Updating vehicle_maintenance ", error);
  }
};

//dynamic service
const getApi = async (token, url) => {
  try {
    const res = await axios.get(
      "https://fleet-management.kalpvaig.com/api/v1/"+
      url,
      getHeader(token)
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting Api ", error);
  }
};

const postApi = async (token, enteredItemText, url) => {
  try {
    const res = await axios.post(
      "https://fleet-management.kalpvaig.com/api/v1/"+url,
       enteredItemText,
       getHeader(token)
    );
    return res.data
  } catch (error) {
    console.warn("Error in posting vehicle_maintenance ", error);
  }
};

const deleteApi = async (token, id, url) => {
  try {
    const res = await axios.delete(
      `https://fleet-management.kalpvaig.com/api/v1/`+ url +`/${id}`,
      getHeader(token)
    );
  } catch (error) {
    console.warn("Error in deleting vehicle_maintenance ", error);
  }
};

const getaApi = async (token, id, url) => {
  try {
    const res = await axios.get(
      `https://fleet-management.kalpvaig.com/api/v1/`+ url +`/${id}`,
      getHeader(token)
    );
    return res.data;
  } catch (error) {
    console.warn("Error in getting a vehicle_maintenance ", error);
  }
};

const UpdateApi = async (token, enteredItemText, id, url) => {
  try {
    const res = await axios.put(
      `https://fleet-management.kalpvaig.com/api/v1/`+ url +`/${id}`,
      enteredItemText,
      getHeader(token)
    );
  } catch (error) {
    console.warn("Error in Updating vehicle_maintenance ", error);
  }
};

export default {
  posttaxes,
  gettaxes,
  deletetaxes,
  gettaxes,
  getatax,
  Updatetaxes,
  getcity,
  getstate,
  getcountry,
  getRegoData,
  getApiData,
  saveData,
  getData,
  deleteData,
  deleteRegoData,
  postRegoData,
  getaRego,
  UpdateRegoData,
  getJobColor,
  postJobColor,
  deletejobcolor,
  getajobColor,
  UpdatejobColor,
  getclient,
  getaclient,
  postclient,
  Updateclient,
  deleteclient,
  getcurrency,
  getacurrency,
  postcurrency,
  Updatecurrency,
  deletecurrency,
  deletefuelEfficiency,
  getfuelEfficiency,
  getafuelEfficiency,
  postfuelEfficiency,
  UpdatefuelEfficiency,
  getdriver,
  deletedriver,
  getadriver,
  Updatedriver,
  postdriver,
  getcompany,
  postcompany,
  deletecompany,
  getacompany,
  Updatecompany,
  postfuellog,
  getfuellog,
  Updatefuellog,
  getafuellog,
  deletefuellog,
  postissues,
  getissues,
  getanIssue,
  Updateissues,
  deleteissues,
  poststaff,
  Updatestaff,
  deletestaff,
  getstaff,
  getastaff,
  getmechanic,
  getamechanic,
  postmechanic,
  deletemechanic,
  Updatemechanic,
  getmechanic_timesheet,
  getamechanic_timesheet,
  postmechanic_timesheet,
  Updatemechanic_timesheet,
  deletemechanic_timesheet,
  getvehicle_maintenance,
  postvehicle_maintenance,
  getavehicle_maintenance,
  deletevehicle_maintenance,
  Updatevehicle_maintenance,
  getlistData,
  getApi,
  deleteApi,
  UpdateApi,
  getaApi,
  postApi,
  userDetails,
};
