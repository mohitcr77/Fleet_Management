import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import colors from "../constants/colors";
import dimensions from "../constants/dimensions";

export default function ListHeader({ listName, btnName, onPress }) {
  return (
    <View style={styles.topContainer}>
      <Text style={{ fontSize: 18 }}>{listName}</Text>
      <Pressable
        onPress={onPress}
        style={styles.btnStyle}
        android_ripple={{ color: "#00580c" }}
      >
        <View>
          <Text style={{ color: "#ffffff" }}>{btnName}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
    width: dimensions.componentWidth,
  },
  btnStyle: {
    backgroundColor: colors.green1,
    borderRadius: 6,
    padding: 8,
  },
});
