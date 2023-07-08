import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import StaffsList from "../screens/AdminScreens/StaffListScreen";
import screenNames from "../constants/screenNames";
import { DROPDOWN_LIST } from "../constants/entity";
import { Header } from "../components/ParentContainer";

const TopTab = createMaterialTopTabNavigator();

export default function StaffNavigator({ route }) {
  const tabs = [
    { name: screenNames.DRIVER_LIST, listName: DROPDOWN_LIST.DRIVERS },
    { name: screenNames.MECHANIC_LIST, listName: DROPDOWN_LIST.MECHANICS },
    { name: screenNames.STAFF_LIST, listName: DROPDOWN_LIST.STAFF },
  ];

  return (
    <>
      <Header />
      <TopTab.Navigator>
        {tabs.map((i) => (
          <TopTab.Screen
            key={i.name}
            name={i.name}
            component={StaffsList}
            initialParams={{ listName: i.listName, ...route.params }}
          />
        ))}
      </TopTab.Navigator>
    </>
  );
}
