import axios from "axios";
import { URL, getHeader } from ".";

const clients = "/clients";
const rego = "/regos";
const currency= "/currency";
const driver= "/driver";
const fuel_efficiency= "/fuel_efficiency";
const fuel_log= "/fuellog";
const job_color= "/color";
const mechanic= "/mechanic";
const mechanic_timeSheet= "/mechanic_timesheet";
const tax= "/taxes";
const vehicle_Maintenance = "/vehicle_maintenance";
const estimate= "/estimate"
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
  currency,
  driver,
  fuel_efficiency,
  fuel_log,
  job_color,
  mechanic,
  mechanic_timeSheet,
  tax,
  vehicle_Maintenance,
  estimate,
  getId,
};
