function getNestedData(obj, keys) {
  if (keys.length === 1) {
    return obj[keys[0]];
  }

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
