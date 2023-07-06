import React from "react";
import { useSelector } from "react-redux";
import { Input } from "@ui-kitten/components";

import { DatePicker } from "./DatePicker";
import { Dropdown } from "react-native-element-dropdown";
import { TimePicker } from "./TimePicker";
import AddImage from "./AddImage";
import AppCheckBox from "./AppCheckBox";
import customStyles from "../constants/styles";
import dataType from "../constants/dataType";
import FromAdd from "./FromAdd";
import PickSignature from "./PickSignature";
import LocationInput from "./LocationInput";
import CompWrapper from "./CompWrapper";
import CreditNoteFormAdd from "./CreditNoteFormAdd";
import CurrentDate from "./CurrentDate";
import ExpireDate from "./ExpireDate";

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
  // FormInput Props
  // name
  // type
  // data (name of the list)
  // defaultValue

  // onChangeText
  // onCheckboxPress
  // onDateSelect
  // onDropdownItemSelect
  // onImageSelect
  // onLocationSelect
  // onTimeSelect

  const { name, type, data } = props;
  let list = useSelector((state) => state.dropDownData);

  list = { ...list, data: dummyList };

  switch (type) {
    case dataType.date:
      return (
        <CompWrapper name={name}>
          <DatePicker {...props} />
        </CompWrapper>
      );

    case dataType.dropdown:
      return (
        <CompWrapper name={name}>
          <Dropdown
            style={[
              customStyles.inputBox,
              { paddingHorizontal: 14, height: 40 },
            ]}
            placeholder={getDropdownPlaceholder()}
            placeholderStyle={{ color: "black", fontSize: 15 }}
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
        <CompWrapper name={name}>
          <TimePicker {...props} />
        </CompWrapper>
      );

    case dataType.signature:
      return (
        <CompWrapper name={name}>
          <PickSignature {...props} />
        </CompWrapper>
      );

    case dataType.form:
      return (
        <CompWrapper name={name}>
          <FromAdd {...props} />
        </CompWrapper>
      );

    case dataType.currentDate:
      return (
        <CompWrapper name={name}>
          <CurrentDate {...props} />
        </CompWrapper>
      );

    case dataType.expireDate:
      return (
        <CompWrapper name={name}>
          <ExpireDate {...props} />
        </CompWrapper>
      );

    case dataType.creditNoteForm:
      return (
        <CompWrapper name={name}>
          <CreditNoteFormAdd {...props} />
        </CompWrapper>
      );

    case dataType.image:
      return (
        <CompWrapper name={name}>
          <AddImage {...props} />
        </CompWrapper>
      );

    case dataType.checkBox:
      return (
        <CompWrapper name={name}>
          <AppCheckBox {...props} />
        </CompWrapper>
      );

    case dataType.country:
      return <LocationInput {...props} />;

    case dataType.state:
      return null;

    case dataType.city:
      return null;

    default:
      return (
        <CompWrapper name={name}>
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

  function getDropdownPlaceholder() {
    const d =
      list[data].filter((e) => e.id == props.defaultValue)[0]?.label || "";
    return d;
  }
}
