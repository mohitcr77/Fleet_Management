import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import screenNames from "../constants/screenNames";
import DrawerContent from "../screens/DrawerContentScreen";
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
import DocumentForm from "../screens/MechnicScreens/DocumentForm";

//common screen
import AboutApp from "../screens/AboutAppScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  useFetchList();

  const drawerScreens = [
    { name: screenNames.DRIVER_JOBS_SCREEN, component: DriverJobs },
    { name: screenNames.CHAT_ROOM_SCREEN, component: ChatRoom },
    { name: screenNames.DRIVER_DOCUMENTS_SCREEN, component: Documents },
    {
      name: screenNames.DRIVER_PRE_INSPECTION_SCREEN,
      component: DriverPreInspection,
    },
    { name: screenNames.DRIVER_TIME_SHEET_SCREEN, component: TimeSheet },
    { name: screenNames.FULL_DKT_FORM_SCREEN, component: FullDktForm },
    { name: screenNames.FULL_DKT_LIST_SCREEN, component: FullDktList },
    { name: screenNames.SCAN_DKT_FORM_SCREEN, component: ScanDktForm },
    { name: screenNames.SCAN_DKT_LIST_SCREEN, component: ScanDktList },
    { name: screenNames.ABOUT_APP_SCREEN, component: AboutApp },
  ];

  const mechanicScreens = [
    { name: screenNames.MECHANIC_FORM_SCREEN, component: MechanicFormScreen },
    { name: screenNames.MECHANIC_DATA_SCREEN, component: MechanicDataScreen },
    {
      name: screenNames.MECHANIC_TIMESHEET_FORM,
      component: MechanicTimeSheetForm,
    },
    //{ name: screenNames.ADD_DOCUMENT, component: DocumentForm },
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
      {mechanicScreens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Drawer.Navigator>
  );
}
