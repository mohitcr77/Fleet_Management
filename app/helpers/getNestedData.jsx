function getNestedData(obj, keys) {
  let value = obj;
  for (const key of keys) {
    if (value && value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return null;
    }
  }
  return value;
}
export default getNestedData;
