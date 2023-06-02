import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import dataType from "../constants/dataType";
import { Input } from "@ui-kitten/components";
import { DatePicker } from "./DatePicker";
import { Dropdown } from "react-native-element-dropdown";
import customStyles from "../constants/styles";
import colors from "../constants/colors";
import { TimePicker } from "./TimePicker";
import FromAdd from "./FromAdd";
import PickSignature from "./PickSignature";

export default function FormInput(props) {
  const { name, type, list, data } = props;
  const [value, setValue] = useState("");

  switch (type) {
    case dataType.date:
      return (
        <CompWrapper>
          <DatePicker />
        </CompWrapper>
      );

    case dataType.dropdown:
      return (
        <CompWrapper>
          <Dropdown
            style={[
              customStyles.inputBox,
              { paddingHorizontal: 14, height: 40 },
            ]}
            placeholder={name}
            placeholderStyle={{ color: colors.gray2, fontSize: 15 }}
            data={data}
            search
            searchPlaceholder="Search..."
            onChange={(item) => {
              setValue(item.value);
            }}
            labelField="label"
            valueField="value"
          />
        </CompWrapper>
      );

    case dataType.time:
      return (
        <CompWrapper>
          <TimePicker {...props} />
        </CompWrapper>
      );

    case dataType.signature:
      return (
        <CompWrapper>
          <PickSignature {...props} />
        </CompWrapper>
      );

    case dataType.form:
      return (
        <CompWrapper>
          <FromAdd {...props} />
        </CompWrapper>
      );

    default:
      return (
        <CompWrapper>
          <Input
            style={{ backgroundColor: "white", borderRadius: 10 }}
            placeholder={name}
            value={value}
            onChangeText={(nextValue) => setValue(nextValue)}
          />
        </CompWrapper>
      );
  }
}

function CompWrapper({ children }) {
  return <View style={styles.compWrapperStyle}>{children}</View>;
}
const styles = StyleSheet.create({
  compWrapperStyle: {
    marginVertical: 5,
  },
});
