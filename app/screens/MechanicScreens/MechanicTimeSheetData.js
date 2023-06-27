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
import endpoint, { adminEndpoints } from "../../service/endpoint";
import { DROPDOWN_LIST } from "../../constants/entity";

const MechanicTimeSheetData = () => {
  const form = [
    {
      name: "Date",
      key: "date",
      type: dataType.date,
    },
    {
      name: "Start Time",
      key: "start_time",
      type: dataType.time,
    },
    {
      name: "End Time",
      key: "end_time",
      type: dataType.time,
    },
    {
      name: "Break",
      key: "break",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.BREAK,
    },
    {
      name: "Driver Total",
      key: "driver_total",
      type: dataType.text,
    },
  ];

  const CardComponent = ({ obj }) => {
    const data = {
      cardData: [
        {
          key: "Date",
          value:
            'formatDate(obj.date).monthNameFormat + "  " + AMPMFormat(obj.start)',
          type: "date",
        },
        { key: "Start Time", value: "obj.start_time", type: "time" },
        { key: "End time", value: "obj.end_time", type: "time" },
        {
          key: "Break",
          value: "obj.break",
          type: "number",
        },
        {
          key: "Driver Total",
          value: "obj.driver_total",
          type: "note",
        },
      ],
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
    endpoint: adminEndpoints.rego,
    form,
    title: "Time Sheet",
  };
  return (
    <ParentContainer
      useScroll={false}
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
      title={"Data"}
    >
      <View style={styles.container}>
        {false ? (
          <Text style={{ marginTop: 100, alignSelf: "center", height }}>
            No Data
          </Text>
        ) : (
          <FlatList
            data={[1, 2, 3]}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return <CardComponent obj={item} />;
            }}
          />
        )}
      </View>
    </ParentContainer>
  );
};

export default MechanicTimeSheetData;

const styles = StyleSheet.create({
  container: { height: height - 40 },
});
