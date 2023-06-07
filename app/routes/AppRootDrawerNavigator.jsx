import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../screens/DrawerContentScreen";
import screenNames from "../constants/screenNames";
import useFetchList from "../hooks/useFetchList";

//screens
import ChatRoom from "../screens/DriverScreens/ChatRoomScreen";
import Documents from "../screens/DriverScreens/DocumentsScreen";
import DriverJobs from "../screens/DriverScreens/DriverJobsScreen";
import FullDktForm from "./../screens/DriverScreens/FullDktFormScreen";
import FullDktList from "../screens/DriverScreens/FullDktListScreen";
import PreInspectionList from "../screens/DriverScreens/PreInspectionListScreen";
import ScanDktForm from "../screens/DriverScreens/ScanDktFormScreen";
import ScanDktList from "../screens/DriverScreens/ScanDktListScreen";
import TimeSheet from "../screens/DriverScreens/TimeSheetScreen";

//mechanic screen
import MechanicFormScreen from "../screens/MechnicScreens/MechanicFormScreen";
import MechanicDataScreen from "../screens/MechnicScreens/MechanicDataScreen";
import MechanicTimeSheetForm from "../screens/MechnicScreens/MechanicTimeSheetForm";

//common screen
import AboutApp from "../screens/AboutAppScreen";
import PreInspectionForm from "./../screens/DriverScreens/PreInspectionFormScreen";
import Profile from "../screens/ProfileScreen";
import DocumentAdd from "../screens/DriverScreens/DocumentAddScreen";
import PreInspectionHistory from "../screens/DriverScreens/PreInspectionHistoryScreen";
import PreInspectionNote from "../screens/DriverScreens/PreInspectionNoteScreen";
import DriverJobsList from "../screens/DriverScreens/DriverJobsListScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  useFetchList();

  let user = "driver";

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
      name: screenNames.PRE_INSPECTION_LIST_SCREEN,
      component: PreInspectionList,
    },
    { name: screenNames.DRIVER_JOBS_SCREEN, component: DriverJobs },
    { name: screenNames.DRIVER_JOBS_LIST_SCREEN, component: DriverJobsList },

    { name: screenNames.DRIVER_DOCUMENTS_SCREEN, component: Documents },
    { name: screenNames.DRIVER_TIME_SHEET_SCREEN, component: TimeSheet },

    { name: screenNames.CHAT_ROOM_SCREEN, component: ChatRoom },
    { name: screenNames.DOCUMENT_ADD_SCREEN, component: DocumentAdd },
    {
      name: screenNames.PRE_INSPECTION_HISTORY_SCREEN,
      component: PreInspectionHistory,
    },
    {
      name: screenNames.PRE_INSPECTION_NOTES_SCREEN,
      component: PreInspectionNote,
    },
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
