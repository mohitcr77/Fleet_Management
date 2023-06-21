import React from "react";
import { StyleSheet, View } from "react-native";
import { Datepicker, Layout, Text } from "@ui-kitten/components";
import dimensions from "../constants/dimensions";
import customStyles from "../constants/styles";
import formatDate from "../helpers/formatDate";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { setDate } from "date-fns";

const ExpireDate = () => {
  const [expireDate, setExpireDate] = useState("");

  function reformatDate() {
    var date = new Date();
    date.setDate(date.getDate() + 7);
    var dArr = date.toLocaleDateString().split("/");
    setExpireDate(dArr[1] + "/" + dArr[0] + "/" + dArr[2]);
  }
  useEffect(() => {
    reformatDate();
  });

  return (
    <View
      style={[
        customStyles.inputBox,
        { overflow: "hidden", height: 40, justifyContent: "center" },
      ]}
    >
      <Text style={{ color: "#7a7a7a", paddingLeft: 18 }}>{expireDate}</Text>
    </View>
  );
};

export default ExpireDate;

const styles = StyleSheet.create({
  container: {
    width: dimensions.componentWidth,
  },
});
