import { View, ScrollView } from "react-native";
import React from "react";
import ParentContainer from "../../components/ParentContainer";
import FormInput from "../../components/FormInput";
import dataType from "../../constants/dataType";
import useFetchList from "../../hooks/useFetchList";
import customStyles from "../../constants/styles";
import AppButton from "../../components/AppButton";

const DocumentForm = () => {

    const documentForm = [
        {
            name: "Name",
            key: "name",
            type: dataType.text,
          },
          {
            name: "Comment",
            key: "comment",
            type: dataType.text,
          },
          {
            name: "End Time",
            key: "end_time",
            type: dataType.image,
          },
    ]

  return (
    <ParentContainer containerStyle={{ backgroundColor: "white" }}>
      {documentForm.map((i) => (
        <FormInput {...i} />
      ))}

      <View
        style={[
          customStyles.flex_row_between,
          { marginBottom: 150, marginTop: 40 },
        ]}
      >
        <AppButton
          title={"Save"}
          type="small"
          style={{ height: 40 }}
        />
        <AppButton title={"Cancel"} type="small" style={{ height: 40 }} />
      </View>
    </ParentContainer>
  )
}

export default DocumentForm
