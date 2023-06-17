import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";

import { Role } from "../constants/entity";
import { width } from "../helpers/scales";
import screenNames from "../constants/screenNames";
import colors from "../constants/colors";
import DrawerButtonAccordion from "../components/DrawerButtonAccordion";
import Icons from "../components/Icons";
import useAuth from "../hooks/useAuth";

export default function DrawerContent({ navigation }) {
  const { auth, role } = useAuth();
  const [activeDrawer, setActiveDrawer] = useState(0);

  const drawerBtn = {
    [Role.DRIVER]: [
      {
        name: "Full Dkt",
        screen: screenNames.FULL_DKT_LIST_SCREEN,
        children: null,
      },
      {
        name: "Scan Dkt",
        screen: screenNames.SCAN_DKT_LIST_SCREEN,
        children: null,
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
        screen: screenNames.MECHANIC_DATA_SCREEN,
        children: null,
      },
      {
        name: "TimeSheet",
        screen: screenNames.MECHANIC_TIME_SHEET_DATA,
        children: null,
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
        screen: screenNames.DOCUMENTS_SCREEN,
        children: null,
      },
    ],
    [Role.ADMIN]: [
      {
        name: "Dashboard",
        screen: screenNames.DASHBOARD,
        children: null,
      },
      {
        name: "Vehicle",
        screen: null,
        children: [
          { name: "Regos", screen: screenNames.REGOS },
          {
            name: "Vehicle Maintenance",
            screen: screenNames.VEHICLE_MAINTENANCE,
          },
        ],
      },
      {
        name: "Staffs",
        screen: null,
        children: [
          { name: "Driver", screen: screenNames.DRIVER },
          { name: "Mechanic", screen: screenNames.MECHANIC },
        ],
      },
      {
        name: "Fuel",
        screen: null,
        children: [
          { name: "Fuel Log", screen: screenNames.FUEL_LOG },
          { name: "Fuel Efficiency", screen: screenNames.FUEL_EFFICIENCY },
        ],
      },
      {
        name: "Communication",
        screen: null,
        children: [
          { name: "SMS", screen: screenNames.SMS },
          { name: "Chat", screen: screenNames.CHAT_ROOM_SCREEN },
        ],
      },
      {
        name: "Job Entry",
        screen: screenNames.JOB_ENTRY,
        children: null,
      },
      {
        name: "Report Issue",
        screen: screenNames.REPORT_ISSUE,
        children: null,
      },
      {
        name: "Mechanic Time Sheet",
        screen: screenNames.MECHANIC_TIME_SHEET,
        children: null,
      },
      {
        name: "Sales",
        screen: null,
        children: [
          { name: "Estimate", screen: screenNames.ESTIMATE },
          { name: "Client", screen: screenNames.CLIENT },
          { name: "Credit Note", screen: screenNames.CREDIT_NOTE },
        ],
      },
      {
        name: "Setting",
        screen: null,
        children: [
          { name: "Tax", screen: screenNames.TAX },
          { name: "Company Info", screen: screenNames.COMPANY_INFO },
          { name: "Job Color", screen: screenNames.JOB_COLOR },
          { name: "Currency", screen: screenNames.CURRENCY },
        ],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Profile auth={auth} />
      <FlatList
        data={drawerBtn[role]}
        refreshing={true}
        renderItem={({ item, index }) => (
          <DrawerButtonAccordion
            data={item}
            onClick={() => setActiveDrawer(index)}
            active={activeDrawer === index}
          />
        )}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
  function Profile({ auth }) {
    return (
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={() => navigation.navigate(screenNames.PROFILE_SCREEN)}
      >
        <Icons.User
        // image={auth.profile_pic}
        />
        <Text style={{ color: colors.white, marginTop: 20 }}>
          {auth.user.name}
        </Text>
        <Text style={{ color: colors.white }}>{auth.user.email}</Text>
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
    paddingBottom: 20,
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
