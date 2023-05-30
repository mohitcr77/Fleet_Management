function getEpochFromToday(days, date) {
  const today = new Date().getTime();
  const oneDay = 86400000;

  return today - new Date(date).getTime() < oneDay * days;
}
export default getEpochFromToday;
