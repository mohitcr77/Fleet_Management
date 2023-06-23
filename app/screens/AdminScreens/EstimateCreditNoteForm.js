import { StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { HTTPS_METHODS } from "../../constants/entity";
import AppFooterButton from "../../components/AppFooterButton";
import ParentContainer from "../../components/ParentContainer";
import useApi from "../../hooks/useApi";
import { useSelector } from "react-redux";
import endpointB from "../../service/endpoint";
import { useDispatch } from "react-redux";
import FormInput from "../../components/FormInput";
import screenNames from "../../constants/screenNames";
import endpoint from "../../service/endpoint";
import dataType from "../../constants/dataType";
import { DROPDOWN_LIST } from "../../constants/entity";
import useGet from "../../hooks/useGet";
import { addListItem } from "../../store/reducer/dropdownDataReducer";
import isNotNullOrUndefined from "../../helpers/isNotNullOrUndefined";
import { addCreditNoteKeyValue } from "../../store/reducer/creditNoteFormReducer";

const EstimateCreditNoteForm = () => {
  const form = [
    {
      name: "Id#",
      key: "id",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["id"],
    },
    {
      name: "Client ID",
      key: "client_id",
      type: dataType.dropdown,
      data: DROPDOWN_LIST.CLIENTS,
      value: null,
      card: true,
      mapKey: ["client_id"],
    },
    {
      name: "Estimate number",
      key: "estimate_no",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["estimate_no"],
    },
    {
      name: "Reference Number",
      key: "reference_no",
      type: dataType.number,
      value: null,
      card: true,
      mapKey: ["reference_no"],
    },
    {
      name: "Estimate Date",
      key: "estimate_date",
      type: dataType.currentDate,
      value: null,
      mapKey: ["estimate_date"],
    },
    {
      name: "Expire Date",
      key: "expire_date",
      type: dataType.expireDate,
      value: null,
      mapKey: ["repair_Date"],
    },
    {
      name: "Subject",
      key: "subject",
      type: dataType.text,
      value: null,
      mapKey: ["subject"],
    },
    {
      name: "Customer Notes",
      key: "customer_notes",
      type: dataType.text,
      value: null,
      mapKey: ["customer_notes"],
    },
    {
      name: "paid",
      key: "paid",
      type: dataType.number,
      value: null,
      mapKey: ["paid"],
    },
    {
      name: "Add Item",
      key: "add_item",
      type: dataType.creditNoteForm,
      value: null,
      mapKey: ["add_item"],
    },
    {
      name: "Subtotal",
      key: "subtotal",
      type: dataType.number,
      value: null,
      mapKey: ["subtotal"],
    },
    {
      name: "Total tax",
      key: "total_tax",
      type: dataType.number,
      value: null,
      mapKey: ["total_tax"],
    },
    {
      name: "Total",
      key: "total",
      type: dataType.number,
      value: null,
      mapKey: ["total"],
    },
  ];
  let formData = useSelector((state) => state.creditNoteFormData.form);
  const dispatch = useDispatch();
  const { request } = useApi(handlePostSuccess);
  const { request: getJobsByClient } = useApi(handleGetJobsSuccess);
  async function handlePostData() {
    const id = form.id;
    const requestConfig = {
      method: HTTPS_METHODS.POST,
      endpoint: endpoint.estimate,
      body: formData,
    };
    const d = await request(requestConfig);
  }

  function handlePostSuccess(e) {

  }

  const onClientSelect = async (e) => {
    const requestConfig = {
      method: HTTPS_METHODS.GET,
      endpoint: endpoint.jobs_by_client + e.id,
    };
    await getJobsByClient(requestConfig);
  };

  async function handleGetJobsSuccess(arr) {
    //console.log(arr.data[0].job_no);
     if (isNotNullOrUndefined(arr)) {
       const d = arr.data;
       d.forEach((e) => {
         e.label = "Job no - " + e.job_no+ " | Docket no - " + e.docket_no + " | Rego - " + e.regos.name;
         e.value = "Job no - " + e.job_no+ " | Docket no - " + e.docket_no  + " | Rego -" + e.regos.name;
       });
       dispatch(addListItem({ data: d, name: DROPDOWN_LIST.JOBS_BY_CLIENT }));
       //dispatch(addCreditNoteKeyValue({ data: itemData}))
     }
  }

  return (
    <ParentContainer
      title={"Add Estimate"}
      containerStyle={{ backgroundColor: "white" }}
      onBackButtonPressScreen={screenNames.ESTIMATE}
    >
      {form.map((i) => {
        const { value, ...respProps } = i;
        if (i.name !== "Id#") {
          const onSelect = (e) => (formData[i.key] = e);

          return (
            <FormInput
              {...respProps}
              defaultValue={formData[i.key]}
              onChangeText={onSelect}
              onDateSelect={onSelect}
              onTimeSelect={onSelect}
              onDropdownItemSelect={(e) => (
                (formData[i.key] = e.id || e.label), onClientSelect(e)
              )}
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
