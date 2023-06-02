import { StyleSheet, Text, View, Button, Modal, Pressable } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import DataList from "./DataList";
import dimensions from "../constants/dimensions";
import AppInput from "./AppInput";
import { ScrollView } from "react-native-gesture-handler";
import TokenContext from "../service/context";
import index from "../service/index";
const AppItem = (props) => {
  const [visible, setvisible] = useState(false);
  const token = useContext(TokenContext);
  const [cityData, setcityData] = useState({});
  const [stateData, setstateData] = useState({});
  const [country, setcountry] = useState({});

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
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.cardContainer}>
          {props?.cardviewform.map((item, index) => (
            <DataList key={index} {...item} />
          ))}
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="View"
            color={"#5e2dd8"}
            onPress={() => setvisible(true)}
          />
          <Button
            title="Update"
            color={"#0774f8"}
            onPress={props.onupdateData.bind(this, props.id)}
          />
          <Button
            title="Delete"
            color={"#bd112e"}
            onPress={props.onDeleteItem.bind(this, props.id)}
          />
        </View>
      </View>
      <Modal visible={visible} transparent={false}>
        <View style={styles.title}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>View </Text>
        </View>
        <ScrollView>
          <View style={styles.modal_style}>
            {props?.viewform.map((item, index) => (
              <AppInput
                editable={false}
                text={item.name}
                key={index}
                type={item.type}
                value={item.value}
                disableDate={true}
                disablecolor={true}
                citydata={cityData}
                countrydata={country}
                statedata={stateData}
              />
            ))}
          </View>
        </ScrollView>
        <Pressable
          onPress={() => setvisible(false)}
          style={styles.btn2}
          android_ripple={{ color: "#610909" }}
        >
          <View>
            <Text style={styles.btnStyle}>Close</Text>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default AppItem;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    width: dimensions.componentWidth,
    flexWrap: "wrap",
    padding: 10,
  },
  columnStyle: {
    flex: 5,
    padding: 10,
  },
  topContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  btn2: {
    backgroundColor: "#cf2d2d",
    borderRadius: 6,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  modal_style: {
    margin: 20,
  },
  title: {
    margin: 10,
    alignItems: "center",
  },
  btnStyle: {
    fontSize: 15,
    alignContent: "center",
    color: "#ffffff",
  },
});
