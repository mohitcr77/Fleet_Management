import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ParentContainer from "../components/ParentContainer";
import FormInput from "../components/FormInput";
import AppFooterButton from "./../components/AppFooterButton";
import generateKeyValueFromFormData from "../helpers/generateKeyValueFromForm";
import useApi from "../hooks/useApi";
import formatDate from "../helpers/formatDate";
import { HTTPS_METHODS } from "../constants/entity";
import dataType from "../constants/dataType";

export default function Form({ route, navigation }) {
  const { title, backScreen, form, endpoint } = route.params;
  const initialState = generateKeyValueFromFormData(form);
  const [update, setUpdate] = useState(false);
  const formData = useRef(initialState);

  const { request } = useApi(handlePostSuccess);

  async function handlePostData() {
    const id = formData.current.id;
    // for (let x in form) {
    //   console.log(x);
    // }
    // return;
    // [...form].forEach((i) => {
    //   if (
    //     i.type == dataType.number &&
    //     typeof formData.current[i.key] !== dataType.number
    //   ) {
    //     formData.current[i.key] = JSON.parseInt(formData.current[i.key]);
    //   }
    // });

    // for (let x in formData.current) {
    //   console.log(typeof formData.current[x]);
    // }

    const requestConfig = {
      method: id ? HTTPS_METHODS.PUT : HTTPS_METHODS.POST,
      endpoint: id ? endpoint + "/" + id : endpoint,
      body: formData.current,
    };
    // console.log(requestConfig, "pppp");
    // return;
    const d = await request(requestConfig);
    console.log(d);
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
      {form.map(
        (i) =>
          i.name !== "Id#" && (
            <FormInput
              {...i}
              value={formData.current[i.key]}
              onChangeText={(e) => {
                formData.current[i.key] = e;
                setUpdate(!update);
              }}
              onDateSelect={(e) =>
                (formData.current[i.key] = formatDate(e).y_m_d)
              }
            />
          )
      )}
      <AppFooterButton onPressRight={handlePostData} />
    </ParentContainer>
  );
}

const styles = StyleSheet.create({});
