import axios from "axios";
import { URL, getHeader } from ".";

const clients = "/clients";
const currency = "/currencies";
const driver = "/driver";
const estimate = "/estimate";
const fuel_efficiency = "/fuel_efficiency";
const fuel_log = "/fuel_log";
const getId = (id) => `/id${id}`;
const job_color = "/color";
const mechanic_timeSheet = "/mechanic_timesheet";
const mechanic = "/mechanic";
const rego = "/regos";
const sign_up = "/signup";
const tax = "/taxes";
const vehicle_Maintenance = "/vehicle_maintenance";

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
  clients,
  currency,
  driver,
  estimate,
  fetchData,
  fuel_efficiency,
  fuel_log,
  getId,
  job_color,
  mechanic_timeSheet,
  mechanic,
  rego,
  sign_up,
  tax,
  vehicle_Maintenance,
};
