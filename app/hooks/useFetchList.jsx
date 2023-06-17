import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addClientList,
  addListItem,
  addMachineTypeList,
} from "../store/reducer/dropdownDataReducer";
import useGet from "./useGet";
import endpoint from "../service/endpoint";
import isNotNullOrUndefined from "../helpers/isNotNullOrUndefined";
import { DROPDOWN_LIST } from "../constants/entity";

export default useFetchList = (update) => {
  useGet(endpoint.clients, handleGetClientDetails);
  useGet(endpoint.rego, handleGetRegoDetails);
  useGet(endpoint.mechanic, handleGetMechanicDetails);
  useGet(endpoint.job_color, handleGetColorDetails);
  useGet(endpoint.driver, handleGetDriverDetails);

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

  async function handleGetMechanicDetails(arr) {
    if (isNotNullOrUndefined(arr)) {
      const d = arr.data.data;
      d.forEach((e) => {
        e.label = e.user.name;
        e.value = e.user.name;
      });
      dispatch(addListItem({ data: d, name: DROPDOWN_LIST.MECHANICS }));
    }
  }

  async function handleGetColorDetails(arr) {
    if (isNotNullOrUndefined(arr)) {
      const d = arr.data.data;
      d.forEach((e) => {
        e.label = e.name;
        e.value = e.name;
      });
      dispatch(addListItem({ data: d, name: DROPDOWN_LIST.COLORS }));
    }
  }

  async function handleGetDriverDetails(arr) {
    if (isNotNullOrUndefined(arr)) {
      const d = arr.data.data;
      d.forEach((e) => {
        e.label = e.user.name;
        e.value = e.user.name;
      });
      dispatch(addListItem({ data: d, name: DROPDOWN_LIST.DRIVERS }));
    }
  }

  const response = {
    clientList,
    machineTypeList,
  };

  return response;
};
