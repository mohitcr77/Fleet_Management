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

const FuelLog = () => {
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
      name: "Date",
      key: "date",
      type: dataType.date,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Time",
      key: "time",
      type: dataType.time,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Dkt_no.",
      key: "dkt_no",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Dip Start",
      key: "dip_Start",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Dip finish",
      key: "dip_finish",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "EST Delivered",
      key: "est_delivered",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Actual Delivered",
      key: "actual_delivered",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Fuel Rate",
      key: "fuel_rate",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Invoice",
      key: "invoice_total",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["id"],
    },
  ];
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.fuel_log, handleCurrencySuccess);

  function handleCurrencySuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => {
        console.log(item, "ppp");
        // const value = getNestedData(item, i.mapKey);

        a.push({ ...i, value: item[i.key] });
      });
      arr.push(a);
    });
    console.log(arr, "lll");
    setListData(arr);
  }

  const formProps = {
    backScreen: screenNames.FUEL_LOG,
    endpoint: endpoint.fuel_log,
    form,
    title: "Add Fuel Log",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Fuel Log"
      addScreen={[screenNames.FORM_SCREEN, formProps]}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.FUEL_LOG}
        listTitle={"Fuel Log"}
        editTitle={"Edit"}
        endpoint={endpoint.fuel_log}
      />
    </ParentContainer>
  );
};

export default FuelLog;

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
