import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import screenNames from "../../constants/screenNames";
import { driverEndpoints } from "../../service/endpoint";

export default function PreInspectionHistory({ route }) {
  const { regoId } = route.params;
  const { data } = useFetch(driverEndpoints.preStartInspection(regoId));

  return (
    <ParentContainer
      onBackButtonPressScreen={screenNames.PRE_INSPECTION_LIST_SCREEN}
    >
      <Text>PreInspectionHistory</Text>
    </ParentContainer>
  );
}

const styles = StyleSheet.create({});
