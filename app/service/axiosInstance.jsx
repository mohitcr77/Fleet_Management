import axios from "axios";

export const URL = "https://fleet-management.kalpvaig.com/api/v1";

export default axios.create({
  baseURL: URL,
});
