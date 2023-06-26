const authEndpoints = {
  login: "/login",
  resend_top: "/resend",
  sign_up: "/signup",
};

const endpoints = {
  cities: "/cities/",
  clients: "/clients",
  countries: "/countries",
  currency: "/currency",
  notification: "/notifications",
  save_token: "/update-fcm-token",
};

const adminEndpoints = {
  driver: "/driver",
  estimate: "/estimate",
  fuel_efficiency: "/fuel_efficiency",
  fuel_log: "/fuellog",
  getId: (id) => `/id${id}`,
  job_color: "/color",
  job: "/jobs",
  mechanic_timeSheet: "/mechanic_timesheet",
  mechanic: "/mechanic",
  rego: "/regos",
  report_issue: "/issues",
  staff: "/staff",
  states: "/states/",
  tax: "/taxes",
  timezones: "/timezones",
  vehicle_maintenance: "/vehicle_maintenance",
};

const driverEndpoints = {
  pending_jobs: "/pending-jobs",
  accepted_jobs: "/accepted-jobs",
};

const mechanicEndpoints = {};

export {
  driverEndpoints,
  adminEndpoints,
  endpoints,
  authEndpoints,
  mechanicEndpoints,
};

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

export default {
  countries,
  clients,
  currency,
  driver,
  estimate,
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
  jobs_by_client,
};
