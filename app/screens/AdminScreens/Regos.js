import { StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";

const Regos = () => {
  const form = [
    {
      name: "Id#",
      key: "id",
      type: dataType.number,
      value: null,
      card: true,
    },
    {
      name: "Name",
      key: "name",
      type: dataType.text,
      value: null,
      card: true,
    },
    {
      name: "Regos Rate",
      key: "rego_rate",
      type: dataType.number,
      value: null,
      card: true,
    },
    {
      name: "Milage Threshold",
      key: "milage_threshold",
      type: dataType.number,
      value: null,
      card: false,
    },
    {
      name: "Vehicle Type",
      key: "vehicle_type",
      type: dataType.text,
      value: null,
      card: false,
    },
    {
      name: "CheckSheet Type",
      key: "checksheet_type",
      type: dataType.text,
      value: null,
      card: false,
    },
    {
      name: "Plate No",
      key: "plate_no",
      type: dataType.number,
      value: null,
      card: false,
    },
    {
      name: "Year",
      key: "year",
      type: dataType.number,
      value: null,
      card: true,
    },
    {
      name: "Make",
      key: "make",
      type: dataType.text,
      value: null,
      card: true,
    },
    {
      name: "Model",
      key: "model",
      type: dataType.text,
      value: null,
      card: false,
    },
    {
      name: "Vin No",
      key: "vin_no",
      type: dataType.number,
      value: null,
      card: false,
    },
    {
      name: "Engine No",
      key: "engine_no",
      type: dataType.number,
      value: null,
      card: false,
    },
    {
      name: "Model No",
      key: "model_no",
      type: dataType.number,
      value: null,
      card: true,
    },
    {
      name: "Serial No",
      key: "serial_no",
      type: dataType.number,
      value: null,
      card: false,
    },
    {
      name: "Fuel Type",
      key: "fuel_type",
      type: dataType.text,
      value: null,
      card: false,
    },
    {
      name: "Transmission Type",
      key: "transmission_type",
      type: dataType.text,
      value: null,
      card: false,
    },
    {
      name: "CC Rating",
      key: "cc_rating",
      type: dataType.text,
      value: null,
      card: false,
    },
    {
      name: "Current KMS",
      key: "current_kms",
      type: dataType.number,
      value: null,
      card: false,
    },
    {
      name: "Service Due KMS",
      key: "service_due_kms",
      type: dataType.number,
      value: null,
      card: false,
    },
    {
      name: "Service Due Date",
      key: "service_due_date",
      type: dataType.date,
      value: null,
      card: false,
    },
    {
      name: "WOF COF Due Date",
      key: "wof_cof_due_date",
      type: dataType.date,
      value: null,
      card: false,
    },
    {
      name: "Registration Due Date",
      key: "registration_due_date",
      type: dataType.date,
      value: null,
      card: false,
    },
    {
      name: "Fire Extinguisher Due Date",
      key: "fire_extinguisher_due_date",
      type: dataType.date,
      value: null,
      card: false,
    },
    {
      name: "First Aid Kit Due Dates",
      key: "first_aid_kit_due_dates",
      type: dataType.date,
      value: null,
      card: false,
    },
  ];
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.rego, handleGetRegoSuccess);

  function handleGetRegoSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      let a = [];
      form.forEach((i) => a.push({ ...i, value: item[i.key] }));
      arr.push(a);
    });
    setListData(arr);
  }

  const formProps = {
    backScreen: screenNames.REGOS,
    endpoint: endpoint.rego,
    form,
    title: "Add Regos",
  };
  return (
    <ParentContainer
      useScroll={false}
      title="Regos"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.REGOS}
        listTitle={"Rego Details"}
        editTitle={"Edit Rego"}
        endpoint={endpoint.rego}
      />
    </ParentContainer>
  );
};

export default Regos;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 2,
  },
  btnStyle: {
    backgroundColor: "#13bfa6",
    borderRadius: 6,
    padding: 8,
  },
  listStyle: {
    flex: 9,
  },
});
