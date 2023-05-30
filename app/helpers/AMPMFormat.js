const AMPMFormat = (str) => {
  if (!str) return "";

  const val = str.split(":");

  const hr = val[0];
  const min = val[1];

  return hr < 13 ? hr + ":" + min + "AM" : hr - 12 + ":" + min + "PM";
};

export default AMPMFormat;
