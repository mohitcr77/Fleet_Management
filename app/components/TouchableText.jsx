import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

export default function TouchableText({
  onPress,
  style = styles.openDoc,
  title,
}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={{ color: colors.saveBlue }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  openDoc: {
    position: "absolute",
    top: 3,
    right: 10,
  },
});
