import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";

const SignUpDropDown = (props) => {
  
    const setDropDownValue =(item) => {
       // console.log(props.keyValue);
        props?.setValue(props?.keyValue, item)
      }
  return ( 
    <View>
      <Dropdown
        style={styles.dropdown}
        data={props?.item?.data}
        labelField={props?.keyValue === "currency_id"? "name" : "timezone"}
        valueField="id"
        searchPlaceholder="Search..."
        onChange={(item) => {
          setDropDownValue(item?.id);
        }}
      />
    </View>
  );
};

export default SignUpDropDown;

const styles = StyleSheet.create({
    dropdown: {
        height: 40,
        borderColor: "white",
        borderBottomColor: "black",
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginHorizontal: 20,
        marginVertical: 15
      },
});
