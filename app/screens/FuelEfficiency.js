import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../components/InputModal";
import AppItem from "../components/AppItem";
import dataType from "../constatnts/dataType";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "./LoadingScreen";

const FuelEfficiency = () => {
  const token = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");

  useEffect(() => {
    addNewid();
  }, []);
  function addHandler() {}

  const initialState = {
    driver_id: "",
    current_miles: "",
    total_fuel_ltrs: "",
    milage: "",
    fuel_cost: "",
    fuel_card_no: "",
    fuel_rate: "",
    fuel_per_km: "",
    date: "",
    comments: "",
  };

  const form = [
    {
      name: "User id",
      key: "driver_id",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.driver_id),
    },
    {
      name: "Current miles",
      key: "current_miles",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.current_miles),
    },
    {
      name: "Total fuel (ltrs)",
      key: "total_fuel_ltrs",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.total_fuel_ltrs),
    },
    {
      name: "Milage",
      key: "milage",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.milage),
    },
    {
      name: "Fuel Cost",
      key: "fuel_cost",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.fuel_cost),
    },
    {
      name: "Fuel card no",
      key: "fuel_card_no",
      type: dataType.text,
      defaultValue: viewData?.fuel_card_no,
    },
    {
      name: "Fuel rate",
      key: "fuel_rate",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.fuel_rate),
    },
    {
      name: "Fuel per km",
      key: "fuel_per_km",
      type: dataType.text,
      defaultValue: viewData?.fuel_per_km,
    },
    {
      name: "Date",
      key: "date",
      type: dataType.date,
      defaultValue: viewData?.date,
    },
    {
      name: "Comments",
      key: "comments",
      type: dataType.text,
      defaultValue: viewData?.comments,
    },
  ];

  async function addItemHandler(enteredItemText) {
    index.postApi(token.userToken.token, enteredItemText, "fuel_efficiency");
    const res = await index.getApi(token.userToken.token, "fuel_efficiency");
    setlistdata(res.data.data);
    setisvisible(false);
    addNewid();
  }
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token.userToken.token, "fuel_efficiency");
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token.userToken.token, newobj, dataID, "fuel_efficiency");
    setisvisible(false);
    addNewid();
    setviewData("");
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "fuel_efficiency");
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token.userToken.token, id, "fuel_efficiency");
    setviewData(res?.data);
    setcrud("update");
    setisvisible(true);
  }
  function addHandler() {
    setisvisible(true);
    setupdateData("");
    setcrud("");
  }
  function onCancelHandler() {
    setisvisible(false);
    setviewData("");
  }

  return (
    <View style={{ flex: 10 }}>
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 15 }}>Fuel Efficiency List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Fuel Efficiency</Text>
          </View>
        </Pressable>
      </View>
      <InputModal
        crudop={crud}
        updateValue={updateData}
        initialState={initialState}
        form={form}
        onAddItem={addItemHandler}
        onUpdateItem={updateItemHandler}
        visible={isvisible}
        onCancel={onCancelHandler}
      />
      <View style={styles.listStyle}>
          <LoadingScreen loading={isLoading} />
          <FlatList
            data={listdata}
            renderItem={(itemData) => {
              const cardviewform = [
                {
                  name: "User id",
                  value: JSON.stringify(itemData.item.driver_id),
                },
                {
                  name: "Current miles",
                  value: itemData.item.current_miles,
                },
                {
                  name: "Total fuel (ltrs)",
                  value: itemData.item.total_fuel_ltrs,
                },
                {
                  name: "Milage",
                  value: itemData.item.milage,
                },
                {
                  name: "Fuel Cost",
                  value: itemData.item.fuel_cost,
                },
                {
                  name: "Fuel card no",
                  Value:  itemData.item.fuel_card_no,
                },
              ];
              const viewform = [
                {
                  name: "Driver id",
                  key: "driver_id",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.driver_id),
                },
                {
                  name: "Current miles",
                  key: "current_miles",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.current_miles),
                },
                {
                  name: "Total fuel (ltrs)",
                  key: "total_fuel_ltrs",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.total_fuel_ltrs),
                },
                {
                  name: "Milage",
                  key: "milage",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.milage),
                },
                {
                  name: "Total fuel (ltrs)",
                  key: "total_fuel_ltrs",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.total_fuel_ltrs),
                },
                {
                  name: "Fuel Cost",
                  key: "fuel_cost",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.fuel_cost),
                },
                {
                  name: "Fuel card no",
                  key: "fuel_card_no",
                  type: dataType.text,
                  value: itemData.item.fuel_card_no,
                },
                {
                  name: "Fuel rate",
                  key: "fuel_rate",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item.fuel_rate),
                },
                {
                  name: "Fuel per km",
                  key: "fuel_per_km",
                  type: dataType.text,
                  value: itemData.item.fuel_per_km,
                },
                {
                  name: "Date",
                  key: "date",
                  type: dataType.date,
                  value: itemData.item.date,
                },
                {
                  name: "Comments",
                  key: "comments",
                  type: dataType.text,
                  value: itemData.item.comments,
                },
              ];
              return (
                <AppItem
                  onDeleteItem={deleteDataHandler}
                  onupdateData={updateHandler}
                  id={itemData.item.id}
                  cardviewform={cardviewform}
                  viewform={viewform}
                />
              );
            }}
          />
      </View>
    </View>
  );
};

export default FuelEfficiency;
const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  btnStyle: {
    backgroundColor: "#13bfa6",
    borderRadius: 6,
    padding: 8,
  },
  listStyle: {
    flex: 9,
  },
});
