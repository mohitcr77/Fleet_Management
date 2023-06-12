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
