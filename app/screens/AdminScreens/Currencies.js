import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../../components/InputModal";
import AppItem from "../../components/AppItem";
import dataType from "../../constants/dataType";
import index from "../../service/index";
import TokenContext from "../../service/context";
import LoadingScreen from "./LoadingScreen";

const Currencies = () => {
  const token = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
  const initialState = {
    name: "",
    code: "",
    symbol: "",
  };

  useEffect(() => {
    addNewid();
  }, []);

  async function addItemHandler(enteredItemText) {
    index.postApi(token.userToken.token, enteredItemText, "currency");
    const res = await index.getApi(token.userToken.token, "currency");
    setlistdata(res.data.data);
    setisvisible(false);
    addNewid();
  }

  const form = [
    {
      name: "Name",
      key: "name",
      type: dataType.text,
      defaultValue: viewData?.name,
    },
    {
      name: "code",
      key: "code",
      type: dataType.text,
      defaultValue: viewData?.code,
    },
    {
      name: "Symbol",
      key: "symbol",
      type: dataType.text,
      defaultValue: viewData?.symbol,
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token.userToken.token, "currency");
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token.userToken.token, newobj, dataID, "currency");
    setisvisible(false);
    setviewData("");
    addNewid();
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "currency");
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token.userToken.token, id, "currency");
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
        <Text style={{ fontSize: 20 }}>Currency List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Currency</Text>
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
                name: "Name",
                value: itemData.item.name,
              },
              {
                name: "Code",
                value: itemData.item.code,
              },
              {
                name: "Symbol",
                value: itemData.item.symbol,
              },
            ];
            const viewform = [
              {
                name: "Name",
                key: "name",
                type: dataType.text,
                value: itemData.item.name,
              },
              {
                name: "Code",
                key: "code",
                type: dataType.text,
                value: itemData.item.code,
              },
              {
                name: "Symbol",
                key: "symbol",
                type: dataType.text,
                value: itemData.item.symbol,
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

export default Currencies;

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
