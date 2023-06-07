import React from "react";
import LogIn from "../screens/authScreens/LogIn";
import SignUp from "../screens/authScreens/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screenNames from "../constants/screenNames";
import OtpScreen from "../screens/authScreens/OtpScreen";

const Stack = createNativeStackNavigator();

const authNavigator = () => {
  const screens = [
    // { name: screenNames.SELECT_USER_TYPE_SCREEN, component: SelectUserType },
    { name: screenNames.LOGIN_SCREEN, component: LogIn },
    { name: screenNames.SIGN_UP_SCREEN, component: SignUp },
    { name: screenNames.OTP_SCREEN, component: OtpScreen },
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
