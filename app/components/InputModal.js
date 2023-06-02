import { StyleSheet, Text, View, Modal, Button, Pressable } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import AppInput from "./AppInput";
import dataType from "../constants/dataType";
import { open, close, selectVisible } from "../store/modalSlice";
import index from "../service/index";
import TokenContext from "../service/context";

const InputModal = (props) => {
  const token = useContext(TokenContext);
  const [state, setState] = useState(props.initialState);
  const dispatch = useDispatch();
  const [cityData, setcityData] = useState({});
  const [stateData, setstateData] = useState({});
  const [country, setcountry] = useState({});
  function onAddItemHandler() {
    dispatch(close());
    props.onAddItem(state);
    setState(props.initialState);
  }
  useEffect(() => {
    getcity();
  }, []);

  const getcity = async () => {
    const data = await index.getcity(token.userToken.token);
    setcityData(data?.data?.data);
    const state = await index.getstate(token.userToken.token);
    setstateData(state?.data?.data);
    const country = await index.getcountry(token.userToken.token);
    setcountry(country?.data?.data);
  };

  function onUpdateItemHandler() {
    props.onUpdateItem(state);
    setState(props.initialState);
  }

  function onCancelHandler() {
    props.onCancel();
    //setform(null)
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.title}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {props.crudop === "update" ? "Update" : "Create"}{" "}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.modal_style}>
          {props?.form?.map((item, index) => (
            <AppInput
              defaultValue={item.defaultValue}
              onChangeText={(e) => {
                setState({ ...state, [item.key]: e });
              }}
              citydata={cityData}
              countrydata={country}
              statedata={stateData}
              text={item.name}
              key={index}
              type={item.type}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.button}>
        {/* to show Update button on Update and show Submit button on adding  */}
        {props.crudop === "update" ? (
          <Pressable
            android_ripple={{ color: "#241056" }}
            style={styles.btn1}
            onPress={onUpdateItemHandler}
          >
            <View>
              <Text style={styles.btnStyle}>Update</Text>
            </View>
          </Pressable>
        ) : (
          <Pressable
            android_ripple={{ color: "#241056" }}
            style={styles.btn1}
            onPress={onAddItemHandler}
          >
            <View>
              <Text style={styles.btnStyle}>Submit</Text>
            </View>
          </Pressable>
        )}
        <Pressable
          onPress={onCancelHandler}
          style={styles.btn2}
          android_ripple={{ color: "#610909" }}
        >
          <View>
            <Text style={styles.btnStyle}>Cancel</Text>
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};

export default InputModal;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
  btnStyle: {
    fontSize: 15,
    color: "#ffffff",
  },
  modal_style: {
    margin: 20,
  },
  title: {
    margin: 10,
    alignItems: "center",
  },
  btn1: {
    backgroundColor: "#5e2dd8",
    borderRadius: 6,
    justifyContent: "center",
    paddingVertical: 10,
    marginHorizontal: 50,
    paddingHorizontal: 20,
  },
  btn2: {
    backgroundColor: "#cf2d2d",
    borderRadius: 6,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 50,
  },
});
