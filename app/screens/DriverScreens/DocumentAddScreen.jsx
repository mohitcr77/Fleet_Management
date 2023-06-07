import { StyleSheet, Text, View } from "react-native";
import React from "react";
import dataType from "../../constants/dataType";
import FormInput from "../../components/FormInput";
import ParentContainer from "../../components/ParentContainer";
import AppButton from "../../components/AppButton";
import AppFooterButton from "../../components/AppFooterButton";
import screenNames from "../../constants/screenNames";

export default function DocumentAdd({ navigation }) {
  const form = [
    { name: "Name", key: "name", type: dataType.text },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
    },
    {
      title: "Attach Image",
      key: "img",
      type: dataType.image,
    },
  ];
  return (
    <ParentContainer
      onBackButtonPressScreen={screenNames.DRIVER_DOCUMENTS_SCREEN}
    >
      {form.map((i) => (
        <FormInput {...i} />
      ))}
      <AppFooterButton
        onPressLeft={() =>
          navigation.navigate(screenNames.DRIVER_DOCUMENTS_SCREEN)
        }
      />
    </ParentContainer>
  );
}

const styles = StyleSheet.create({});
