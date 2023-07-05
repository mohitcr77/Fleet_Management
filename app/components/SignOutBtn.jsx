import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "./AppButton";
import colors from "../constants/colors";
import useAuth from "../hooks/useAuth";
import permanentStorage, { loginDetail } from "../auth/permanentStorage";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/reducer/authReducer";

export default function SignOutBtn({ style = {}, onPress = () => {} }) {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    permanentStorage.deleteData(loginDetail);
    dispatch(logoutUser());
    onPress();
  };
  return (
    <AppButton
      title={"Sign Out"}
      style={{ backgroundColor: colors.red, ...style }}
      onPress={handleSignOut}
    />
  );
}

const styles = StyleSheet.create({});
