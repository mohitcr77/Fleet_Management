import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import colors from "../constants/colors";
import { width } from "../helpers/scales";
import Icons from "./Icons";
export default function AppCheckBox({
  title,
  subtitle,
  checked = false,
  onCheckboxPress,
}) {
  const [check, setCheck] = useState(checked);
  return (
    <View style={styles.container}>
      <Icons.CheckBox
        checked={check}
        onPress={() => {
          setCheck(!check);
          onCheckboxPress(!check);
        }}
      />
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
