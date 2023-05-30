const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export default formatDate = (d) => {
  const today = new Date();
  const newDate = new Date(d);

  const newDateSlice = newDate.toISOString().slice(0, 10);
  const newTimeSlice = newDate.toISOString().slice(11, 16);
  // const todayDateSlice = today.slice(0, 10);
  const month =
    (newDate.getMonth() < 9 ? "0" : null) + (newDate.getMonth() + 1);

  const date = (newDate.getDate() < 10 ? "0" : null) + newDate.getDate();

  const year = newDate.getFullYear();

  const mdy = month + "/" + date + "/" + year;
  const y_m_d = year + "-" + month + "-" + date;

  const dayName = days[newDate.getDay()];

  const monthName = monthArray[newDate.getMonth()];

  const selectedHour = newDate.getHours();
  const selectedMin = newDate.getMinutes();
  const hour = selectedHour <= 9 ? "0" + selectedHour : selectedHour;
  const min = selectedMin <= 9 ? "0" + selectedMin : selectedMin;
  const hourMinFormat = hour + ":" + min;
  const epoch = newDate.getTime();

  const monthNameFormat = `${monthName} ${date}, ${year}`;

  return {
    monthNameFormat,
    date,
    dayName,
    mdy,
    month,
    monthName,
    newDate,
    newDateSlice,
    today,
    y_m_d,
    year,
    newTimeSlice,
    hourMinFormat,
    epoch,
  };
};
