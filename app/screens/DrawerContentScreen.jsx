import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";

// import AuthContext from "../../auth/context";
import { width } from "../helpers/scales";
import Icons from "../components/Icons";
import colors from "../constants/colors";
import DrawerButton from "../components/DrawerButton";
import screenNames from "../constants/screenNames";

export default function DrawerContent({ navigation }) {
  const [selected, setSelected] = useState(0);

  const btn = [
    {
      title: "Full DKT",
      screen: screenNames.FULL_DKT_LIST_SCREEN,
      icon: <Icons.EditPencil />,
    },
    {
      title: "Scan DKT",
      screen: screenNames.SCAN_DKT_LIST_SCREEN,
      icon: <Icons.EditPencil />,
    },
    {
      title: "Driver Pre-Inspection",
      screen: screenNames.DRIVER_PRE_INSPECTION_SCREEN,
      icon: <Icons.EditPencil />,
    },
    {
      title: "Driver JObs",
      screen: screenNames.DRIVER_JOBS_SCREEN,
      icon: <Icons.EditPencil />,
    },
    {
      title: "Documents",
      screen: screenNames.DRIVER_DOCUMENTS_SCREEN,
      icon: <Icons.EditPencil />,
    },
    {
      title: "Time Sheet",
      screen: screenNames.DRIVER_TIME_SHEET_SCREEN,
      icon: <Icons.EditPencil />,
    },
    {
      title: "Chat",
      screen: screenNames.CHAT_ROOM_SCREEN,
      icon: <Icons.EditPencil />,
    },
  ];

  const mechanicBtn = [
    {
      title: "Mechanic Form",
      screen: screenNames.MECHANIC_FORM_SCREEN,
      icon: <Icons.EditPencil />,
    },
    {
      title: "Mechanic Data",
      screen: screenNames.MECHANIC_DATA_SCREEN,
      icon: <Icons.Data/>
    },
    {
      title: "Mechanic TimeSheet Form",
      screen: screenNames.MECHANIC_TIMESHEET_FORM,
      icon: <Icons.EditPencil />,
    },
    {
      title: "Add Document",
      screen: screenNames.ADD_DOCUMENT,
      icon: <Icons.EditPencil />,
    },
  ]

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profileContainer}
        // onPress={() => navigation.navigate(screenNames.profile)}
      >
        <Icons.User
        // image={auth.profile_pic}
        />
        <Text style={{ color: colors.white, marginTop: 20 }}>name</Text>
        <Text style={{ color: colors.white }}>email</Text>
      </TouchableOpacity>
      
      {mechanicBtn.map((i, index) => (
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
      </View>
    </View>
  );
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
