import { create } from "apisauce";

export const URL = "https://fleet-management.kalpvaig.com";

const api = create({
  baseURL: `${URL}/api/v1`,
});

export const getHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
};

export default api;
