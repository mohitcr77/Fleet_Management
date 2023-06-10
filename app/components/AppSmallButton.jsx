import {
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import dimensions from "../constants/dimensions";

export default function AppSmallButton({ onPress, title, loading }) {
  return (
    <TouchableOpacity
      onPress={!loading ? onPress : null}
      style={[
        styles.button,
        { backgroundColor: loading ? "#91abed" : "#0f255eff" },
      ]}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={{ fontSize: 20, color: "white" }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 5,
    shadowOpacity: 5,
    height: 45,
    backgroundColor: "#0f255eff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginVertical: 8,
    width: dimensions.componentWidth - 20,
  },
});
