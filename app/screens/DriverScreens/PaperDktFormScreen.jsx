import { View, ScrollView } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import FormInput from "../../components/FormInput";
import dataType from "../../constants/dataType";
import AppFooterButton from "../../components/AppFooterButton";
import { useSelector } from "react-redux";
import { DROPDOWN_LIST } from "../../constants/entity";

export default function PaperDktForm() {
  const fullDktForm = [
    { name: "Add Document", key: "document1", type: dataType.image },
    {
      name: "Client Name",
      key: "client",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.CLIENTS,
    },
    {
      name: "Machine Type",
      key: "machine_type",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.REGOS,
    },
    { name: "Date", key: "date", type: dataType.date },
    {
      name: "Operator",
      key: "driver_name",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.DRIVERS,
    },
    { name: "Docket No.", key: "docket_no", type: dataType.text },
    { name: "Job No.", key: "job_no", type: dataType.text },
  ];

  return (
    <ParentContainer>
      {fullDktForm.map((i) => (
        <FormInput {...i} />
      ))}

      <AppFooterButton />
    </ParentContainer>
  );
}
