const authEndpoints = {
  login: "/login",
  resend_top: "/resend",
  sign_up: "/signup",
  very_otp: "/verify-otp",
};

const endpoints = {
  cities: "/cities/",
  clients: "/clients",
  countries: "/countries",
  documents: "/staff/documents",
  currency: "/currency",
  notification: "/notifications",
  save_token: "/update-fcm-token",
  currencies: "/currencies",
  timezones: "/timezones",
  states: "/states/",
  cities: "/cities/",
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
  creditnote: "/creditnote",
  jobs_by_client: "/jobs_by_client/",
  job_color: "/color",
};

const driverEndpoints = {
  accept_job: (jobId) => `/accept-job/${jobId}`,
  accepted_jobs: "/accepted-jobs",
  pending_jobs: "/pending-jobs",
  preStartInspection: (id) => `/regos/${id}/prestart`,
  preStartNote: (id) => `/regos/${id}/notes`,
  time_sheet: `/driver_timesheet`,
};

const mechanicEndpoints = {
  mechanic_entries: "/mechanic-entries",
  time_sheet: `/mechanic_timesheet`,
};

export {
  driverEndpoints,
  adminEndpoints,
  endpoints,
  authEndpoints,
  mechanicEndpoints,
};
// removed - InputFormScreen, DrawerContentScreen, HomeScreen, Header,
// component removed -  appItem, appInput, dataList and custom, modal +1 from store

