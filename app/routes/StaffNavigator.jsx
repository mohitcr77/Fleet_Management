import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import StaffsList from "../screens/AdminScreens/StaffListScreen";
import screenNames from "../constants/screenNames";
import { DROPDOWN_LIST } from "../constants/entity";
import { Header } from "../components/ParentContainer";

const TopTab = createMaterialTopTabNavigator();

export default function StaffNavigator({ route }) {
  const tabs = [
    generateTabList(screenNames.DRIVER_LIST, DROPDOWN_LIST.DRIVERS),
    generateTabList(screenNames.MECHANIC_LIST, DROPDOWN_LIST.MECHANICS),
    generateTabList(screenNames.STAFF_LIST, DROPDOWN_LIST.STAFF),
  ];

  return (
    <>
      <Header title={route.params.title} />
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
  function generateTabList(name, listName) {
    return { name, listName };
  }
}
