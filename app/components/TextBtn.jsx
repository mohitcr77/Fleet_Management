import { TouchableOpacity, Text } from "react-native";
import React from "react";
import colors from "../constants/colors";

export default function TextBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: colors.saveBlue }}>Open</Text>
    </TouchableOpacity>
  );
}
