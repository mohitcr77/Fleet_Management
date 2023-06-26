import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useFetch from "../../hooks/useFetch";
import getNestedData from "../../helpers/getNestedData";

const Regos = () => {
  const form = [
    {
      name: "Id#",
      key: "id",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Name",
      key: "name",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["name"],
    },
    {
      name: "Regos Rate",
      key: "rego_rate",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["rego_rate"],
    },
    {
      name: "Milage Threshold",
      key: "milage_threshold",
      type: dataType.number,
      value: null,
      card: false,
      mapKey: ["milage_threshold"],
    },
    {
      name: "Vehicle Type",
      key: "vehicle_type",
      type: dataType.text,
      value: null,
      card: false,
      mapKey: ["vehicle_type"],
    },
    {
      name: "CheckSheet Type",
      key: "checksheet_type",
      type: dataType.text,
      value: null,
      card: false,
      mapKey: ["checksheet_type"],
    },
    {
      name: "Plate No",
      key: "plate_no",
      type: dataType.number,
      value: null,
      card: false,
      mapKey: ["plate_no"],
    },
    {
      name: "Year",
      key: "year",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["year"],
    },
    {
      name: "Make",
      key: "make",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["make"],
    },
    {
      name: "Model",
      key: "model",
      type: dataType.text,
      value: null,
      card: false,
      mapKey: ["model"],
    },
    {
      name: "Vin No",
      key: "vin_no",
      type: dataType.number,
      value: null,
      card: false,
      mapKey: ["vin_no"],
    },
    {
      name: "Engine No",
      key: "engine_no",
      type: dataType.number,
      value: null,
      card: false,
      mapKey: ["engine_no"],
    },
    {
      name: "Model No",
      key: "model_no",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["model_no"],
    },
    {
      name: "Serial No",
      key: "serial_no",
      type: dataType.number,
      value: null,
      card: false,
      mapKey: ["serial_no"],
    },
    {
      name: "Fuel Type",
      key: "fuel_type",
      type: dataType.text,
      value: null,
      card: false,
      mapKey: ["fuel_type"],
    },
    {
      name: "Transmission Type",
      key: "transmission_type",
      type: dataType.text,
      value: null,
      card: false,
      mapKey: ["transmission_type"],
    },
    {
      name: "CC Rating",
      key: "cc_rating",
      type: dataType.text,
      value: null,
      card: false,
      mapKey: ["cc_rating"],
    },
    {
      name: "Current KMS",
      key: "current_kms",
      type: dataType.number,
      value: null,
      card: false,
      mapKey: ["current_kms"],
    },
    {
      name: "Service Due KMS",
      key: "service_due_kms",
      type: dataType.number,
      value: null,
      card: false,
      mapKey: ["service_due_kms"],
    },
    {
      name: "Service Due Date",
      key: "service_due_date",
      type: dataType.date,
      value: null,
      card: false,
      mapKey: ["service_due_date"],
    },
    {
      name: "WOF COF Due Date",
      key: "wof_cof_due_date",
      type: dataType.date,
      value: null,
      card: false,
      mapKey: ["wof_cof_due_date"],
    },
    {
      name: "Registration Due Date",
      key: "registration_due_date",
      type: dataType.date,
      value: null,
      card: false,
      mapKey: ["registration_due_date"],
    },
    {
      name: "Fire Extinguisher Due Date",
      key: "fire_extinguisher_due_date",
      type: dataType.date,
      value: null,
      card: false,
      mapKey: ["fire_extinguisher_due_date"],
    },
    {
      name: "First Aid Kit Due Dates",
      key: "first_aid_kit_due_dates",
      type: dataType.date,
      value: null,
      card: false,
      mapKey: ["first_aid_kit_due_dates"],
    },
  ];
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch(endpoint.rego, handleGetRegoSuccess);

  function handleGetRegoSuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
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
