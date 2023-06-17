import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";
import getNestedData from "../../helpers/getNestedData";
import { DROPDOWN_LIST } from "../../constants/entity";

const VehicleMaintenance = () => {
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
      mapKey: ["rego_id"]
    },
    {
      name: "Mechanic",
      key: "mechanic_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.MECHANICS,
      value: null,
      card: true,
      mapKey: ["mechanic_id"]
    },
    {
      name: "Repair Date",
      key: "repair_date",
      type: dataType.date,
      value: null,
      card: true,
      mapKey: ["repair_date"]
    },
    {
      name: "Repair Time",
      key: "repair_time",
      type: dataType.time,
      value: null,
      card: true,
      mapKey : ["repair_time"]
    },
    {
      name: "Day",
      key: "day",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["repair_time"]
    },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
      value: null,
      mapKey: ["repair_time"]
    },
    {
      name: "Total amount",
      key: "total_amount",
      type: dataType.number,
      value: null,
      mapKey: ["total_amount"]
    },
    {
      name: "Type",
      key: "type",
      type: dataType.text,
      value: null,
      mapKey: ["type"]
    },
    {
      name: "Odometer Start",
      key: "odo_start",
      type: dataType.number,
      value: null,
      mapKey: ["odo_start"]
    },
    {
      name: "Odometer Finish",
      key: "odo_finish",
      type: dataType.number,
      value: null,
      mapKey: ["odo_finish"]
    },
    {
      name: "Distance",
      key: "distance",
      type: dataType.number,
      value: null,
      mapKey: ["distance"]
    },
    {
      name: "Mileage",
      key: "milage",
      type: dataType.number,
      value: null,
      mapKey: ["milage"],
    },
  ];

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(
    endpoint.vehicle_maintenance,
    handleGetVehicleMaintenanceSuccess
  );

  function handleGetVehicleMaintenanceSuccess(d) {
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
    backScreen: screenNames.VEHICLE_MAINTENANCE,
    endpoint: endpoint.vehicle_maintenance,
    form,
    title: "Add Vehicle",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Vehicle"
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.VEHICLE_MAINTENANCE}
        listTitle={"Vehicle Details"}
        editTitle={"Edit Vehicle"}
        endpoint={endpoint.vehicle_maintenance}
      />
    </ParentContainer>
  );
};

export default VehicleMaintenance;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
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
