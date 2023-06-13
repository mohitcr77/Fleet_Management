import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ParentContainer from "../../components/ParentContainer";
import dataType from "../../constants/dataType";
import FormInput from "../../components/FormInput";
import AppFooterButton from "./../../components/AppFooterButton";
import generateKeyValueFromFormData from "../../helpers/generateKeyValueFromForm";
import usePost from "../../hooks/usePost";
import endpoint from "../../service/endpoint";
import formatDate from "../../helpers/formatDate";
import screenNames from "./../../constants/screenNames";

const form = [
  {
    name: "Name",
    key: "name",
    type: dataType.text,
  },
  {
    name: "Regos Rate",
    key: "rego_rate",
    type: dataType.number,
  },
  {
    name: "Milage Threshold",
    key: "milage_threshold",
    type: dataType.number,
  },
  {
    name: "Vehicle Type",
    key: "vehicle_type",
    type: dataType.text,
  },
  {
    name: "CheckSheet Type",
    key: "checksheet_type",
    type: dataType.text,
  },
  {
    name: "Plate No",
    key: "plate_no",
    type: dataType.number,
  },
  {
    name: "Year",
    key: "year",
    type: dataType.text,
  },
  {
    name: "Make",
    key: "make",
    type: dataType.text,
  },
  {
    name: "Model",
    key: "model",
    type: dataType.text,
  },
  {
    name: "Vin No",
    key: "vin_no",
    type: dataType.number,
  },
  {
    name: "Engine No",
    key: "engine_no",
    type: dataType.number,
  },
  {
    name: "Model No",
    key: "model_no",
    type: dataType.number,
  },
  {
    name: "Serial No",
    key: "serial_no",
    type: dataType.number,
  },
  {
    name: "Fuel Type",
    key: "fuel_type",
    type: dataType.text,
  },
  {
    name: "Transmission Type",
    key: "transmission_type",
    type: dataType.text,
  },
  {
    name: "CC Rating",
    key: "cc_rating",
    type: dataType.text,
  },
  {
    name: "Current KMS",
    key: "current_kms",
    type: dataType.number,
  },
  {
    name: "Service Due KMS",
    key: "service_due_kms",
    type: dataType.number,
  },
  {
    name: "Service Due Date",
    key: "service_due_date",
    type: dataType.date,
  },
  {
    name: "WOF COF Due Date",
    key: "wof_cof_due_date",
    type: dataType.date,
  },
  {
    name: "Registration Due Date",
    key: "registration_due_date",
    type: dataType.date,
  },
  {
    name: "Fire Extinguisher Due Date",
    key: "fire_extinguisher_due_date",
    type: dataType.date,
  },
  {
    name: "First Aid Kit Due Dates",
    key: "first_aid_kit_due_dates",
    type: dataType.date,
  },
];

export default function RegosForm() {
  const initialState = generateKeyValueFromFormData(form);
  const [update, setUpdate] = useState(false);
  const formData = useRef(initialState);

  const { request: postRego } = usePost(handlePostRegoSuccess);

  async function handlePostRegoData() {
    // console.log(formData.current);
    // return;
    const resp = await postRego(endpoint.rego, formData.current);
  }

  function handlePostRegoSuccess() {
    formData.current = initialState;
    setUpdate(!update);
  }

  return (
    <ParentContainer
      title={"Add Rego"}
      containerStyle={{ backgroundColor: "white" }}
      onBackButtonPressScreen={screenNames.REGOS}
    >
      {form.map((i) => (
        <FormInput
          {...i}
          value={formData[i.key]}
          onChangeText={(e) => (formData.current[i.key] = e)}
          onDateSelect={(e) => (formData.current[i.key] = formatDate(e).y_m_d)}
        />
      ))}
      <AppFooterButton onPressRight={handlePostRegoData} />
    </ParentContainer>
  );
}

const styles = StyleSheet.create({});
