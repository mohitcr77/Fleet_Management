import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

import useAuth from "./useAuth";
import isEmptyArray from "../helpers/isEmptyArray";
import driverServices, { clients, rego } from "../service/endpoint";
import {
  addClientList,
  addMachineTypeList,
} from "../store/reducer/dropdownDataReducer";

export default useFetchList = (update) => {
  const [loading, setLoading] = useState(false);

  const { auth } = useAuth();
  const dispatch = useDispatch();
  const { clientList, machineTypeList } = useSelector(
    (state) => state.dropDownData
  );

  useEffect(() => {
    if (isEmptyArray(clientList)) {
      handleGetClientDetails();
    }
    if (isEmptyArray(machineTypeList)) {
      handleGetRegoDetails();
    }
  }, [update]);

  const handleGetClientDetails = async () => {
    const resp = await driverServices.fetchData(clients, auth.token);
    if (resp.status === 200) {
      const d = resp.data.data.data;
      d.forEach((e) => {
        e.label = e.user.name;
        e.value = e.user.name;
      });
      dispatch(addClientList(d));
    }
  };

  const handleGetRegoDetails = async () => {
    const resp = await driverServices.fetchData(rego, auth.token);
    if (resp.status === 200) {
      const d = resp.data.data.data;
      d.forEach((e) => {
        e.label = e.name;
        e.value = e.name;
      });

      dispatch(addMachineTypeList(d));
    }
    Toast.hide();
  };

  const response = {
    loading,
    clientList,
    machineTypeList,
  };

  return response;
};
