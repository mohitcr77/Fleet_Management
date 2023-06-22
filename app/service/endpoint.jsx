import axios from "axios";
import { URL, getHeader } from ".";

const clients = "/clients";
const currency = "/currency";
const countries = "/countries";
const driver = "/driver";
const estimate = "/estimate";
const fuel_efficiency = "/fuel_efficiency";
const fuel_log = "/fuellog";
const getId = (id) => `/id${id}`;
const job_color = "/color";
const mechanic = "/mechanic";
const mechanic_timeSheet = "/mechanic_timesheet";
const rego = "/regos";
const login = "/login";
const sign_up = "/signup";
const staff = "/staff";
const tax = "/taxes";
const vehicle_maintenance = "/vehicle_maintenance";
const timezones = "/timezones";
const job = "/jobs";
const report_issue = "/issues";
const states = "/states/";
const cities = "/cities/";
const jobs_by_client = "/jobs_by_client/";
const creditnote = "/creditnote";

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
  countries,
  clients,
  currency,
  driver,
  estimate,
  fetchData,
  fuel_efficiency,
  fuel_log,
  login,
  getId,
  job_color,
  mechanic_timeSheet,
  mechanic,
  rego,
  sign_up,
  staff,
  tax,
  job,
  report_issue,
  vehicle_maintenance,
  timezones,
  creditnote,
  states,
  cities,
  jobs_by_client
};
