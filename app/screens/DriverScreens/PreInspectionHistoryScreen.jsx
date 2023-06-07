import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import screenNames from "../../constants/screenNames";

export default function PreInspectionHistory() {
  return (
    <ParentContainer
      onBackButtonPressScreen={screenNames.PRE_INSPECTION_LIST_SCREEN}
    >
      <Text>PreInspectionHistory</Text>
    </ParentContainer>
  );
}

const styles = StyleSheet.create({});
