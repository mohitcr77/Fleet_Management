import { StyleSheet, Text, View } from "react-native";
import React from "react";
import dataType from "../../constants/dataType";
import FormInput from "../../components/FormInput";
import ParentContainer from "../../components/ParentContainer";
import AppButton from "../../components/AppButton";
import AppFooterButton from "../../components/AppFooterButton";
import screenNames from "../../constants/screenNames";

export default function PreInspectionNote({ navigation }) {
  const form = [
    { name: "Name", key: "name", type: dataType.text },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
    },
  ];
  return (
    <ParentContainer
      onBackButtonPressScreen={screenNames.PRE_INSPECTION_LIST_SCREEN}
    >
      {form.map((i) => (
        <FormInput {...i} />
      ))}
      <AppFooterButton
        onPressLeft={() =>
          navigation.navigate(screenNames.PRE_INSPECTION_LIST_SCREEN)
        }
      />
    </ParentContainer>
  );
}

const styles = StyleSheet.create({});
