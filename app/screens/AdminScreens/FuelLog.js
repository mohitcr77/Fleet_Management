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
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.fuel_log, handleCurrencySuccess);

  function handleCurrencySuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Date",
          value: item?.date,
          card: true
        },
        {
          name: "Time",
          value: item?.time,
          card: true
        },
        {
          name: "Dkt_no.",
          value: item?.dkt_no,
          card: true
        },
        {
          name: "Dip Start",
          value: JSON.stringify(item?.dip_start),
          card: true
        },
        {
          name: "Dip finish",
          value: JSON.stringify(item?.dip_finish),
          card: true
        },
        {
          name: "EST Delivered",
          value: JSON.stringify(item?.est_delivered),
          card: true
        },
        {
          name: "Actual Delivered",
          value: JSON.stringify(item?.actual_delivered),
        },
        {
          name: "Fuel Rate",
          value: JSON.stringify(item?.fuel_rate),
        },
        {
          name: "Invoice",
          value: item?.invoice_total,
        },
      ];
      arr.push(a);
    });
    setListData(arr);
  }
  const form = [
    {
      name: "Date",
      key: "date",
      type: dataType.date,
    },
    {
      name: "Time",
      key: "time",
      type: dataType.time,
    },
    {
      name: "Dkt_no.",
      key: "dkt_no",
      type: dataType.number,
    },
    {
      name: "Dip Start",
      key: "dip_Start",
      type: dataType.text,
    },
    {
      name: "Dip finish",
      key: "dip_finish",
      type: dataType.text,
    },
    {
      name: "EST Delivered",
      key: "est_delivered",
      type: dataType.text,
    },
    {
      name: "Actual Delivered",
      key: "actual_delivered",
      type: dataType.text,
    },
    {
      name: "Fuel Rate",
      key: "fuel_rate",
      type: dataType.text,
    },
    {
      name: "Invoice",
      key: "invoice_total",
      type: dataType.text,
    },
  ];
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
