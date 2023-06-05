import { View, ScrollView } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import FormInput from "../../components/FormInput";
import dataType from "../../constants/dataType";
import useFetchList from "../../hooks/useFetchList";
import customStyles from "../../constants/styles";
import AppButton from "../../components/AppButton";

const MechanicFormScreen = () => {
  const { clientList, machineTypeList } = useFetchList();

  const mechanicForm=[
    {
      name: "Rego",
      key: "rego",
      type: dataType.dropdown,
      data: machineTypeList,
    },
    {
      name: "Date",
      key: "date",
      type: dataType.date,
    },
    {
      name: "Total Amount",
      key: "total_amount",
      type: dataType.number,
    },
    {
      name: "Mileage",
      key: "mileage",
      type: dataType.number,
      data: clientList,
    },
    {
      name: "Comment",
      key: "comment",
      type: dataType.text,
    },
    {
      name: "Attachment",
      key: "attachment",
      type: dataType.image,
    },
  ]
  
  return (
    <ParentContainer containerStyle={{ backgroundColor: "white" }}>
      {mechanicForm.map((i) => (
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
  )
}

export default MechanicFormScreen
