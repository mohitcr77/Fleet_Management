export default function isEmptyArray(arr = []) {
  if (!Array.isArray(arr)) return true;

  return arr.length === 0;
}
