import React, { useState, useEffect } from "react";

import { URL, getHeader } from "../service";
import useAuth from "./useAuth";

import axios from "axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ToastType } from "../constants/entity";

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
      Toast.show(ToastType.LOADING);
      const data = await axios.get(endpoint, getHeader(token));
      Toast.hide();

      setData(data);
      onSuccess();
      return data;
    } catch (error) {
      onFail();
    }
  };
  return [data];
};
