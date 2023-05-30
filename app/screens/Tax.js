import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../components/InputModal";
import AppItem from "../components/AppItem";
import dataType from "../constants/dataType";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "./LoadingScreen";
const Tax = () => {
  const token = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
  const initialState = {
    tax_name: "",
    tax_percentage: "",
  };

  useEffect(() => {
    addNewid();
  }, []);

  async function addItemHandler(enteredItemText) {
    index.postApi(token.userToken.token, enteredItemText);
    const res = await index.getApi(token.userToken.token);
    setlistdata(res.data.data);
    setisvisible(false);
  }

  const form = [
    {
      name: "Tax Name",
      key: "tax_name",
      type: dataType.text,
      defaultValue: viewData?.tax_name,
    },
    {
      name: "Tax percentage",
      key: "tax_percentage",
      type: dataType.text,
      defaultValue: viewData?.tax_percentage,
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token.userToken.token);
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token.userToken.token, newobj, dataID);
    setisvisible(false);
    setviewData("");
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id);
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token.userToken.token, id);
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
        <Text style={{ fontSize: 18 }}>Active Tax List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Tax</Text>
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
                  name: "Tax Name",
                  key: "tax_name",
                  type: dataType.text,
                  value: itemData?.item?.tax_name,
                },
                {
                  name: "Tax percentage",
                  key: "tax_percentage",
                  type: dataType.text,
                  value: itemData?.item?.tax_percentage,
                },
              ];
              const viewform = [
                {
                  name: "Tax Name",
                  key: "tax_name",
                  type: dataType.text,
                  value: itemData?.item?.tax_name,
                },
                {
                  name: "Tax percentage",
                  key: "tax_percentage",
                  type: dataType.text,
                  value: itemData?.item?.tax_percentage,
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

export default Tax;

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
