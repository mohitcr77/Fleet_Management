import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import { width } from "../../helpers/scales";

export default function Documents() {
  return (
    <ParentContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <CardComponent key={i} item={i} />
      ))}
    </ParentContainer>
  );
}
function CardComponent({ item }) {
  return (
    <View style={styles.card}>
      <Text>card</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: width - 30,
    elevation: 5,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 20,
    backgroundColor: "white",
  },
});
