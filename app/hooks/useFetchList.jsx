import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addClientList,
  addListItem,
  addMachineTypeList,
} from "../store/reducer/dropdownDataReducer";
import useFetch from "./useFetch";
import endpoint from "../service/endpoint";
import isNotNullOrUndefined from "../helpers/isNotNullOrUndefined";
import { DROPDOWN_LIST } from "../constants/entity";
import getNestedData from "../helpers/getNestedData";

export default useFetchList = (update) => {
  useFetch(endpoint.clients, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.CLIENTS, ["user", "name"])
  );

  useFetch(endpoint.rego, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.REGOS, ["name"])
  );

  useFetch(endpoint.mechanic, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.MECHANICS, ["user", "name"])
  );

  useFetch(endpoint.job_color, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.COLORS, ["name"])
  );

  useFetch(endpoint.driver, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.DRIVERS, ["user", "name"])
  );

  useFetch(endpoint.staff, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.STAFF, ["user", "name"])
  );

  useFetch(endpoint.tax, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.TAX, ["tax_name"])
  );

  const dispatch = useDispatch();

  async function handleReceiveData(arr, list, map) {
    if (isNotNullOrUndefined(arr)) {
      const d = arr.data.data;
      d.forEach((e) => {
        const val = getNestedData(e, map);
        e.label = val;
        e.value = val;
      });
      dispatch(addListItem({ data: d, name: list }));
    }
  }
};
