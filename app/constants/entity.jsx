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
  CLIENTS: "clientList",
  REGOS: "machineTypeList",
  DRIVERS: "driverList",
  SUPERVISOR: "supervisorList",
  MECHANICS: "mechanicList",
  COLORS: "colors",
};
