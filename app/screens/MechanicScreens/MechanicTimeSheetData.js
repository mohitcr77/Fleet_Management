import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import ParentContainer from "../../components/ParentContainer";
import ListHeader from "../../components/ListHeader";
import screenNames from "../../constants/screenNames";
import ListCard from "../../components/ListCard";
import { height } from "../../helpers/scales";
import dataType from "../../constants/dataType";
import endpoint, {
  adminEndpoints,
  mechanicEndpoints,
} from "../../service/endpoint";
import { DROPDOWN_LIST } from "../../constants/entity";
import useFetch from "../../hooks/useFetch";
import getNestedData from "../../helpers/getNestedData";
import AdminListRendered from "../../components/AdminListRendered";

const MechanicTimeSheetData = () => {
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
      mapKey: ["day"],
    },
    {
      name: "Total",
      key: "total_time",
      type: dataType.totalTime,
      mapKey: ["total_time"],
    },
    {
      name: "Day",
      key: "day",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.DAYS,
      mapKey: ["day"],
      value: null,
      card: true,
    },
    {
      name: "Break",
      key: "break",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.BREAK,
      mapKey: ["break"],
    },
    {
      name: "Note",
      key: "notes",
      type: dataType.text,
      mapKey: ["notes"],
    },
  ];

  const [listData, setListData] = useState([]);

  const { refresh, loading } = useFetch({
    endpoint: mechanicEndpoints.time_sheet,
    onSuccess: handleGetMechanicTimeSheet,
  });

  function handleGetMechanicTimeSheet(d) {
    let arr = [];
    console.log(d?.data?.data, "pppppppppp");
    d?.data?.data.forEach((item) => {
      let a = [];
      form.forEach((i) => {
        // const value = getNestedData(item, i.mapKey);
        const value = "qq";
        a.push({ ...i, value });
      });
      arr.push(a);
    });
    setListData(arr);
  }

  const CardComponent = ({ obj }) => {
    const data = {
      cardData: [],
    };

    return (
      <ListCard
        data={data}
        obj={obj}
        editScreen={screenNames.MECHANIC_TIME_SHEET_FORM}
        listScreen={screenNames.MECHANIC_TIME_SHEET_DATA}
        showMore={false}
        editBtn={true}
      />
    );
  };

  const formProps = {
    backScreen: screenNames.MECHANIC_TIME_SHEET_DATA,
    endpoint: mechanicEndpoints.time_sheet,
    form,
    title: "Time Sheet",
  };
  console.log(listData, "zzzzzzzzzzzzz");
  return (
    <ParentContainer
      useScroll={false}
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
      title={"Time Sheet"}
      noData={!listData.length}
    >
      <AdminListRendered
        data={listData}
        onRefresh={refresh}
        loading={!listData.length}
        backScreen={screenNames.MECHANIC_TIME_SHEET}
        listTitle={"Time Sheet"}
        editTitle={"Edit Mechanic"}
        endpoint={mechanicEndpoints.time_sheet}
      />
    </ParentContainer>
  );
};

export default MechanicTimeSheetData;

const styles = StyleSheet.create({
  container: { height: height - 40 },
});
