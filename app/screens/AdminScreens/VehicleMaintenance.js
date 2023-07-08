import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import { adminEndpoints } from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useFetch from "../../hooks/useFetch";
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
    },
    {
      name: "Rego",
      key: "rego_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.REGOS,
    },
    {
      name: "Mechanic",
      key: "mechanic_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.MECHANICS,
      value: null,
      card: true,
    },
    {
      name: "Repair Date",
      key: "repair_date",
      type: dataType.date,
      value: null,
      card: true,
    },
    {
      name: "Repair Time",
      key: "repair_time",
      type: dataType.time,
      value: null,
      card: true,
    },
    {
      name: "Day",
      key: "day",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.DAYS,
      value: null,
      card: true,
    },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
      value: null,
    },
    {
      name: "Total amount",
      key: "total_amount",
      type: dataType.number,
      value: null,
    },
    {
      name: "Type",
      key: "type",
      type: dataType.text,
      value: null,
    },
    {
      name: "Odometer Start",
      key: "odo_start",
      type: dataType.number,
      value: null,
    },
    {
      name: "Odometer Finish",
      key: "odo_finish",
      type: dataType.number,
      value: null,
    },
    {
      name: "Distance",
      key: "distance",
      type: dataType.number,
      value: null,
    },
    {
      name: "Mileage",
      key: "milage",
      type: dataType.number,
      value: null,
    },
  ];

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch({
    endpoint: adminEndpoints.vehicle_maintenance,
    onSuccess: handleGetVehicleMaintenanceSuccess,
  });

  function handleGetVehicleMaintenanceSuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => a.push({ ...i, value: item[i.key] }));
      arr.push(a);
    });
    setListData(arr);
  }
  const formProps = {
    backScreen: screenNames.VEHICLE_MAINTENANCE,
    endpoint: adminEndpoints.vehicle_maintenance,
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
        endpoint={adminEndpoints.vehicle_maintenance}
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
