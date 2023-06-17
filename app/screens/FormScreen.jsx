import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import React, { useRef, useState } from "react";

import { HTTPS_METHODS } from "../constants/entity";
import AppFooterButton from "./../components/AppFooterButton";
import formatDate from "../helpers/formatDate";
import FormInput from "../components/FormInput";
import generateKeyValueFromFormData from "../helpers/generateKeyValueFromForm";
import ParentContainer from "../components/ParentContainer";
import useApi from "../hooks/useApi";

export default function Form({ route, navigation }) {
  const { title, backScreen, endpoint, form } = route.params;
  const initialState = generateKeyValueFromFormData(form);

  const [update, setUpdate] = useState(false);
  const formData = useRef(initialState);

  const { request } = useApi(handlePostSuccess);0.0

  async function handlePostData() {
    const id = formData.current.id;

    const requestConfig = {
      method: id ? HTTPS_METHODS.PUT : HTTPS_METHODS.POST,
      endpoint: id ? endpoint + "/" + id : endpoint,
      body: formData.current,
    };

    const d = await request(requestConfig);
    console.log(d, "aaaaaaa");
  }

  function handlePostSuccess() {
    formData.current = initialState;
    setUpdate(!update);
  }
  return (
    <ParentContainer
      title={title}
      containerStyle={{ backgroundColor: "white" }}
      onBackButtonPressScreen={backScreen}
    >
      {form.map(
        (i) =>
          i.name !== "Id#" && (
            <FormInput
              key={i.key}
              name={i.name}
              type={i.type}
              data={i.data || []}
              defaultValue={formData.current[i.key]}
              onChangeText={(e) => (formData.current[i.key] = e)}
              onDateSelect={(e) =>
                (formData.current[i.key] = formatDate(e).y_m_d)
              }
              onImageSelect={(e) => (formData.current[i.key] = e)}
              onDropdownItemSelect={(e) => (formData.current[i.key] = e.id)}
            />
          )
      )}
      <AppFooterButton onPressRight={handlePostData} />
    </ParentContainer>
  );
}

const styles = StyleSheet.create({});
