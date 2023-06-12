import React, { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ToastType } from "../constants/entity";
import axios from "axios";
import { getHeader } from "../service";
import useAuth from "./useAuth";

export default usePost = (onSuccess = () => {}, onFail = () => {}) => {
  const { token } = useAuth();

  const request = async (endpoint, body) => {
    try {
      Toast.show(ToastType.LOADING);
      const data = await axios.post(endpoint, body, getHeader(token));
      Toast.hide();

      Toast.show(ToastType.SUCCESS);
      onSuccess();
      return data;
    } catch (error) {
      console.log(error);
      Toast.show(ToastType.ERROR);
      onFail();
    }
  };
  return { request };
};
