import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import screenNames from "../constants/screenNames";
import DrawerContent from "../screens/AdminScreens/DrawerContentScreen";
import useFetchList from "../hooks/useFetchList";

//screens
import FullDktForm from "./../screens/DriverScreens/FullDktFormScreen";
import ScanDktForm from "../screens/DriverScreens/ScanDktFormScreen";
import ScanDktList from "../screens/DriverScreens/ScanDktListScreen";
import FullDktList from "../screens/DriverScreens/FullDktListScreen";
import DriverPreInspection from "../screens/DriverScreens/DriverPreInspectionScreen";
import DriverJobs from "../screens/DriverScreens/DriverJobsScreen";
import ChatRoom from "../screens/DriverScreens/ChatRoomScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  useFetchList();

  const drawerScreens = [
    { name: screenNames.FULL_DKT_LIST_SCREEN, component: FullDktList },
    { name: screenNames.FULL_DKT_FORM_SCREEN, component: FullDktForm },
    { name: screenNames.SCAN_DKT_LIST_SCREEN, component: ScanDktList },
    { name: screenNames.SCAN_DKT_FORM_SCREEN, component: ScanDktForm },
    {
      name: screenNames.DRIVER_PRE_INSPECTION_SCREEN,
      component: DriverPreInspection,
    },
    { name: screenNames.DRIVER_JOBS_SCREEN, component: DriverJobs },
    { name: screenNames.CHAT_ROOM_SCREEN, component: ChatRoom },
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
