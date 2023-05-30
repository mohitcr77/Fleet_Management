import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { DrawerActions, useNavigation } from "../hooks";
import { scale, width } from "../helpers/scales";
import colors from "../constants/colors";
import Icons from "./Icons";
import AppText from "./AppText";
import AppStopwatch from "./AppStopwatch";
import screenNames from "../constants/screenNames";

export default function DrawerHeader({
  title,
  filter = false,
  notificationIcon = false,
  showAddBtn = false,
  onPress,
  onBackButtonPressScreen,
  onPressAddDocument,
  showStopwatch = false,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
      {filter ? <Icons.Filter onPress={onPress} /> : null}

      <AppStopwatch showStopwatch={showStopwatch} />
      {onBackButtonPressScreen ? (
        <TouchableOpacity
          onPress={() => navigation.navigate(onBackButtonPressScreen)}
        >
          <AppText>Back</AppText>
        </TouchableOpacity>
      ) : null}
      {notificationIcon ? (
        <Icons.Notification
          onPress={() => navigation.navigate(screenNames.notificationScreen)}
        />
      ) : null}

      <Icons.AddDocument
        show={showAddBtn}
        onPressAddDocument={onPressAddDocument}
        onPress={() => navigation.navigate(screenNames.notificationScreen)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    paddingHorizontal: scale(25),
    height: 106,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: colors.white,
    elevation: 5,
    justifyContent: "space-between",
    paddingBottom: 17,

    flexDirection: "row",
    paddingTop: 50,
    alignItems: "center",
  },
});
