import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Input } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-native-element-dropdown";
import colors from "../constants/colors";
import { width } from "../helpers/scales";
import Icons from "./Icons";
import {
  addItemInCreditNote,
  addCreditNoteKeyValue,
  removeCreditNoteItem,
  addDataInItemUsingKey,
} from "../store/reducer/creditNoteFormReducer";
import dimensions from "../constants/dimensions";
import AppButton from "./AppButton";
import AppSmallButton from "./AppSmallButton";
import { DROPDOWN_LIST } from "../constants/entity";

const CreditNoteFormAdd = () => {
  const regoData = DROPDOWN_LIST.REGOS;
  const taxData = DROPDOWN_LIST.TAX;
  let list = useSelector((state) => state.dropDownData);
  const { form } = useSelector((state) => state.creditNoteFormData);
  const dispatch = useDispatch();

  const getJobsByClientDummyList = [
    { label: "Job 1", value: "1" },
    { label: "Job 2", value: "2" },
  ];

  return (
    <View style={{ alignItems: "center" }}>
      {form.add_item.map((item, i) => {
        return (
          <View style={styles.container} key={i}>
            {/* <Icons.Close /> */}
            {/* <Input
              placeholder="Rego"
              style={{
                width: width - 40,
                backgroundColor: "white",
                marginBottom: 5,
              }}
              value={item.rego_id}
              onChangeText={(e) => {
                dispatch(addDataInItemUsingKey({ e, i, k: "rego_id" }));
              }}
            /> */}
            <Dropdown
              style={[
                {
                  width: width - 40,
                  backgroundColor: "white",
                  marginBottom: 5,
                  borderWidth: 1,
                  borderColor: "#dfdfdf",
                  borderRadius: 3,
                  paddingLeft: 18,
                },
              ]}
              placeholder={"Select Job"}
              placeholderStyle={{ color: "#9b9a9a", fontSize: 15 }}
              data={getJobsByClientDummyList}
              search
              searchPlaceholder="Search..."
              onChange={() => {}}
              labelField="label"
              valueField="value"
            />
            <Dropdown
              style={[
                {
                  width: width - 40,
                  backgroundColor: "white",
                  marginBottom: 5,
                  borderWidth: 1,
                  borderColor: "#dfdfdf",
                  borderRadius: 3,
                  paddingLeft: 18,
                },
              ]}
              placeholder={"Rego"}
              placeholderStyle={{
                color: "#9b9a9a",
                fontSize: 15,
              }}
              data={list[regoData]}
              search
              searchPlaceholder="Search..."
              onChange={() => {}}
              labelField="label"
              valueField="value"
            />
            <Input
              placeholder="Job No"
              style={{
                width: width - 40,
                backgroundColor: "white",
                marginBottom: 5,
              }}
              keyboardType="number-pad"
              textAlignVertical="top"
              value={item.job_no}
              onChangeText={(e) => {
                dispatch(addDataInItemUsingKey({ e, i, k: "job_no" }));
              }}
            />

            <Input
              placeholder="Qty(hours)"
              style={{
                width: width - 40,
                backgroundColor: "white",
                marginBottom: 5,
              }}
              keyboardType="number-pad"
              value={item.qty}
              onChangeText={(e) => {
                dispatch(addDataInItemUsingKey({ e, i, k: "qty" }));
              }}
            />
            <Input
              placeholder="Rate"
              style={{
                width: width - 40,
                backgroundColor: "white",
                marginBottom: 5,
              }}
              keyboardType="number-pad"
              value={item.rate}
              onChangeText={(e) => {
                dispatch(addDataInItemUsingKey({ e, i, k: "rate" }));
              }}
            />
            {/* <Input
              placeholder="Tax"
              style={{
                width: width - 40,
                backgroundColor: "white",
                marginBottom: 5,
              }}
              value={item.tax_id}
              onChangeText={(e) => {
                dispatch(addDataInItemUsingKey({ e, i, k: "tax_id" }));
              }}
            /> */}
            <Dropdown
              style={[
                {
                  width: width - 40,
                  backgroundColor: "white",
                  marginBottom: 5,
                  borderWidth: 1,
                  borderColor: "#dfdfdf",
                  borderRadius: 3,
                  paddingLeft: 18,
                },
              ]}
              placeholder={"Tax"}
              placeholderStyle={{ color: "#9b9a9a", fontSize: 15 }}
              data={list[taxData]}
              search
              searchPlaceholder="Search..."
              onChange={() => {}}
              labelField="label"
              valueField="value"
            />
            <Input
              placeholder="Amount"
              style={{
                width: width - 40,
                backgroundColor: "white",
                marginBottom: 5,
              }}
              keyboardType="number-pad"
              value={item.amount}
              onChangeText={(e) => {
                dispatch(addDataInItemUsingKey({ e, i, k: "amount" }));
              }}
            />
            <AppButton
              title={"Remove"}
              style={styles.btn}
              titleStyle={{ fontSize: 14 }}
              onPress={() => {
                dispatch(removeCreditNoteItem(i));
              }}
            />
          </View>
        );
      })}

      <Icons.PlushCircle
        onPress={() => {
          dispatch(addItemInCreditNote());
        }}
      />
    </View>
  );
};

export default CreditNoteFormAdd;

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
    width: "90%"
  },
});
