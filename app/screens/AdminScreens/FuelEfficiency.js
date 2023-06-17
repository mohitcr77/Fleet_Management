import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";

const FuelEfficiency = () => {
  const form = [
    {
      name: "Id#",
      key: "id",
      type: dataType.number,
      value: null,
      card: true,
    },
    {
      name: "User id",
      key: "driver_id",
      type: dataType.text,
      value: null,
      card: true,
    },
    {
      name: "Current miles",
      key: "current_miles",
      type: dataType.text,
      value: null,
      card: true,
    },
    {
      name: "Total fuel (ltrs)",
      key: "total_fuel_ltrs",
      type: dataType.text,
      value: null,
      card: true,
    },
    {
      name: "Milage",
      key: "milage",
      type: dataType.text,
      value: null,
      card: true,
    },
    {
      name: "Fuel Cost",
      key: "fuel_cost",
      type: dataType.text,
      value: null,
    },
    {
      name: "Fuel card no",
      key: "fuel_card_no",
      type: dataType.text,
      value: null,
    },
    {
      name: "Fuel rate",
      key: "fuel_rate",
      type: dataType.text,
      value: null,
    },
    {
      name: "Fuel per km",
      key: "fuel_per_km",
      type: dataType.text,
      value: null,
    },
    {
      name: "Date",
      key: "date",
      type: dataType.date,
      value: null,
    },
    {
      name: "Comments",
      key: "comments",
      type: dataType.text,
      value: null,
    },
  ];

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(
    endpoint.fuel_efficiency,
    handleFuelEfficiencySuccess
  );

  function handleFuelEfficiencySuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];

      form.forEach((i) => a.push({ ...i, value: item[i.key] }));
      arr.push(a);
    });
    setListData(arr);
  }
  const formProps = {
    backScreen: screenNames.FUEL_EFFICIENCY,
    endpoint: endpoint.fuel_efficiency,
    form,
    title: "Add Fuel Efficiency",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Fuel Efficiency"
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

export default FuelEfficiency;
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
