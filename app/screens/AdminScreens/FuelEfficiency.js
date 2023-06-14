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
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.fuel_efficiency, handleFuelEfficiencySuccess);

  function handleFuelEfficiencySuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Driver id",
          value: JSON.stringify(item.driver_id),
          card: true
        },
        {
          name: "Current miles",
          value: JSON.stringify(item.current_miles),
          card: true
        },
        {
          name: "Total fuel (ltrs)",
          value: JSON.stringify(item.total_fuel_ltrs),
          card: true
        },
        {
          name: "Milage",
          value: JSON.stringify(item.milage),
          card: true
        },
        {
          name: "Total fuel (ltrs)",
          value: JSON.stringify(item.total_fuel_ltrs),
        },
        {
          name: "Fuel Cost",
          value: JSON.stringify(item.fuel_cost),
        },
        {
          name: "Fuel card no",
          value: item.fuel_card_no,
        },
        {
          name: "Fuel rate",
          value: JSON.stringify(item.fuel_rate),
        },
        {
          name: "Fuel per km",
          value: item.fuel_per_km,
        },
        {
          name: "Date",
          value: item.date,
        },
        {
          name: "Comments",
          value: item.comments,
        },
      ];
      arr.push(a);
    });
    setListData(arr);
  }
  const form = [
    {
      name: "User id",
      key: "driver_id",
      type: dataType.text,
    },
    {
      name: "Current miles",
      key: "current_miles",
      type: dataType.text,
    },
    {
      name: "Total fuel (ltrs)",
      key: "total_fuel_ltrs",
      type: dataType.text,
    },
    {
      name: "Milage",
      key: "milage",
      type: dataType.text,
    },
    {
      name: "Fuel Cost",
      key: "fuel_cost",
      type: dataType.text,
    },
    {
      name: "Fuel card no",
      key: "fuel_card_no",
      type: dataType.text,
    },
    {
      name: "Fuel rate",
      key: "fuel_rate",
      type: dataType.text,
    },
    {
      name: "Fuel per km",
      key: "fuel_per_km",
      type: dataType.text,
    },
    {
      name: "Date",
      key: "date",
      type: dataType.date,
    },
    {
      name: "Comments",
      key: "comments",
      type: dataType.text,
    },
  ];
  const formProps = {
    backScreen: screenNames.FUEL_EFFICIENCY,
    endpoint: endpoint.fuel_efficiency,
    form,
    title: "Add Fuel Efficiency",
  }

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
  )
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
