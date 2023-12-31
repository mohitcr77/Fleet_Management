import React, { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { HTTPS_METHODS, Role, ToastType } from "../constants/entity";
import axios from "axios";

import useAuth from "./useAuth";
import api, { getHeader } from "../service/api";

export default useApi = (onSuccess = () => {}, onFail = () => {}) => {
  const { token, auth, role } = useAuth();

  const request = async (requestConfig) => {
    const {
      endpoint,
      body = {},
      method = HTTPS_METHODS.POST,
      params = {},
    } = requestConfig;
    try {
      Toast.show(ToastType.LOADING);

      const { headers } = getHeader(token);

      const data = await api.any({
        url: endpoint,
        params,
        headers,
        method,
        data: { ...body, ...getID() },
      });

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
  function getID() {
    switch (role) {
      case Role.MECHANIC:
        return { mechanic_id: auth.user.id };

      case Role.DRIVER:
        return { driver_id: auth.user.id };

      default:
        return {};
    }
  }
  return { request };
};
