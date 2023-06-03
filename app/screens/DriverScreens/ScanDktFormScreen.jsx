import { View, ScrollView } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import FormInput from "../../components/FormInput";
import dataType from "../../constants/dataType";
import useFetchList from "../../hooks/useFetchList";

export default function ScanDktForm() {
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
    { name: "Add Document", key: "document1", type: dataType.image },
    {
      name: "Client Name",
      key: "client",
      type: dataType.dropdown,
      data: clientList,
    },
    {
      name: "Machine Type",
      key: "machine_type",
      type: dataType.dropdown,
      data: machineTypeList,
    },
    { name: "Date", key: "date", type: dataType.date },
    {
      name: "Operator",
      key: "driver_name",
      type: dataType.dropdown,
      data,
    },
    { name: "Docket No.", key: "docket_no", type: dataType.text },
    { name: "Job No.", key: "job_no", type: dataType.text },
  ];

  return (
    <ParentContainer>
      {fullDktForm.map((i) => (
        <FormInput {...i} />
      ))}
    </ParentContainer>
  );
}
