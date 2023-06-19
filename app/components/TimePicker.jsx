import React, { useState } from "react";
import { StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";
import dimensions from "../constants/dimensions";
import customStyles from "../constants/styles";
import DateTimePicker from "react-native-modal-datetime-picker";
import colors from "../constants/colors";
import formatDate from "../helpers/formatDate";

export const TimePicker = ({ onTimeSelect }) => {
  const [show, setShow] = useState(false);
  const [time, setTime] = useState(null);

  const onChange = (e, t) => {
    setShow(false);
    setTime(formatDate(e).hourMinFormat);
    // console.log(formatDate(e).hourMinFormat);
    onTimeSelect(formatDate(e).hourMinFormat + ":00");
  };

  return (
    <TouchableOpacity
      style={[
        customStyles.inputBox,
        {
          overflow: "hidden",
          justifyContent: "center",
          paddingLeft: 14,
          height: 40,
        },
      ]}
      onPress={() => setShow(true)}
    >
      <Text style={{ color: "black" }}>{time}</Text>
      <DateTimePicker
        isVisible={show}
        onConfirm={onChange}
        onCancel={() => setShow(false)}
        mode="time"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dimensions.componentWidth,
    backgroundColor: "red",
  },
});
