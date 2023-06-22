import { StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { HTTPS_METHODS } from "../../constants/entity";
import AppFooterButton from "../../components/AppFooterButton";
import generateKeyValueFromFormData from "../../helpers/generateKeyValueFromForm";
import ParentContainer from "../../components/ParentContainer";
import useApi from "../../hooks/useApi";
import { useSelector } from "react-redux";
import endpointB from "../../service/endpoint";
import { useDispatch } from "react-redux";
import FormInput from "../../components/FormInput";

const EstimateCreditNoteForm = ({ route, navigation }) => {
  
  const { request} = useApi(handlePostSuccess);
  async function handlePostData() {
    const id = form.id;
    const requestConfig = {
      method: HTTPS_METHODS.POST,
      endpoint: endpoint,
      body: form,
    };
    const d = await request(requestConfig);
  }

  function handlePostSuccess(e) {}

  const onClientSelect = async (e) => {
    const requestConfig = {
      method: HTTPS_METHODS.GET,
      endpoint: endpointB.jobs_by_client + e.id,
    };
   // const d = await request(requestConfig);
    console.log("Client jobs are", d.data.data[0]);
  };

  return (
    <ParentContainer
      title={title}
      containerStyle={{ backgroundColor: "white" }}
      onBackButtonPressScreen={backScreen}
    >
      {form.map((i) => {
        const { value, ...respProps } = i;
        if (i.name !== "Id#") {
          const onSelect = (e) => (form[i.key] = e);

          return (
            <FormInput
              {...respProps}
              defaultValue={form[i.key]}
              onChangeText={onSelect}
              onDateSelect={onSelect}
              onImageSelect={onSelect}
              onTimeSelect={onSelect}
              onDropdownItemSelect={(e) =>
                (form[i.key] = e.id || e.label)
              }
              onLocationSelect={(e) =>
                (form = { ...form, ...e })
              }
            />
          );
        }
      })}
      <AppFooterButton onPressRight={handlePostData} />
    </ParentContainer>
  );
};

export default EstimateCreditNoteForm;

const styles = StyleSheet.create({});
