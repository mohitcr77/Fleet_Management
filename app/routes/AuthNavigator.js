import React from "react";
import LogIn from "../authScreens/LogIn";
import SignUp from "../authScreens/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import Onboarding from "../screens/Onboarding";
import screenNames from "../constatnts/screenNames";
import SelectUserType from "../authScreens/SelectUserType";

const Stack = createNativeStackNavigator();

const authNavigator = () => {
  const screens = [
    // { name: screenNames.SELECT_USER_TYPE_SCREEN, component: SelectUserType },
    { name: screenNames.LOGIN_SCREEN, component: LogIn },
    { name: screenNames.SIGN_UP_SCREEN, component: SignUp },
  ];

  return (
    <Stack.Navigator>
      {screens.map((item) => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default authNavigator;
