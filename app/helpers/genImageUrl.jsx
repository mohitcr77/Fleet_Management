import { URL } from "../services/baseURL";

function genImageUrl(name) {
  return `${URL}/storage/${name}`;
}
export default genImageUrl;
