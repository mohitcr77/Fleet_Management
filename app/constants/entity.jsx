export const Role = {
  DRIVER: "drivers",
  MECHANIC: "mechanics",
  ADMIN: "admin",
};

export const ToastType = {
  LOADING: { type: "loading" },
  SUCCESS: {
    type: "success",
    text1: "Successful",
    text2: "Data uploaded successfully",
  },
  ERROR: { type: "error", text1: "Failed", text2: "Failed to upload data" },
};

export const HTTPS_METHODS = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
};

export const DROPDOWN_LIST = {
  BREAK: "break",
  CLIENTS: "clientList",
  COLORS: "colors",
  DAYS: "days",
  DRIVERS: "driverList",
  MECHANICS: "mechanicList",
  REGOS: "machineTypeList",
  SUPERVISOR: "supervisorList",
  STAFF: "staffList",
  TAX: "tax_list"
};
