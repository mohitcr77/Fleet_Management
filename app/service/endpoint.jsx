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
  creditnote : "/creditnote",
  jobs_by_client: "/jobs_by_client/",
  job_color : "/color",
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
// change endpoints, color picker, remove files from service, components

const currency = "/currency";
const countries = "/countries";
const getId = (id) => `/id${id}`;
const login = "/login";
const sign_up = "/signup";
const staff = "/staff";
const tax = "/taxes";
const vehicle_maintenance = "/vehicle_maintenance";
const timezones = "/timezones";
const states = "/states/";
const cities = "/cities/";

export default {
  countries,
  currency,
  login,
  getId,
  sign_up,
  staff,
  tax,
  vehicle_maintenance,
  timezones,
  states,
  cities,
};
