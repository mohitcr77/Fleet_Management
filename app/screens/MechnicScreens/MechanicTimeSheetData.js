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
import useFetchList from "../../hooks/useFetchList";
import ListCard from "../../components/ListCard";
import { height } from "../../helpers/scales";

const MechanicTimeSheetData = () => {
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
  return (
    <ParentContainer
      useScroll={false}
      // containerStyle={{ alignItems: "center" }}
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
  )
}

export default MechanicTimeSheetData

const styles = StyleSheet.create({
  container: { height: height - 40 },
})