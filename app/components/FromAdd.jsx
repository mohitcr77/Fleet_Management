import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Input } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";

import colors from "../constants/colors";
import { width } from "../helpers/scales";
import Icons from "./Icons";
import {
  addDetaInDetailUsingKey,
  addDetailsInFormDkt,
  removeAllFormDktDetail,
  removeFormDktDetail,
} from "../store/reducer/fullDktFormDataReducer";
import dimensions from "../constants/dimensions";
import AppButton from "./AppButton";
import AppSmallButton from "./AppSmallButton";

export default function FromAdd(props) {
  const { form } = useSelector((state) => state.fullDktFromData);
  const dispatch = useDispatch();

  return (
    <View style={{ alignItems: "center" }}>
      {form.details.map((item, i) => {
        return (
          <View style={styles.container} key={i}>
            {/* <Icons.Close /> */}
            <Input
              placeholder="Material Dkt"
              style={{
                width: width - 40,
                backgroundColor: "white",
                marginBottom: 5,
              }}
              value={item.material_dkt}
              onChangeText={(e) => {
                dispatch(addDetaInDetailUsingKey({ e, i, k: "material_dkt" }));
              }}
            />
            <Input
              placeholder="Details"
              style={{ width: width - 40, backgroundColor: "white" }}
              textStyle={styles.detailsInput}
              multiline
              textAlignVertical="top"
              value={item.detail}
              onChangeText={(e) => {
                dispatch(addDetaInDetailUsingKey({ e, i, k: "detail" }));
              }}
            />

            <AppButton
              title={"Remove"}
              style={styles.btn}
              titleStyle={{ fontSize: 14 }}
              onPress={() => {
                dispatch(removeFormDktDetail(i));
              }}
            />
          </View>
        );
      })}

      <Icons.PlushCircle
        onPress={() => {
          dispatch(addDetailsInFormDkt());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 100,
    borderWidth: 1,
    borderColor: colors.gray4,
    paddingVertical: 5,
    alignItems: "center",
    marginVertical: 5,
    width: dimensions.componentWidth,
    borderRadius: 10,
  },
  detailsInput: {
    height: 60,
    // marginTop: 30,
  },
  btn: {
    borderRadius: 10,
    height: 30,
    backgroundColor: colors.red,
  },
});
