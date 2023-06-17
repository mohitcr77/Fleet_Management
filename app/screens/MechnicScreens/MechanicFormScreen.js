import React, { useRef } from "react";

import screenNames from "../../constants/screenNames";
import AppFooterButton from "../../components/AppFooterButton";
import dataType from "../../constants/dataType";
import endpoint from "../../service/endpoint";
import formatDate from "./../../helpers/formatDate";
import FormInput from "../../components/FormInput";
import generateKeyValueFromFormData from "../../helpers/generateKeyValueFromForm";
import ParentContainer from "../../components/ParentContainer";
import useApi from "../../hooks/useApi";

const MechanicFormScreen = () => {
  const { request: postMechanicData } = useApi();

  const mechanicForm = [
    {
      name: "Rego",
      key: "rego",
      type: dataType.dropdown,
      data: "machineTypeList",
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
  ];

  const initialState = generateKeyValueFromFormData(mechanicForm);
  const form = useRef(initialState);

  const handleSubmit = async () => {
    const requestConfig = {
      endpoint: endpoint,
      body: form.current,
    };
  };
  return (
    <ParentContainer
      containerStyle={{ backgroundColor: "white" }}
      title={"Form"}
      onBackButtonPressScreen={screenNames.MECHANIC_DATA_SCREEN}
    >
      {mechanicForm.map((i) => (
        <FormInput
          {...i}
          defaultValue={form.current[i.key]}
          onChangeText={(e) => (form.current[i.key] = e)}
          onDateSelect={(e) => (form.current[i.key] = formatDate(e).y_m_d)}
          onImageSelect={(e) => (form.current[i.key] = e)}
          onDropdownItemSelect={(e) => (form.current[i.key] = e.id)}
        />
      ))}

      <AppFooterButton onPressRight={handleSubmit} />
    </ParentContainer>
  );
};

export default MechanicFormScreen;
