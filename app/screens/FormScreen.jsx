import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import ParentContainer from "../components/ParentContainer";
import FormInput from "../components/FormInput";
import AppFooterButton from "./../components/AppFooterButton";
import generateKeyValueFromFormData from "../helpers/generateKeyValueFromForm";
import useApi from "../hooks/useApi";
import formatDate from "../helpers/formatDate";

export default function Form({ route, navigation }) {
  const { title, backScreen, form, endpoint } = route.params;
  const initialState = generateKeyValueFromFormData(form);
  const [update, setUpdate] = useState(false);
  const formData = useRef(initialState);

  const { request } = useApi(handlePostSuccess);

  useEffect(() => {
    setUpdate(!update);
  }, []);

  async function handlePostData() {
    const requestConfig = {
      endpoint,
      body: formData.current,
    };
    await request(requestConfig);
  }

  function handlePostSuccess() {
    formData.current = initialState;
    setUpdate(!update);
    // navigation.navigate(backScreen);
  }

  return (
    <ParentContainer
      title={title}
      containerStyle={{ backgroundColor: "white" }}
      onBackButtonPressScreen={backScreen}
    >
      {form.map((i) => (
        <FormInput
          {...i}
          value={formData.current[i.key]}
          onChangeText={(e) => (formData.current[i.key] = e)}
          onDateSelect={(e) => (formData.current[i.key] = formatDate(e).y_m_d)}
        />
      ))}
      <AppFooterButton onPressRight={handlePostData} />
    </ParentContainer>
  );
}

const styles = StyleSheet.create({});
