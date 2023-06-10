import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";

import { Role } from "../constants/entity";
import { width } from "../helpers/scales";
import screenNames from "../constants/screenNames";
import colors from "../constants/colors";
import DrawerButtonAccordion from "../components/DrawerButtonAccordion";
import Icons from "../components/Icons";
import useAuth from "../hooks/useAuth";

export default function DrawerContent({ navigation }) {
  const { role } = useAuth();

  const drawerBtn = {
    [Role.DRIVER]: [
      {
        name: "Full Dkt",
        screen: null,
        children: [
          { name: "Full Dkt Form", screen: screenNames.FULL_DKT_FORM_SCREEN },
          { name: "Full Dkt List", screen: screenNames.FULL_DKT_LIST_SCREEN },
        ],
      },
      {
        name: "Scan Dkt",
        screen: null,
        children: [
          { name: "Scan Dkt Form", screen: screenNames.SCAN_DKT_FORM_SCREEN },
          { name: "Scan Dkt List", screen: screenNames.SCAN_DKT_LIST_SCREEN },
        ],
      },

      {
        name: "Jobs",
        screen: null,
        children: [
          {
            name: "Today Jobs",
            screen: screenNames.DRIVER_JOBS_SCREEN,
          },
          {
            name: "Older Jobs",
            screen: screenNames.DRIVER_JOBS_LIST_SCREEN,
          },
        ],
      },
      {
        name: "Pre-Inspection",
        screen: screenNames.PRE_INSPECTION_LIST_SCREEN,
        children: null,
      },
      {
        name: "Documents",
        screen: screenNames.DRIVER_DOCUMENTS_SCREEN,
        children: null,
      },
      {
        name: "Time Sheet",
        screen: screenNames.DRIVER_TIME_SHEET_SCREEN,
        children: null,
      },
      {
        name: "Chat",
        screen: screenNames.CHAT_ROOM_SCREEN,
        children: null,
      },
    ],
    [Role.MECHANIC]: [
      {
        name: "Mechanic Data",
        screen: null,
        children: [
          {
            name: "Mechanic Form",
            screen: screenNames.MECHANIC_FORM_SCREEN,
          },
          {
            name: "View Mechanic Data",
            screen: screenNames.MECHANIC_DATA_SCREEN,
          },
        ],
      },
      {
        name: "TimeSheet",
        screen: null,
        children: [
          {
            name: "TimeSheet Form",
            screen: screenNames.MECHANIC_TIME_SHEET_FORM,
          },
          {
            name: "TimeSheet Data",
            screen: screenNames.MECHANIC_TIME_SHEET_DATA,
          },
        ],
      },
      {
        name: "Inspection",
        screen: null,
        children: [
          { name: "Fleet Inspection", screen: screenNames.FLEET_INSPECTION },
          {
            name: "Inspection History",
            screen: screenNames.INSPECTION_HISTORY,
          },
        ],
      },
      {
        name: "Documents",
        screen: null,
        children: [
          { name: "Add Document", screen: screenNames.ADD_DOCUMENT },
          { name: "View Documents", screen: screenNames.VIEW_DOCUMENTS },
        ],
      },
    ],
    [Role.ADMIN]: [],
  };

  return (
    <View style={styles.container}>
      <Profile />

      {drawerBtn[role].map((data) => (
        <DrawerButtonAccordion key={data.name} data={data} />
      ))}

      {/* {(user === "driver" ? driverBtn : mechanicBtn).map((i, index) => (
        <DrawerButton
          key={index}
          title={i.title}
          navigateToScreen={i.screen}
          icon={i.icon}
          onSelect={() => setSelected(index)}
          selected={selected == index ? true : false}
        />
      ))}

      <View style={styles.aboutContainer}>
        <DrawerButton
          title={"About App"}
          navigateToScreen={screenNames.ABOUT_APP_SCREEN}
          icon={<Icons.Information />}
          onSelect={() => setSelected(5)}
          selected={selected == 5 ? true : false}
        />
      </View> */}
    </View>
  );
  function Profile() {
    return (
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={() => navigation.navigate(screenNames.PROFILE_SCREEN)}
      >
        <Icons.User
        // image={auth.profile_pic}
        />
        <Text style={{ color: colors.white, marginTop: 20 }}>name</Text>
        <Text style={{ color: colors.white }}>email</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    marginRight: 14,
    borderRadius: 8,

    backgroundColor: "green",
    color: "white",
  },
  startEndContainer: {
    marginTop: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  signOutBtn: {
    backgroundColor: colors.red,
    width: 100,
    height: 50,
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  profileContainer: {
    width: width * 0.85,
    backgroundColor: colors.themeColor,
    height: 200,
    paddingTop: 50,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  aboutContainer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
  },
});
