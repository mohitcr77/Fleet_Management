import { View, ScrollView } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import FormInput from "../../components/FormInput";
import dataType from "../../constants/dataType";
import customStyles from "../../constants/styles";
import AppButton from "../../components/AppButton";

const MechanicTimeSheetForm = () => {
  const data = [
    { label: "0", value: "1" },
    { label: "0.5", value: "2" },
    { label: "1", value: "3" },
    { label: "1.5", value: "4" },
    { label: "2", value: "5" },
    { label: "2.5", value: "6" },
    { label: "5", value: "7" },
  ];
  const timeSheetForm = [
    {
      name: "Date",
      key: "date",
      type: dataType.date,
    },
    {
      name: "Start Time",
      key: "start_time",
      type: dataType.time,
    },
    {
      name: "End Time",
      key: "end_time",
      type: dataType.time,
    },
    {
      name: "Break",
      key: "break",
      type: dataType.dropdown,
      data,
    },
    {
      name: "Driver Total",
      key: "driver_total",
      type: dataType.text,
    },
  ];

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
