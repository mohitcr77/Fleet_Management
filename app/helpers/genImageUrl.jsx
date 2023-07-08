import { URL } from "../service/api";

function genImageUrl(name) {
  return `${URL}/storage/${name}`;
}
export default genImageUrl;
