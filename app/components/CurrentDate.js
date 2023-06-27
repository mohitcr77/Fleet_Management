import React from "react";
import { StyleSheet, View } from "react-native";
import { Datepicker, Layout, Text } from "@ui-kitten/components";
import dimensions from "../constants/dimensions";
import customStyles from "../constants/styles";
import formatDate from "../helpers/formatDate";
import { useEffect } from "react";
import { useRef, useState } from "react";

const CurrentDate = (props) => {
  const [currentDate, setCurrentDate] = useState("");
  var date = new Date();
  date.setDate(date.getDate() + 7);

  //console.log(date.toLocaleDateString());

  function reformatDate(dateStr) {
    var dArr = dateStr.split("/");
    setCurrentDate(dArr[2] + "/" + dArr[0] + "/" + dArr[1]);
  }
  useEffect(() => {
    reformatDate(new Date().toLocaleDateString());
  });

  const setDate = () => {
    props.onGetDate(currentDate);
    return currentDate;
  };

  return (
    <View
      style={[
        customStyles.inputBox,
        { overflow: "hidden", height: 40, justifyContent: "center" },
      ]}
    >
      <Text style={{ color: "#7a7a7a", paddingLeft: 18 }}>{setDate()}</Text>
    </View>
  );
};

export default CurrentDate;

const styles = StyleSheet.create({
  container: {
    width: dimensions.componentWidth,
  },
});
