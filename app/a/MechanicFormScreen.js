import React, { useRef } from "react";

import screenNames from "../constants/screenNames";
import AppFooterButton from "../components/AppFooterButton";
import dataType from "../constants/dataType";
import endpoint, { mechanicEndpoints } from "../service/endpoint";
import formatDate from "../helpers/formatDate";
import FormInput from "../components/FormInput";
import generateKeyValueFromFormData from "../helpers/generateKeyValueFromForm";
import ParentContainer from "../components/ParentContainer";
import useApi from "../hooks/useApi";
import { DROPDOWN_LIST } from "../constants/entity";
import { log } from "react-native-reanimated";

const MechanicFormScreen = () => {
  const { request } = useApi(handlePostSuccess);

  const mechanicForm = [
    {
      name: "Rego",
      key: "rego",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.REGOS,
    },
    {
      name: "Date",
      key: "date",
      type: dataType.date,
    },
    {
      name: "Day",
      key: "day",
      type: dataType.text,
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
      endpoint: mechanicEndpoints.mechanic_entries,
      body: form.current,
    };
    const res = await request(requestConfig);
  };

  const formProps = {
    backScreen: screenNames.MECHANIC_DATA_SCREEN,
    endpoint: mechanicEndpoints.mechanic_entries,
    form,
    title: "Data",
  };

  return (
    <ParentContainer
      containerStyle={{ backgroundColor: "white" }}
      title={"Form"}
      addScreen={{ name: screenNames.FORM_SCREEN, params: formProps }}
    >
      {mechanicForm.map((i) => (
        <FormInput
          {...i}
          defaultValue={form.current[i.key]}
          onChangeText={(e) => (form.current[i.key] = e)}
          onDateSelect={(e) => (form.current[i.key] = formatDate(e).y_m_d)}
          onImageSelect={(e) => {
            const { file, mime_type } = e;
            form.current[i.key] = file;
            form.current.mime_type = mime_type;
          }}
          onDropdownItemSelect={(e) => (form.current[i.key] = e.id)}
        />
      ))}

      <AppFooterButton onPressRight={handleSubmit} />
    </ParentContainer>
  );
};

export default MechanicFormScreen;
