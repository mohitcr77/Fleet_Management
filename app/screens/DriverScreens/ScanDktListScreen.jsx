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

export default function ScanDktList({ navigation }) {
  const CardComponent = ({ obj }) => {
    const data = {
      cardData: [
        { key: "Client Name", value: "obj.client.name", type: "text" },
        // { key: "Travel", value: obj.travel, type: "text" },
        { key: "Docket No.", value: "obj.id", type: "text" },
        { key: "Machine Type", value: "obj.machine_type", type: "text" },
        { key: "Job No.", value: "obj.job_no", type: "text" },
        {
          key: "Start Time",
          value:
            'formatDate(obj.date).monthNameFormat + "  " + AMPMFormat(obj.start)',
          type: "date",
        },
        {
          key: "Finish Time",
          value: "AMPMFormat(obj.finish)" || "Not Finished",
          type: "date",
        },
        {
          key: "Submitted",
          value: "obj.finish && obj.mail_sent === 1" ? "Yes" : "No",
          type: "text",
        },
      ],
      data: [
        { key: "Date", value: "obj.date", type: "text" },
        { key: "Shift", value: "obj.shift" ? "Day" : "Night", type: "text" },
        { key: "Operator", value: "obj.operator", type: "text" },
        { key: "Total", value: "obj.total", type: "text" },
        { key: "CC Phone Number", value: "obj.cc_phone", type: "text" },
        { key: "Location", value: "obj.location", type: "text" },
        { key: "Travel", value: "obj.travel_time", type: "text" },
        { key: "Details", value: " obj.details", type: "list" },
        { key: "Customer Sign", value: "obj.singature", type: "image" },
      ],
    };

    return (
      <ListCard
        data={data}
        obj={obj}
        editScreen={screenNames.fullDktEdit}
        listScreen={screenNames.fullDktList}
      />
    );
  };
  return (
    <ParentContainer useScroll={false}>
      <ListHeader
        listName={"Scan Dkt List"}
        btnName={"Create"}
        onPress={() => navigation.navigate(screenNames.SCAN_DKT_FORM_SCREEN)}
      />
      <View style={styles.container}>
        {false ? (
          <Text style={{ marginTop: 100, alignSelf: "center", height }}>
            No Data
          </Text>
        ) : (
          <FlatList
            data={[1, 2, 3]}
            keyExtractor={(item, index) => "key" + index}
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            onEndReachedThreshold={0.05}
            renderItem={({ item }) => {
              return <CardComponent obj={item} />;
            }}
          />
        )}
      </View>
    </ParentContainer>
  );
}

const styles = StyleSheet.create({
  container: { height: height - 200 },
});
