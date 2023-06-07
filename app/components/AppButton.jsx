import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import dimensions from "../constants/dimensions";
import { ActivityIndicator } from "react-native-paper";
import customStyles from "../constants/styles";
import colors from "../constants/colors";

export default function AppButton({
  onPress,
  title,
  loading = false,
  style,
  titleStyle,
  type = "large",
}) {
  let btn = {
    ...styles.button,
    backgroundColor: colors.themeColor,
  };

  let txtStyle = { fontSize: 20, color: "white", ...titleStyle };

  if (type === "small") {
    btn = { ...btn, ...customStyles.smallBtn };
    txtStyle = { ...txtStyle, ...customStyles.smallBtnText };
  }
  return (
    <TouchableOpacity onPress={onPress} style={[btn, style]}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[txtStyle, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    shadowOpacity: 5,
    height: 45,
    backgroundColor: colors.themeColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginVertical: 8,
    width: dimensions.componentWidth,
  },
});
