import React from "react";
import { useState } from "react";
import dataType from "../../constants/dataType";
import ParentContainer from "../../components/ParentContainer";
import endpoint from "../../service/endpoint";
import screenNames from "../../constants/screenNames";
import AdminListRendered from "../../components/AdminListRendered";
import useGet from "./../../hooks/useGet";
import getNestedData from "../../helpers/getNestedData";
import { DROPDOWN_LIST } from "../../constants/entity";
const MechanicTimesheet = () => {
  const [listData, setListData] = useState([]);

  const { refresh, loading } = useGet(endpoint.mechanic_timeSheet, handleMechanic_TimeSheetSuccess);

  function handleMechanic_TimeSheetSuccess(d) {
    let arr = [];
    d.data.data.forEach((item) => {
      let a = [];
      form.forEach((i) => a.push({ ...i, value: item[i.key] }));
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
      type: dataType.dropdown,
      data: DROPDOWN_LIST.MECHANICS,
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
    title: "Time Sheet",
  };

  return (
    <ParentContainer
      useScroll={false}
      title="Time Sheet"
      addScreen={{ name:screenNames.FORM_SCREEN, params :formProps}}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={loading}
        backScreen={screenNames.MECHANIC_TIME_SHEET}
        listTitle={"TimeSheet Details"}
        editTitle={"Edit Time Sheet"}
        endpoint={endpoint.mechanic_timeSheet}
      />
    </ParentContainer>
  );
};

export default MechanicTimesheet;
