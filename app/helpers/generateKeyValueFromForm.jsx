function generateKeyValueFromFormData(arr) {
  let obj = {};
  arr.forEach((e) => {
    obj[e.key] = "";
  });
  return obj;
}

export default generateKeyValueFromFormData;
