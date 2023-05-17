import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  Image
} from "react-native";
import { useState, useEffect, useContext } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ColorPicker } from "react-native-color-picker";
import { Modal } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import TokenContext from "../service/context";
import index from "../service/index";
import LoadingScreen from "../screens/LoadingScreen";
import * as ImagePicker from "expo-image-picker";
const AppInput = (props) => {
  const token = useContext(TokenContext);
  const [image, setImage] = useState(null);
  const [dropdownvalue, setdropdownValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDate, setDate] = useState(props?.value);
  const [isTime, setTime] = useState(props?.value);
  const [iscolor, setcolor] = useState(props?.value);
  const [pickerVisible, setpickerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getLoadingSreen();
  // }, []);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showColorPicker = () => {
    setpickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  function reformatDate(dateStr) {
    var dArr = dateStr.split("/");
    return dArr[2] + "/" + dArr[0] + "/" + dArr[1];
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: true,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const getLoadingSreen = async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      await sleep(2000);
    } finally {
      setIsLoading(false);
    }
  };

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const handleConfirm = (date) => {
    //setDate(date.toLocaleDateString());
    let newdate = reformatDate(date.toLocaleDateString());
    setDate(newdate);
    props.onChangeText(newdate);
    hideDatePicker();
  };
  function closeColorpicker(color) {
    props.onChangeText(color);
    setcolor(color);
    setpickerVisible(false);
  }
  const handleTimeConfirm = (time) => {
    let newtime = time.toTimeString().split(" ");
    //console.log(newtime[0]);
    setTime(newtime[0]);
    let letTime = newtime[0];
    props.onChangeText(letTime);
    hideDatePicker();
  };

  //console.log(props.defaultValue);
  return (
    <>
      {/* {isLoading ? null : ( */}
        <View>
          <Text style={styles.textStyle}>{props.text}</Text>
          {props.type === "text" ? (
            <TextInput {...props} style={styles.input} />
          ) : props.type === "date" ? (
            <View>
              <Pressable
                onPress={props?.disableDate ? null : showDatePicker}
                style={styles.dateBtn}
              >
                <Text>{isDate ? isDate : props.defaultValue}</Text>
              </Pressable>
            </View>
          ) : props.type === "color" ? (
            <View>
              <Pressable
                onPress={props?.disablecolor ? null : showColorPicker}
                style={styles.dateBtn}
              >
                <Text>{iscolor ? iscolor : props.defaultValue}</Text>
              </Pressable>
            </View>
          ) : props.type === "city" ? (
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={props?.citydata}
              search
              maxHeight={300}
              labelField="name"
              valueField="id"
              placeholder={!isFocus ? "Select item" : "..."}
              searchPlaceholder="Search..."
              value={dropdownvalue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setdropdownValue(item.value);
                props.onChangeText(item.id);
                setIsFocus(false);
              }}
            />
          ) : props.type === "state" ? (
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={props?.statedata}
              search
              maxHeight={300}
              labelField="name"
              valueField="id"
              placeholder={!isFocus ? "Select item" : "..."}
              searchPlaceholder="Search..."
              value={dropdownvalue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setdropdownValue(item.value);
                props.onChangeText(item.id);
                setIsFocus(false);
              }}
            />
          ) : props.type === "country" ? (
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={props?.countrydata}
              search
              maxHeight={300}
              labelField="name"
              valueField="id"
              placeholder={JSON.stringify(props?.value) ? props.value : "Select Item"}
              searchPlaceholder="Search..."
              value={dropdownvalue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setdropdownValue(item.value);
                props.onChangeText(item.id);
                setIsFocus(false);
              }}
            />
          ) : props.type === "time" ? (
            <View>
              <Pressable
                onPress={props?.disableDate ? null : showDatePicker}
                style={styles.dateBtn}
              >
                <Text>{isTime ? isTime : props.defaultValue}</Text>
              </Pressable>
            </View>
          ) : props.type === "image" ? (
            <View
            >
              <Pressable
                onPress={pickImage}
                style={styles.dateBtn}
              >
                <Text>Pick an image from camera roll</Text>
              </Pressable>
              {/* <Button
                title="Pick an image from camera roll"
                onPress={pickImage}
              /> */}
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              )}
            </View>
          ) : props.type === "password" ? (
            <TextInput {...props} secureTextEntry={true}  style={styles.input} />
          ) : props.type === "number" ? (
              <TextInput {...props} keyboardType="numeric"  style={styles.input} />
          ) : null}
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode={
              props.type === "date"
                ? "date"
                : props.type === "time"
                ? "time"
                : null
            }
            is24Hour
            onConfirm={
              props.type === "date"
                ? handleConfirm
                : props.type === "time"
                ? handleTimeConfirm
                : null
            }
            onCancel={hideDatePicker}
          />
          {/* ColorPicker Modal */}
          <Modal visible={pickerVisible}>
            <ColorPicker
              onColorSelected={(color) => closeColorpicker(color)}
              style={{ height: 500, outerWidth: 500 }}
            />
            <View style={{ alignItems: "center", margin: 40 }}>
              <Text style={{ fontSize: 15 }}>
                (Click the middle circle to confirm)
              </Text>
            </View>
          </Modal>
        </View>
      {/* )} */}
    </>
  );
  // function ListDropDown () {
  //   useEffect(() => {
  //     index.getlistData()
  //   }, [])
    
  //   return <Dropdown
  //   style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
  //   placeholderStyle={styles.placeholderStyle}
  //   selectedTextStyle={styles.selectedTextStyle}
  //   inputSearchStyle={styles.inputSearchStyle}
  //   iconStyle={styles.iconStyle}
  //   data={props.citydata}
  //   search
  //   maxHeight={300}
  //   labelField="name"
  //   valueField="id"
  //   placeholder={!isFocus ? "Select item" : "..."}
  //   searchPlaceholder="Search..."
  //   value={dropdownvalue}
  //   onFocus={() => setIsFocus(true)}
  //   onBlur={() => setIsFocus(false)}
  //   onChange={(item) => {
  //     setdropdownValue(item.value);
  //     props.onChangeText(item.id);
  //     setIsFocus(false);
  //   }}
  // />
  // }
};

export default AppInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#c0bfbf",
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 18,
    margin: 10,
    fontWeight: "bold",
  },
  dateBtn: {
    margin: 12,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  dropdown: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 10,
    margin: 12,
    padding: 10,
  },
});
