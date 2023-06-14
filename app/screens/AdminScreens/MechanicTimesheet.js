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

const MechanicTimesheet = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.mechanic_timeSheet, handleMechanic_TimeSheetSuccess);

  function handleMechanic_TimeSheetSuccess(d) {
    let arr = [];
    d.forEach((item) => {
      const a = [
        {
          name: "Mechanic Id",
          value: item?.mechanic_id,
          card: true,
        },
        {
          name: "Date",
          value: item?.date,
          card: true,
        },
        {
          name: "Day",
          value: item?.day,
          card: true
        },
        {
          name: "Start time",
          value: JSON.stringify(item?.start_time),
          card: true
        },
        {
          name: "End_time",
          value: item?.end_time,
        },
        {
          name: "notes",
          value: item?.notes,
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
      name: "Date",
      key: "date",
      type: dataType.date,
    },
    {
      name: "Day",
      key: "day",
      type: dataType.text,
    },
    {
      name: "Start time",
      key: "start_time",
      type: dataType.time,
    },
    {
      name: "End_time",
      key: "end_time",
      type: dataType.time,
    },
    {
      name: "notes",
      key: "notes",
      type: dataType.text,
    },
    {
      name: "Total time",
      key: "total_time",
      type: dataType.number,
    },
  ];
  const formProps = {
    backScreen: screenNames.MECHANIC_TIME_SHEET,
    endpoint: endpoint.mechanic_timeSheet,
    form,
    title: "Add Mechanic Time Sheet",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Time Sheet"
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

export default MechanicTimesheet;
