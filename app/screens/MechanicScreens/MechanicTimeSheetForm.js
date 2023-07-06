import { View, ScrollView } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import FormInput from "../../components/FormInput";
import customStyles from "../../constants/styles";
import AppButton from "../../components/AppButton";
import { timeSheetForm } from "../TimeSheetFormScreen";

const MechanicTimeSheetForm = () => {
  return (
    <ParentContainer containerStyle={{ backgroundColor: "white" }}>
      {timeSheetForm.map((i) => (
        <FormInput {...i} />
      ))}

      <View
        style={[
          customStyles.flex_row_between,
          { marginBottom: 150, marginTop: 40 },
        ]}
      >
        <AppButton
          title={"Save(Send Later)"}
          type="small"
          style={{ height: 40 }}
        />
        <AppButton title={"Submit"} type="small" style={{ height: 40 }} />
      </View>
    </ParentContainer>
  );
};

export default MechanicTimeSheetForm;
