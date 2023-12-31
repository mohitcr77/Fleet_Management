import { StyleSheet } from "react-native";
import dimensions from "./dimensions";

const flex_row_between = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const center = {
  justifyContent: "center",
  alignItems: "center",
};

const rightAligned = {
  ...dimensions.compWidth,
  textAlign: "right",
  marginBottom: 20,
  paddingHorizontal: 10,
};
const bottomSheetContainer = {
  backgroundColor: "white",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingVertical: 40,
  paddingHorizontal: 20,
};

const inputBorder = {
  borderColor: "#cccccc",
  borderWidth: 1,
  borderRadius: 4,
  backgroundColor: "white",
};

const inputBox = {
  ...inputBorder,
  height: 45,
  // paddingHorizontal: 12,
};

const smallBtn = {
  borderRadius: 4,
  height: 30,
  width: dimensions.componentWidth / 2 - 10,
};
const smallBtnText = {
  fontSize: 14,
};

const customStyles = StyleSheet.create({
  smallBtnText,
  smallBtn,
  flex_row_between,
  center,
  rightAligned,
  bottomSheetContainer,
  inputBox,
  inputBorder,
});

export default customStyles;
