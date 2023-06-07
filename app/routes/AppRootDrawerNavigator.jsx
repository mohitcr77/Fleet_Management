import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../screens/DrawerContentScreen";
import screenNames from "../constants/screenNames";
import useFetchList from "../hooks/useFetchList";

//screens
import FullDktForm from "./../screens/DriverScreens/FullDktFormScreen";
import ScanDktForm from "../screens/DriverScreens/ScanDktFormScreen";
import ScanDktList from "../screens/DriverScreens/ScanDktListScreen";
import FullDktList from "../screens/DriverScreens/FullDktListScreen";
import DriverPreInspection from "../screens/DriverScreens/DriverPreInspectionScreen";
import DriverJobs from "../screens/DriverScreens/DriverJobsScreen";
import ChatRoom from "../screens/DriverScreens/ChatRoomScreen";
import Documents from "../screens/DriverScreens/DocumentsScreen";
import TimeSheet from "../screens/DriverScreens/TimeSheetScreen";

//mechanic screen
import MechanicFormScreen from "../screens/MechnicScreens/MechanicFormScreen";
import MechanicDataScreen from "../screens/MechnicScreens/MechanicDataScreen";
import MechanicTimeSheetForm from "../screens/MechnicScreens/MechanicTimeSheetForm";
import MechanicTimeSheetData from "../screens/MechnicScreens/MechanicTimeSheetData";
import FleetInspection from "../screens/MechnicScreens/FleetInspection";
import InspectionHistory from "../screens/MechnicScreens/InspectionHistory"
import DocumentForm from "../screens/MechnicScreens/DocumentForm"
import DocumentList from "../screens/MechnicScreens/DocumentList"

//common screen
import AboutApp from "../screens/AboutAppScreen";
import PreInspectionForm from "./../screens/DriverScreens/PreInspectionFormScreen";
import Profile from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  useFetchList();

  let user = "mechanic";

  const driverScreens = [
    { name: screenNames.FULL_DKT_FORM_SCREEN, component: FullDktForm },
    { name: screenNames.FULL_DKT_LIST_SCREEN, component: FullDktList },
    { name: screenNames.SCAN_DKT_FORM_SCREEN, component: ScanDktForm },
    { name: screenNames.SCAN_DKT_LIST_SCREEN, component: ScanDktList },
    {
      name: screenNames.PRE_INSPECTION_FORM_SCREEN,
      component: PreInspectionForm,
    },
    {
      name: screenNames.DRIVER_PRE_INSPECTION_SCREEN,
      component: DriverPreInspection,
    },
    { name: screenNames.DRIVER_JOBS_SCREEN, component: DriverJobs },

    { name: screenNames.DRIVER_DOCUMENTS_SCREEN, component: Documents },
    { name: screenNames.DRIVER_TIME_SHEET_SCREEN, component: TimeSheet },

    { name: screenNames.CHAT_ROOM_SCREEN, component: ChatRoom },
  ];

  const mechanicScreens = [
    { name: screenNames.MECHANIC_FORM_SCREEN, component: MechanicFormScreen },
    { name: screenNames.MECHANIC_DATA_SCREEN, component: MechanicDataScreen },
    {
      name: screenNames.MECHANIC_TIMESHEET_FORM,
      component: MechanicTimeSheetForm,
    },
    { name: screenNames.MECHANIC_TIMESHEET_DATA, component: MechanicTimeSheetData },
    { name: screenNames.FLEET_INSPECTION, component: FleetInspection },
    { name: screenNames.INSPECTION_HISTORY, component: InspectionHistory },
    { name: screenNames.ADD_DOCUMENT, component: DocumentForm },
    { name: screenNames.VIEW_DOCUMENTS, component: DocumentList },
    //{ name: screenNames.ADD_DOCUMENT, component: DocumentForm },
  ];

  const commonScreens = [
    { name: screenNames.ABOUT_APP_SCREEN, component: AboutApp },
    { name: screenNames.PROFILE_SCREEN, component: Profile },
  ];

  const drawerScreens = [
    ...(user === "driver" ? driverScreens : mechanicScreens),
    ...commonScreens,
  ];

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "85%",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
      useLegacyImplementation={true}
    >
      {drawerScreens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Drawer.Navigator>
  );
}
