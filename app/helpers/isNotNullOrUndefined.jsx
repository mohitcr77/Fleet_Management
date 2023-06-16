import dataType from "../constants/dataType";

function isNotNullOrUndefined(val) {
  if (typeof val === dataType.string && val == "") {
    return false;
  } else {
    return typeof val !== "undefined";
  }
}

export default isNotNullOrUndefined;
