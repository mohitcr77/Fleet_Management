import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import StaffsList from "../screens/AdminScreens/StaffListScreen";
import screenNames from "../constants/screenNames";
import { DROPDOWN_LIST } from "../constants/entity";

const TopTab = createMaterialTopTabNavigator();

export default function StaffNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name={screenNames.DRIVER_LIST}
        component={StaffsList}
        initialParams={{ listName: DROPDOWN_LIST.DRIVERS }}
      />
      <TopTab.Screen
        name={screenNames.MECHANIC_LIST}
        component={StaffsList}
        initialParams={{ listName: DROPDOWN_LIST.MECHANICS }}
      />
      <TopTab.Screen
        name={screenNames.STAFF_LIST}
        component={StaffsList}
        initialParams={{ listName: DROPDOWN_LIST.STAFF }}
      />
    </TopTab.Navigator>
  );
}
