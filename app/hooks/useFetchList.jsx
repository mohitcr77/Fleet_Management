import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addClientList,
  addMachineTypeList,
} from "../store/reducer/dropdownDataReducer";
import useGet from "./useGet";
import endpoint from "../service/endpoint";
import isNotNullOrUndefined from "../helpers/isNotNullOrUndefined";

export default useFetchList = (update) => {
  useGet(endpoint.clients, handleGetClientDetails);
  useGet(endpoint.rego, handleGetRegoDetails);

  const dispatch = useDispatch();
  const { clientList, machineTypeList } = useSelector(
    (state) => state.dropDownData
  );

  async function handleGetClientDetails(arr) {
    if (isNotNullOrUndefined(arr)) {
      const d = arr.data.data;
      d.forEach((e) => {
        e.label = e.user.name;
        e.value = e.user.name;
      });
      dispatch(addClientList(d));
    }
  }

  async function handleGetRegoDetails(arr) {
    if (isNotNullOrUndefined(arr)) {
      const d = arr.data.data;
      d.forEach((e) => {
        e.label = e.name;
        e.value = e.name;
      });
      dispatch(addMachineTypeList(d));
    }
  }

  const response = {
    clientList,
    machineTypeList,
  };

  return response;
};
