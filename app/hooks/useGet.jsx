import React, { useState, useEffect } from "react";

import { URL, getHeader } from "../service";
import useAuth from "./useAuth";

import axios from "axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ToastType } from "../constants/entity";
import api from "../service/api";

export default useGet = (
  endpoint,
  onSuccess = () => {},
  onFail = () => {},
  update = false
) => {
  const [data, setData] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    request();
  }, [update]);

  const request = async () => {
    try {
      Toast.show(ToastType.LOADING);

      const data = await api.get(endpoint, {}, getHeader(token));
      Toast.hide();
      if (data.ok) {
        setData(data.data.data.data);
        onSuccess(data.data.data.data);
      } else Toast.show(ToastType.ERROR);
    } catch (error) {
      onFail();
    }
  };
  return { request, data };
};
