import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";
import getNestedData from "../../helpers/getNestedData";
const MechanicTimesheet = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.mechanic_timeSheet, handleMechanic_TimeSheetSuccess);

  function handleMechanic_TimeSheetSuccess(d) {
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
      name: "Mechanic Id",
      key: "mechanic_id",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["mechanic_id"],
    },
    {
      name: "Date",
      key: "date",
      type: dataType.date,
      value: null,
      card: true,
      mapKey: ["date"],

    },
    {
      name: "Day",
      key: "day",
      type: dataType.text,
      value: null,
      card: true,
      mapKey: ["day"],
    },
    {
      name: "Start time",
      key: "start_time",
      type: dataType.time,
      value: null,
      card: true,
      mapKey: ["start_time"],
    },
    {
      name: "End_time",
      key: "end_time",
      type: dataType.time,
      value: null,
      card: true,
      mapKey: ["end_time"],
    },
    {
      name: "notes",
      key: "notes",
      type: dataType.text,
      value: null,
      mapKey: ["notes"],
    },
    {
      name: "Total time",
      key: "total_time",
      type: dataType.number,
      value: null,
      mapKey: ["total_time"],
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
