import { useDispatch } from "react-redux";

import { addListItem } from "../store/reducer/dropdownDataReducer";
import { DROPDOWN_LIST } from "../constants/entity";
import endpoint from "../service/endpoint";
import getNestedData from "../helpers/getNestedData";
import isNotNullOrUndefined from "../helpers/isNotNullOrUndefined";
import useFetch from "./useFetch";

export default useFetchList = (update) => {
  useFetch(endpoints.clients, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.CLIENTS, ["user", "name"])
  );

  useFetch(adminEndpoints.rego, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.REGOS, ["name"])
  );

  useFetch(adminEndpoints.mechanic, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.MECHANICS, ["user", "name"])
  );

  useFetch(adminEndpoints.job_color, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.COLORS, ["name"])
  );

  useFetch(adminEndpoints.driver, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.DRIVERS, ["user", "name"])
  );

  useFetch(adminEndpoints.staff, (arr) =>
    handleReceiveData(arr, DROPDOWN_LIST.STAFF, ["user", "name"])
  );

  useFetch(adminEndpoints.tax, (arr) =>
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
