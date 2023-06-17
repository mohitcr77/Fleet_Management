import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "@ui-kitten/components";

import { DatePicker } from "./DatePicker";
import { Dropdown } from "react-native-element-dropdown";
import { TimePicker } from "./TimePicker";
import AddImage from "./AddImage";
import AppCheckBox from "./AppCheckBox";
import colors from "../constants/colors";
import customStyles from "../constants/styles";
import dataType from "../constants/dataType";
import dimensions from "../constants/dimensions";
import FromAdd from "./FromAdd";
import PickSignature from "./PickSignature";

const dummyList = [
  { label: "0", value: "1" },
  { label: "0.5", value: "2" },
  { label: "1", value: "3" },
  { label: "1.5", value: "4" },
  { label: "2", value: "5" },
  { label: "2.5", value: "6" },
  { label: "5", value: "7" },
];

export default function FormInput(props) {
  const { name, type, data } = props;
  let list = useSelector((state) => state.dropDownData);

  list = { ...list, data: dummyList };

  switch (type) {
    case dataType.date:
      return (
        <CompWrapper>
          <DatePicker {...props} />
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
            placeholder={""}
            placeholderStyle={{ color: colors.gray2, fontSize: 15 }}
            data={list[data]}
            search
            searchPlaceholder="Search..."
            onChange={props.onDropdownItemSelect}
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

    case dataType.image:
      return (
        <CompWrapper>
          <AddImage {...props} />
        </CompWrapper>
      );

    case dataType.checkBox:
      return (
        <CompWrapper>
          <AppCheckBox {...props} />
        </CompWrapper>
      );

    default:
      return (
        <CompWrapper>
          <Input
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              ...props.style,
            }}
            placeholder={""}
            keyboardType={
              props.type === dataType.number ? "number-pad" : "default"
            }
            // value={props.value}
            // onChangeText={props.onChangeText}
            {...props}
          />
        </CompWrapper>
      );
  }

  function CompWrapper({ children }) {
    return (
      <View style={styles.compWrapperStyle}>
        <Text style={{ marginBottom: 5, marginTop: 8, fontWeight: "bold" }}>
          {name}
        </Text>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  compWrapperStyle: {
    marginVertical: 5,
    width: dimensions.componentWidth,
  },
});
