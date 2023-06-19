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
      card: true,
      mapKey: ["date"],
    },
    {
      name: "Time",
      key: "time",
      type: dataType.time,
      card: true,
      mapKey: ["time"],
    },
    {
      name: "Dkt_no.",
      key: "dkt_no",
      type: dataType.number,
      card: true,
      mapKey: ["dtk_no"],
    },
    {
      name: "Dip Start",
      key: "dip_Start",
      type: dataType.time,
      mapKey: ["dip_start"],
    },
    {
      name: "Dip finish",
      key: "dip_finish",
      type: dataType.time,
      mapKey: ["dip_finish"],
    },
    {
      name: "EST Delivered",
      key: "est_delivered",
      type: dataType.text,
      mapKey: ["dip_finish"],
    },
    {
      name: "Actual Delivered",
      key: "actual_delivered",
      type: dataType.text,
      mapKey: ["actual_delivered"],
    },
    {
      name: "Fuel Rate",
      key: "fuel_rate",
      type: dataType.number,
      mapKey: ["fuel_rate"],
    },
    {
      name: "Invoice",
      key: "invoice_total",
      type: dataType.text,
      mapKey: ["invoice_total"],
    },
  ];
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.fuel_log, handleCurrencySuccess);

  function handleCurrencySuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => {
        // const value = getNestedData(item, i.mapKey);

        a.push({ ...i, value: item[i.key] });
      });
      arr.push(a);
    });
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
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
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
