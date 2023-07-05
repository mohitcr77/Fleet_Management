import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import screenNames from "../constants/screenNames";
import LogIn from "../screens/AuthScreens/LogIn";
import SignUp from "../screens/AuthScreens/SignUp";
import FillOtp from "../screens/AuthScreens/FillOtp";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const screens = [
    // { name: screenNames.SELECT_USER_TYPE_SCREEN, component: SelectUserType },
    { name: screenNames.LOGIN_SCREEN, component: LogIn },
    { name: screenNames.SIGN_UP_SCREEN, component: SignUp },
    { name: screenNames.OTP_SCREEN, component: FillOtp },
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

export default AuthNavigator;
