import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "./AppButton";
import customStyles from "../constants/styles";
import dimensions from "../constants/dimensions";

export default function AppFooterButton({
  leftBtnTitle = "Cancel",
  rightBtnTitle = "Save",
  onPressLeft,
  onPressRight,
}) {
  return (
    <View style={styles.btnContainer}>
      <AppButton
        title={leftBtnTitle}
        type="small"
        style={{ height: 40 }}
        onPress={onPressLeft}
      />
      <AppButton
        title={rightBtnTitle}
        type="small"
        style={{ height: 40 }}
        onPress={onPressRight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    ...customStyles.flex_row_between,
    marginBottom: 100,
    marginTop: 40,
    width: dimensions.componentWidth,
  },
});
