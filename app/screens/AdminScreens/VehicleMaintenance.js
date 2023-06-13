import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import dataType from "../../constants/dataType";
import TokenContext from "../../service/context";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";

const VehicleMaintenance = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.vehicle_Maintenance, handleVehicleMaintenanceSuccess);

  function handleVehicleMaintenanceSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Mechanic Id",
          value: JSON.stringify(item?.mechanic_id),
          card: true

        },
        {
          name: "Repair Date",
          value: item?.repair_date,
          card: true
        },
        {
          name: "Repair Time",
          value: item?.repair_time,
          card: true
        },
        {
          name: "Day",
          value: item?.day,
          card: true
        },
        {
          name: "Comment",
          value: item?.comment,
        },
        {
          name: "Total amount",
          value: item?.total_amount,
        },
        {
          name: "Type",
          value: item?.type,
        },
        {
          name: "Rego ID",
          value: JSON.stringify(item?.rego_id),
        },
        {
          name: "Odometer Start",
          value: JSON.stringify(item?.odo_start),
        },
        {
          name: "Odometer Start",
          value: JSON.stringify(item?.odo_finish),
        },
        {
          name: "Distance",
          value: JSON.stringify(item?.distance),
        },
        {
          name: "Mileage",
          value: JSON.stringify(item?.milage),
        },
      ];
      arr.push(a);
    });
    setListData(arr);
  }
  const form = [
    {
      name: "Mechanic Id",
      key: "mechanic_id",
      type: dataType.number,
    },
    {
      name: "Repair Date",
      key: "repair_date",
      type: dataType.date,
    },
    {
      name: "Repair Time",
      key: "repair_time",
      type: dataType.time,
    },
    {
      name: "Day",
      key: "day",
      type: dataType.text,
    },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
    },
    {
      name: "Total amount",
      key: "total_amount",
      type: dataType.number,
    },
    {
      name: "Type",
      key: "type",
      type: dataType.text,
    },
    {
      name: "Rego ID",
      key: "rego_id",
      type: dataType.text,
    },
    {
      name: "Odometer Start",
      key: "odo_start",
      type: dataType.number,
    },
    {
      name: "Odometer Finish",
      key: "odo_finish",
      type: dataType.number,
    },
    {
      name: "Distance",
      key: "distance",
      type: dataType.number,
    },
    {
      name: "Mileage",
      key: "milage",
      type: dataType.number,
    },
  ];
  const formProps = {
    backScreen: screenNames.VEHICLE_MAINTENANCE,
    endpoint: endpoint.vehicle_Maintenance,
    form,
    title: "Add Vehicle Maintenance",
  };

  return (
    <ParentContainer
    useScroll={false}
    title="Vehicle Maintenance"
    addScreen={[screenNames.FORM_SCREEN, formProps]}
  >
    <AdminListRendered
      data={listData}
      onRefresh={refresh}
      loading={loading}
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
