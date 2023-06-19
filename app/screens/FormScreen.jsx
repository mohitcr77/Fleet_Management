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

  const { request } = useApi(handlePostSuccess);
  0.0;

  async function handlePostData() {
    const id = formData.current.id;

    const requestConfig = {
      method: id ? HTTPS_METHODS.PUT : HTTPS_METHODS.POST,
      endpoint: id ? endpoint + "/" + id : endpoint,
      body: formData.current,
    };
    // console.log(requestConfig);
    // return;
    const d = await request(requestConfig);
    console.log(d, "ppp");
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
      {form.map((i) => {
        const { value, ...respProps } = i;
        if (i.name !== "Id#") {
          const onSelect = (e) => (formData.current[i.key] = e);

          return (
            <FormInput
              {...respProps}
              defaultValue={formData.current[i.key]}
              onChangeText={onSelect}
              onDateSelect={onSelect}
              onImageSelect={onSelect}
              onTimeSelect={onSelect}
              onDropdownItemSelect={(e) =>
                (formData.current[i.key] = e.id || e.label)
              }
            />
          );
        }
      })}
      <AppFooterButton onPressRight={handlePostData} />
    </ParentContainer>
  );
}

const styles = StyleSheet.create({});
