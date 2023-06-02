import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../components/InputModal";
import AppItem from "../components/AppItem";
import dataType from "../constants/dataType";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "./LoadingScreen";

const Client = () => {
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
    email: "",
    password: "",
    repassword: "",
    color_code: "",
    weightage: "",
    gstin: "",
    bcc_email: "",
    po: "",
  };

  useEffect(() => {
    addNewid();
  }, []);

  async function addItemHandler(enteredItemText) {
    index.postApi(token.userToken.token, enteredItemText, "clients");
    const res = await index.getApi(token.userToken.token, "clients");
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
      name: "Email",
      key: "email",
      type: dataType.text,
      defaultValue: viewData?.email,
    },
    {
      name: "Password",
      key: "password",
      type: dataType.password,
      defaultValue: viewData?.password,
    },
    {
      name: "Re-enter Password",
      key: "repassword",
      type: dataType.password,
      defaultValue: viewData?.repassword,
    },
    {
      name: "Color Code",
      key: "color_code",
      type: dataType.color,
      defaultValue: viewData?.color_code,
    },
    {
      name: "Client Rate",
      key: "weightage",
      type: dataType.text,
      defaultValue: viewData?.weightage,
    },
    {
      name: "GSTIN",
      key: "gstin",
      type: dataType.text,
      defaultValue: viewData?.gstin,
    },
    {
      name: "Bcc Email",
      key: "bcc_email",
      type: dataType.text,
      defaultValue: viewData?.bcc_email,
    },
    {
      name: "Po",
      key: "po",
      type: dataType.text,
      defaultValue: viewData?.po,
    },
  ];
  const addNewid = async () => {
    setIsLoading(true);
    const res = await index.getApi(token.userToken.token, "clients");
    setlistdata(res.data.data);
    setIsLoading(false);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.UpdateApi(token.userToken.token, newobj, dataID, "clients");
    setisvisible(false);
    setviewData("");
    addNewid();
  }

  function deleteDataHandler(id) {
    index.deleteApi(token.userToken.token, id, "clients");
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getaApi(token.userToken.token, id, "clients");
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
        <Text style={{ fontSize: 20 }}>Client List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Client</Text>
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
        <LoadingScreen />

        <FlatList
          data={listdata}
          renderItem={(itemData) => {
            const cardviewform = [
              {
                name: "Name",
                value: itemData.item.name,
              },
              {
                name: "Email",
                value: itemData.item.email,
              },
              {
                name: "Color code",
                value: itemData.item.color_code,
              },
              {
                name: "Vehicle Type",
                value: itemData.item.gstin,
              },
              {
                name: "PO",
                value: itemData.item.po,
              },
            ];
            const viewform = [
              {
                name: "Name",
                key: "name",
                type: dataType.text,
                value: itemData?.item?.name,
              },
              {
                name: "Email",
                key: "email",
                type: dataType.text,
                value: itemData?.item?.email,
              },
              {
                name: "Color Code",
                key: "color_code",
                type: dataType.color,
                value: itemData?.item?.color_code,
              },
              {
                name: "Client Rate",
                key: "weightage",
                type: dataType.text,
                value: itemData?.item?.weightage,
              },
              {
                name: "GSTIN",
                key: "gstin",
                type: dataType.text,
                value: itemData?.item?.gstin,
              },
              {
                name: "Bcc Email",
                key: "bcc_email",
                type: dataType.text,
                value: itemData?.item?.bcc_email,
              },
              {
                name: "Po",
                key: "po",
                type: dataType.text,
                value: itemData?.item?.po,
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

export default Client;

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
