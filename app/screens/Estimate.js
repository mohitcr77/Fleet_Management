import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../components/InputModal";
import AppItem from "../components/AppItem";
import dataType from "../constatnts/dataType";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "./LoadingScreen";

const Estimate = () => {
  const token = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
  const initialState = {
    client_id: "",
    estimate_no: "",
    reference_no: "",
    estimate_date: "",
    expire_date: "",
    subject: "",
    customer_notes: "",
    subtotal: "",
    total: "",
    paid: "",
  };

  useEffect(() => {
    addNewid();
  }, []);
  //console.log(token.userToken.token);
  async function addItemHandler(enteredItemText) {
    console.log(enteredItemText);
    index.postApi(token.userToken.token, enteredItemText,"estimate");
    const res = await index.getApi(token.userToken.token,"estimate");
    setlistdata(res.data.data);
    setisvisible(false);
    addNewid();
  }

  const form = [
    {
      name: "Client ID",
      key: "client_id",
      type: dataType.text,
      defaultValue: viewData?.client_id,
    },
    {
      name: "Estimate number",
      key: "estimate_no",
      type: dataType.number,
      defaultValue: viewData?.estimate_no,
    },
    {
      name: "Reference Number",
      key: "reference_no",
      type: dataType.number,
      defaultValue: JSON.stringify(viewData?.reference_no),
    },
    {
      name: "Estimate Date",
      key: "estimate_date",
      type: dataType.date,
      defaultValue: viewData?.estimate_date,
    },
    {
      name: "Expire Date",
      key: "expire_date",
      type: dataType.date,
      defaultValue: viewData?.expire_date,
    },
    {
      name: "Subject",
      key: "subject",
      type: dataType.text,
      defaultValue: viewData?.subject,
    },
    {
      name: "Customer Notes",
      key: "customer_notes",
      type: dataType.text,
      defaultValue: JSON.stringify(viewData?.customer_notes),
    },
    {
      name: "Subtotal",
      key: "subtotal",
      type: dataType.number,
      defaultValue: viewData?.subtotal,
    },
    {
      name: "Total",
      key: "total",
      type: dataType.number,
      defaultValue: viewData?.total,
    },
    {
      name: "paid",
      key: "paid",
      type: dataType.number,
      defaultValue: viewData?.paid,
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token.userToken.token, "estimate");
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token.userToken.token, newobj, dataID, "estimate");
    setisvisible(false);
    setviewData("");
    addNewid();
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "estimate");
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaRego(token.userToken.token, id, "estimate");
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
        <Text style={{ fontSize: 20 }}>Estimate List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Estimate</Text>
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
          <LoadingScreen loading={isLoading} />
          <FlatList
            data={listdata}
            renderItem={(itemData) => {
              const cardviewform = [
                {
                  name: "Client ID",
                  value: itemData?.item?.client_id,
                },
                {
                  name: "Estimate number",
                  value: itemData?.item?.estimate_no,
                },
                {
                  name: "Reference Number",
                  value: JSON.stringify(itemData?.item?.reference_no),
                },
                {
                  name: "Estimate Date",
                  value: itemData?.item?.estimate_date,
                },
                {
                  name: "Expire Date",
                  value: itemData?.item?.expire_date,
                },
                {
                  name: "Subject",
                  value: itemData?.item?.subject,
                },
              ];
              const viewform = [
                {
                  name: "Client ID",
                  key: "client_id",
                  type: dataType.text,
                  value: itemData?.item?.client_id,
                },
                {
                  name: "Estimate number",
                  key: "estimate_no",
                  type: dataType.number,
                  value: itemData?.item?.estimate_no,
                },
                {
                  name: "Reference Number",
                  key: "reference_no",
                  type: dataType.number,
                  value: JSON.stringify(itemData?.item?.reference_no),
                },
                {
                  name: "Estimate Date",
                  key: "estimate_date",
                  type: dataType.date,
                  value: itemData?.item?.estimate_date,
                },
                {
                  name: "Expire Date",
                  key: "expire_date",
                  type: dataType.date,
                  value: itemData?.item?.expire_date,
                },
                {
                  name: "Subject",
                  key: "subject",
                  type: dataType.text,
                  value: itemData?.item?.subject,
                },
                {
                  name: "Customer Notes",
                  key: "customer_notes",
                  type: dataType.text,
                  value: JSON.stringify(itemData?.item?.customer_notes),
                },
                {
                  name: "Subtotal",
                  key: "subtotal",
                  type: dataType.number,
                  value: itemData?.item?.subtotal,
                },
                {
                  name: "Total",
                  key: "total",
                  type: dataType.number,
                  value: itemData?.item?.total,
                },
                {
                  name: "paid",
                  key: "paid",
                  type: dataType.number,
                  value: itemData?.item?.paid,
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

export default Estimate;

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
