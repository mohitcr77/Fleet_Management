import { create } from "apisauce";

export const URL = "https://fleet-management.kalpvaig.com";

const api = create({
  baseURL: `${URL}/api/v1`,
});

export default api;
