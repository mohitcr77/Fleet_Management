import { View, ScrollView } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import FormInput from "../../components/FormInput";
import dataType from "../../constants/dataType";
import useFetchList from "../../hooks/useFetchList";
import customStyles from "../../constants/styles";
import AppButton from "../../components/AppButton";

export default function FullDktForm() {
  const { clientList, machineTypeList } = useFetchList();

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];
  const fullDktForm = [
    {
      name: "Client Name",
      key: "client_name",
      type: dataType.dropdown,
      data: clientList,
    },
    {
      name: "Machine Type",
      key: "machine_type",
      type: dataType.dropdown,
      data: machineTypeList,
    },
    { name: "Travel Time", key: "travel_time", type: dataType.dropdown, data },
    { name: "Supervisor", key: "supervisor", type: dataType.dropdown, data },
    { name: "Date", key: "date", type: dataType.date },
    { name: "Start Time", key: "start", type: dataType.time },
    { name: "Finish Time", key: "finish", type: dataType.time },
    { name: "Job No.", key: "job_no", type: dataType.text },
    { name: "Operator", key: "operator", type: dataType.text },
    { name: "Location", key: "location", type: dataType.text },
    { name: "CC Phone Number", key: "cc_phone_no", type: dataType.text },
    { name: "Total", key: "total", type: dataType.text },
    { name: "Signature", key: "signature", type: dataType.signature },
    { name: "Details", key: "details", type: dataType.form },
  ];

  return (
    <ParentContainer containerStyle={{ backgroundColor: "white" }}>
      {fullDktForm.map((i) => (
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
}
