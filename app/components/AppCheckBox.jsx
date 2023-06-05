import { View, Text, StyleSheet } from "react-native";
import React from "react";

import colors from "../constants/colors";
import { width } from "../helpers/scales";
import Icons from "./Icons";
export default function AppCheckBox({ title, subtitle, checked, onPress }) {
  return (
    <View style={styles.container}>
      <Icons.CheckBox checked={checked} onPress={onPress} />
      <View style={{ width: width / 2, marginLeft: 20 }}>
        <Text>{title}</Text>
        <Text style={{ color: colors.border }}>{subtitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 50,
  },
});
