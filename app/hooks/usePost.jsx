import React, { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ToastType } from "../constants/entity";
import axios from "axios";

export default usePost = () => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const request = async (params) => {
    setLoading(true);
    try {
      Toast.show(ToastType.LOADING);
      const data = await axios.post(...params);
      Toast.hide();

      Toast.show(ToastType.SUCCESS);
      setData(data);
      setLoading(false);
      return data;
    } catch (error) {
      Toast.show(ToastType.ERROR);

      setLoading(false);
      setError(error);
    }
  };
  return [request, data, error, loading];
};
