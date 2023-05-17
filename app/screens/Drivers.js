import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import InputModal from "../components/InputModal";
import AppItem from "../components/AppItem";
import dataType from "../constatnts/dataType";
import index from "../service/index";
import TokenContext from "../service/context";
import LoadingScreen from "./LoadingScreen";
const Drivers = () => {
  const token = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isvisible, setisvisible] = useState(false);
  const [updateData, setupdateData] = useState("");
  const [crud, setcrud] = useState("");
  const [listdata, setlistdata] = useState("");
  const [viewData, setviewData] = useState("");
  const [dataID, setdataID] = useState("");
  const getLoadingSreen = async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      await sleep(2000);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLoadingSreen();
    ()=>getcity();
  }, []);

  useEffect(() => {
    addNewid();
  }, []);
  const initialState = {
    name: "",
    email: "",
    password: "",
    repassword: "",
    mobile: "",
    address1: "",
    address2: "",
    state_id: "",
    city_id: "",
    country_id: "",
    rate: "",
  };
  //console.log(listdata[0].user.user_details.current_address_1);
  const form = [
    {
      name: "Name",
      key: "name",
      type: dataType.text,
      defaultValue: viewData?.user?.name,
    },
    {
      name: "Email",
      key: "email",
      type: dataType.text,
      defaultValue: viewData?.user?.email,
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
      name: "Mobile",
      key: "mobile",
      type: dataType.text,
      defaultValue: viewData?.user?.user_details?.mobile,
    },
    {
      name: "Address 1",
      key: "address1",
      type: dataType.text,
      defaultValue: viewData?.user?.user_details?.currrent_address_1,
    },
    {
      name: "Address 2",
      key: "address2",
      type: dataType.text,
      defaultValue:viewData?.user?.user_details?.currrent_address_2,
    },
    {
      name: "State",
      key: "state_id",
      type: dataType.state,
      defaultValue: viewData?.user?.user_details?.current_state_id,
    },
    {
      name: "City",
      key: "city_id",
      type: dataType.city,
      defaultValue: viewData?.user?.user_details?.current_city_id,
    },
    {
      name: "Country",
      key: "conutry_id",
      type: dataType.country,
      defaultValue: viewData?.user?.user_details?.current_conutry_id,
    },
    {
      name: "Rate",
      key: "rate",
      type: dataType.text,
      defaultValue: viewData?.rate,
    },
    // {
    //   name: "Upload Image",
    //   key: "image",
    //   type: dataType.image,
    //   defaultValue: viewData?.user?.user_details?.image,
    // },
  ];
  //console.log(listdata);
  async function addItemHandler(enteredItemText) {
    console.log(enteredItemText);
    index.postdriver(token.userToken.token, enteredItemText);
    const res = await index.getdriver(token.userToken.token);
    setlistdata(res.data.data);
    setisvisible(false);
    addNewid();
  }
  const addNewid = async () => {
    const res = await index.getdriver(token.userToken.token);
    //console.log(res.data.data);
    setlistdata(res.data.data);
  };
  function updateItemHandler(enteredItemText) {
    const newobj = Object.fromEntries(
      Object.entries(enteredItemText).filter(([_, val]) => val !== "")
    );
    index.Updatedriver(token.userToken.token, newobj, dataID);
    setisvisible(false);
    addNewid();
    setviewData("");
  }

  function deleteDataHandler(id) {
    index.deletedriver(token.userToken.token, id);
    addNewid();
  }

  async function updateHandler(id) {
    setdataID(id);
    const res = await index.getadriver(token.userToken.token, id);
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
        <Text style={{ fontSize: 18 }}>Driver List</Text>
        <Pressable
          onPress={addHandler}
          style={styles.btnStyle}
          android_ripple={{ color: "#00580c" }}
        >
          <View>
            <Text style={{ color: "#ffffff" }}>Add Driver</Text>
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
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <FlatList
            data={listdata}
            renderItem={(itemData) => {
              const cardviewform = [
                {
                  name: "Name",
                  value: itemData.item?.user?.name,
                },
                {
                  name: "Email",
                  value: itemData.item?.user?.email,
                },
                {
                  name: "Mobile",
                  value: itemData.item?.user?.user_details?.mobile,
                },
                {
                  name: "Address 1",
                  value: JSON.stringify(itemData.item?.user?.user_details.current_address_1),
                },
                {
                  name: "Address 2",
                  value: JSON.stringify(itemData?.item?.user?.user_details?.current_address_2),
                },
                {
                  name: "Rate",
                  value: itemData?.item?.rate,
                },
              ];
              const viewform = [
                {
                  name: "Name",
                  key: "name",
                  type: dataType.text,
                  value: itemData.item?.user?.name,
                },
                {
                  name: "Email",
                  key: "email",
                  type: dataType.text,
                  value: itemData.item?.user?.email,
                },
                {
                  name: "Mobile",
                  key: "mobile",
                  type: dataType.text,
                  value: itemData.item?.user?.user_details?.mobile,
                },
                {
                  name: "Address 1",
                  key: "address1",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item?.user?.user_details?.currrent_address_1),
                },
                {
                  name: "Address 2",
                  key: "address2",
                  type: dataType.text,
                  value: JSON.stringify(itemData.item?.user?.user_details?.currrent_address_2),
                },
                {
                  name: "State",
                  key: "state_id",
                  type: dataType.state,
                  value: itemData.item?.user?.user_details?.current_state_id,
                },
                {
                  name: "City",
                  key: "city_id",
                  type: dataType.city,
                  value: itemData.item?.user?.user_details?.current_city_id,
                },
                {
                  name: "Country",
                  key: "conutry_id",
                  type: dataType.country,
                  value: itemData.item?.user?.user_details?.current_conutry_id,
                },
                {
                  name: "Rate",
                  key: "rate",
                  type: dataType.text,
                  value: itemData.item?.rate,
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
        )}
      </View>
    </View>
  );
};

export default Drivers

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