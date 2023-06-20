import React from "react";
import { View, StyleSheet, Text } from "react-native";
import dimensions from "../constants/dimensions";

export default function CompWrapper({ children, name }) {
  return (
    <View style={styles.compWrapperStyle}>
      <Text style={{ marginBottom: 5, marginTop: 8, fontWeight: "bold" }}>
        {name}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  compWrapperStyle: {
    marginVertical: 5,
    width: dimensions.componentWidth,
  },
});
