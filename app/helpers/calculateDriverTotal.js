function calculateDriverTotal(str, fns, travel = 0, type = "travel") {
  const startTime = (str ? str : "00:00").split(":");
  const finishTime = (fns ? fns : "00:00").split(":");
  const endDay = startTime[0] > finishTime[0] ? 1 : 0;

  const start = new Date(0, 0, 0, startTime[0], startTime[1], 0).getTime();
  const end = new Date(0, 0, endDay, finishTime[0], finishTime[1], 0).getTime();

  let diff = end - start;

  const hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(diff / 1000 / 60);

  const actualMin = minutes / 60 || 0;

  return hours || minutes
    ? (+hours + +actualMin + (type === "travel" ? +travel : -1 * +travel))
        .toFixed(2)
        .toString()
    : "0.0";
}

function getMinutes(min) {
  return (min < 10 && "0") + Math.floor(min);
}

export default calculateDriverTotal;
