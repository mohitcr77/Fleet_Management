import { View, StyleSheet } from "react-native";
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
import { useEffect } from "react";

const CreditNoteFormAdd = () => {
  const [itemData, setItemData] = useState({
    job: "",
    rego_id: "",
    job_no: "",
    qty: "",
    rate: "",
    tax_id: "",
    amount: "",
  });
  const regoData = DROPDOWN_LIST.REGOS;
  const taxData = DROPDOWN_LIST.TAX;
  let list = useSelector((state) => state.dropDownData);
  const { form } = useSelector((state) => state.creditNoteFormData);
  const dispatch = useDispatch();

  const getJobsByClientDummyList = [
    { label: "Job 1", value: "1" },
    { label: "Job 2", value: "2" },
  ];

  useEffect(() => {});

  const onDropdownItemSelect = (e, i) => {
    const value = {
      rego_id: e.regos.id,
      qty: e.docket_hours,
      rate: e.regos.rego_rate,
      job_no: e.job_no
    };
    //console.log(value);
    dispatch(addCreditNoteKeyValue({ value, i }));
  };

  const onTaxSelect = (e, qty, rate) => {
    let taxPercent = ((qty*rate*e.tax_percentage)/100 + qty)
    console.log(taxPercent);
  }

  return (
    <View style={{ alignItems: "center" }}>
      {form.add_item.map((item, i) => {
        return (
          <View style={styles.container} key={i}>
            {/* <Icons.Close /> */}
            <Dropdown
              style={styles.dropdown}
              placeholder={"Select Job"}
              placeholderStyle={{ color: "#9b9a9a", fontSize: 15 }}
              data={list[DROPDOWN_LIST.JOBS_BY_CLIENT]}
              search
              searchPlaceholder="Search..."
              onChange={(e) => onDropdownItemSelect(e, i)}
              labelField="label"
              valueField="value"
            />
            <Input style={styles.inputContainer} placeholder="Rego">
              {getDropdownPlaceholder(item.rego_id)}
            </Input>
            <Input style={styles.inputContainer} placeholder="Job no">{item.job_no}</Input>
            <Input style={styles.inputContainer} placeholder="Qty(hrs)">{item.qty}</Input>
            <Input style={styles.inputContainer} placeholder="rate">{item.rate}</Input>
            <Dropdown
              style={styles.dropdown}
              placeholder={"Tax"}
              placeholderStyle={{ color: "#9b9a9a", fontSize: 15 }}
              data={list[taxData]}
              search
              searchPlaceholder="Search..."
              onChange={(e) => onTaxSelect(e, item.qty, item.rate)}
              labelField="label"
              valueField="value"
            />
            <Input
              placeholder="Amount"
              style={{
                width: width - 40,
                backgroundColor: "white",
                marginVertical: 5,
              }}
              keyboardType="number-pad"
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
  function getDropdownPlaceholder(rego_id) {
    const d =
        list[regoData].filter((e) => e.id == rego_id)[0]?.label || ""
    return d;
  }
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
    width: "90%",
  },
  dropdown: {
    width: width - 40,
    backgroundColor: "white",
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#dfdfdf",
    borderRadius: 3,
    paddingLeft: 18,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.gray4,
    paddingVertical: 5,
    alignItems: "center",
    width: "95%",
    backgroundColor: "white",
  },
});
