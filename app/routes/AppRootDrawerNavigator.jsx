import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/DrawerContentScreen";
import screenNames from "../constants/screenNames";
import FullDktList from "../screens/DriverScreens/FullDktList";

const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
  const drawerScreens = [
    { name: screenNames.FULL_DKT_LIST_SCREEN, component: FullDktList },
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
};
