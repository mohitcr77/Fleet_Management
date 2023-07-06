import React, { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { HTTPS_METHODS, ToastType } from "../constants/entity";
import axios from "axios";

import useAuth from "./useAuth";
import api, { getHeader } from "../service/api";

export default useApi = (onSuccess = () => {}, onFail = () => {}) => {
  const { token } = useAuth();

  const request = async (requestConfig) => {
    const { endpoint, body = {}, method = HTTPS_METHODS.POST } = requestConfig;
    try {
      Toast.show(ToastType.LOADING);

      const data = await api[method](endpoint, body, getHeader(token));
      Toast.hide();
      if (data.ok) {
        Toast.show(ToastType.SUCCESS);
        onSuccess(data.data);
      } else {
        console.warn(
          data?.data?.message || "Something went wrong please try again"
        );
        Toast.show({
          ...ToastType.ERROR,
          text2: data?.data?.message || "Something went wrong please try again",
        });
        onFail();
      }

      return data;
    } catch (error) {
      Toast.show(ToastType.ERROR);
      onFail();
    }
  };
  return { request };
};
