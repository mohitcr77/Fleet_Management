import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";
import getNestedData from "../../helpers/getNestedData";
import { DROPDOWN_LIST } from "../../constants/entity";

const FuelEfficiency = () => {
//what is user id? and how is rego_id entered in API
  const form = [
    {
      name: "Id#",
      key: "id",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["id"]
    },
    {
      name: "Rego",
      key: "rego_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.REGOS,
      value: null,
      card: true,
      mapKey: ["user_id"]
    },
    {
      name: "Driver",
      key: "driver_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.DRIVERS,
      value: null,
      card: true,
      mapKey: ["Driver_id"]
    },
    {
      name: "Current miles",
      key: "current_miles",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["current_miles"]
    },
    {
      name: "Total fuel (ltrs)",
      key: "total_fuel_ltrs",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["total_fuel_ltrs"]
    },
    {
      name: "Milage",
      key: "milage",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["milage"]
    },
    {
      name: "Fuel Cost",
      key: "fuel_cost",
      type: dataType.text,
      value: null,
      mapKey: ["fuel_cost"]
    },
    {
      name: "Fuel card no",
      key: "fuel_card_no",
      type: dataType.text,
      value: null,
      mapKey: ["fuel_card_no"]
    },
    {
      name: "Fuel rate",
      key: "fuel_rate",
      type: dataType.text,
      value: null,
      mapKey: ["fuel_rate"]
    },
    {
      name: "Fuel per km",
      key: "fuel_per_km",
      type: dataType.text,
      value: null,
      mapKey: ["fuel_per_km"]
    },
    {
      name: "Date",
      key: "date",
      type: dataType.date,
      value: null,
      mapKey: ["date"]
    },
    {
      name: "Comments",
      key: "comments",
      type: dataType.text,
      value: null,
      mapKey: ["comments"]
    },
  ];

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.fuel_efficiency, handleFuelEfficiencySuccess);

  function handleFuelEfficiencySuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => {
        const value = getNestedData(item, i.mapKey);
        a.push({ ...i, value });
      });
      arr.push(a);
    });
    setListData(arr);
  }
  const formProps = {
    backScreen: screenNames.FUEL_EFFICIENCY,
    endpoint: endpoint.fuel_efficiency,
    form,
    title: "Add Efficiency",
  }

  return (
    <ParentContainer
      useScroll={false}
      title="Fuel Efficiency"
      addScreen={{ name :screenNames.FORM_SCREEN, params: formProps}}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.FUEL_EFFICIENCY}
        editTitle={"Edit FUEL"}
        endpoint={endpoint.fuel_efficiency}
      />
    </ParentContainer>
  )
};

export default FuelEfficiency;
