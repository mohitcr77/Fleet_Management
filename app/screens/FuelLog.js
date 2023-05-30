import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../components/InputModal";
import AppItem from "../components/AppItem";
import dataType from "../constants/dataType";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "./LoadingScreen";

const FuelLog = () => {
  const token = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
  const initialState = {
    date: "",
    time: "",
    dkt_no: "",
    dip_start: "",
    dip_finish: "",
    est_delivered: "",
    fuel_rate: "",
    invoice_total: "",
  };

  useEffect(() => {
    addNewid();
  }, []);

  async function addItemHandler(enteredItemText) {
    console.log(enteredItemText);
    index.postApi(token.userToken.token, enteredItemText, "fuellog");
    const res = await index.getApi(token.userToken.token, "fuellog");
    setlistdata(res.data.data);
    setisvisible(false);
    addNewid();
  }

  const form = [
    {
      name: "Date",
      key: "date",
      type: dataType.date,
      defaultValue: viewData?.date,
    },
    {
      name: "Time",
      key: "time",
      type: dataType.time,
      defaultValue: viewData?.time,
    },
    {
      name: "Dkt_no.",
      key: "dkt_no",
      type: dataType.text,
      defaultValue: viewData?.dkt_no,
    },
    {
      name: "Dip Start",
      key: "dip_Start",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.dip_start),
    },
    {
      name: "Dip finish",
      key: "dip_finish",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.dip_finish),
    },
    {
      name: "EST Delivered",
      key: "est_delivered",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.est_delivered),
    },
    {
      name: "Actual Delivered",
      key: "actual_delivered",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.actual_delivered),
    },
    {
      name: "Fuel Rate",
      key: "fuel_rate",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.fuel_rate),
    },
    {
      name: "Invoice",
      key: "invoice_total",
      type: dataType.text,
      defaultValue: viewData?.invoice_total,
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token.userToken.token, "fuellog");
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token.userToken.token, newobj, dataID, "fuellog");
    setisvisible(false);
    setviewData("");
    addNewid();
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "fuellog");
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token.userToken.token, id, "fuellog");
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
        <Text style={{ fontSize: 20 }}>FuelLog List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add FuelLog</Text>
          </View>
        </Pressable>
      </View>
      <InputModal
        crudop={crud}
        form={form}
        updateValue={updateData}
        initialState={initialState}
        onAddItem={addItemHandler}
        onUpdateItem={updateItemHandler}
        visible={isvisible}
        onCancel={onCancelHandler}
      />
      <View style={styles.listStyle}>
          <LoadingScreen loading={isLoading}/>
          <FlatList
            data={listdata}
            renderItem={(itemData) => {
              const cardviewform = [
                {
                  name: "Date",
                  value: itemData?.item?.date,
                },
                {
                  name: "Time",
                  value: itemData?.item?.time,
                },
                {
                  name: "Dkt_no.",
                  value: itemData?.item?.dkt_no,
                },
                {
                  name: "Dip Start",
                  value: JSON.stringify(itemData?.item?.dip_start),
                },
                {
                  name: "Dip finish",
                  value: itemData?.item?.dip_finish,
                },
                {
                  name: "EST Delivered",
                  value: itemData?.item?.est_delivered,
                },
              ];
              const viewform = [
                {
                  name: "Date",
                  key: "date",
                  type: dataType.date,
                  value: itemData?.item?.date,
                },
                {
                  name: "Time",
                  key: "time",
                  type: dataType.time,
                  value: itemData?.item?.time,
                },
                {
                  name: "Dkt_no.",
                  key: "dkt_no",
                  type: dataType.text,
                  value: itemData?.item?.dkt_no,
                },
                {
                  name: "Dip Start",
                  key: "dip_Start",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.dip_start),
                },
                {
                  name: "Dip finish",
                  key: "dip_finish",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.dip_finish),
                },
                {
                  name: "EST Delivered",
                  key: "est_delivered",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.est_delivered),
                },
                {
                  name: "Actual Delivered",
                  key: "actual_delivered",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.actual_delivered),
                },
                {
                  name: "Fuel Rate",
                  key: "fuel_rate",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.fuel_rate),
                },
                {
                  name: "Invoice",
                  key: "invoice_total",
                  type: dataType.text,
                  value: itemData?.item?.invoice_total,
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

export default FuelLog;

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
