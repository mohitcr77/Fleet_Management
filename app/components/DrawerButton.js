import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function DrawerButton({
  title,
  navigateToScreen,
  icon,
  onSelect,
  selected,
}) {
  const navigation = useNavigation();

  console.log(navigateToScreen);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(navigateToScreen);
        onSelect();
      }}
      style={[
        styles.container,
        { backgroundColor: selected ? colors.border : colors.white },
      ]}
    >
      {icon}
      <Text style={{ fontSize: 16, paddingLeft: 15 }}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 50,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    borderRadius: 5,
  },
});
