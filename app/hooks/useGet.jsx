import React, { useState, useEffect } from "react";

import { URL, getHeader } from "../service";
import useAuth from "./useAuth";

import axios from "axios";

export default useGet = (
  endpoint,
  onSuccess = () => {},
  onFail = () => {},
  update = false
) => {
  const [data, setData] = useState();
  const { token } = useAuth();

  useEffect(() => {
    request();
  }, [update]);

  const request = async () => {
    try {
      const data = await axios.get(endpoint, getHeader(token));
      setData(data);
      onSuccess();
      return data;
    } catch (error) {
      onFail();
    }
  };
  return [data];
};
