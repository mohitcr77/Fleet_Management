import { StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { HTTPS_METHODS } from "../../constants/entity";
import AppFooterButton from "../../components/AppFooterButton";
import ParentContainer from "../../components/ParentContainer";
import useApi from "../../hooks/useApi";
import { useSelector } from "react-redux";
import { adminEndpoints } from "../../service/endpoint";
import { useDispatch } from "react-redux";
import FormInput from "../../components/FormInput";
import { DROPDOWN_LIST } from "../../constants/entity";
import { addListItem } from "../../store/reducer/dropdownDataReducer";
import isNotNullOrUndefined from "../../helpers/isNotNullOrUndefined";
import {
  addCreditNoteKeyValue,
  setItemToInitialState,
} from "../../store/reducer/creditNoteFormReducer";

const EstimateCreditNoteForm = ({ route, navigation }) => {
  const { title, backScreen, endpoint, form } = route.params;
  const [update, setUpdate] = useState(false);
  let formData = useSelector((state) => state.creditNoteFormData.form);
  const dispatch = useDispatch();
  const { request: postData } = useApi(handlePostSuccess);
  const { request: getJobsByClient } = useApi(handleGetJobsSuccess);
  async function handlePostData() {
    const id = form.id;
    function removeEmpty(obj) {
      return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v != "")
      );
    }
    let dataWithoutNullObject = removeEmpty(formData);
    const requestConfig = {
      method: HTTPS_METHODS.POST,
      endpoint: endpoint,
      body: dataWithoutNullObject,
    };

    const d = await postData(requestConfig);
  }
  function handlePostSuccess(e) {
    dispatch(setItemToInitialState());
    setUpdate(!update);
  }

  const onClientSelect = async (e) => {
    const requestConfig = {
      method: HTTPS_METHODS.GET,
      endpoint: adminEndpoints.jobs_by_client + e.id,
    };
    await getJobsByClient(requestConfig);
  };

  async function handleGetJobsSuccess(arr) {
    if (isNotNullOrUndefined(arr)) {
      const d = arr.data;
      d.forEach((e) => {
        e.label =
          "Job no - " +
          e.job_no +
          " | Docket no - " +
          e.docket_no +
          " | Rego - " +
          e.regos.name;
        e.value =
          "Job no - " +
          e.job_no +
          " | Docket no - " +
          e.docket_no +
          " | Rego - " +
          e.regos.name;
      });
      dispatch(addListItem({ data: d, name: DROPDOWN_LIST.JOBS_BY_CLIENT }));
      // dispatch(addCreditNoteKeyValue({ data: itemData}))
    }
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
              onGetDate={(e) => (formData[i.key] = e)}
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
