import { useDispatch } from "react-redux";

import useFetch from "./useFetch";
import endpoint, { adminEndpoints, endpoints } from "../service/endpoint";
import isNotNullOrUndefined from "../helpers/isNotNullOrUndefined";
import { addListItem } from "../store/reducer/dropdownDataReducer";
import { DROPDOWN_LIST } from "../constants/entity";
import getNestedData from "../helpers/getNestedData";

export default useFetchList = (update) => {
  useFetch({
    endpoint: endpoints.clients,
    onSuccess: (arr) =>
      handleReceiveData(arr, DROPDOWN_LIST.CLIENTS, ["user", "name"]),
  });

  useFetch({
    endpoint: adminEndpoints.rego,
    onSuccess: (arr) => handleReceiveData(arr, DROPDOWN_LIST.REGOS, ["name"]),
  });

  useFetch({
    endpoint: adminEndpoints.mechanic,
    onSuccess: (arr) =>
      handleReceiveData(arr, DROPDOWN_LIST.MECHANICS, ["user", "name"]),
  });

  useFetch({
    endpoint: adminEndpoints.job_color,
    onSuccess: (arr) => handleReceiveData(arr, DROPDOWN_LIST.COLORS, ["name"]),
  });

  useFetch({
    endpoint: adminEndpoints.driver,
    onSuccess: (arr) =>
      handleReceiveData(arr, DROPDOWN_LIST.DRIVERS, ["user", "name"]),
  });

  useFetch({
    endpoint: adminEndpoints.staff,
    onSuccess: (arr) =>
      handleReceiveData(arr, DROPDOWN_LIST.STAFF, ["user", "name"]),
  });

  useFetch({
    endpoint: adminEndpoints.tax,
    onSuccess: (arr) => handleReceiveData(arr, DROPDOWN_LIST.TAX, ["tax_name"]),
  });

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
