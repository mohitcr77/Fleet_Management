import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import AppButton from "./../../components/AppButton";
import customStyles from "../../constants/styles";
import dimensions from "../../constants/dimensions";

export default function DriverPreInspection() {
  return (
    <ParentContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <InspectionCard key={i} />
      ))}
    </ParentContainer>
  );
}

function InspectionCard() {
  const btn = [
    { name: "Pre Inspection" },
    { name: "History" },
    { name: "Notes" },
  ];
  const detail = [
    { name: "Id :", value: "object.id" },
    { name: "Fleet Number :", value: "object.fleet_number" },
  ];
  return (
    <View style={styles.card}>
      {detail.map((i) => (
        <View style={{ flexDirection: "row", marginVertical: 3 }} key={i.name}>
          <Text style={{ fontWeight: "bold" }}>{i.name}</Text>
          <Text> {i.value}</Text>
        </View>
      ))}

      <View style={customStyles.flex_row_between}>
        {btn.map((i) => (
          <AppButton
            title={i.name}
            key={i.name}
            style={styles.cardBtn}
            titleStyle={styles.btnText}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: dimensions.componentWidth,
    padding: 5,
    marginVertical: 10,
  },
  cardBtn: { width: 105 },
  btnText: { fontSize: 14 },
});
