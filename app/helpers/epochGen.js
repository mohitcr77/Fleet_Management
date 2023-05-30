import formatDate from "./formatDate";
const epochGen = (date, time) => {
  const dateArray = date.split("-");
  const timeArray = time.split(":");
  const startTime = new Date();
  startTime.setFullYear(dateArray[0]);
  startTime.setMonth(dateArray[1] - 1);
  startTime.setDate(dateArray[2]);
  startTime.setHours(timeArray[0]);
  startTime.setMinutes(timeArray[1]);
  return formatDate(startTime).epoch;
};

export default epochGen;
