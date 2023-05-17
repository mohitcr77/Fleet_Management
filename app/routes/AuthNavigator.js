import React from 'react'
import LogIn from '../authScreens/LogIn'
import SignUp from '../authScreens/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';

const Stack = createNativeStackNavigator();

const authNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LogIn} options={{headerShown : false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}} />
    </Stack.Navigator>
  )
}

export default authNavigator