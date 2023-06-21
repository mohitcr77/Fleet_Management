import React from "react";
import { StyleSheet, View } from "react-native";
import { Datepicker, Layout, Text } from "@ui-kitten/components";
import dimensions from "../constants/dimensions";
import customStyles from "../constants/styles";
import formatDate from "../helpers/formatDate";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { setDate } from "date-fns";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  var date = new Date();
  date.setDate(date.getDate() + 7);

  console.log(date.toLocaleDateString());

  function reformatDate(dateStr) {
    var dArr = dateStr.split("/");
    setCurrentDate(dArr[1] + "/" + dArr[0] + "/" + dArr[2]);
  }
  useEffect(() => {
    reformatDate(new Date().toLocaleDateString());
  }, [1]);

  return (
    <View
      style={[
        customStyles.inputBox,
        { overflow: "hidden", height: 40, justifyContent: "center" },
      ]}
    >
      <Text style={{ color: "#7a7a7a", paddingLeft: 18 }}>{currentDate}</Text>
    </View>
  );
};

export default CurrentDate;

const styles = StyleSheet.create({
  container: {
    width: dimensions.componentWidth,
  },
});
