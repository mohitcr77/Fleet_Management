function isNotNullOrUndefined(val) {
  if (val !== "") return true;
  return typeof val !== "undefined";
}

export default isNotNullOrUndefined;
