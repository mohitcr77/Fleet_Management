import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "./useAuth";
import isEmptyArray from "../helpers/isEmptyArray";
import driverServices, {
  getClients,
  getRegos,
} from "../service/driverServices";
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
    setLoading(true);
    if (isEmptyArray(clientList)) {
      handleGetClientDetails();
    }
    if (isEmptyArray(machineTypeList)) {
      handleGetRegoDetails();
    }
    setLoading(false);
  }, [update]);

  const handleGetClientDetails = async () => {
    const resp = await driverServices.fetchData(getClients, auth.token);
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
    const resp = await driverServices.fetchData(getRegos, auth.token);
    if (resp.status === 200) {
      const d = resp.data.data.data;
      d.forEach((e) => {
        e.label = e.name;
        e.value = e.name;
      });

      dispatch(addMachineTypeList(d));
    }
  };

  const response = {
    loading,
    clientList,
    machineTypeList,
  };

  return response;
};
