import dataType from "../constants/dataType";

function generateKeyValueFromFormData(arr) {
  let obj = {};
  arr.forEach((e) => {
    obj[e.key] =
      e.value && e.type === dataType.number ? JSON.stringify(e.value) : e.value;
  });
  return obj;
}

export default generateKeyValueFromFormData;
