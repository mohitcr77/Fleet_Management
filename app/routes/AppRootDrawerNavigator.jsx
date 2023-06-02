import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import screenNames from "../constants/screenNames";

import DrawerContent from "../screens/DrawerContentScreen";
import FullDktList from "../screens/DriverScreens/FullDktList";
import FullDktForm from "./../screens/DriverScreens/FullDktFormScreen";
import useFetchList from "../hooks/useFetchList";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  useFetchList();

  const drawerScreens = [
    { name: screenNames.FULL_DKT_LIST_SCREEN, component: FullDktList },
    { name: screenNames.FULL_DKT_FORM_SCREEN, component: FullDktForm },
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
