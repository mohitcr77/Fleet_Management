import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

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
        screen: screenNames.MACHINE_DKT_LIST_SCREEN,
        children: null,
      },
      {
        name: "Scan Dkt",
        screen: screenNames.PAPER_DKT_LIST_SCREEN,
        children: null,
      },

      {
        name: "Jobs",
        screen: null,
        children: [
          {
            name: "Pending Jobs",
            screen: screenNames.DRIVER_PENDING_JOBS_SCREEN,
          },
          {
            name: "Accepted Jobs",
            screen: screenNames.DRIVER_ACCEPTED_JOBS_SCREEN,
          },
        ],
      },
      {
        name: "Pre-Inspection",
        screen: screenNames.PRE_INSPECTION_LIST_SCREEN,
        children: null,
      },

      // {
      //   name: "Time Sheet",
      //   screen: screenNames.TIME_SHEET_LIST_SCREEN,
      //   children: null,
      // },
      {
        name: "Chat",
        screen: screenNames.CHAT_ROOM_SCREEN,
        children: null,
      },
      {
        name: "Documents",
        screen: screenNames.DOCUMENT_LIST_SCREEN,
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
        screen: screenNames.DOCUMENT_LIST_SCREEN,
        children: null,
      },
    ],

    [Role.ADMIN]: [
      generateDrawerItems("Dashboard", screenNames.DASHBOARD),
      generateDrawerItems("Chat", screenNames.STAFF_CHAT_SCREEN),
      generateDrawerItems("Documents", screenNames.STAFF_DOCUMENT_SCREEN),
      generateDrawerItems("Vehicle", null, [
        generateDrawerItems("Regos", screenNames.REGOS),
        generateDrawerItems(
          "Vehicle Maintenance",
          screenNames.VEHICLE_MAINTENANCE
        ),
      ]),

      generateDrawerItems("Staffs", null, [
        generateDrawerItems("Staff", screenNames.STAFF),
        generateDrawerItems("Driver", screenNames.DRIVER),
        generateDrawerItems("Mechanic", screenNames.MECHANIC),
      ]),
      generateDrawerItems("Fuel", null, [
        generateDrawerItems("Fuel Log", screenNames.FUEL_LOG),
        generateDrawerItems("Fuel Efficiency", screenNames.FUEL_EFFICIENCY),
      ]),

      generateDrawerItems("Communication", null, [
        generateDrawerItems("SMS", screenNames.SMS),
        generateDrawerItems("Chat", screenNames.CHAT_ROOM_SCREEN),
      ]),

      generateDrawerItems("Job Entry", screenNames.JOB_ENTRY),
      generateDrawerItems("Report Issue", screenNames.REPORT_ISSUE),
      generateDrawerItems(
        "Mechanic Time Sheet",
        screenNames.MECHANIC_TIME_SHEET
      ),

      generateDrawerItems("Sales", null, [
        generateDrawerItems("Estimate", screenNames.ESTIMATE),
        generateDrawerItems("Client", screenNames.CLIENT),
        generateDrawerItems("Credit Note", screenNames.CREDIT_NOTE),
      ]),

      generateDrawerItems("Setting", null, [
        generateDrawerItems("Tax", screenNames.TAX),
        generateDrawerItems("Job Color", screenNames.JOB_COLOR),
        generateDrawerItems("Currency", screenNames.CURRENCY),
      ]),
    ],

    commonScreens: [
      generateDrawerItems("Notifications", screenNames.NOTIFICATIONS_SCREEN),
    ],
  };

  return (
    <View style={styles.container}>
      <Profile auth={auth} navigation={navigation} />
      <FlatList
        data={[...drawerBtn[role], ...drawerBtn.commonScreens]}
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

  function generateDrawerItems(name, screen, children = null) {
    return { name, screen, children };
  }
}
function Profile({ auth, navigation }) {
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
