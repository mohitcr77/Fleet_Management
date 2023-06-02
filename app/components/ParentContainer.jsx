import { useNavigation, DrawerActions } from "@react-navigation/native";
import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { height, width } from "../helpers/scales";

import colors from "../constants/colors";
import Icons from "./Icons";
import dimensions from "../constants/dimensions";

export default function ParentContainer({
  children,
  title,
  color = colors.white,
  useScroll = true,
}) {
  const navigation = useNavigation();

  const CompWrapper = () => {
    return (
      <View
        style={{
          width: dimensions.componentWidth,
        }}
      >
        {children}
      </View>
    );
  };
  return (
    <View
      style={{
        minHeight: height,
        alignItems: "center",
      }}
    >
      <View style={styles.header}>
        <Icons.Menu
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Image
          source={require("../assets/images/logo-truck.png")}
          style={{ width: 60, height: 50 }}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo-name.png")}
          style={{ width: 100, height: 50 }}
          resizeMode="contain"
        />
      </View>
      {useScroll ? (
        <ScrollView style={styles.container}>
          <CompWrapper />
        </ScrollView>
      ) : (
        <CompWrapper />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "flex-end",
    flexDirection: "row",
    fontSize: 20,
    height: 100,
    paddingBottom: 17,
    paddingLeft: 20,
    paddingTop: 30,
    shadowColor: "#000",
    backgroundColor: "white",
    width: width,
  },
});
